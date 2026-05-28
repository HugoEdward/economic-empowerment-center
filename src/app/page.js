export const metadata = {
  title: 'Economic Empowerment — Sustainable Income for Community Organizations',
};

const PILLARS = [
  { icon: '👥', title: 'Members', desc: 'Individual Development Members and Empowerment Members who participate in and power the ecosystem.' },
  { icon: '🏪', title: 'Merchants & Professionals', desc: 'Local businesses and professionals who serve the community and participate in the closed-loop economy.' },
  { icon: '🌍', title: 'Passport to the World', desc: 'Cultural destination participation connecting communities to the global Cultures Celebration ecosystem.' },
  { icon: '🤝', title: 'Sponsors', desc: 'Organizations and businesses that support the ecosystem through sponsorship participation.' },
  { icon: '💳', title: 'MundusPASS Purchases', desc: 'Transaction-supported participation through the MundusPASS merchant-member network.' },
  { icon: '🎭', title: 'Celebration Participation', desc: 'Engagement through the International Cultures Celebration and connected cultural events.' },
];

const PATHWAYS = [
  { tier: 'Emerging Organization', target: '$275,000/year', items: ['1 active Development Officer', '10–20 accredited merchants', '100–300 affiliated members', 'Modest sponsor relationships'] },
  { tier: 'Growing Federation', target: '$550,000/year', items: ['3–5 active Development Officers', '50–100 accredited merchants', '500–1,500 affiliated members', 'Several mid-tier sponsors'] },
  { tier: 'Highly Activated National Federation', target: '$950,000+/year', items: ['10+ Development Officers + chapters', '200+ accredited merchants', '3,000+ affiliated members', 'Multiple Gold/Platinum sponsors'] },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-5 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold mb-6">
            Economic Empowerment &middot; S.E.E.D.
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight mb-6">
            Sustainable income for Member Organizations, merchants,{' '}
            <em className="text-gold italic">and members</em>
          </h1>
          <p className="text-lg text-surface-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            Through membership, merchant participation, sponsors, MundusPASS network
            purchases, and the international Cultures Celebration ecosystem — Economic
            Empowerment is the closed-loop economy of cultural and immigrant communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/apply/member-organization/" className="btn-gold">Become a Member Organization</a>
            <a href="/organizations/" className="btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS ── */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="section-label">Six Pillars</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Six pathways to organizational sustainability
            </h2>
            <p className="text-surface-secondary leading-relaxed">
              Through which your organization, your business, and your membership generate
              sustainable, transaction-based, cooperation-aligned participation in the
              federation ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="card group">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-surface-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSED-LOOP ECONOMY ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label justify-center">Closed-Loop Economy</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Value cycles. It doesn&rsquo;t drain away.
          </h2>
          <p className="text-surface-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            When members shop at merchants, merchants pay fees to organizations,
            organizations sustain programs that serve members. Every dollar cycles back
            into the federation that holds our communities together. This is cooperation,
            not extraction. This is closed-loop economy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            {['Members', 'Merchants', 'Organizations', 'Programs', 'Community'].map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-gold/80">
                {i > 0 && <span className="text-surface-muted">→</span>}
                <span className="bg-navy-800 border border-surface-border px-4 py-2 rounded-full">{item}</span>
              </span>
            ))}
            <span className="flex items-center gap-2 text-gold/80">
              <span className="text-surface-muted">→</span>
              <span className="bg-gold-dim border border-gold/20 px-4 py-2 rounded-full text-gold">Members ↩</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL MEMBERSHIP ── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="section-label justify-center">Individual Membership</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Two ways to participate
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-surface-muted mb-3">Free During Pilot</p>
              <h3 className="font-display text-2xl font-medium mb-2">Development Member</h3>
              <p className="text-surface-secondary text-sm leading-relaxed mb-4">
                Development Members participate through learning, public updates,
                educational access, community engagement, and selected participation
                opportunities.
              </p>
              <p className="text-xs text-surface-muted leading-relaxed mb-4 px-4">
                Standard value: $120 annually / $10 per month — currently offered free
                during pilot development.
              </p>
              <p className="text-3xl font-display text-gold mb-1">Free</p>
              <p className="text-xs text-surface-muted mb-4">during pilot period</p>
              <a href="#" className="btn-outline w-full">Join as Development Member</a>
            </div>
            <div className="card text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">Activated Membership</p>
              <h3 className="font-display text-2xl font-medium mb-2">Empowerment Member</h3>
              <p className="text-surface-secondary text-sm leading-relaxed mb-6">
                Empowerment Members contribute $10/month and receive expanded access to
                activated benefits, participating merchant opportunities, programs, events,
                and future MundusPASS-powered services, subject to availability and program rules.
              </p>
              <p className="text-3xl font-display text-gold mb-4">$10<span className="text-lg text-surface-muted">/month</span></p>
              <a href="#" className="btn-gold w-full">Join as Empowerment Member</a>
            </div>
          </div>
          <div className="disclaimer-box mt-6 text-center">
            Benefits are activated in phases and may vary by location, participating organization,
            merchant availability, program rules, and platform readiness.{' '}
            <strong>No financial outcome, discount availability, or specific benefit is guaranteed.</strong>
          </div>
          <p className="text-xs text-surface-muted text-center mt-4 leading-relaxed max-w-xl mx-auto">
            Development Member access is currently offered free during the pilot period.
            Standard value: $120 annually / $10 per month. Dues may be implemented later
            after benefits, platform systems, and payment infrastructure are fully activated.
          </p>
        </div>
      </section>

      {/* ── ROI PATHWAYS ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center max-w-2xl mx-auto">
            <p className="section-label justify-center">Illustrative Pathways</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Pathways toward sustainable organizational income
            </h2>
            <p className="text-surface-secondary leading-relaxed">
              Illustrative pathways for Emerging Organizations, Growing Federations,
              and Highly Activated National Federations.
            </p>
          </div>

          {/* ROI DISCLAIMER — ABOVE THE NUMBERS */}
          <div className="disclaimer-box text-center mb-10">
            <strong>No income is guaranteed.</strong> Results depend on approval, outreach,
            implementation, participation, members, merchants, sponsors, compliance,
            and program rules.
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PATHWAYS.map((p) => (
              <div key={p.tier} className="card text-center">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-surface-muted mb-3">{p.tier}</h3>
                <p className="font-display text-3xl text-gold mb-5">
                  Pathway toward<br />{p.target}
                </p>
                <ul className="text-sm text-surface-secondary space-y-2 text-left">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ── */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label justify-center">Federation Ecosystem</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Backed by a global ecosystem since 1976
          </h2>
          <p className="text-surface-secondary leading-relaxed max-w-2xl mx-auto mb-4">
            The Immigrants Alliance federation, founded 1976, holds United Nations ECOSOC
            Consultative Status since 1989, with participating organizations in 190+ countries.
          </p>
          <p className="text-sm text-surface-muted leading-relaxed max-w-2xl mx-auto">
            Economic Empowerment operates in partnership with participating organizations
            across the MUNDUS ecosystem, including Immigrants Alliance and the International
            Cultures Mission.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Ready to participate?
          </h2>
          <p className="text-surface-secondary leading-relaxed mb-8">
            Apply as a Member Organization. Become a Merchant. Join as an Individual Member.
            Coordinate in your city. Whatever your path, Economic Empowerment is built for
            cooperation, not competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/apply/member-organization/" className="btn-gold">Apply as Member Organization</a>
            <a href="/coordinators/" className="btn-outline">Become a Coordinator</a>
          </div>
          <p className="text-xs text-surface-muted mt-6">
            Questions? Email immigrantsalliance@gmail.com with subject
            &ldquo;Economic Empowerment — Inquiry&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
