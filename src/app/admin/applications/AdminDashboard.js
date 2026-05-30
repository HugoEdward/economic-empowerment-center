'use client';
import { useState, useEffect } from 'react';
import { fetchApplications, fetchApplicationDetail, getSignedDocumentUrl, updateApplicationStatus, addAdminNote, manuallyVerifyAddress } from '@/lib/applications';
import { isConfigured } from '@/lib/supabase';

const STATUSES = ['all','submitted','under_review','additional_documentation_required','approved','declined','suspended','archived'];
const TYPES = ['all','member_organization','entrepreneur','merchant_professional','chamber_association','strategic_partner_sponsor'];

export default function AdminDashboard() {
  const [apps, setApps] = useState([]);
  const [filter, setFilter] = useState({ status: 'all', type: 'all' });
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const configured = isConfigured();

  useEffect(() => { load(); }, [filter]);

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

  async function handleAction(action, notes = '') {
    if (!selected) return;
    await updateApplicationStatus(selected, action, 'Admin', notes);
    const d = await fetchApplicationDetail(selected);
    setDetail(d);
    load();
  }

  async function handleNote(note) {
    if (!selected || !note) return;
    await addAdminNote(selected, note, 'Admin');
    const d = await fetchApplicationDetail(selected);
    setDetail(d);
  }

  async function handleVerifyAddress(notes) {
    if (!selected) return;
    await manuallyVerifyAddress(selected, notes);
    const d = await fetchApplicationDetail(selected);
    setDetail(d);
  }

  if (!configured) {
    return (
      <div className="pt-28 pb-16 px-5 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-2xl font-medium mb-4">Admin Dashboard</h1>
        <div className="bg-gold-dim border border-gold/20 rounded-xl p-6">
          <p className="text-sm text-gold mb-2">⚠ Backend Not Connected</p>
          <p className="text-xs text-surface-secondary">Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to environment variables.</p>
          <p className="text-[10px] text-surface-muted mt-3">Admin route requires authentication before production use.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-2xl font-medium">Application Review</h1>
            <p className="text-[10px] text-surface-muted mt-1">⚠ Admin route requires authentication before production use.</p>
          </div>
          <button onClick={load} className="btn-outline !text-xs !py-1.5 !px-4">Refresh</button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <select value={filter.status} onChange={e => setFilter(p => ({...p, status: e.target.value}))}
            className="bg-navy-800 border border-surface-border rounded-lg px-3 py-1.5 text-xs text-surface-primary outline-none">
            {STATUSES.map(s => <option key={s} value={s}>{s.replace(/_/g,' ')}</option>)}
          </select>
          <select value={filter.type} onChange={e => setFilter(p => ({...p, type: e.target.value}))}
            className="bg-navy-800 border border-surface-border rounded-lg px-3 py-1.5 text-xs text-surface-primary outline-none">
            {TYPES.map(t => <option key={t} value={t}>{t.replace(/_/g,' ')}</option>)}
          </select>
          <span className="text-xs text-surface-muted self-center ml-2">{apps.length} applications</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-4">
          {/* LIST */}
          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {loading ? <p className="text-xs text-surface-muted p-4">Loading...</p> :
             apps.length === 0 ? <p className="text-xs text-surface-muted p-4">No applications found.</p> :
             apps.map(a => (
              <button key={a.id} onClick={() => openDetail(a.id)}
                className={`w-full text-left bg-navy-800 border rounded-xl px-4 py-3 transition-all ${selected===a.id ? 'border-gold/40' : 'border-surface-border hover:border-gold/20'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">{a.entity_name}</p>
                    <p className="text-[10px] text-surface-muted">{a.application_type?.replace(/_/g,' ')} · {a.contact_email}</p>
                  </div>
                  <StatusBadge status={a.status} />
                </div>
                <p className="text-[9px] text-surface-muted mt-1">{a.country_name} · {a.city} · {new Date(a.submitted_at).toLocaleDateString()}</p>
              </button>
            ))}
          </div>

          {/* DETAIL PANEL */}
          <div className="bg-navy-800 border border-surface-border rounded-2xl p-5 max-h-[70vh] overflow-y-auto">
            {!detail ? <p className="text-xs text-surface-muted text-center py-8">Select an application</p> : (
              <DetailPanel detail={detail} onAction={handleAction} onNote={handleNote} onVerify={handleVerifyAddress} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ detail, onAction, onNote, onVerify }) {
  const { application: a, documents, reviews, notes } = detail;
  const [noteText, setNoteText] = useState('');
  const [actionNotes, setActionNotes] = useState('');
  const [verifyNotes, setVerifyNotes] = useState('');

  if (!a) return <p className="text-xs text-surface-muted">Error loading application.</p>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-sm">{a.entity_name}</p>
          <p className="text-[10px] text-surface-muted">{a.application_type?.replace(/_/g,' ')}</p>
        </div>
        <StatusBadge status={a.status} />
      </div>

      {/* Fields */}
      <div className="space-y-1 text-[11px]">
        <Row l="Contact" v={`${a.contact_person} (${a.contact_email})`} />
        <Row l="Phone" v={a.contact_phone} />
        <Row l="Location" v={`${a.city}, ${a.state_province || ''}, ${a.country_name}`} />
        <Row l="Address" v={`${a.address_line_1 || '—'} ${a.address_line_2 || ''}, ${a.postal_code || ''}`} />
        <Row l="Address Status" v={a.address_verification_status || 'not_checked'} />
        <Row l="Organization Type" v={a.organization_type} />
        <Row l="Mission" v={a.mission} />
        <Row l="Submitted" v={new Date(a.submitted_at).toLocaleString()} />
      </div>

      {/* Address Verification */}
      <div className="border-t border-surface-border pt-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">Address Verification</p>
        <div className="flex gap-2">
          <input value={verifyNotes} onChange={e => setVerifyNotes(e.target.value)} placeholder="Verification notes..."
            className="flex-1 bg-navy-950 border border-surface-border rounded-lg px-2 py-1.5 text-[11px] text-surface-primary outline-none" />
          <button onClick={() => { onVerify(verifyNotes); setVerifyNotes(''); }} className="btn-outline !text-[10px] !py-1 !px-3">Verify</button>
        </div>
      </div>

      {/* Documents */}
      <div className="border-t border-surface-border pt-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">Documents ({documents.length})</p>
        {documents.length === 0 ? <p className="text-[10px] text-surface-muted">No documents uploaded.</p> :
          documents.map(d => <DocRow key={d.id} doc={d} />)}
      </div>

      {/* Actions */}
      <div className="border-t border-surface-border pt-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">Actions</p>
        <textarea value={actionNotes} onChange={e => setActionNotes(e.target.value)} placeholder="Action notes (required for approve/decline)..."
          rows={2} className="w-full bg-navy-950 border border-surface-border rounded-lg px-2 py-1.5 text-[11px] text-surface-primary outline-none resize-y mb-2" />
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => { onAction('approved', actionNotes); setActionNotes(''); }} className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-emerald-500/30">Approve</button>
          <button onClick={() => { onAction('under_review', actionNotes); setActionNotes(''); }} className="bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-blue-500/30">Under Review</button>
          <button onClick={() => { onAction('additional_documentation_required', actionNotes); setActionNotes(''); }} className="bg-gold-dim border border-gold/30 text-gold rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-gold/20">Request Docs</button>
          <button onClick={() => { onAction('declined', actionNotes); setActionNotes(''); }} className="bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg px-3 py-1.5 text-[10px] font-medium hover:bg-red-500/30">Decline</button>
        </div>
      </div>

      {/* Notes */}
      <div className="border-t border-surface-border pt-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">Internal Notes</p>
        <div className="flex gap-2 mb-2">
          <input value={noteText} onChange={e => setNoteText(e.target.value)} placeholder="Add note..."
            className="flex-1 bg-navy-950 border border-surface-border rounded-lg px-2 py-1.5 text-[11px] text-surface-primary outline-none" />
          <button onClick={() => { onNote(noteText); setNoteText(''); }} className="btn-outline !text-[10px] !py-1 !px-3">Add</button>
        </div>
        {notes.map(n => (
          <div key={n.id} className="bg-navy-950/50 rounded-lg px-3 py-2 mb-1">
            <p className="text-[10px] text-surface-secondary">{n.note}</p>
            <p className="text-[8px] text-surface-muted mt-1">{n.author_name} · {new Date(n.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Review History */}
      <div className="border-t border-surface-border pt-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">Review History</p>
        {reviews.map(r => (
          <div key={r.id} className="bg-navy-950/50 rounded-lg px-3 py-2 mb-1">
            <p className="text-[10px] text-surface-secondary"><strong>{r.action}</strong> — {r.notes || 'No notes'}</p>
            <p className="text-[8px] text-surface-muted">{r.reviewer_name} · {new Date(r.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocRow({ doc }) {
  const [url, setUrl] = useState(null);
  async function getUrl() {
    const { url: u } = await getSignedDocumentUrl(doc.file_path);
    setUrl(u);
  }
  return (
    <div className="flex items-center justify-between bg-navy-950/50 rounded-lg px-3 py-2 mb-1">
      <div>
        <p className="text-[10px] font-medium">{doc.category?.replace(/_/g,' ')}</p>
        <p className="text-[9px] text-surface-muted">{doc.file_name} · {Math.round(doc.file_size/1024)}KB</p>
      </div>
      {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-gold hover:underline no-underline">View ↗</a> :
        <button onClick={getUrl} className="text-[10px] text-gold hover:underline">Get Link</button>}
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    submitted: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    under_review: 'bg-gold-dim text-gold border-gold/20',
    additional_documentation_required: 'bg-gold-dim text-gold border-gold/20',
    approved: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    declined: 'bg-red-500/15 text-red-400 border-red-500/20',
    suspended: 'bg-red-500/15 text-red-400 border-red-500/20',
  };
  return <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border ${colors[status]||'bg-navy-950 text-surface-muted border-surface-border'}`}>{status?.replace(/_/g,' ')}</span>;
}

function Row({ l, v }) {
  if (!v) return null;
  return <div className="flex gap-2"><span className="text-surface-muted w-20 flex-shrink-0">{l}</span><span className="text-surface-secondary">{v}</span></div>;
}
