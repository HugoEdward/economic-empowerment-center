'use client';
import { useState } from 'react';

export default function AddressBlock({ prefix = '' }) {
  const [status] = useState('pending'); // not_checked | pending | verified | partial_match | failed | manual_review_required

  const cls = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim';

  return (
    <div className="space-y-2.5">
      <div>
        <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
          Street Address<span className="text-gold ml-0.5">*</span>
        </label>
        <input type="text" name={`${prefix}address_line_1`} placeholder="Street address" required className={cls} />
      </div>
      <div>
        <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
          Address Line 2
        </label>
        <input type="text" name={`${prefix}address_line_2`} placeholder="Suite, floor, unit (optional)" className={cls} />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
            Postal / ZIP Code<span className="text-gold ml-0.5">*</span>
          </label>
          <input type="text" name={`${prefix}postal_code`} placeholder="Postal code" required className={cls} />
        </div>
        <div>
          <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
            Verification
          </label>
          <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-medium border ${
            status === 'verified' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
            status === 'failed' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
            'bg-navy-950 border-surface-border text-surface-muted'
          }`}>
            <span>{status === 'verified' ? '✓' : status === 'failed' ? '✕' : '⏳'}</span>
            <span>{
              status === 'verified' ? 'Address Confirmed' :
              status === 'failed' ? 'Verification Failed' :
              'Pending Verification'
            }</span>
          </div>
        </div>
      </div>
      <p className="text-[8px] text-surface-muted/50">
        Address verification pending — backend provider required. Address will be verified before final approval.
      </p>
      <input type="hidden" name={`${prefix}address_verification_status`} value={status} />
    </div>
  );
}
