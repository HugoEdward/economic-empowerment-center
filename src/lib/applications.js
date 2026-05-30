import { getSupabase, isConfigured } from './supabase';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];

function sb() { return getSupabase(); }

export async function submitApplication(appData, documents = []) {
  if (!isConfigured()) return { success: false, error: 'Supabase not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.' };
  const client = sb();
  if (!client) return { success: false, error: 'Supabase client unavailable.' };

  for (const doc of documents) {
    if (!doc.file) continue;
    if (doc.file.size > MAX_FILE_SIZE) return { success: false, error: `File "${doc.file.name}" exceeds 10MB.` };
    if (!ALLOWED_TYPES.includes(doc.file.type)) return { success: false, error: `File "${doc.file.name}" must be PDF, JPG, PNG, or WebP.` };
  }

  const { data: app, error: appError } = await client.from('applications').insert({ ...appData, status: 'submitted', address_verification_status: 'not_checked' }).select('id').single();
  if (appError) {
    if (appError.code === '23505') return { success: false, error: 'An application with this information already exists.' };
    return { success: false, error: 'Failed to submit. Please try again.' };
  }

  const applicationId = app.id;

  for (const doc of documents) {
    if (!doc.file) continue;
    const filePath = `applications/${applicationId}/${doc.category}/${doc.file.name}`;
    const { error: upErr } = await client.storage.from('application-documents').upload(filePath, doc.file, { cacheControl: '3600', upsert: false });
    if (upErr) { console.error('Upload error:', upErr); continue; }
    await client.from('application_documents').insert({ application_id: applicationId, category: doc.category, file_name: doc.file.name, file_path: filePath, file_size: doc.file.size, mime_type: doc.file.type });
  }

  return { success: true, applicationId };
}

export async function fetchApplications({ status, type } = {}) {
  const client = sb(); if (!client) return { data: [], error: 'Not configured' };
  let q = client.from('applications').select('*').order('submitted_at', { ascending: false });
  if (status && status !== 'all') q = q.eq('status', status);
  if (type && type !== 'all') q = q.eq('application_type', type);
  const { data, error } = await q;
  return { data: data || [], error };
}

export async function fetchApplicationDetail(id) {
  const client = sb(); if (!client) return { error: 'Not configured' };
  const [a, d, r, n] = await Promise.all([
    client.from('applications').select('*').eq('id', id).single(),
    client.from('application_documents').select('*').eq('application_id', id).order('created_at'),
    client.from('application_reviews').select('*').eq('application_id', id).order('created_at', { ascending: false }),
    client.from('admin_review_notes').select('*').eq('application_id', id).order('created_at', { ascending: false }),
  ]);
  return { application: a.data, documents: d.data || [], reviews: r.data || [], notes: n.data || [], error: a.error };
}

export async function getSignedDocumentUrl(filePath) {
  const client = sb(); if (!client) return { error: 'Not configured' };
  const { data, error } = await client.storage.from('application-documents').createSignedUrl(filePath, 3600);
  return { url: data?.signedUrl, error };
}

export async function updateApplicationStatus(id, newStatus, reviewerName, notes) {
  const client = sb(); if (!client) return { error: 'Not configured' };
  await client.from('applications').update({ status: newStatus, reviewed_at: new Date().toISOString() }).eq('id', id);
  const action = newStatus === 'approved' ? 'approved' : newStatus === 'declined' ? 'declined' : newStatus === 'additional_documentation_required' ? 'requested_documents' : 'started_review';
  return client.from('application_reviews').insert({ application_id: id, reviewer_id: '00000000-0000-0000-0000-000000000000', reviewer_name: reviewerName || 'Admin', action, notes });
}

export async function addAdminNote(applicationId, note, authorName) {
  const client = sb(); if (!client) return { error: 'Not configured' };
  return client.from('admin_review_notes').insert({ application_id: applicationId, author_id: '00000000-0000-0000-0000-000000000000', author_name: authorName || 'Admin', note, internal_only: true });
}

export async function manuallyVerifyAddress(applicationId, notes) {
  const client = sb(); if (!client) return { error: 'Not configured' };
  return client.from('applications').update({ address_verification_status: 'manual_review_required', address_verified_at: new Date().toISOString(), address_verification_notes: notes }).eq('id', applicationId);
}
