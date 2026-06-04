/**
 * Stripe Connect Integration — Client-Side Helpers (v5.1)
 *
 * v5.1: Wired to Supabase Edge Functions for actual operational use.
 *
 * Server-side logic lives in /supabase/functions/:
 *   - stripe-create-account
 *   - stripe-refresh-link
 *   - stripe-webhook
 *
 * Deployment (run from operator's machine, requires Supabase CLI):
 *
 *   supabase functions deploy stripe-create-account --no-verify-jwt
 *   supabase functions deploy stripe-refresh-link --no-verify-jwt
 *   supabase functions deploy stripe-webhook --no-verify-jwt
 *
 * Required environment variables on Edge Functions side
 * (set in Supabase Dashboard → Project Settings → Edge Functions):
 *   STRIPE_SECRET_KEY        — sk_test_... or sk_live_...
 *   STRIPE_WEBHOOK_SECRET    — whsec_... from Stripe Dashboard webhook config
 *   PUBLIC_SITE_URL          — https://economicempowerment.center
 *
 * Required env vars in this Next.js app (set in .env.local + Netlify):
 *   NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL — e.g. https://<project>.supabase.co/functions/v1
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY      — public anon key (required for invoking functions)
 *
 * STRIPE_SECRET_KEY is NEVER imported here. It is exclusively used inside Edge Functions.
 */

import { getSupabase } from './supabase';

const FUNCTIONS_URL = process.env.NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL || '';
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

function isConfigured() {
  return Boolean(FUNCTIONS_URL && ANON_KEY);
}

async function callEdgeFunction(name, payload) {
  if (!isConfigured()) {
    return {
      error: 'Stripe Edge Functions not yet configured. Deploy via `supabase functions deploy` and set NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL.',
    };
  }
  try {
    const res = await fetch(`${FUNCTIONS_URL}/${name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ANON_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { error: data?.error || `Edge function returned ${res.status}` };
    return { success: true, ...data };
  } catch (err) {
    return { error: err?.message || 'Network error reaching Edge Function' };
  }
}

/**
 * Initiate Stripe Connect Express onboarding for an approved application.
 * Returns the Account Link URL — open in same tab for the applicant to complete onboarding.
 */
export async function initiateStripeOnboarding(applicationId, { email, country = 'US', businessType = 'individual' } = {}) {
  return callEdgeFunction('stripe-create-account', {
    applicationId,
    email,
    country,
    businessType,
  });
}

/**
 * Regenerate an expired onboarding link.
 */
export async function refreshOnboardingLink(applicationId) {
  return callEdgeFunction('stripe-refresh-link', { applicationId });
}

/**
 * Read current Stripe sync status from the database (kept fresh by webhooks).
 */
export async function getStripeStatus(applicationId) {
  const client = getSupabase();
  if (!client) return { error: 'Supabase not configured' };

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
 * Server-side tax ID encryption is exposed as a Supabase RPC.
 * Migration `008_tax_id_encryption.sql` provides:
 *   encrypt_tax_id(plaintext text) returns bytea
 *   decrypt_tax_id(ciphertext bytea) returns text  (admin-only)
 *
 * Always call from a Supabase session (RLS protects the encryption key).
 */
export async function encryptTaxId(plaintext) {
  const client = getSupabase();
  if (!client) return { error: 'Supabase not configured' };
  if (!plaintext) return { error: 'Tax ID required' };
  const { data, error } = await client.rpc('encrypt_tax_id', { plaintext });
  if (error) return { error: error.message };
  return { ciphertext: data };
}

export { isConfigured as isStripeConfigured };
