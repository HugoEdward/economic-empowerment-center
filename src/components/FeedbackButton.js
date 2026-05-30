'use client';
import { useState } from 'react';

const CATEGORIES = [
  { value: 'confusion', label: 'Confusion / unclear' },
  { value: 'missing_info', label: 'Missing information' },
  { value: 'communication', label: 'Communication suggestion' },
  { value: 'visual', label: 'Visual suggestion' },
  { value: 'trust', label: 'Trust concern' },
  { value: 'technical', label: 'Technical issue' },
  { value: 'other', label: 'Other' },
];

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const cls = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none focus:border-gold';

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.target);
    const data = {
      category: fd.get('category'),
      page_url: typeof window !== 'undefined' ? window.location.pathname : '',
      feedback: fd.get('feedback'),
      reviewer_name: fd.get('name'),
      reviewer_email: fd.get('email'),
    };

    try {
      const { getSupabase, isConfigured } = await import('@/lib/supabase');
      if (isConfigured()) {
        const client = getSupabase();
        await client.from('advisor_feedback').insert(data);
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Still close gracefully
    }
    setSubmitting(false);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-gold text-navy-950 rounded-full px-4 py-2.5 text-xs font-medium shadow-lg hover:bg-gold/90 transition-all flex items-center gap-2"
        aria-label="Suggest improvement"
      >
        <span>💡</span> Suggest Improvement
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-5" onClick={() => setOpen(false)}>
          <div className="bg-navy-800 border border-gold/20 rounded-2xl p-6 max-w-md w-full relative animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-surface-muted hover:text-surface-primary text-xl">×</button>

            {submitted ? (
              <div className="text-center py-4">
                <p className="text-3xl mb-2">✓</p>
                <h3 className="font-display text-lg text-emerald-400 mb-2">Thank You</h3>
                <p className="text-xs text-surface-secondary">Your feedback will help strengthen the platform.</p>
                <button onClick={() => { setOpen(false); setTimeout(() => setSubmitted(false), 300); }} className="btn-outline !text-xs !py-1.5 mt-4">Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Advisor Preview Feedback</p>
                <h2 className="font-display text-xl font-medium mb-3">Help us improve</h2>
                <p className="text-[11px] text-surface-secondary mb-4">
                  Your perspective helps us refine communication, fill gaps, and strengthen trust before public launch.
                </p>

                <div className="space-y-2.5">
                  <select name="category" required className={cls + ' appearance-none'}>
                    <option value="">Type of feedback...</option>
                    {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                  <textarea name="feedback" required rows={4} placeholder="What can we improve? Be specific..." className={cls + ' resize-y'} />
                  <div className="grid grid-cols-2 gap-2.5">
                    <input name="name" placeholder="Name (optional)" className={cls} />
                    <input name="email" type="email" placeholder="Email (optional)" className={cls} />
                  </div>
                  <button type="submit" disabled={submitting} className="btn-gold w-full justify-center">
                    {submitting ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </div>

                <p className="text-[9px] text-surface-muted text-center mt-3">
                  Feedback is stored for advisor review and may be used to improve the platform.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
