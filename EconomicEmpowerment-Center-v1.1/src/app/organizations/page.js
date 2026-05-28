export const metadata = {
  title: 'Organizations',
  description: 'Sustainable income for the organizations holding our communities together. Apply as a Member Organization.',
};

const BENEFITS = [
  'Recurring revenue from accredited merchant participation fees',
  'Transaction-based income from MundusPASS network purchases by affiliated members',
  'Individual membership dues from Development Members and Empowerment Members',
  'Sponsor participation revenue allocated to your organization',
  'Passport to the World destination participation income',
  'Celebration Participation revenue from connected cultural events',
  'Dedicated Development Officer to accredit merchants and engage members',
  'Dashboard access for real-time organizational activity visibility',
  'Federation backing and institutional credibility',
  'Training, onboarding, and operational support from the MUNDUS ecosystem',
  'Cross-promotion across the Economic Empowerment network',
  'Cooperative structure — your organization benefits from its own activity',
  'Multilingual, multicultural, globally inclusive participation structure',
];

const STEPS = [
  { num: '01', title: 'Apply', desc: 'Submit the Member Organization Application. Provide your legal documents, mission, programs, and contacts.' },
  { num: '02', title: 'Designate a Development Officer', desc: 'Your organization names an Accredited Economic Empowerment Development Officer to accredit merchants and engage members under your banner.' },
  { num: '03', title: 'Begin Accrediting and Engaging', desc: 'Your Development Officer identifies local merchants who serve your community. Accredited merchants participate with registration and monthly fees — generating recurring organizational income.' },
];

export default function OrganizationsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 to-navy-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">
          <p className="section-label">For Organizations</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6">
            Sustainable income for the organizations{' '}
            <em className="text-gold italic">holding our communities together</em>
          </h1>
          <p className="text-lg text-surface-secondary leading-relaxed mb-8">
            Member Organizations generate recurring revenue through merchant fees,
            member dues, sponsorships, transaction-supported participation, and Passport
            to the World — all in a closed-loop economy of cooperation, not competition.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/apply/member-organization/" className="btn-gold">Apply as a Member Organization</a>
            <a href="#benefits" className="btn-outline">See the Benefits</a>
          </div>
        </div>
      </section>

      {/* ── WHAT CHANGES ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">What Changes</p>
          <h2 className="font-display text-3xl font-medium tracking-tight mb-6">
            Stop chasing grants alone
          </h2>
          <p className="text-surface-secondary leading-relaxed">
            Start operating with recurring, predictable, transaction-based income from
            your community&rsquo;s own economic activity. When your members shop at
            merchants you&rsquo;ve helped accredit, fee shares flow back to your
            organization. This is organizational sustainability through community
            activation — not dependency on external funding cycles.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="section-label">How It Works</p>
            <h2 className="font-display text-3xl font-medium tracking-tight">
              Three steps to activation
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="card">
                <span className="font-display text-4xl text-gold/30 block mb-4">{s.num}</span>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-surface-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-20 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="section-label">What You Receive</p>
            <h2 className="font-display text-3xl font-medium tracking-tight">
              13 benefits of Member Organization participation
            </h2>
          </div>
          <div className="space-y-4">
            {BENEFITS.map((b, i) => (
              <div key={i} className="flex items-start gap-4 bg-navy-800/50 border border-surface-border rounded-xl px-6 py-4">
                <span className="w-6 h-6 rounded-full bg-gold-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-xs">✓</span>
                </span>
                <p className="text-sm text-surface-secondary leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COOPERATION ── */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">Cooperation, Not Competition</p>
          <h2 className="font-display text-3xl font-medium tracking-tight mb-6">
            Every organization benefits from its own activity
          </h2>
          <p className="text-surface-secondary leading-relaxed">
            Economic Empowerment is built on cooperation, not competition. Every Member
            Organization benefits from its own merchant accreditation activity. No Member
            Organization benefits from undermining another. The federation grows when we
            grow together.
          </p>
        </div>
      </section>

      {/* ── ROI TEASER ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">Illustrative Pathways</p>
          <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
            Pathways toward organizational sustainability
          </h2>
          {/* DISCLAIMER ABOVE NUMBERS */}
          <div className="disclaimer-box mb-8">
            <strong>No income is guaranteed.</strong> Results depend on approval, outreach,
            implementation, participation, members, merchants, sponsors, compliance,
            and program rules.
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {[
              { label: 'Emerging', amount: '$275K/yr' },
              { label: 'Growing', amount: '$550K/yr' },
              { label: 'Highly Activated', amount: '$950K+/yr' },
            ].map((p) => (
              <div key={p.label} className="card text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-surface-muted mb-2">{p.label}</p>
                <p className="font-display text-2xl text-gold">{p.amount}</p>
              </div>
            ))}
          </div>
          <a href="/feasibility-and-roi/" className="btn-outline mt-8 inline-flex">
            See Full Feasibility Details →
          </a>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
            Ready to apply?
          </h2>
          <p className="text-surface-secondary leading-relaxed mb-8">
            Submit your Member Organization Application. We review every application carefully.
            Next steps are communicated within 1–7 business days.
          </p>
          <a href="/apply/member-organization/" className="btn-gold">Apply as a Member Organization</a>
          <p className="text-xs text-surface-muted mt-6">
            Or email immigrantsalliance@gmail.com with subject
            &ldquo;Economic Empowerment — Member Organization Application&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
