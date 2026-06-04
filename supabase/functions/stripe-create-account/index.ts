// Supabase Edge Function: stripe-create-account
// Creates a Stripe Connect Express account for an applicant, generates an Account Link,
// stores stripe_account_id + onboarding_url on the applications row, returns the URL.
//
// Deploy:  supabase functions deploy stripe-create-account --no-verify-jwt
// Env required:
//   STRIPE_SECRET_KEY              — sk_test_... or sk_live_...
//   SUPABASE_URL                   — auto-injected
//   SUPABASE_SERVICE_ROLE_KEY      — auto-injected (server-only)
//   PUBLIC_SITE_URL                — e.g. https://economicempowerment.center

import Stripe from 'npm:stripe@17';
import { createClient } from 'npm:@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-06-20' });
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  { auth: { persistSession: false } }
);
const SITE_URL = Deno.env.get('PUBLIC_SITE_URL') || 'https://economicempowerment.center';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: CORS });

  try {
    const { applicationId, email, country, businessType } = await req.json();
    if (!applicationId || !email) {
      return new Response(JSON.stringify({ error: 'applicationId and email required' }), { status: 400, headers: { ...CORS, 'Content-Type': 'application/json' } });
    }

    // Verify the application exists
    const { data: app, error: appErr } = await supabase
      .from('applications')
      .select('id, stripe_account_id, application_type')
      .eq('id', applicationId)
      .single();
    if (appErr || !app) {
      return new Response(JSON.stringify({ error: 'Application not found' }), { status: 404, headers: { ...CORS, 'Content-Type': 'application/json' } });
    }

    let accountId = app.stripe_account_id;

    // Create the Stripe Express account if not exists
    if (!accountId) {
      const account = await stripe.accounts.create({
        type: 'express',
        email,
        country: country || 'US',
        business_type: businessType || 'individual',
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        metadata: {
          application_id: applicationId,
          application_type: app.application_type || 'unknown',
        },
      });
      accountId = account.id;

      await supabase
        .from('applications')
        .update({
          stripe_account_id: accountId,
          stripe_account_type: 'express',
          stripe_onboarding_status: 'pending',
          stripe_last_sync_at: new Date().toISOString(),
        })
        .eq('id', applicationId);
    }

    // Create an onboarding Account Link
    const link = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: `${SITE_URL}/admin/applications?refresh=${applicationId}`,
      return_url:  `${SITE_URL}/admin/applications?return=${applicationId}`,
      type: 'account_onboarding',
    });

    await supabase
      .from('applications')
      .update({
        stripe_onboarding_url: link.url,
        stripe_onboarding_url_expires_at: new Date(link.expires_at * 1000).toISOString(),
        stripe_last_sync_at: new Date().toISOString(),
      })
      .eq('id', applicationId);

    return new Response(
      JSON.stringify({ url: link.url, accountId, expiresAt: link.expires_at }),
      { headers: { ...CORS, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('stripe-create-account error', err);
    return new Response(
      JSON.stringify({ error: err?.message || 'Internal error' }),
      { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } }
    );
  }
});
