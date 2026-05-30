import GrowthSimulator from '@/components/GrowthSimulator';
export const metadata = { title: 'Feasibility & Sustainability' };

export default function FeasibilityPage() {
  return (
    <>
      <section className="relative pt-28 pb-10 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 to-navy-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">
          <p className="section-label">Feasibility & Sustainability</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.08] tracking-tight mb-4">
            Illustrative pathways toward <em className="text-gold italic">organizational sustainability</em>
          </h1>
          <p className="text-surface-secondary text-sm">Not promises. Realistic scenarios based on activated participation at ecosystem scale.</p>
        </div>
      </section>
      <section className="px-5 pb-6"><div className="max-w-4xl mx-auto">
        <div className="disclaimer-box text-center text-xs"><strong>No income is guaranteed.</strong> Results depend on participation, compliance, and program rules.</div>
      </div></section>
      <section className="py-10 px-5"><div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
        {[
          { tier:'Emerging',target:'$275,000',items:['1 Development Officer','Dozens of merchants','Hundreds of members','Initial sponsors'] },
          { tier:'Growing',target:'$550,000',items:['Multiple DOs','Hundreds of merchants','Thousands of members','Mid-tier sponsors'] },
          { tier:'Highly Activated',target:'$950,000+',hl:true,items:['10+ DOs + chapters','Hundreds of merchants','Thousands of members','Major sponsors + events'] },
        ].map(p=>(
          <div key={p.tier} className={`card text-center relative overflow-hidden ${p.hl?'border-gold/30':''}`}>
            {p.hl&&<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"/>}
            <p className="text-[10px] font-bold uppercase tracking-widest text-surface-muted mb-3">{p.tier}</p>
            <p className="font-display text-4xl text-gold">{p.target}</p>
            <p className="text-xs text-surface-muted mb-5">/year · illustrative</p>
            <ul className="text-left space-y-1.5">{p.items.map(i=><li key={i} className="text-xs text-surface-secondary flex items-start gap-2"><span className="text-gold text-[8px] mt-1">●</span>{i}</li>)}</ul>
          </div>
        ))}
      </div></section>
      <section className="py-14 px-5 bg-navy-900"><div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="section-label justify-center">Sustainability Simulator</p>
          <h2 className="font-display text-2xl font-medium tracking-tight">Disconnected vs. Activated</h2>
          <p className="text-xs text-surface-muted mt-2">Adjust to reflect your organization. Illustrative only.</p>
        </div>
        <GrowthSimulator />
      </div></section>
      <section className="px-5 py-6"><div className="max-w-3xl mx-auto disclaimer-box text-center text-xs"><strong>Reminder:</strong> All figures are illustrative. No income is guaranteed.</div></section>
      <section className="py-12 px-5"><div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-xl font-medium tracking-tight mb-3">See a pathway for your organization?</h2>
        <p className="text-xs text-surface-muted mb-5">Qualified organizations may apply for consideration.</p>
        <a href="/apply/member-organization/" className="btn-gold">Submit Application for Review</a>
      </div></section>
    </>
  );
}
