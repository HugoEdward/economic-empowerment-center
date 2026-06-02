import ChamberForm from './Form';
export const metadata = { title: 'Apply — Chamber / Association' };
export default function Page() {
  return (
    <section className="pt-28 pb-16 px-5"><div className="max-w-xl mx-auto">
      <div className="mb-5"><p className="section-label">Application for Review</p><h1 className="font-display text-2xl font-medium tracking-tight mb-2">Chamber / Association Application</h1><p className="text-xs text-surface-secondary">Submission does not guarantee approval. Response within 1–7 business days.</p></div>
      <ChamberForm />
      <p className="text-[10px] text-surface-muted text-center mt-5">Trouble? Email <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Chamber" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a></p>
    </div></section>
  );
}
