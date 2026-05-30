'use client';
import { useState, useRef } from 'react';
import { submitApplication } from '@/lib/applications';
import { isConfigured } from '@/lib/supabase';

/**
 * Wraps any application form. Handles submit, loading, success/error states.
 * Children receive no props — form fields use standard HTML names.
 * @param {string} applicationType - matches application_type enum
 * @param {Function} collectData - (formEl) => { appData, documents }
 * @param {ReactNode} children - form fields
 */
export default function ApplicationFormWrapper({ applicationType, collectData, docChecklistRef, children }) {
  const [state, setState] = useState('idle'); // idle | loading | success | success_incomplete | error
  const [errorMsg, setErrorMsg] = useState('');
  const [appId, setAppId] = useState('');
  const [missing, setMissing] = useState([]);
  const formRef = useRef(null);

  const configured = isConfigured();

  async function handleSubmit() {
    const form = formRef.current;
    if (!form) return;
    if (!form.reportValidity()) return;

    const unchecked = form.querySelectorAll('input[type="checkbox"][required]:not(:checked)');
    if (unchecked.length > 0) { setErrorMsg('Please complete all required acknowledgments.'); setState('error'); return; }

    setState('loading');
    setErrorMsg('');

    try {
      const { appData, documents: formDocs } = collectData(form);
      appData.application_type = applicationType;

      // Get documents from checklist if available
      let allDocs = formDocs || [];
      let isComplete = true;
      let missingDocs = [];
      if (docChecklistRef?.current) {
        const checklistDocs = docChecklistRef.current.getDocuments();
        allDocs = [...allDocs, ...checklistDocs];
        isComplete = docChecklistRef.current.isComplete();
        missingDocs = docChecklistRef.current.getMissing();
      }

      const result = await submitApplication(appData, allDocs);

      if (result.success) {
        setAppId(result.applicationId);
        setMissing(missingDocs);
        setState(isComplete ? 'success' : 'success_incomplete');
      } else {
        setErrorMsg(result.error);
        setState('error');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('An unexpected error occurred. Please try again.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center animate-fade-up">
        <span className="text-3xl block mb-3">✓</span>
        <h3 className="font-display text-xl font-medium text-emerald-400 mb-2">Application Submitted</h3>
        <p className="text-sm text-surface-secondary mb-2">
          Your Request for Recognition has been submitted for review. All required documents have been received.
        </p>
        <p className="text-xs text-surface-muted mb-4">Submission does not guarantee approval. Applications are reviewed according to documentation requirements, participation standards, program objectives, compliance requirements, and ecosystem guidelines.</p>
        <p className="text-xs text-surface-muted">Reference: {appId?.slice(0, 8)}</p>
      </div>
    );
  }

  if (state === 'success_incomplete') {
    return (
      <div className="bg-gold-dim border border-gold/20 rounded-2xl p-8 text-center animate-fade-up">
        <span className="text-3xl block mb-3">⚠</span>
        <h3 className="font-display text-xl font-medium text-gold mb-2">Application Received — Incomplete</h3>
        <p className="text-sm text-surface-secondary mb-3">
          Your Request for Recognition has been received as incomplete. The following required documents are missing:
        </p>
        <div className="bg-navy-950/50 rounded-lg px-4 py-3 mb-4 text-left max-w-sm mx-auto">
          {missing.map(m => <p key={m} className="text-[11px] text-red-400/80 py-0.5 flex items-center gap-1.5"><span className="text-[8px]">✕</span>{m}</p>)}
        </div>
        <p className="text-xs text-surface-muted">Please upload the missing documents so the application can proceed to review.</p>
        <p className="text-xs text-surface-muted mt-2">Reference: {appId?.slice(0, 8)}</p>
      </div>
    );
  }

  return (
    <div ref={formRef} className="bg-navy-800 border border-surface-border rounded-2xl p-5 space-y-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {!configured && (
        <div className="bg-gold-dim border border-gold/20 rounded-lg px-4 py-2 text-[10px] text-gold">
          ⚠ Backend not connected. Ready for live test once Supabase environment variables are added.
        </div>
      )}

      {state === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5 text-xs text-red-400 animate-fade-up">
          {errorMsg}
        </div>
      )}

      {children}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={state === 'loading'}
        className={`btn-gold w-full justify-center mt-2 ${state === 'loading' ? 'opacity-60 pointer-events-none' : ''}`}
      >
        {state === 'loading' ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          'Submit Application for Review'
        )}
      </button>

      <p className="text-[9px] text-surface-muted text-center">
        Submission does not guarantee approval. An application fee may apply upon approval.
      </p>
    </div>
  );
}
