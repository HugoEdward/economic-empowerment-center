export const metadata = { title: 'International Cultures Celebration — Where Culture Becomes Economic Opportunity' };

const AUDIENCES = [
  { tag:'Member Organizations', desc:'Year-round visibility, member engagement, and cultural showcase opportunities.' },
  { tag:'Entrepreneurs', desc:'Connection to organized cultural communities, organizations, and city activation partners.' },
  { tag:'Merchants', desc:'Exposure to organized multicultural audiences, visitors, and event participants.' },
  { tag:'Professionals', desc:'Engagement with cultural organizations, federations, and professional networks.' },
  { tag:'Chambers of Commerce', desc:'Cultural and economic integration of their member businesses into broader celebrations.' },
  { tag:'Sponsors', desc:'Brand visibility within organized cultural events, communities, and participating nations.' },
  { tag:'Cities', desc:'Tourism activation, hospitality engagement, and cultural showcase pathways.' },
  { tag:'Tourism Boards', desc:'Year-round cultural programming and Passport to the World destination participation.' },
  { tag:'Cultural Communities', desc:'Visibility, representation, and active participation in celebration programming.' },
  { tag:'Participating Nations', desc:'National pavilion participation and recognition within global cultural showcase.' },
  { tag:'Passport to the World participants', desc:'Travel, visitation, and cultural exchange pathways across participating nations.' },
  { tag:'1City.VIP participants', desc:'City-focused merchant, hospitality, and tourism activation aligned with celebration programming.' },
];

const FLOW = [
  { num:'01', label:'Organizations' },
  { num:'02', label:'Celebration Participation' },
  { num:'03', label:'Visibility' },
  { num:'04', label:'Member Engagement' },
  { num:'05', label:'Merchant Participation' },
  { num:'06', label:'City Activation' },
  { num:'07', label:'Economic Empowerment', final:true },
];

const ECOSYSTEM = [
  { name:'EconomicEmpowerment.Center', role:'Economic Empowerment system', href:'/', internal:true },
  { name:'CulturesCelebration.com', role:'Cultural participation and public engagement ecosystem', href:'https://culturescelebration.com', external:true, here:true },
  { name:'MundusPASS', role:'Benefits, participation, and transaction infrastructure', href:'https://munduspass.com', external:true },
  { name:'1City.VIP', role:'City business, tourism, merchant, and hospitality activation', href:'/city-venture-vip/', internal:true },
  { name:'Passport to the World', role:'Visitor participation and pavilion activation system', href:'https://culturescelebration.com', external:true },
];

export default function ICCPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-14 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
          <p className="section-label justify-center mb-4">International Cultures Celebration</p>
          <h1 className="font-display text-[2.4rem] md:text-[3.6rem] font-medium leading-[1.05] tracking-tight mb-5">
            Where culture becomes <em className="text-gold italic">economic opportunity.</em>
          </h1>
          <p className="text-base text-surface-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            International Cultures Celebration is one of the major activation engines of the
            Economic Empowerment ecosystem — not a one-time event, but a year-round ecosystem
            that creates opportunities for organizations, entrepreneurs, merchants, professionals,
            chambers, cities, sponsors, and participating nations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://culturescelebration.com" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Visit CulturesCelebration.com ↗
            </a>
            <a href="/apply/" className="btn-outline">Apply for Consideration</a>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM RELATIONSHIP */}
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">The Ecosystem</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Separate missions. <em className="text-gold italic">Connected purpose.</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              Each platform maintains its own mission. Together, they form an integrated pathway
              from cultural participation to economic empowerment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {ECOSYSTEM.map(e => (
              <div key={e.name} className={`bg-navy-800 border rounded-2xl p-5 ${e.here ? 'border-gold/30' : 'border-surface-border'} relative overflow-hidden`}>
                {e.here && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
                <div className="flex items-start justify-between mb-1.5">
                  <p className="font-mono text-xs text-gold">{e.name}</p>
                  {e.here && <span className="text-[8px] font-bold uppercase tracking-widest text-gold/80">You Are Here</span>}
                </div>
                <p className="text-[11px] text-surface-secondary leading-relaxed mb-3">{e.role}</p>
                {e.external ? (
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-[10px] text-gold no-underline hover:underline">Visit ↗</a>
                ) : (
                  <a href={e.href} className="text-[10px] text-gold no-underline hover:underline">View →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM RELATIONSHIP STATEMENT */}
      <section className="py-12 px-5">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-[9px] font-bold tracking-widest uppercase text-gold mb-2">Economic Empowerment</p>
            <p className="text-sm text-surface-secondary leading-relaxed italic">
              "Economic Empowerment provides the sustainability pathway for participating organizations,
              entrepreneurs, merchants, professionals, chambers, and city activation initiatives."
            </p>
          </div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-[9px] font-bold tracking-widest uppercase text-gold mb-2">International Cultures Celebration</p>
            <p className="text-sm text-surface-secondary leading-relaxed italic">
              "International Cultures Celebration provides the cultural, tourism, public participation,
              and city showcase environment where Economic Empowerment becomes visible."
            </p>
          </div>
        </div>
      </section>

      {/* FROM CULTURE TO OPPORTUNITY */}
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">From Culture to Opportunity</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              A pathway from <em className="text-gold italic">cultural participation</em> to economic empowerment.
            </h2>
            <p className="text-xs text-surface-muted">Illustrative example only. No income is guaranteed.</p>
          </div>

          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center justify-center gap-2 md:gap-1">
              {FLOW.map((s, i) => (
                <div key={s.num} className="flex items-center gap-2 md:gap-1">
                  <div className={`flex-1 md:flex-none rounded-lg border px-3 py-2.5 text-center ${s.final ? 'bg-gold/15 border-gold/30' : 'bg-navy-950 border-surface-border'}`}>
                    <p className="font-display text-[10px] text-gold/40 leading-none">{s.num}</p>
                    <p className={`text-[10px] font-medium mt-1 ${s.final ? 'text-gold' : 'text-surface-secondary'}`}>{s.label}</p>
                  </div>
                  {i < FLOW.length - 1 && (
                    <>
                      <span className="hidden md:inline text-gold/40 text-sm">→</span>
                      <span className="md:hidden text-gold/40 text-sm text-center w-full">↓</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10px] text-surface-muted text-center mt-5 max-w-2xl mx-auto">
            Participation may create opportunities for organizations, merchants, professionals, and communities.
            Outcomes depend on activation, participation, compliance, and program rules.
          </p>
        </div>
      </section>

      {/* OPPORTUNITIES BY AUDIENCE */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">Opportunities Created</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Year-round opportunities. <em className="text-gold italic">Twelve audiences.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {AUDIENCES.map(a => (
              <div key={a.tag} className="bg-navy-800 border border-surface-border rounded-xl p-4 hover:border-gold/20 transition-colors">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-1.5">{a.tag}</p>
                <p className="text-[11px] text-surface-secondary leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-PLATFORM CTA */}
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label justify-center">Two Platforms. One Pathway.</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-5">
            Move freely between <em className="text-gold italic">both ecosystems.</em>
          </h2>
          <p className="text-sm text-surface-secondary mb-7 max-w-2xl mx-auto">
            Apply for recognition on Economic Empowerment to begin building sustainability.
            Visit CulturesCelebration.com to participate in cultural programming, Passport to the World,
            and visitor activation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/apply/" className="btn-gold">Apply on Economic Empowerment</a>
            <a href="https://culturescelebration.com" target="_blank" rel="noopener noreferrer" className="btn-outline">Visit CulturesCelebration.com ↗</a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <a href="/city-venture-vip/" className="text-[10px] text-gold no-underline hover:underline">City Venture VIP →</a>
            <span className="text-surface-muted text-[10px]">·</span>
            <a href="/how-do-i-start-today/" className="text-[10px] text-gold no-underline hover:underline">How to Start →</a>
            <span className="text-surface-muted text-[10px]">·</span>
            <a href="/feasibility-and-roi/" className="text-[10px] text-gold no-underline hover:underline">Feasibility →</a>
          </div>
        </div>
      </section>
    </>
  );
}
