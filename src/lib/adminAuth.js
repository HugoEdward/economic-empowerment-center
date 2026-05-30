import { getSupabase, isConfigured } from './supabase';

/**
 * Check if the current user is an admin.
 * Returns { isAdmin, user, error }
 */
export async function checkAdminStatus() {
  if (!isConfigured()) return { isAdmin: false, error: 'Supabase not configured' };
  const client = getSupabase();
  if (!client) return { isAdmin: false, error: 'No client' };

  const { data: { user }, error: userError } = await client.auth.getUser();
  if (userError || !user) return { isAdmin: false, user: null };

  const { data, error } = await client
    .from('admin_users')
    .select('id, role, active, full_name')
    .eq('user_id', user.id)
    .eq('active', true)
    .single();

  if (error || !data) return { isAdmin: false, user };
  return { isAdmin: true, user, adminProfile: data };
}

/**
 * Sign in admin with email/password.
 */
export async function signInAdmin(email, password) {
  const client = getSupabase();
  if (!client) return { error: 'Supabase not configured' };

  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };

  // Verify admin status
  const { isAdmin } = await checkAdminStatus();
  if (!isAdmin) {
    await client.auth.signOut();
    return { error: 'Account is not authorized for admin access.' };
  }

  return { success: true, user: data.user };
}

/**
 * Sign out.
 */
export async function signOutAdmin() {
  const client = getSupabase();
  if (!client) return { error: 'Not configured' };
  return client.auth.signOut();
}

/**
 * Listen for auth state changes.
 */
export function onAuthChange(callback) {
  const client = getSupabase();
  if (!client) return () => {};
  const { data: { subscription } } = client.auth.onAuthStateChange((event, session) => {
    callback(event, session);
  });
  return () => subscription.unsubscribe();
}
