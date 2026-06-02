import SponsorForm from './Form';
import WhatMustIDo from '@/components/WhatMustIDo';

export const metadata = { title: 'Apply — Strategic Partner / Sponsor' };

export default function Page() {
  return (
    <>
      <WhatMustIDo
        subtitle="Strategic Partner / Sponsor Example"
        actions={[
          'Define partnership scope, goals, and term',
          'Submit corporate or organizational registration',
          'Provide authorized signer identification',
          'Submit compliance and ethics disclosure',
          'Align partnership with community impact goals',
          'Engage organized multicultural audiences across the ecosystem',
          'Sponsor or participate in cultural and city events',
          'Build long-term value with recognized organizations',
          'Sustain engagement across the partnership term',
          'Maintain transparent reporting and accountability',
        ]}
        represents={[
          '1 Strategic Partner',
          '500 Organizations Reached',
          '10 Cities Activated',
          '8 Annual Events Sponsored',
        ]}
        pathway="Strategic partnership → multicultural community reach"
        transition="COMPLETE YOUR APPLICATION BELOW"
      />
      <section className="pt-4 pb-16 px-5"><div className="max-w-xl mx-auto">
        <div className="mb-5"><p className="section-label">Expression of Interest</p><h1 className="font-display text-2xl font-medium tracking-tight mb-2">Strategic Partner / Sponsor Application</h1><p className="text-xs text-surface-secondary">Submission does not guarantee approval. Response within 1–7 business days.</p></div>
        <SponsorForm />
        <p className="text-[10px] text-surface-muted text-center mt-5">Trouble? Email <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Partner" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a></p>
      </div></section>
    </>
  );
}
