'use client';
import { useState } from 'react';

export function OperatingStatusField({ prefix = '' }) {
  const [status, setStatus] = useState('');
  const cls = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim';

  return (
    <div className="space-y-2.5">
      <div>
        <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
          Operating Status<span className="text-gold ml-0.5">*</span>
        </label>
        <select name={`${prefix}operating_status`} value={status} onChange={e => setStatus(e.target.value)} required className={cls + ' appearance-none'}>
          <option value="">Select operating status...</option>
          <option value="individual_personal_tax_id">Individual using personal tax identification number</option>
          <option value="registered_business">Registered business</option>
          <option value="dba_trade_name">DBA / trade name</option>
          <option value="licensed_professional">Licensed professional</option>
          <option value="independent_professional">Independent professional without a registered company</option>
          <option value="other">Other</option>
        </select>
      </div>
      {(status === 'registered_business' || status === 'dba_trade_name') && (
        <div className="grid grid-cols-2 gap-2.5 animate-fade-up">
          <div>
            <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">Legal Business Name<span className="text-gold ml-0.5">*</span></label>
            <input type="text" name={`${prefix}legal_business_name`} required className={cls} />
          </div>
          <div>
            <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">Trade Name / DBA (if different)</label>
            <input type="text" name={`${prefix}trade_name`} className={cls} />
          </div>
        </div>
      )}
      {status === 'licensed_professional' && (
        <p className="text-[9px] text-gold animate-fade-up">⚠ Licensed professionals must upload a copy of their license below if a license is required to practice their profession.</p>
      )}
    </div>
  );
}

export function KycExplanationBlock() {
  return (
    <div className="bg-navy-900 border border-gold/15 rounded-xl px-4 py-3 my-2">
      <p className="text-[10px] text-surface-secondary leading-relaxed">
        <strong className="text-gold">Why documentation is required.</strong>{' '}
        Because approved participants may receive payments, payouts, benefits, or other financial distributions
        through S.E.E.D. Economic Empowerment, MundusPASS, Stripe, Adyen, or another approved payment processor,
        documentation is required to support identity verification, legal existence, tax reporting, address
        confirmation, KYC/KYB review, and processor compliance.{' '}
        <strong>Submission of documentation does not guarantee approval.</strong>
      </p>
    </div>
  );
}

export function RulesAcknowledgment({ prefix = '' }) {
  const [acknowledged, setAcknowledged] = useState(false);
  const cls = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim';

  return (
    <div className="space-y-3 bg-gold/[0.04] border border-gold/15 rounded-xl px-4 py-4">
      <div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">S.E.E.D. Economic Empowerment Rules & Regulations Acknowledgment</p>
        <label className="flex items-start gap-2 cursor-pointer group">
          <input type="checkbox" name={`${prefix}rules_acknowledged`} required onChange={e => setAcknowledged(e.target.checked)}
            className="mt-0.5 w-3 h-3 rounded border-surface-border bg-navy-950 text-gold accent-gold flex-shrink-0" />
          <span className="text-[10px] text-surface-secondary leading-relaxed group-hover:text-surface-primary transition-colors">
            I acknowledge that if approved, I/we agree to comply with the Rules and Regulations of S.E.E.D. Economic Empowerment,
            including ethical participation, truthful documentation, lawful activity, community responsibility,
            payment processor requirements, and ongoing compliance obligations.
          </span>
        </label>
      </div>
      {acknowledged && (
        <div className="space-y-2.5 animate-fade-up pt-2 border-t border-gold/10">
          <p className="text-[9px] text-surface-muted">Electronic acknowledgment — formal e-signature provider may be added later.</p>
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">Signer Full Name<span className="text-gold ml-0.5">*</span></label>
              <input type="text" name={`${prefix}signature_name`} required={acknowledged} className={cls} />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">Signer Title / Role<span className="text-gold ml-0.5">*</span></label>
              <input type="text" name={`${prefix}signature_role`} required={acknowledged} className={cls} />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">Date<span className="text-gold ml-0.5">*</span></label>
            <input type="date" name={`${prefix}signature_date`} required={acknowledged} defaultValue={new Date().toISOString().split('T')[0]} className={cls} />
          </div>
          <label className="flex items-start gap-2 cursor-pointer group">
            <input type="checkbox" name={`${prefix}authorized_to_submit`} required={acknowledged}
              className="mt-0.5 w-3 h-3 rounded border-surface-border bg-navy-950 text-gold accent-gold flex-shrink-0" />
            <span className="text-[10px] text-surface-secondary leading-relaxed group-hover:text-surface-primary transition-colors">
              I certify that I am authorized to submit this application on behalf of the entity named above.
            </span>
          </label>
        </div>
      )}
    </div>
  );
}
