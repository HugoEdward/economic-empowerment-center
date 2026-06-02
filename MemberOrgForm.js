'use client';
import { useState, useEffect } from 'react';
import { fetchApplications, fetchApplicationDetail, getSignedDocumentUrl, updateApplicationStatus, addAdminNote, manuallyVerifyAddress } from '@/lib/applications';
import { checkAdminStatus, signInAdmin, signOutAdmin, onAuthChange } from '@/lib/adminAuth';
import { initiateStripeOnboarding, getStripeStatus } from '@/lib/stripe';
import { isConfigured } from '@/lib/supabase';

const STATUSES = ['all','submitted','under_review','additional_documentation_required','approved','declined','suspended','archived'];
const TYPES = ['all','member_organization','entrepreneur','merchant_professional','chamber_association','strategic_partner_sponsor'];

export default function AdminDashboard() {
  const [authState, setAuthState] = useState('loading'); // loading | unauth | authed | unauthorized
  const [adminProfile, setAdminProfile] = useState(null);
  const [apps, setApps] = useState([]);
  const [filter, setFilter] = useState({ status: 'all', type: 'all' });
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConfigured()) { setAuthState('unauth'); return; }
    verify();
    const unsub = onAuthChange(() => verify());
    return unsub;
  }, []);

  useEffect(() => { if (authState === 'authed') load(); }, [filter, authState]);

  async function verify() {
    const { isAdmin, adminProfile } = await checkAdminStatus();
    if (isAdmin) { setAdminProfile(adminProfile); setAuthState('authed'); }
    else { setAuthState('unauth'); }
  }

  async function load() {
    setLoading(true);
    const { data } = await fetchApplications(filter);
    setApps(data);
    setLoading(false);
  }

  async function openDetail(id) {
    setSelected(id);
    const d = await fetchApplicationDetail(id);
    setDetail(d);
  }

  async function handleAction(action, notes='') {
    if (!selected) return;
    await updateApplicationStatus(selected, action, adminProfile?.full_name || 'Admin', notes);
    openDetail(selected); load();
  }

  async function handleNote(note) { if (!selected || !note) return; await addAdminNote(selected, note, adminProfile?.full_name || 'Admin'); openDetail(selected); }
  async function handleVerifyAddress(notes) { if (!selected) return; await manuallyVerifyAddress(selected, notes); openDetail(selected); }

  if (!isConfigured()) {
    return (
      <div className="pt-28 pb-16 px-5 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-2xl font-medium mb-4">Admin Dashboard</h1>
        <div className="bg-gold-dim border border-gold/20 rounded-xl p-6">
          <p className="text-sm text-gold mb-2">⚠ Backend Not Connected</p>
          <p className="text-xs text-surface-secondary">Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to environment variables.</p>
        </div>
      </div>
    );
  }

  if (authState === 'loading') return <div className="pt-28 pb-16 px-5 text-center text-surface-muted">Verifying access...</div>;
  if (authState === 'unauth') return <SignInForm onSignIn={verify} />;

  return (
    <div className="pt-20 pb-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-2xl font-medium">Application Review</h1>
            <p className="text-[10px] text-surface-muted mt-1">{adminProfile?.full_name || 'Admin'} ({adminProfile?.role})</p>
          </div>
          <div className="flex gap-2">
            <button onClick={load} className="btn-outline !text-xs !py-1.5 !px-4">Refresh</button>
            <button onClick={async () => { await signOutAdmin(); setAuthState('unauth'); }} className="btn-outline !text-xs !py-1.5 !px-4">Sign Out</button>
          </div>
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          <select value={filter.status} onChange={e => setFilter(p => ({...p, status: e.target.value}))} className="bg-navy-800 border border-surface-border rounded-lg px-3 py-1.5 text-xs text-surface-primary outline-none">{STATUSES.map(s => <option key={s} value={s}>{s.replace(/_/g,' ')}</option>)}</select>
          <select value={filter.type} onChange={e => setFilter(p => ({...p, type: e.target.value}))} className="bg-navy-800 border border-surface-border rounded-lg px-3 py-1.5 text-xs text-surface-primary outline-none">{TYPES.map(t => <option key={t} value={t}>{t.replace(/_/g,' ')}</option>)}</select>
          <span className="text-xs text-surface-muted self-center ml-2">{apps.length} applications</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_450px] gap-4">
          <div className="space-y-2 max-h-[75vh] overflow-y-auto">
            {loading ? <p className="text-xs text-surface-muted p-4">Loading...</p> :
             apps.length === 0 ? <p className="text-xs text-surface-muted p-4">No applications found.</p> :
             apps.map(a => (
              <button key={a.id} onClick={() => openDetail(a.id)} className={`w-full text-left bg-navy-800 border rounded-xl px-4 py-3 transition-all ${selected===a.id ? 'border-gold/40' : 'border-surface-border hover:border-gold/20'}`}>
                <div className="flex justify-between items-start">
                  <div><p className="text-sm font-medium">{a.entity_name}</p><p className="text-[10px] text-surface-muted">{a.application_type?.replace(/_/g,' ')} · {a.contact_email}</p></div>
                  <StatusBadge status={a.status} />
                </div>
                <p className="text-[9px] text-surface-muted mt-1">{a.country_name} · {a.city} · {new Date(a.submitted_at).toLocaleDateString()}</p>
              </button>
            ))}
          </div>

          <div className="bg-navy-800 border border-surface-border rounded-2xl p-5 max-h-[75vh] overflow-y-auto">
            {!detail ? <p className="text-xs text-surface-muted text-center py-8">Select an application</p> : <DetailPanel detail={detail} onAction={handleAction} onNote={handleNote} onVerify={handleVerifyAddress} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function SignInForm({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true); setError('');
    const { success, error } = await signInAdmin(email, password);
    setLoading(false);
    if (success) onSignIn();
    else setError(error || 'Sign in failed.');
  }

  return (
    <div className="pt-28 pb-16 px-5 max-w-sm mx-auto">
      <h1 className="font-display text-2xl font-medium mb-4 text-center">Admin Sign In</h1>
      <p className="text-[10px] text-surface-muted text-center mb-6">Admin access required. Authorized users only.</p>
      <div className="bg-navy-800 border border-surface-border rounded-2xl p-5 space-y-3">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary outline-none focus:border-gold" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary outline-none focus:border-gold" />
        {error && <p className="text-xs text-red-400">{error}</p>}
        <button onClick={submit} disabled={loading} className="btn-gold w-full justify-center">{loading ? 'Signing in...' : 'Sign In'}</button>
      </div>
      <p className="text-[9px] text-surface-muted text-center mt-4">Admin accounts must be added via Supabase Dashboard and listed in the admin_users table.</p>
    </div>
  );
}

function DetailPanel({ detail, onAction, onNote, onVerify }) {
  const { application: a, documents, reviews, notes } = detail;
  const [noteText, setNoteText] = useState('');
  const [actionNotes, setActionNotes] = useState('');
  const [verifyNotes, setVerifyNotes] = useState('');
  const [stripeLoading, setStripeLoading] = useState(false);

  if (!a) return <p className="text-xs text-surface-muted">Error loading.</p>;

  async function initiateStripe() {
    setStripeLoading(true);
    const result = await initiateStripeOnboarding(a.id);
    setStripeLoading(false);
    if (result.error) alert(`Stripe: ${result.error}`);
    else alert('Stripe onboarding initiated. Refresh to see status.');
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div><p className="font-semibold text-sm">{a.entity_name}</p><p className="text-[10px] text-surface-muted">{a.application_type?.replace(/_/g,' ')}</p></div>
        <StatusBadge status={a.status} />
      </div>

      <Section title="Entity">
        <Row l="Legal Name" v={a.entity_name} />
        <Row l="Trade Name / DBA" v={a.trade_name} />
        <Row l="Operating Status" v={a.operating_status?.replace(/_/g,' ')} />
        <Row l="Country" v={a.country_name} />
        <Row l="City" v={a.city} />
      </Section>

      <Section title="KYC / Tax">
        <Row l="Tax Country" v={a.tax_country} />
        <Row l="Tax ID Type" v={a.tax_id_type} />
        <Row l="Tax ID" v={a.tax_id_value_masked || '— masked —'} />
        <Row l="Applicant Type" v={a.tax_id_applicant_type} />
      </Section>

      <Section title="Address Verification">
        <Row l="Address" v={`${a.address_line_1||'—'} ${a.address_line_2||''}, ${a.postal_code||''}`} />
        <Row l="Status" v={a.address_verification_status} />
        <div className="flex gap-2 mt-2">
          <input value={verifyNotes} onChange={e => setVerifyNotes(e.target.value)} placeholder="Verification notes..." className="flex-1 bg-navy-950 border border-surface-border rounded-lg px-2 py-1.5 text-[11px] text-surface-primary outline-none" />
          <button onClick={() => { onVerify(verifyNotes); setVerifyNotes(''); }} className="btn-outline !text-[10px] !py-1 !px-3">Verify</button>
        </div>
      </Section>

      <Section title="Rules Acknowledgment">
        <Row l="Acknowledged" v={a.rules_acknowledged ? '✓ Yes' : '✕ No'} />
        <Row l="Signer" v={a.electronic_signature_name} />
        <Row l="Role" v={a.electronic_signature_role} />
        <Row l="Date" v={a.electronic_signature_date} />
        <Row l="Authorized" v={a.authorized_to_submit ? '✓ Yes' : '✕ No'} />
      </Section>

      <Section title={`Documents (${documents.length})`}>
        {documents.length === 0 ? <p className="text-[10px] text-surface-muted">None uploaded.</p> : documents.map(d => <DocRow key={d.id} doc={d} />)}
      </Section>

      <Section title="Stripe Connect">
        <Row l="Onboarding Status" v={a.stripe_onboarding_status?.replace(/_/g,' ')} />
        <Row l="Account ID" v={a.stripe_account_id} />
        <Row l="Charges Enabled" v={a.stripe_charges_enabled ? '✓' : '✕'} />
        <Row l="Payouts Enabled" v={a.stripe_payouts_enabled ? '✓' : '✕'} />
        <Row l="Processor Readiness" v={a.processor_readiness_status?.replace(/_/g,' ')} />
        {!a.stripe_account_id && (
          <button onClick={initiateStripe} disabled={stripeLoading} className="btn-outline !text-[10px] !py-1.5 !px-3 mt-2">
            {stripeLoading ? 'Initiating...' : 'Begin Stripe Onboarding'}
          </button>
        )}
        {a.stripe_onboarding_url && (
          <a href={a.stripe_onboarding_url} target="_blank" rel="noopener noreferrer" className="block text-[10px] text-gold hover:underline mt-2 no-underline">View Onboarding Link ↗</a>
        )}
      </Section>

      <Section title="Actions">
        <textarea value={actionNotes} onChange={e => setActionNotes(e.target.value)} placeholder="Action notes..." rows={2} className="w-full bg-navy-950 border border-surface-border rounded-lg px-2 py-1.5 text-[11px] text-surface-primary outline-none resize-y mb-2" />
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => { onAction('approved', actionNotes); setActionNotes(''); }} className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-emerald-500/30">Approve</button>
          <button onClick={() => { onAction('under_review', actionNotes); setActionNotes(''); }} className="bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-blue-500/30">Under Review</button>
          <button onClick={() => { onAction('additional_documentation_required', actionNotes); setActionNotes(''); }} className="bg-gold-dim border border-gold/30 text-gold rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-gold/20">Request Docs</button>
          <button onClick={() => { onAction('declined', actionNotes); setActionNotes(''); }} className="bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-red-500/30">Decline</button>
        </div>
      </Section>

      <Section title="Internal Notes">
        <div className="flex gap-2 mb-2">
          <input value={noteText} onChange={e => setNoteText(e.target.value)} placeholder="Add note..." className="flex-1 bg-navy-950 border border-surface-border rounded-lg px-2 py-1.5 text-[11px] text-surface-primary outline-none" />
          <button onClick={() => { onNote(noteText); setNoteText(''); }} className="btn-outline !text-[10px] !py-1 !px-3">Add</button>
        </div>
        {notes.map(n => <div key={n.id} className="bg-navy-950/50 rounded-lg px-3 py-2 mb-1"><p className="text-[10px] text-surface-secondary">{n.note}</p><p className="text-[8px] text-surface-muted mt-1">{n.author_name} · {new Date(n.created_at).toLocaleString()}</p></div>)}
      </Section>

      <Section title="Review History">
        {reviews.map(r => <div key={r.id} className="bg-navy-950/50 rounded-lg px-3 py-2 mb-1"><p className="text-[10px] text-surface-secondary"><strong>{r.action}</strong> — {r.notes || 'No notes'}</p><p className="text-[8px] text-surface-muted">{r.reviewer_name} · {new Date(r.created_at).toLocaleString()}</p></div>)}
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return <div className="border-t border-surface-border pt-3"><p className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">{title}</p>{children}</div>;
}

function DocRow({ doc }) {
  const [url, setUrl] = useState(null);
  async function getUrl() { const { url: u } = await getSignedDocumentUrl(doc.file_path); setUrl(u); }
  return (
    <div className="flex items-center justify-between bg-navy-950/50 rounded-lg px-3 py-2 mb-1">
      <div><p className="text-[10px] font-medium">{doc.category?.replace(/_/g,' ')}</p><p className="text-[9px] text-surface-muted">{doc.file_name} · {Math.round(doc.file_size/1024)}KB</p></div>
      {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-gold hover:underline no-underline">View ↗</a> : <button onClick={getUrl} className="text-[10px] text-gold hover:underline">Get Link</button>}
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = { submitted:'bg-blue-500/15 text-blue-400 border-blue-500/20', under_review:'bg-gold-dim text-gold border-gold/20', additional_documentation_required:'bg-gold-dim text-gold border-gold/20', approved:'bg-emerald-500/15 text-emerald-400 border-emerald-500/20', declined:'bg-red-500/15 text-red-400 border-red-500/20', suspended:'bg-red-500/15 text-red-400 border-red-500/20' };
  return <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border ${colors[status]||'bg-navy-950 text-surface-muted border-surface-border'}`}>{status?.replace(/_/g,' ')}</span>;
}

function Row({ l, v }) {
  if (!v && v !== false && v !== 0) return null;
  return <div className="flex gap-2 text-[11px] py-0.5"><span className="text-surface-muted w-24 flex-shrink-0">{l}</span><span className="text-surface-secondary">{v}</span></div>;
}
