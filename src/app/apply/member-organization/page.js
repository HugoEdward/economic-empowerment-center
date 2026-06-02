import MemberOrgForm from './MemberOrgForm';
import WhatMustIDo from '@/components/WhatMustIDo';

export const metadata = { title: 'Apply — Member Organization' };

export default function Page() {
  return (
    <>
      <WhatMustIDo
        subtitle="Member Organization Example"
        actions={[
          'Submit governing documents (incorporation, bylaws, officer resolution)',
          'Provide tax identification and tax-exempt status documentation',
          'Verify operating address and active operating status',
          'Designate authorized officers and signatories',
          'Acknowledge S.E.E.D. Rules and program requirements',
          'Activate your existing members through the recognition pathway',
          'Invite and register local merchants serving your community',
          'Engage Passport to the World and 1City.VIP participation',
          'Build sustainable membership dues and merchant participation',
          'Maintain compliance and reporting requirements',
        ]}
        represents={[
          '1 Recognized Organization',
          '~1,000 Active Members',
          '~50 Participating Merchants',
          'Sustainable Revenue Pathway',
        ]}
        pathway="Recognized organization → membership sustainability"
        transition="COMPLETE YOUR APPLICATION BELOW"
      />
      <section className="pt-4 pb-16 px-5"><div className="max-w-xl mx-auto">
        <div className="mb-5 animate-fade-up">
          <p className="section-label">Application for Review</p>
          <h1 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2">Member Organization Application</h1>
          <p className="text-xs text-surface-secondary">Submission does not guarantee approval. Response within 1–7 business days.</p>
        </div>
        <div className="disclaimer-box mb-5 text-[11px] animate-fade-up-delay"><strong>No income is guaranteed.</strong> Participation is earned through qualification, review, and ongoing compliance.</div>
        <MemberOrgForm />
        <p className="text-[10px] text-surface-muted text-center mt-5">Trouble? Email <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Member%20Org%20Application" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a></p>
      </div></section>
    </>
  );
}
