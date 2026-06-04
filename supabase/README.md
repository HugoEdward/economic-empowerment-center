# Supabase Edge Functions — Stripe Connect

Three Deno-based Edge Functions for Stripe Connect onboarding + webhook handling.

## Deploy

```bash
# Set Edge Function secrets (once, in Supabase Dashboard → Project Settings → Edge Functions, or via CLI):
supabase secrets set STRIPE_SECRET_KEY=sk_test_...
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
supabase secrets set PUBLIC_SITE_URL=https://economicempowerment.center

# Deploy each function (no JWT verification — these handle their own auth):
supabase functions deploy stripe-create-account --no-verify-jwt
supabase functions deploy stripe-refresh-link   --no-verify-jwt
supabase functions deploy stripe-webhook        --no-verify-jwt
```

## Configure Stripe webhook

In Stripe Dashboard → Developers → Webhooks → Add endpoint:

- URL: `https://<your-project>.supabase.co/functions/v1/stripe-webhook`
- Events:
  - `account.updated`
  - `capability.updated`
  - `account.application.deauthorized`

Copy the signing secret (`whsec_...`) into `STRIPE_WEBHOOK_SECRET`.

## Test

```bash
# Trigger a test event from Stripe CLI:
stripe listen --forward-to https://<your-project>.supabase.co/functions/v1/stripe-webhook
stripe trigger account.updated
```

Verify in Supabase `stripe_webhook_events` table that the event is audited.
