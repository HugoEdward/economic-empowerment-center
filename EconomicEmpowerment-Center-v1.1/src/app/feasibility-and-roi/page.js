export const metadata = {
  title: 'Feasibility & ROI',
  description: 'Illustrative pathways toward sustainable organizational income through Economic Empowerment.',
};

const PATHWAYS = [
  {
    tier: 'Emerging Organization',
    target: '$275,000',
    period: 'per year',
    items: [
      '1 active Development Officer',
      '10–20 accredited merchants',
      '100–300 individual members affiliated',
      'Modest sponsor relationships',
      'Initial Passport to the World participation',
    ],
  },
  {
    tier: 'Growing Federation',
    target: '$550,000',
    period: 'per year',
    items: [
      '3–5 active Development Officers',
      '50–100 accredited merchants',
      '500–1,500 individual members affiliated',
      'Several mid-tier sponsors',
      'Active Passport to the World destination participation',
      'Developing coordinator network',
    ],
  },
  {
    tier: 'Highly Activated National Federation',
    target: '$950,000+',
    period: 'per year',
    items: [
      '10+ active Development Officers + multiple chapters',
      '200+ accredited merchants',
      '3,000+ individual members affiliated',
      'Multiple Gold/Platinum sponsors',
      'Active coordinator network across geographies',
      'Major Cultures Celebration involvement',
    ],
  },
];

const STREAMS = [
  { icon: '👥', name: 'Membership Dues', desc: 'Development Members (free during pilot; standard value $120/yr) and Empowerment Members ($10/month) affiliated with your organization.' },
  { icon: '🏪', name: 'Merchant Participation Fees', desc: 'Registration and monthly participation fees from merchants accredited by your Development Officer.' },
  { icon: '🌍', name: 'Passport to the World', desc: 'Destination participation income from the global cultural engagement ecosystem.' },
  { icon: '🤝', name: 'Sponsor Participation', desc: 'Sponsor-allocated revenue supporting your organization and its programs.' },
  { icon: '💳', name: 'MundusPASS Transactions', desc: 'Transaction-supported participation when your affiliated members use the MundusPASS merchant-member network.' },
  { icon: '🎭', name: 'Celebration Participation', desc: 'Revenue from connected cultural events, showcases, and Celebration ecosystem engagement.' },
];

export default function FeasibilityPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 to-navy-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">
          <p className="section-label">Feasibility & ROI</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6">
            Pathways toward sustainable{' '}
            <em className="text-gold italic">organizational income</em>
          </h1>
          <p className="text-lg text-surface-secondary leading-relaxed">
            These pathways are illustrative — not guarantees. They show what activated
            Member Organizations can pursue when members, merchants, sponsors, and
            coordinators are engaged.
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER — ABOVE ALL NUMBERS ── */}
      <section className="px-5 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="disclaimer-box text-center">
            <strong>No income is guaranteed.</strong> Results depend on approval, outreach,
            implementation, participation, members, merchants, sponsors, compliance,
            and program rules.
          </div>
        </div>
      </section>

      {/* ── THREE PATHWAYS ── */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {PATHWAYS.map((p, i) => (
              <div
                key={p.tier}
                className={'card relative overflow-hidden' + (i === 2 ? ' border-gold/20' : '')}
              >
                {i === 2 && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}
                <p className="text-xs font-semibold tracking-widest uppercase text-surface-muted mb-4">{p.tier}</p>
                <p className="font-display text-4xl text-gold leading-tight mb-1">
                  {p.target}
                </p>
                <p className="text-sm text-surface-muted mb-6">{p.period}</p>
                <p className="text-xs font-semibold tracking-widest uppercase text-surface-muted mb-3">Activation profile</p>
                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-surface-secondary leading-relaxed">
                      <span className="text-gold text-xs mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX REVENUE STREAMS ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="section-label justify-center">Six Revenue Streams</p>
            <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
              Mapped to the six pillars
            </h2>
            <p className="text-surface-secondary leading-relaxed">
              Each pathway draws from multiple, diversified, transaction-supported
              revenue streams — not a single dependency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STREAMS.map((s) => (
              <div key={s.name} className="card">
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <h3 className="font-semibold mb-2">{s.name}</h3>
                <p className="text-sm text-surface-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY REQUIRES / DOES NOT REQUIRE ── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl font-medium mb-6">
              Sustainability <span className="text-gold">requires</span>
            </h3>
            <ul className="space-y-3">
              {[
                'Active engagement and consistent outreach',
                'Local trust and community relationships',
                'Operational capacity and dedicated staff or volunteers',
                'Brand consistency and compliance with program rules',
                'Patience — results build over time, not overnight',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-surface-secondary">
                  <span className="text-forest mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium mb-6">
              Sustainability does <span className="text-surface-muted">NOT</span> require
            </h3>
            <ul className="space-y-3">
              {[
                'Massive marketing budget',
                'Outside investment or fundraising',
                'Expensive consultants',
                'Replacement of existing programs',
                'Technical expertise — the platform handles the infrastructure',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-surface-secondary">
                  <span className="text-surface-muted mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── REPEATED DISCLAIMER ── */}
      <section className="px-5 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="disclaimer-box text-center">
            <strong>Reminder:</strong> All pathway figures are illustrative. No income
            is guaranteed. Actual results vary based on activation, participation, location,
            and program rules.
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
            See a pathway for your organization?
          </h2>
          <p className="text-surface-secondary leading-relaxed mb-8">
            Apply as a Member Organization to begin the conversation. Every application is
            reviewed carefully.
          </p>
          <a href="/apply/member-organization/" className="btn-gold">Apply as a Member Organization</a>
        </div>
      </section>
    </>
  );
}
