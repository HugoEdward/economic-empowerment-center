export const metadata = {
  title: 'Career Opportunities — Build Economic Opportunities Where You Live',
  description: 'Development Officer, Success Liaison, City Coordinator, State Coordinator, National Coordinator, Strategic Partner. Six-figure opportunity pathways through approved participation.',
  openGraph: {
    title: 'Career Opportunities — Economic Empowerment',
    description: 'Six-figure opportunity pathways. Build economic opportunities where you live.',
  },
};

const ROLES = [
  { role:'Development Officer', punch:'HELP ONE ORGANIZATION GROW.', desc:'Support one recognized organization in activating its members, planning events, and building sustainable participation.' },
  { role:'Success Liaison', punch:'HELP YOUR ORGANIZATION SUCCEED.', desc:'Designated representative for a recognized organization — operational success, retention, growth, and ecosystem coordination.' },
  { role:'City Coordinator', punch:'GROW YOUR CITY.', desc:'Activate your city through 1City.VIP — engage organizations, merchants, professionals, restaurants, hospitality, and tourism.' },
  { role:'State / Province Coordinator', punch:'EXPAND THE OPPORTUNITY.', desc:'Coordinate multiple cities across your state or province — federation, mentoring, and structured growth.', highlight:true },
  { role:'National Coordinator', punch:'OPEN NATIONAL DOORS.', desc:'Build national-level relationships, partnerships, federations, and country-wide activation pathways.' },
  { role:'Strategic Partner', punch:"LET'S STRENGTHEN TOGETHER.", desc:'Corporate, foundation, NGO, or government partner — engage entire ecosystems through structured collaboration.' },
];

export default function CareerOpportunitiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-14 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
          <p className="section-label justify-center mb-4">Career Opportunities</p>
          <h1 className="font-display text-[2.4rem] md:text-[3.6rem] font-medium leading-[1.05] tracking-tight mb-4">
            Build economic opportunities <em className="text-gold italic">where you live.</em>
          </h1>
          <p className="text-base text-surface-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            Six-Figure Opportunity Pathways through approved participation, performance, retention, and disciplined execution.
          </p>
          <div className="inline-flex items-center gap-2 bg-gold/[0.08] border border-gold/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <p className="text-[10px] font-bold tracking-widest uppercase text-gold">Six-Figure Opportunity Pathways</p>
          </div>
        </div>
      </section>

      {/* 6 ROLE CARDS */}
      <section className="py-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">Six Pathways</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Pick the role that fits <em className="text-gold italic">your community.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ROLES.map(r => (
              <div key={r.role} className={`bg-navy-800 rounded-2xl p-5 border relative overflow-hidden ${r.highlight ? 'border-gold/30' : 'border-surface-border'}`}>
                {r.highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">{r.role}</p>
                <h3 className="font-display text-base md:text-lg font-medium tracking-tight mb-3 text-surface-primary">{r.punch}</h3>
                <p className="text-[11px] text-surface-secondary leading-relaxed mb-3">{r.desc}</p>
                <a href="https://mundus.center/partners" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest uppercase text-gold no-underline hover:underline">SHOW ME →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MONEY MATTERS */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">Why This Matters</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Money is the tool that <em className="text-gold italic">keeps the mission alive.</em>
          </h2>
          <p className="text-sm text-surface-secondary leading-relaxed">
            Money allows organizations, churches, chambers, entrepreneurs, merchants, and communities to survive,
            grow, hire, serve, feed families, pay rent, pay staff, and fulfill their mission.
          </p>
        </div>
      </section>

      {/* MUNDUS.CENTER BOUNDARY */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Explore Partner Opportunities</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Managed through <em className="text-gold italic">Mundus.Center.</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              Detailed compensation, contracts, coordinator rankings, payout systems, and processor requirements
              are managed on Mundus.Center.
            </p>
          </div>

          <div className="bg-navy-800 border border-gold/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-5">
              {['Development Officer','Success Liaison','City Coordinator','State / Province Coordinator','National Coordinator','Strategic Partner'].map(r => (
                <a key={r} href="https://mundus.center/partners" target="_blank" rel="noopener noreferrer"
                  className="block bg-navy-950 border border-surface-border rounded-lg px-3 py-2.5 text-center no-underline hover:border-gold/30 transition-colors">
                  <p className="text-[11px] font-medium text-surface-secondary mb-1">{r}</p>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-gold/80">SHOW ME →</p>
                </a>
              ))}
            </div>
            <div className="text-center">
              <a href="https://mundus.center/partners" target="_blank" rel="noopener noreferrer" className="btn-gold">Visit Mundus.Center ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMERS — at bottom, not first impression */}
      <section className="py-10 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-800/50 border border-surface-border rounded-2xl p-5">
            <p className="text-[10px] font-bold tracking-widest uppercase text-surface-muted mb-3">Important Notes</p>
            <ul className="space-y-2 text-[11px] text-surface-secondary leading-relaxed">
              <li className="flex gap-2"><span className="text-gold/60">•</span>Six-figure annual results are achievable through performance, approved participation, retention, and disciplined execution.</li>
              <li className="flex gap-2"><span className="text-gold/60">•</span>No income is guaranteed. Outcomes depend on activation, participation, retention, compliance, and program rules.</li>
              <li className="flex gap-2"><span className="text-gold/60">•</span>All roles are subject to written agreement, compliance review, processor approval, performance standards, and legal/tax review.</li>
              <li className="flex gap-2"><span className="text-gold/60">•</span>Detailed compensation, contracts, coordinator rankings, payout systems, and processor requirements are managed on Mundus.Center.</li>
              <li className="flex gap-2"><span className="text-gold/60">•</span>Subject to Stripe, Adyen, MundusPASS, legal, tax, compliance, and underwriting approval.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
