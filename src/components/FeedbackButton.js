'use client';
import { useState } from 'react';

const NEXT_ACTIONS = ['Continue Reading','Explore Another Page','Apply','Request Information','Leave The Site'];
const REVIEWER_TYPES = ['Entrepreneur','Organization Leader','Chamber Leader','Merchant / Professional','Church / Faith Leader','Sponsor / Partner','Government / City Representative','Other'];
const ANSWERED_WIIFM = ['Yes','Partially','No'];

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('choose');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function close() {
    setOpen(false);
    setTimeout(() => { setSubmitted(false); setMode('choose'); }, 300);
  }

  return (
    <>
      <button onClick={() => { setOpen(true); setMode('choose'); }}
        className="fixed bottom-5 right-5 z-40 bg-gold text-navy-950 rounded-full px-4 py-2.5 text-xs font-bold tracking-wide shadow-lg hover:bg-gold/90 transition-all flex items-center gap-2">
        <span>💡</span> HELP US IMPROVE THIS PAGE
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto" onClick={close}>
          <div className="bg-navy-800 border border-gold/20 rounded-2xl p-6 max-w-lg w-full max-h-[92vh] overflow-y-auto relative animate-fade-up my-auto" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <button onClick={close} className="absolute top-3 right-3 text-surface-muted hover:text-surface-primary text-xl">×</button>
            {submitted ? <SubmittedState onClose={close} /> :
             mode === 'choose' ? <ChooseMode onSelect={setMode} /> :
             mode === 'quick' ? <QuickForm onSubmit={() => setSubmitted(true)} submitting={submitting} setSubmitting={setSubmitting} /> :
             <FullReviewForm onSubmit={() => setSubmitted(true)} submitting={submitting} setSubmitting={setSubmitting} />}
          </div>
        </div>
      )}
    </>
  );
}

function ChooseMode({ onSelect }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Advisor Preview Feedback</p>
      <h2 className="font-display text-xl font-medium mb-4">How would you like to help?</h2>
      <div className="space-y-3">
        <button onClick={() => onSelect('quick')} className="w-full text-left bg-navy-950 border border-surface-border rounded-xl px-4 py-3 hover:border-gold/30 transition-colors">
          <p className="text-sm font-medium text-surface-primary mb-1">⚡ Quick Suggestion</p>
          <p className="text-[11px] text-surface-secondary">Drop a one-line idea, confusion, or correction.</p>
        </button>
        <button onClick={() => onSelect('full')} className="w-full text-left bg-gold/[0.05] border border-gold/25 rounded-xl px-4 py-3 hover:border-gold/40 transition-colors">
          <p className="text-sm font-medium text-gold mb-1">📋 Full Page Review</p>
          <p className="text-[11px] text-surface-secondary">11 questions. Helps us measure movement, not opinions.</p>
        </button>
      </div>
    </div>
  );
}

const CLS = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary outline-none focus:border-gold';

function QuickForm({ onSubmit, submitting, setSubmitting }) {
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
      if (isConfigured()) await getSupabase().from('advisor_feedback').insert(data);
    } catch (err) { console.error(err); }
    onSubmit();
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Quick Suggestion</p>
      <h2 className="font-display text-xl font-medium mb-4">Help us improve</h2>
      <div className="space-y-2.5">
        <select name="category" required className={CLS + ' appearance-none'}>
          <option value="">Type of feedback...</option>
          <option value="confusion">Confusion / unclear</option>
          <option value="missing_info">Missing information</option>
          <option value="communication">Communication suggestion</option>
          <option value="visual">Visual suggestion</option>
          <option value="trust">Trust concern</option>
          <option value="technical">Technical issue</option>
          <option value="other">Other</option>
        </select>
        <textarea name="feedback" required rows={4} placeholder="What can we improve? Be specific..." className={CLS + ' resize-y'} />
        <div className="grid grid-cols-2 gap-2.5">
          <input name="name" placeholder="Name (optional)" className={CLS} />
          <input name="email" type="email" placeholder="Email (optional)" className={CLS} />
        </div>
        <button type="submit" disabled={submitting} className="btn-gold w-full justify-center">{submitting ? 'Submitting...' : 'Submit'}</button>
      </div>
    </form>
  );
}

function FullReviewForm({ onSubmit, submitting, setSubmitting }) {
  const [rating, setRating] = useState(7);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.target);
    const data = {
      category: 'page_review',
      page_url: typeof window !== 'undefined' ? window.location.pathname : '',
      page_rating: rating,
      page_offering_summary: fd.get('q2'),
      attention_grabber: fd.get('q3'),
      continue_reason: fd.get('q4'),
      confusion_points: fd.get('q5'),
      missing_opportunity: fd.get('q6'),
      change_one_thing: fd.get('q7'),
      next_action: fd.get('q8'),
      reviewer_type: fd.get('q9'),
      wiifm_answered: fd.get('q10'),
      impossible_to_ignore: fd.get('q11'),
      showed_real_opportunity: fd.get('q12'),
      feedback: 'Rating: ' + rating + '/10',
      reviewer_name: fd.get('name'),
      reviewer_email: fd.get('email'),
    };
    try {
      const { getSupabase, isConfigured } = await import('@/lib/supabase');
      if (isConfigured()) await getSupabase().from('advisor_feedback').insert(data);
    } catch (err) { console.error(err); }
    onSubmit();
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Full Page Review</p>
      <h2 className="font-display text-xl font-medium mb-1">Measure movement, not opinion.</h2>
      <p className="text-[11px] text-surface-secondary mb-4">All fields optional except Q1.</p>
      <div className="space-y-4">
        <Q num="1" q="Rate this page from 1–10">
          <p className="text-[10px] text-surface-muted mb-2">10 = I want to continue · 1 = I would leave</p>
          <input type="range" min="1" max="10" value={rating} onChange={e => setRating(+e.target.value)} className="w-full accent-gold" />
          <p className="text-center font-display text-2xl text-gold mt-1">{rating}<span className="text-sm text-surface-muted">/10</span></p>
        </Q>
        <Q num="2" q="In your own words, what is this page offering?"><textarea name="q2" rows={2} className={CLS + ' resize-y'} /></Q>
        <Q num="3" q="What caught your attention first?"><input name="q3" className={CLS} /></Q>
        <Q num="4" q="What would make you continue reading?"><textarea name="q4" rows={2} className={CLS + ' resize-y'} /></Q>
        <Q num="5" q="What confused you?"><textarea name="q5" rows={2} className={CLS + ' resize-y'} /></Q>
        <Q num="6" q="What important opportunity is missing?"><textarea name="q6" rows={2} className={CLS + ' resize-y'} /></Q>
        <Q num="7" q="If you could change one thing, what would it be?"><textarea name="q7" rows={2} className={CLS + ' resize-y'} /></Q>
        <Q num="8" q="After viewing this page, what would you do next?">
          <select name="q8" className={CLS + ' appearance-none'}><option value="">Select...</option>{NEXT_ACTIONS.map(a => <option key={a} value={a}>{a}</option>)}</select>
        </Q>
        <Q num="9" q="Who are you?">
          <select name="q9" className={CLS + ' appearance-none'}><option value="">Select...</option>{REVIEWER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}</select>
        </Q>
        <Q num="10" q='Did this page answer "What is in it for me?"'>
          <select name="q10" className={CLS + ' appearance-none'}><option value="">Select...</option>{ANSWERED_WIIFM.map(a => <option key={a} value={a}>{a}</option>)}</select>
        </Q>
        <Q num="11" q="What would make this page impossible to ignore?"><textarea name="q11" rows={2} className={CLS + ' resize-y'} /></Q>
        <Q num="12" q='Did this page show you a real opportunity?'>
          <select name="q12" className={CLS + ' appearance-none'}><option value="">Select...</option>{ANSWERED_WIIFM.map(a => <option key={a} value={a}>{a}</option>)}</select>
        </Q>
        <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-surface-border">
          <input name="name" placeholder="Name (optional)" className={CLS} />
          <input name="email" type="email" placeholder="Email (optional)" className={CLS} />
        </div>
        <button type="submit" disabled={submitting} className="btn-gold w-full justify-center">{submitting ? 'Submitting...' : 'Submit Review'}</button>
      </div>
    </form>
  );
}

function Q({ num, q, children }) {
  return (
    <div className="bg-navy-950/40 rounded-lg px-3 py-3">
      <p className="text-[10px] font-bold text-gold mb-1.5"><span className="text-gold/60">Q{num}.</span> {q}</p>
      {children}
    </div>
  );
}

function SubmittedState({ onClose }) {
  return (
    <div className="text-center py-4">
      <p className="text-3xl mb-2">✓</p>
      <h3 className="font-display text-lg text-emerald-400 mb-2">Thank You</h3>
      <p className="text-xs text-surface-secondary">Your feedback will help strengthen the platform.</p>
      <button onClick={onClose} className="btn-outline !text-xs !py-1.5 mt-4">Close</button>
    </div>
  );
}
