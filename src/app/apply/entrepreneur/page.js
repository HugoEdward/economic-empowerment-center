import EntrepreneurForm from './Form';
import WhatMustIDo from '@/components/WhatMustIDo';

export const metadata = { title: 'Apply — Entrepreneur / Participant' };

export default function Page() {
  return (
    <>
      <WhatMustIDo
        subtitle="Entrepreneur / Participant Example"
        actions={[
          'Identify recognized or recognizable organizations in your community',
          'Build trust with local member organizations and chambers',
          'Help activate merchants and professionals serving the community',
          'Coordinate Member Organization recognition through S.E.E.D.',
          'Help develop city-level participation through 1City.VIP',
          'Support sustained member retention and merchant activation',
          'Maintain compliance and ethical conduct throughout',
          'Build long-term sustainable economic activity',
          'Focus on activation, federation, and community service',
        ]}
        represents={[
          '1 Trusted Entrepreneur',
          'Recognized Organizations',
          'Activated Merchants',
          'One City Pathway',
        ]}
        pathway="Entrepreneur recognition → ecosystem activation"
        transition="COMPLETE YOUR APPLICATION BELOW"
      />
      <section className="pt-4 pb-16 px-5"><div className="max-w-xl mx-auto">
        <div className="mb-5"><p className="section-label">Application for Review</p><h1 className="font-display text-2xl font-medium tracking-tight mb-2">Entrepreneur / Participant Application</h1><p className="text-xs text-surface-secondary">Submission does not guarantee approval. Response within 1–7 business days.</p></div>
        <EntrepreneurForm />
        <p className="text-[10px] text-surface-muted text-center mt-5">Trouble? Email <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Entrepreneur" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a></p>
      </div></section>
    </>
  );
}
