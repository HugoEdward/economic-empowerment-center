import ChamberForm from './Form';
import WhatMustIDo from '@/components/WhatMustIDo';

export const metadata = { title: 'Apply — Chamber / Association' };

export default function Page() {
  return (
    <>
      <WhatMustIDo
        subtitle="Chamber / Association Example"
        actions={[
          'Submit chamber governing documents and charter',
          'Provide member business roster and category breakdown',
          'Verify chamber operating address and active status',
          'Designate authorized chamber officers',
          'Acknowledge S.E.E.D. Rules and federation requirements',
          'Integrate member businesses with MundusPASS infrastructure',
          'Coordinate city-level participation through 1City.VIP',
          'Deliver new value through ecosystem participation',
          'Engage Passport to the World tourism activation',
          'Maintain chamber compliance and reporting standards',
        ]}
        represents={[
          '1 Chamber or Association',
          'Member Business Roster',
          'City-Level Federation',
          'New Member Value Pathway',
        ]}
        pathway="Chamber federation → new member value"
        transition="COMPLETE YOUR APPLICATION BELOW"
      />
      <section className="pt-4 pb-16 px-5"><div className="max-w-xl mx-auto">
        <div className="mb-5"><p className="section-label">Application for Review</p><h1 className="font-display text-2xl font-medium tracking-tight mb-2">Chamber / Association Application</h1><p className="text-xs text-surface-secondary">Submission does not guarantee approval. Response within 1–7 business days.</p></div>
        <ChamberForm />
        <p className="text-[10px] text-surface-muted text-center mt-5">Trouble? Email <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Chamber" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a></p>
      </div></section>
    </>
  );
}
