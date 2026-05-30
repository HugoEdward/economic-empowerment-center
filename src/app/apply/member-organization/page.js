import MemberOrgForm from './MemberOrgForm';
export const metadata = { title: 'Apply — Member Organization' };
export default function Page() {
  return (
    <section className="pt-28 pb-16 px-5"><div className="max-w-xl mx-auto">
      <div className="mb-5 animate-fade-up">
        <p className="section-label">Application for Review</p>
        <h1 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2">Member Organization Application</h1>
        <p className="text-xs text-surface-secondary">Submission does not guarantee approval. Response within 1–7 business days.</p>
      </div>
      <div className="disclaimer-box mb-5 text-[11px] animate-fade-up-delay"><strong>No income is guaranteed.</strong> Participation is earned through qualification, review, and ongoing compliance.</div>
      <MemberOrgForm />
      <p className="text-[10px] text-surface-muted text-center mt-5">Trouble? Email <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Member%20Org%20Application" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a></p>
    </div></section>
  );
}
