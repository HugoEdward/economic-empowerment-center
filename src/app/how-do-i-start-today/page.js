export const metadata = { title: 'How Do I Start Today? — It Is Easy!' };

const STEPS = [
  { num:'01', title:'Request Recognition', icon:'📝', flow:['Application','Documentation','Review','Recognition Decision'],
    msg:'Complete your Request for Recognition Application and upload the required supporting documentation.' },
  { num:'02', title:'Recognition Approval', icon:'✓', flow:['Application Approved','Organization Activated'],
    msg:'After review and approval, your organization becomes eligible to begin activation activities within the Economic Empowerment ecosystem.' },
  { num:'03', title:'Activate Your Organization', icon:'🏢', flow:['Organization','Administrator','Development Officer','Member Activation'],
    msg:'Prepare your organization profile, designate responsible leadership, and begin activation planning.' },
  { num:'04', title:'Activate Members', icon:'👥', flow:['Members','Secure Member Portal','Participation','Membership Dues'],
    msg:'Invite and activate members through the secure portal so participation and membership management can begin.' },
  { num:'05', title:'Identify Merchants & Professionals', icon:'🔍', flow:['Community Businesses','Prospects','Outreach','Participation'],
    msg:'Identify merchants, professionals, restaurants, service providers, and community businesses that may benefit from participation.' },
  { num:'06', title:'Assist Merchant Registration', icon:'🏪', flow:['Merchant','Application','Documentation','Approval'],
    msg:'Assist interested merchants and professionals in completing their online applications. All registration and recurring dues are processed electronically. No cash. No checks.' },
  { num:'07', title:'Build a Stronger Ecosystem', icon:'🌐', flow:['Members','Organizations','Merchants','Sponsors','Events','MundusPASS'],
    msg:'As participation grows, organizations strengthen relationships, visibility, engagement, and long-term sustainability.', final:true },
];

const CITIES = [
  { name:'Kuala_Lumpur.1City.VIP', flag:'🇲🇾', focus:'Cultural tourism, hospitality, restaurants' },
  { name:'Atlantic.1City.VIP', flag:'🇺🇸', focus:'Coastal hospitality, entertainment, tourism' },
  { name:'Newark.1City.VIP', flag:'🇺🇸', focus:'Urban professionals, community business' },
  { name:'Copacabana.VIP', flag:'🇧🇷', focus:'Beach hospitality, tourism, cultural events' },
];

export default function HowToStartPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-12 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
          <p className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-4">Activation Roadmap</p>
          <h1 className="font-display text-[2.4rem] md:text-[3.4rem] font-medium leading-[1.05] tracking-tight mb-4">
            How do I start today? <em className="text-gold italic">It is easy.</em>
          </h1>
          <p className="text-base text-surface-secondary leading-relaxed max-w-2xl mx-auto">
            A practical roadmap for organizations seeking to build sustainable participation, activate members,
            engage merchants, and strengthen their communities.
          </p>
        </div>
      </section>

      {/* 7 STEPS */}
      <section className="py-8 px-5">
        <div className="max-w-4xl mx-auto space-y-4">
          {STEPS.map((s, i) => (
            <div key={s.num} className={`bg-navy-800 border rounded-2xl p-6 ${s.final ? 'border-gold/30' : 'border-surface-border'} relative overflow-hidden`}>
              {s.final && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
              <div className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
                {/* Step number */}
                <div className="text-center">
                  <p className="font-display text-3xl text-gold/40 leading-none">{s.num}</p>
                  <span className="text-3xl block mt-2">{s.icon}</span>
                </div>
                {/* Content */}
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-medium mb-3">{s.title}</h2>
                  {/* Flow */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {s.flow.map((f, j) => (
                      <span key={j} className="flex items-center gap-1.5">
                        {j > 0 && <span className="text-gold/30 text-xs">→</span>}
                        <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${s.final ? 'bg-gold/10 border-gold/20 text-gold' : 'bg-navy-950 border-surface-border text-surface-secondary'}`}>{f}</span>
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-surface-secondary leading-relaxed">{s.msg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY SECTION */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Illustrative Sustainability</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              A pathway toward greater <em className="text-gold italic">organizational sustainability</em>
            </h2>
          </div>

          <div className="disclaimer-box mb-8 text-xs text-center">
            <strong>No income is guaranteed.</strong> Examples below are illustrative only. Subject to implementation,
            participation levels, member activity, merchant participation, processor approval, compliance review,
            and other factors.
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tier:'Illustrative Example', label:'Emerging Organization', items:['Initial members','Few merchants','Modest engagement','Activation starting'] },
              { tier:'Illustrative Sustainability Scenario', label:'Growing Federation', items:['Active members','Merchant network','Multiple sponsors','Operating Development Officer'], highlight:true },
              { tier:'Illustrative Organizational Growth Model', label:'Highly Activated', items:['Hundreds–thousands of members','Strong merchant participation','Multiple sponsors','Active coordinator network'] },
            ].map(p => (
              <div key={p.label} className={`card text-center relative overflow-hidden ${p.highlight ? 'border-gold/30' : ''}`}>
                {p.highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
                <p className="text-[9px] font-bold uppercase tracking-widest text-gold mb-1">{p.tier}</p>
                <p className="text-xs text-surface-muted mb-4">{p.label}</p>
                <ul className="text-left space-y-1.5">
                  {p.items.map(i => <li key={i} className="text-[11px] text-surface-secondary flex items-start gap-2"><span className="text-gold text-[7px] mt-1">●</span>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-surface-muted text-center mt-6">
            All examples are illustrative. Outcomes depend on activation, participation, compliance, and program rules.
          </p>
        </div>
      </section>

      {/* CITY VENTURE VIP */}
      <section className="py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">City Venture VIP</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Featuring <em className="text-gold italic">1City.VIP</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              City Venture VIP helps activate local restaurants, entertainment venues, hospitality providers,
              merchants, professionals, tourism organizations, and visitors through city-focused participation pathways.
            </p>
            <p className="text-[10px] text-gold mt-2">Official Economic Empowerment ecosystem asset</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CITIES.map(c => (
              <div key={c.name} className="bg-navy-800 border border-surface-border rounded-xl p-4 hover:border-gold/30 transition-colors">
                <p className="text-2xl mb-2">{c.flag}</p>
                <p className="text-xs font-mono text-gold mb-2 break-all">{c.name}</p>
                <p className="text-[10px] text-surface-muted leading-snug">{c.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            You understand the path. <em className="text-gold italic">Apply now.</em>
          </h2>
          <p className="text-sm text-surface-secondary mb-6">
            Qualified organizations may apply for consideration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/apply/" className="btn-gold">Apply for Consideration</a>
            <a href="/feasibility-and-roi/" className="btn-outline">Review Feasibility</a>
          </div>
        </div>
      </section>
    </>
  );
}
