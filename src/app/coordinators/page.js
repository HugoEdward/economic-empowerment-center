export const metadata = {
  title: 'Coordinators',
  description: 'Coordinate Economic Empowerment in your city, region, or country. Nine-tier hierarchy for global ecosystem activation.',
};

const TIERS = [
  { num: 1, title: 'International', scope: 'Global coordination across continents and the full Economic Empowerment ecosystem.' },
  { num: 2, title: 'Continental', scope: 'Multi-country coordination within a continental region (e.g., North America, Europe, Africa, Asia).' },
  { num: 3, title: 'National', scope: 'Country-level coordination — connecting state/provincial coordinators, national sponsors, and federation-level strategy.' },
  { num: 4, title: 'State / Province', scope: 'State or provincial coordination — supporting regional and city coordinators within the jurisdiction.' },
  { num: 5, title: 'Regional', scope: 'Multi-city or area coordination — bridging city-level activity across a metropolitan area or geographic zone.' },
  { num: 6, title: 'City', scope: 'City-level coordination — activating organizations, merchants, and members within a specific city.' },
  { num: 7, title: 'Community / District', scope: 'Neighborhood or district coordination — hyper-local activation within a defined community area.' },
  { num: 8, title: 'Organization', scope: 'Single-organization coordination — supporting a Member Organization\'s internal activation and engagement.' },
  { num: 9, title: 'Merchant / Professional', scope: 'Merchant or professional-level engagement — coordinating merchant participation within a trade or profession.' },
];

const RESPONSIBILITIES = [
  'Activate and support Member Organizations within your assigned scope',
  'Support Development Officers in merchant accreditation and member engagement',
  'Identify and engage merchants and members within your territory',
  'Represent the Economic Empowerment federation locally',
  'Report on ecosystem activity within your coordination scope',
  'Maintain compliance with the Code of Conduct and program rules',
  'Facilitate cooperation between organizations — never competition',
];

const DO_NOT = [
  'Recruit other Coordinators for personal compensation',
  'Operate as employees of any Member Organization',
  'Promise income, financial outcomes, or guaranteed results to anyone',
  'Represent coordinator compensation as fixed, guaranteed, or employment-based',
  'Use language associated with recruitment-based or pyramid compensation models',
];

export default function CoordinatorsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 to-navy-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">
          <p className="section-label">Coordinators</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6">
            Coordinate Economic Empowerment in your{' '}
            <em className="text-gold italic">city, region, or country</em>
          </h1>
          <p className="text-lg text-surface-secondary leading-relaxed mb-8">
            Coordinators activate Member Organizations, support Development Officers,
            engage merchants and members in their scope, and represent the federation
            locally — all through measurable ecosystem activity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#apply" className="btn-gold">Apply as Coordinator</a>
            <a href="#hierarchy" className="btn-outline">View Hierarchy</a>
          </div>
        </div>
      </section>

      {/* ── NINE-TIER HIERARCHY ── */}
      <section id="hierarchy" className="py-20 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="section-label">Operational Hierarchy</p>
            <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
              Nine-tier coordination structure
            </h2>
            <p className="text-surface-secondary leading-relaxed">
              From global to local — every level of the hierarchy supports the levels
              below it. Regional always operates above City. Coordination flows down;
              ecosystem activity flows up.
            </p>
          </div>
          <div className="space-y-3">
            {TIERS.map((t) => (
              <div
                key={t.num}
                className="flex items-start gap-4 bg-navy-800/60 border border-surface-border rounded-xl px-6 py-5 hover:border-gold/20 transition-colors"
                style={{ marginLeft: `${(t.num - 1) * 8}px` }}
              >
                <span className="font-display text-2xl text-gold/40 leading-none mt-0.5 flex-shrink-0 w-8">
                  {t.num}
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
                  <p className="text-sm text-surface-secondary leading-relaxed">{t.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITIES ── */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-label">Responsibilities</p>
              <h2 className="font-display text-2xl font-medium tracking-tight mb-6">
                What Coordinators do
              </h2>
              <ul className="space-y-3">
                {RESPONSIBILITIES.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-surface-secondary leading-relaxed">
                    <span className="text-gold mt-0.5 text-xs">●</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label">Boundaries</p>
              <h2 className="font-display text-2xl font-medium tracking-tight mb-6">
                What Coordinators do <span className="text-surface-muted">NOT</span> do
              </h2>
              <ul className="space-y-3">
                {DO_NOT.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-surface-secondary leading-relaxed">
                    <span className="text-red-400 mt-0.5 text-xs">✕</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT COORDINATORS RECEIVE ── */}
      <section className="py-20 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Participation</p>
          <h2 className="font-display text-3xl font-medium tracking-tight mb-6">
            What Coordinators receive
          </h2>

          {/* Compensation disclaimer — ABOVE any mention of compensation */}
          <div className="disclaimer-box mb-8">
            <strong>Coordinator compensation is variable, transaction-based, and not guaranteed.</strong>{' '}
            It depends on network activity, transaction volume, and program rules.
            Coordinators are not employees and are not promised any specific income.
          </div>

          <ul className="space-y-4">
            {[
              'Variable, transaction-based compensation from the coordinator-network share of ecosystem activity',
              'Recognition at Cultures Celebration events and federation gatherings',
              'Coordinator training, onboarding, and ongoing support',
              'Coordinator badge and official designation within the hierarchy',
              'Dashboard access for activity visibility within your coordination scope',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-surface-secondary leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-gold-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-[10px]">✓</span>
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── APPLY ── */}
      <section id="apply" className="py-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label justify-center">Apply or Nominate</p>
          <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
            Become a Coordinator
          </h2>
          <p className="text-surface-secondary leading-relaxed mb-8">
            Self-nominate or be nominated by a Member Organization or existing Coordinator.
            All applications are reviewed by the Economic Empowerment team.
          </p>
          <a
            href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Coordinator%20Application"
            className="btn-gold"
          >
            Apply as Coordinator
          </a>
          <p className="text-xs text-surface-muted mt-6">
            Email immigrantsalliance@gmail.com with subject
            &ldquo;Economic Empowerment — Coordinator Application&rdquo;
          </p>
          <p className="text-xs text-surface-muted mt-4 leading-relaxed max-w-lg mx-auto">
            Economic Empowerment welcomes all nations, territories, cultures, and
            communities. Country and culture fields accept free-text entry.
          </p>
        </div>
      </section>
    </>
  );
}
