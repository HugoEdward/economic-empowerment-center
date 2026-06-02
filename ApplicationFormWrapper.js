'use client';
import { useState, useEffect } from 'react';

const PREVIEW_CODE = process.env.NEXT_PUBLIC_PREVIEW_ACCESS_CODE || '';
const SESSION_KEY = 'eec_advisor_access';

export default function AdvisorPreviewGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [view, setView] = useState('access'); // 'access' | 'request'
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // No code set = open access (e.g., during build, dev without env var)
    if (!PREVIEW_CODE) { setUnlocked(true); setChecking(false); return; }
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === 'true') {
      setUnlocked(true);
    }
    setChecking(false);
  }, []);

  function handleSubmit() {
    setError('');
    if (code === PREVIEW_CODE) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setUnlocked(true);
    } else {
      setError('Access restricted to approved reviewers.');
    }
  }

  if (checking) return null;
  if (unlocked) return (
    <>
      {children}
      {/* Advisor Preview Notice — persistent badge bottom-left */}
      <div className="fixed bottom-5 left-5 z-40 bg-gold/[0.12] backdrop-blur-md border border-gold/30 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <p className="text-[9px] font-bold tracking-wider uppercase text-gold leading-none">
          Advisor Preview <span className="text-gold/60 mx-1">·</span> Not Yet Released For Public Use
        </p>
      </div>
    </>
  );

  return (
    <div className="fixed inset-0 z-[100] bg-navy-950 overflow-y-auto">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-navy-950 to-navy-950 pointer-events-none" />
      <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />

      <div className="relative min-h-screen flex items-center justify-center p-5">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-gold text-lg">●</span>
              <p className="font-display text-sm tracking-widest text-gold uppercase">Economic Empowerment</p>
            </div>
          </div>

          {view === 'access' ? (
            <div className="bg-navy-800 border border-gold/15 rounded-2xl p-7 relative overflow-hidden animate-fade-up">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold mb-3">Advisor Preview</p>
              <h1 className="font-display text-2xl font-medium mb-3">A private review phase.</h1>
              <p className="text-xs text-surface-secondary leading-relaxed mb-5">
                EconomicEmpowerment.Center is currently in a private review phase.
                We are inviting selected advisors and reviewers to help strengthen the platform before public launch.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-medium text-surface-secondary mb-1">Advisor Access Code</label>
                  <input
                    type="password" value={code}
                    onChange={e => setCode(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    placeholder="Enter your code..."
                    autoFocus
                    className="w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2.5 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim font-mono"
                  />
                </div>

                {error && <p className="text-xs text-red-400">{error}</p>}

                <button onClick={handleSubmit} className="btn-gold w-full justify-center">Enter</button>

                <button onClick={() => setView('request')} className="w-full text-[11px] text-surface-muted hover:text-gold transition-colors mt-2 underline-offset-2 hover:underline">
                  Request Review Access →
                </button>
              </div>
            </div>
          ) : (
            <AccessRequestForm onBack={() => setView('access')} />
          )}

          <p className="text-center text-[10px] text-surface-muted/60 mt-6 leading-relaxed">
            Economic Empowerment is a global economic empowerment platform supported through the MUNDUS ecosystem.<br/>
            Participation is subject to qualification, review, and compliance.
          </p>
        </div>
      </div>
    </div>
  );
}

function AccessRequestForm({ onBack }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const cls = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim';

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true); setError('');
    const fd = new FormData(e.target);
    const data = {
      name: fd.get('name'), email: fd.get('email'),
      organization: fd.get('organization'), city: fd.get('city'),
      country: fd.get('country'), reason: fd.get('reason'),
    };

    try {
      const { getSupabase, isConfigured } = await import('@/lib/supabase');
      if (!isConfigured()) { setSubmitted(true); setSubmitting(false); return; }
      const client = getSupabase();
      const { error: e } = await client.from('advisor_inquiries').insert(data);
      if (e) setError('Could not submit. Please email immigrantsalliance@gmail.com.');
      else setSubmitted(true);
    } catch (err) {
      setError('Could not submit. Please email immigrantsalliance@gmail.com.');
    }
    setSubmitting(false);
  }

  if (submitted) return (
    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center animate-fade-up">
      <p className="text-2xl mb-2">✓</p>
      <h3 className="font-display text-lg text-emerald-400 mb-2">Inquiry Received</h3>
      <p className="text-xs text-surface-secondary">We will review your request and reach out if you are invited to join the advisor preview.</p>
      <button onClick={onBack} className="text-[11px] text-gold hover:underline mt-4">← Back to access</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-navy-800 border border-gold/15 rounded-2xl p-6 animate-fade-up">
      <button type="button" onClick={onBack} className="text-[11px] text-surface-muted hover:text-gold mb-3">← Back</button>
      <h2 className="font-display text-xl font-medium mb-4">Request Review Access</h2>
      <div className="space-y-2.5">
        <input name="name" required placeholder="Full Name" className={cls} />
        <input name="email" type="email" required placeholder="Email" className={cls} />
        <input name="organization" placeholder="Organization" className={cls} />
        <div className="grid grid-cols-2 gap-2.5">
          <input name="city" placeholder="City" className={cls} />
          <input name="country" placeholder="Country / Territory" className={cls} />
        </div>
        <textarea name="reason" required placeholder="Reason for interest..." rows={3} className={cls + ' resize-y'} />
        {error && <p className="text-xs text-red-400">{error}</p>}
        <button type="submit" disabled={submitting} className="btn-gold w-full justify-center">
          {submitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </div>
    </form>
  );
}
