export const metadata = {
  title: 'Career Opportunities — Six Pathways to Six-Figure Opportunities',
  description: 'Development Officer, Success Liaison, City Coordinator, State Coordinator, National Coordinator, Strategic Partner. Each pathway has an interactive simulator.',
};

const ROLES = [
  { slug:'development-officer', role:'Development Officer', punch:'HELP ONE ORGANIZATION GROW.', target:'$120,000+', desc:'Support one recognized organization in activating its members, planning events, and building sustainable participation.' },
  { slug:'success-liaison', role:'Success Liaison', punch:'HELP YOUR ORGANIZATION SUCCEED.', target:'$120,000+', desc:'Designated representative for recognized organizations — operational success, retention, growth, and ecosystem coordination.' },
  { slug:'city-coordinator', role:'City Coordinator', punch:'GROW YOUR CITY.', target:'$240,000+', desc:'Activate your city through 1City.VIP — engage organizations, merchants, professionals, restaurants, hospitality, tourism.' },
  { slug:'state-coordinator', role:'State / Province Coordinator', punch:'EXPAND THE OPPORTUNITY.', target:'$500,000+', desc:'Coordinate multiple cities across your state or province — federation, mentoring, structured growth.', highlight:true },
  { slug:'national-coordinator', role:'National Coordinator', punch:'OPEN NATIONAL DOORS.', target:'$1,000,000+', desc:'Build national-level relationships, partnerships, federations, and country-wide activation pathways.' },
  { slug:'strategic-partner', role:'Strategic Partner', punch:"LET'S STRENGTHEN TOGETHER.", target:'Partnership Tiers', desc:'Corporate, foundation, NGO, or government partner — engage entire ecosystems through structured collaboration.' },
];

export default function CareerOpportunitiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-12 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
          <p className="section-label justify-center mb-4">Career Opportunities</p>
          <h1 className="font-display text-[2.4rem] md:text-[3.6rem] font-medium leading-[1.05] tracking-tight mb-4">
            Build economic opportunities <em className="text-gold italic">where you live.</em>
          </h1>
          <p className="text-base text-surface-secondary leading-relaxed max-w-2xl mx-auto mb-5">
            Six pathways. Six interactive simulators. Pick the role that fits your community.
          </p>
          <p className="text-[10px] font-bold tracking-widest uppercase text-gold">
            ↓ Tap any role to launch its simulator ↓
          </p>
        </div>
      </section>

      {/* 6 ROLE CARDS - EACH LINKS TO ITS SIMULATOR */}
      <section className="py-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ROLES.map(r => (
              <a key={r.slug} href={'/career-opportunities/' + r.slug + '/'}
                className={'block bg-navy-800 rounded-2xl p-5 border relative overflow-hidden no-underline transition-all hover:translate-y-[-2px] ' + (r.highlight ? 'border-gold/30' : 'border-surface-border hover:border-gold/25')}>
                {r.highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">{r.role}</p>
                <h3 className="font-display text-base md:text-lg font-medium tracking-tight mb-2 text-surface-primary">{r.punch}</h3>
                <p className="font-display text-xl md:text-2xl text-gold mb-3">{r.target}</p>
                <p className="text-[11px] text-surface-secondary leading-relaxed mb-3">{r.desc}</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold">LAUNCH SIMULATOR →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MUNDUS.CENTER BOUNDARY */}
      <section className="py-12 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">After Recognition</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
            Confidential compensation details <em className="text-gold italic">activate after recognition.</em>
          </h2>
          <p className="text-sm text-surface-secondary mb-5 max-w-2xl mx-auto">
            Simulators on Economic Empowerment show illustrative ecosystem activity. Confidential
            contracts, coordinator rankings, payout systems, and processor requirements will be
            shared with recognized partners after the application and review process.
          </p>
          <a href="/apply/" className="btn-gold">Apply for Consideration</a>
        </div>
      </section>

      {/* DISCLAIMERS */}
      <section className="py-10 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-800/50 border border-surface-border rounded-2xl p-5">
            <p className="text-[10px] font-bold tracking-widest uppercase text-surface-muted mb-3">Important Notes</p>
            <ul className="space-y-2 text-[11px] text-surface-secondary leading-relaxed">
              <li className="flex gap-2"><span className="text-gold/60">•</span>All simulator outputs are illustrative. Actual outcomes depend on performance, retention, compliance, and program rules.</li>
              <li className="flex gap-2"><span className="text-gold/60">•</span>No income is guaranteed.</li>
              <li className="flex gap-2"><span className="text-gold/60">•</span>Subject to written agreement, compliance review, processor approval, performance standards, and legal/tax review.</li>
              <li className="flex gap-2"><span className="text-gold/60">•</span>Subject to Stripe, Adyen, MundusPASS, legal, tax, compliance, and underwriting approval.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
