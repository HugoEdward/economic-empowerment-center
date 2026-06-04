// Supabase Edge Function: stripe-webhook
// Receives Stripe events, verifies signature, audits raw event,
// syncs connected-account fields to applications.
//
// Deploy: supabase functions deploy stripe-webhook --no-verify-jwt
// Configure webhook in Stripe Dashboard with endpoint:
//   https://<project>.supabase.co/functions/v1/stripe-webhook
//
// Required env:
//   STRIPE_SECRET_KEY
//   STRIPE_WEBHOOK_SECRET   — whsec_... from Stripe Dashboard webhook config
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY

import Stripe from 'npm:stripe@17';
import { createClient } from 'npm:@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-06-20' });
const WEBHOOK_SECRET = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  { auth: { persistSession: false } }
);

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  const signature = req.headers.get('stripe-signature');
  if (!signature) return new Response('Missing signature', { status: 400 });

  const body = await req.text();

  let event: Stripe.Event;
  try {
    // Async signature verification required in Deno (sync version uses Node crypto)
    event = await stripe.webhooks.constructEventAsync(body, signature, WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed', err);
    return new Response('Invalid signature', { status: 400 });
  }

  // Idempotency: store the raw event, skip if already processed
  const { error: insertErr } = await supabase
    .from('stripe_webhook_events')
    .insert({
      stripe_event_id: event.id,
      event_type: event.type,
      payload: event,
      received_at: new Date().toISOString(),
    });
  // 23505 = unique_violation → already processed
  if (insertErr && (insertErr as any).code !== '23505') {
    console.error('Failed to audit webhook event', insertErr);
    return new Response('Audit failure', { status: 500 });
  }
  if ((insertErr as any)?.code === '23505') {
    return new Response('Already processed', { status: 200 });
  }

  // Handle connected-account events
  try {
    switch (event.type) {
      case 'account.updated': {
        const acct = event.data.object as Stripe.Account;
        const requirements = acct.requirements;
        await supabase
          .from('applications')
          .update({
            stripe_charges_enabled: acct.charges_enabled,
            stripe_payouts_enabled: acct.payouts_enabled,
            stripe_details_submitted: acct.details_submitted,
            stripe_requirements_currently_due: requirements?.currently_due ?? [],
            stripe_requirements_eventually_due: requirements?.eventually_due ?? [],
            stripe_onboarding_status: acct.charges_enabled && acct.payouts_enabled ? 'complete' : 'in_progress',
            processor_readiness_status: acct.charges_enabled && acct.payouts_enabled ? 'ready' : 'incomplete',
            stripe_last_sync_at: new Date().toISOString(),
          })
          .eq('stripe_account_id', acct.id);
        break;
      }

      case 'capability.updated': {
        const cap = event.data.object as Stripe.Capability;
        await supabase
          .from('applications')
          .update({
            stripe_last_sync_at: new Date().toISOString(),
          })
          .eq('stripe_account_id', cap.account as string);
        break;
      }

      case 'account.application.deauthorized': {
        const acctId = (event.account as string) || (event.data.object as any)?.account;
        if (acctId) {
          await supabase
            .from('applications')
            .update({
              stripe_onboarding_status: 'deauthorized',
              processor_readiness_status: 'deauthorized',
              stripe_last_sync_at: new Date().toISOString(),
            })
            .eq('stripe_account_id', acctId);
        }
        break;
      }

      // Future: payment_intent.succeeded, charge.refunded, etc.
      default:
        // Event audited but no specific handler — fine.
        break;
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Webhook handler error', err);
    return new Response('Handler failure', { status: 500 });
  }
});
