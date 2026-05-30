/**
 * Stripe Connect Integration — Client-Side Helpers
 *
 * IMPORTANT: This file contains CLIENT-SIDE helpers only.
 * Actual Stripe account creation MUST happen server-side
 * (via Vercel Serverless Function, Supabase Edge Function,
 * or separate Node.js endpoint) because STRIPE_SECRET_KEY
 * must NEVER be exposed in the browser.
 *
 * Static export limitation:
 * Next.js static export cannot run server functions.
 * Deploy these endpoints separately:
 *
 *   POST /api/stripe/create-account
 *     - Receives application_id
 *     - Creates Stripe Express account
 *     - Returns account_id and onboarding URL
 *
 *   POST /api/stripe/refresh-onboarding-link
 *     - Receives application_id
 *     - Generates fresh Account Link
 *     - Returns onboarding URL
 *
 *   POST /api/stripe/webhook
 *     - Validates signature with STRIPE_WEBHOOK_SECRET
 *     - Handles account.updated, capability.updated, person.updated
 *     - Updates applications table and stripe_webhook_events
 */

import { getSupabase } from './supabase';

const STRIPE_API_BASE = process.env.NEXT_PUBLIC_STRIPE_API_BASE || '/api/stripe';

/**
 * Admin action: Initiate Stripe Connect onboarding for an approved application.
 * Calls backend endpoint (not implemented in static export — see file header).
 */
export async function initiateStripeOnboarding(applicationId) {
  try {
    const response = await fetch(`${STRIPE_API_BASE}/create-account`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ application_id: applicationId }),
    });

    if (!response.ok) {
      return { error: 'Stripe endpoint not deployed. See lib/stripe.js for deployment requirements.' };
    }

    const data = await response.json();
    return { success: true, accountId: data.account_id, onboardingUrl: data.onboarding_url };
  } catch (err) {
    return { error: 'Stripe integration requires server-side endpoint deployment.' };
  }
}

/**
 * Refresh expired onboarding link.
 */
export async function refreshOnboardingLink(applicationId) {
  try {
    const response = await fetch(`${STRIPE_API_BASE}/refresh-onboarding-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ application_id: applicationId }),
    });

    if (!response.ok) return { error: 'Stripe endpoint not deployed.' };
    const data = await response.json();
    return { success: true, onboardingUrl: data.onboarding_url };
  } catch (err) {
    return { error: 'Stripe integration requires server-side endpoint deployment.' };
  }
}

/**
 * Read current Stripe status from database (synced from webhooks).
 */
export async function getStripeStatus(applicationId) {
  const client = getSupabase();
  if (!client) return { error: 'Not configured' };

  const { data, error } = await client
    .from('applications')
    .select(`
      stripe_account_id,
      stripe_account_type,
      stripe_onboarding_status,
      stripe_charges_enabled,
      stripe_payouts_enabled,
      stripe_details_submitted,
      stripe_requirements_currently_due,
      stripe_requirements_eventually_due,
      stripe_last_sync_at,
      stripe_onboarding_url,
      stripe_onboarding_url_expires_at,
      processor_readiness_status
    `)
    .eq('id', applicationId)
    .single();

  return { data, error };
}

/**
 * Webhook architecture documentation.
 *
 * Deploy as a server endpoint (Vercel/Supabase Edge/Node):
 *
 * ```js
 * import Stripe from 'stripe';
 * import { buffer } from 'micro';
 *
 * const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
 *
 * export default async function handler(req, res) {
 *   const sig = req.headers['stripe-signature'];
 *   const body = await buffer(req);
 *
 *   let event;
 *   try {
 *     event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
 *   } catch (err) {
 *     return res.status(400).send(`Webhook signature failed: ${err.message}`);
 *   }
 *
 *   // Store raw event for audit
 *   await supabase.from('stripe_webhook_events').insert({
 *     stripe_event_id: event.id,
 *     event_type: event.type,
 *     stripe_account_id: event.account || event.data?.object?.id,
 *     payload: event,
 *   });
 *
 *   // Handle relevant events
 *   if (event.type === 'account.updated') {
 *     const account = event.data.object;
 *     await supabase.from('applications').update({
 *       stripe_charges_enabled: account.charges_enabled,
 *       stripe_payouts_enabled: account.payouts_enabled,
 *       stripe_details_submitted: account.details_submitted,
 *       stripe_requirements_currently_due: account.requirements?.currently_due,
 *       stripe_requirements_eventually_due: account.requirements?.eventually_due,
 *       stripe_onboarding_status: determineStatus(account),
 *       stripe_last_sync_at: new Date().toISOString(),
 *     }).eq('stripe_account_id', account.id);
 *   }
 *
 *   return res.status(200).json({ received: true });
 * }
 * ```
 *
 * Required environment variables:
 *   STRIPE_SECRET_KEY (server-only, never expose to browser)
 *   STRIPE_WEBHOOK_SECRET (for signature validation)
 *   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (safe for browser)
 *   NEXT_PUBLIC_SITE_URL (for return_url / refresh_url)
 */
