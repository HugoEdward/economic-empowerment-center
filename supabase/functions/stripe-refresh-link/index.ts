// Supabase Edge Function: stripe-refresh-link
// Re-generates an onboarding Account Link for an existing connected account.

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
    const { applicationId } = await req.json();
    if (!applicationId) {
      return new Response(JSON.stringify({ error: 'applicationId required' }), { status: 400, headers: { ...CORS, 'Content-Type': 'application/json' } });
    }

    const { data: app, error: appErr } = await supabase
      .from('applications')
      .select('stripe_account_id')
      .eq('id', applicationId)
      .single();
    if (appErr || !app?.stripe_account_id) {
      return new Response(JSON.stringify({ error: 'No connected account found' }), { status: 404, headers: { ...CORS, 'Content-Type': 'application/json' } });
    }

    const link = await stripe.accountLinks.create({
      account: app.stripe_account_id,
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
      JSON.stringify({ url: link.url, expiresAt: link.expires_at }),
      { headers: { ...CORS, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('stripe-refresh-link error', err);
    return new Response(
      JSON.stringify({ error: err?.message || 'Internal error' }),
      { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } }
    );
  }
});
