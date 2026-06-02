import MerchantForm from './Form';
import WhatMustIDo from '@/components/WhatMustIDo';

export const metadata = { title: 'Apply — Merchant / Professional' };

export default function Page() {
  return (
    <>
      <WhatMustIDo
        subtitle="Merchant / Professional Example"
        actions={[
          'Submit business registration and licensing documents',
          'Provide tax identification (encrypted on submission)',
          'Verify business operating address',
          'Provide owner government identification',
          'Show evidence of active business operations',
          'Integrate MundusPASS for member transactions',
          'Serve recognized member organization communities',
          'Sustain monthly merchant participation',
          'Maintain compliance with processor and program rules',
          'Build long-term customer relationships with organized communities',
        ]}
        represents={[
          '1 Merchant or Professional',
          'Member Organization Customers',
          'MundusPASS Participation',
          'Recurring Customer Relationships',
        ]}
        pathway="Merchant participation → organized customer base"
        transition="COMPLETE YOUR APPLICATION BELOW"
      />
      <section className="pt-4 pb-16 px-5"><div className="max-w-xl mx-auto">
        <div className="mb-5"><p className="section-label">Application for Review</p><h1 className="font-display text-2xl font-medium tracking-tight mb-2">Merchant / Professional Application</h1><p className="text-xs text-surface-secondary">Submission does not guarantee approval. Response within 1–7 business days.</p></div>
        <MerchantForm />
        <p className="text-[10px] text-surface-muted text-center mt-5">Trouble? Email <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Merchant" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a></p>
      </div></section>
    </>
  );
}
