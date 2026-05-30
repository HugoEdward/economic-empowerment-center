import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let _client = null;

export function getSupabase() {
  if (!_client && SUPABASE_URL && SUPABASE_ANON) {
    _client = createClient(SUPABASE_URL, SUPABASE_ANON);
  }
  return _client;
}

// Keep backward compat
export const supabase = typeof window !== 'undefined' && SUPABASE_URL ? createClient(SUPABASE_URL, SUPABASE_ANON) : null;

export function isConfigured() {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON.length > 0;
}
