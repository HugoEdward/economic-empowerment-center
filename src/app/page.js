import ParticipationMap from '@/components/ParticipationMap';
import ImpactMap from '@/components/ImpactMap';
import OpportunityTable from '@/components/OpportunityTable';
import GrowthSimulator from '@/components/GrowthSimulator';

export const metadata = { title: 'Economic Empowerment — Global Economic Ecosystem' };

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[92vh] flex items-center pt-16 pb-12 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.03] blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <p className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-5">Global Economic Ecosystem</p>
            <h1 className="font-display text-[2.4rem] md:text-[3.2rem] font-medium leading-[1.05] tracking-tight mb-5">
              The organizations exist.<br/>The businesses exist.<br/>The buying power <em className="text-gold italic">already exists.</em>
            </h1>
            <p className="text-base text-surface-secondary leading-relaxed mb-4 max-w-md">
              Economic Empowerment connects, activates, strengthens, and organizes what already exists — across 195+ countries and territories.
            </p>
            <p className="text-xs text-surface-muted mb-7 max-w-sm">Qualified organizations may apply for consideration.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/apply/" className="btn-gold">Apply for Consideration</a>
              <a href="#assets" className="btn-outline">See What You Already Have ↓</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 animate-fade-up-delay">
            <div className="bg-navy-800/70 border border-surface-border rounded-xl p-4 text-center">
              <p className="font-display text-3xl text-gold leading-none">195+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-surface-secondary mt-1.5">Countries & Territories</p>
            </div>
            <div className="bg-navy-800/70 border border-surface-border rounded-xl p-4 text-center">
              <p className="font-display text-lg text-gold leading-tight">Hundreds of<br/>Millions</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-surface-secondary mt-1.5">Members Already Organized</p>
            </div>
            <div className="bg-navy-800/70 border border-surface-border rounded-xl p-4 text-center">
              <p className="font-display text-2xl text-gold leading-none">Millions</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-surface-secondary mt-1.5">Businesses Already Operating</p>
            </div>
            <div className="bg-gold/[0.08] border border-gold/20 rounded-xl p-4 text-center">
              <p className="font-display text-sm text-gold leading-tight">Economic<br/>Empowerment</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-surface-secondary mt-1.5">Shared Economic Ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ YOUR ORG ALREADY HAS ASSETS ═══════ */}
      <section id="assets" className="py-14 px-5 bg-navy-900 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">What You Already Have</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2">
              Your organization already has <em className="text-gold italic">valuable assets</em>
            </h2>
            <p className="text-xs text-surface-muted">Economic Empowerment does not create these. It activates them.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-10">
            {[
              { icon:'👥', a:'Members' },{ icon:'🤝', a:'Trust' },{ icon:'🔗', a:'Relationships' },
              { icon:'👁️', a:'Local Visibility' },{ icon:'🎭', a:'Culture & Identity' },
              { icon:'🧠', a:'Community Knowledge' },{ icon:'📅', a:'Events' },{ icon:'👔', a:'Leadership' },
              { icon:'💳', a:'Buying Activity' },{ icon:'🙋', a:'Volunteers' },
            ].map(c => (
              <div key={c.a} className="bg-navy-800 border border-surface-border rounded-xl p-3 text-center">
                <span className="text-lg block mb-1">{c.icon}</span>
                <p className="text-[10px] font-semibold text-surface-secondary">{c.a}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6"><span className="text-gold/40 text-2xl">↓</span></div>
          <div className="text-center mb-6">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Economic Empowerment helps convert these into</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {['Participation','Member Engagement','Merchant Connection','Org Visibility','Sustainability Pathways','Development Officer Feasibility','Community Impact'].map(r => (
              <div key={r} className="bg-gold/[0.06] border border-gold/15 rounded-lg px-3 py-2.5 text-center">
                <p className="text-[10px] font-semibold text-gold">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ASSET ACTIVATION FLOW ═══════ */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-medium tracking-tight mb-10 text-center">
            From existing assets to <em className="text-gold italic">shared value</em>
          </h2>
          {[
            { stage:'Existing Assets', desc:'Members, trust, relationships, visibility, culture, events, buying activity, leadership, volunteers — already present.', color:'border-surface-border', bg:'bg-navy-800', dot:'bg-surface-muted', num:'1' },
            { stage:'Economic Empowerment Platform', desc:'Connects, organizes, and activates assets across participants. Infrastructure, tools, visibility, federation backing.', color:'border-gold/20', bg:'bg-navy-800', dot:'bg-gold/50', num:'2' },
            { stage:'Activated Participation', desc:'Dues flowing. Merchants accredited. Members engaged. Sponsors connected. Development Officers operating.', color:'border-gold/40', bg:'bg-navy-800', dot:'bg-gold/70', num:'3' },
            { stage:'Shared Ecosystem Value', desc:'Every organization, merchant, member, and sponsor creates value for each other. The ecosystem is stronger because you participate.', color:'border-gold', bg:'bg-gold/[0.06]', dot:'bg-gold', num:'4' },
          ].map((s,i) => (
            <div key={s.stage}>
              <div className={`${s.bg} border ${s.color} rounded-2xl p-5 flex items-center gap-5`}>
                <div className={`w-10 h-10 ${s.dot} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-navy-950 font-bold text-sm">{s.num}</span>
                </div>
                <div>
                  <p className={`font-semibold text-sm ${i===3?'text-gold':''}`}>{s.stage}</p>
                  <p className="text-[11px] text-surface-muted mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < 3 && <div className="flex justify-center py-1.5"><div className="w-px h-6 bg-gold/20" /></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ THE EE ECOSYSTEM — ONE PARTICIPATION → MANY BENEFITS ═══════ */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label justify-center">The Economic Empowerment Ecosystem</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2">
            One qualified participant creates value <em className="text-gold italic">across the entire ecosystem</em>
          </h2>
          <p className="text-xs text-surface-muted mb-8">When a Member Organization participates, benefits cascade to everyone</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2.5 max-w-3xl mx-auto">
            {[
              { icon:'👥', who:'Members', what:'gain opportunities' },
              { icon:'🏪', who:'Merchants', what:'gain customers' },
              { icon:'🏛️', who:'Chambers', what:'gain engagement' },
              { icon:'🤝', who:'Sponsors', what:'gain visibility' },
              { icon:'🏘️', who:'Communities', what:'gain activity' },
              { icon:'🔗', who:'Other Orgs', what:'gain connections' },
              { icon:'🚀', who:'Entrepreneurs', what:'gain pathways' },
              { icon:'🎯', who:'Dev Officers', what:'gain a mission' },
              { icon:'⚡', who:'Ecosystem', what:'gains strength' },
            ].map(b => (
              <div key={b.who} className={`rounded-xl p-3 text-center border ${b.who==='Ecosystem'?'bg-gold/[0.08] border-gold/25 col-span-3 md:col-span-1':'bg-navy-800 border-surface-border'}`}>
                <span className="text-lg block">{b.icon}</span>
                <p className="text-[10px] font-semibold mt-1">{b.who}</p>
                <p className={`text-[9px] mt-0.5 ${b.who==='Ecosystem'?'text-gold':'text-surface-muted'}`}>{b.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHO BENEFITS — IMPACT MAP ═══════ */}
      <section className="py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Participation Impact</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2">
              Who benefits when your organization <em className="text-gold italic">participates?</em>
            </h2>
            <p className="text-xs text-surface-muted">Select any participant to see how they benefit</p>
          </div>
          <ImpactMap />
        </div>
      </section>

      {/* ═══════ WHERE DO YOU FIT? ═══════ */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Ecosystem Participation</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2">Where do <em className="text-gold italic">you</em> fit?</h2>
            <p className="text-xs text-surface-muted">Select your role to see what you contribute, receive, and why it matters</p>
          </div>
          <ParticipationMap />
        </div>
      </section>

      {/* ═══════ WHAT BECOMES POSSIBLE? ═══════ */}
      <section className="py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">What Becomes Possible</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Because organizations participate <em className="text-gold italic">together</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon:'👥', r:'Members stay active', d:'Benefits give members a reason to stay.' },
              { icon:'💰', r:'Dues become organized', d:'Automated, predictable, recurring.' },
              { icon:'🏪', r:'Merchants gain visibility', d:'Accredited businesses serve real communities.' },
              { icon:'🏛️', r:'Chambers activate value', d:'Member businesses gain participation pathways.' },
              { icon:'🤝', r:'Sponsors reach communities', d:'Measurable impact with organized populations.' },
              { icon:'📅', r:'Events grow stronger', d:'Federation-scale celebration and engagement.' },
              { icon:'🎯', r:'Dev Officers become feasible', d:'Sustainability justifies dedicated activation.' },
              { icon:'🏘️', r:'Communities gain strength', d:'Economic activity stays local and connected.' },
            ].map(c => (
              <div key={c.r} className="bg-navy-800 border border-surface-border rounded-xl p-4 hover:border-gold/20 transition-colors">
                <span className="text-lg block mb-2">{c.icon}</span>
                <p className="text-xs font-semibold mb-1">{c.r}</p>
                <p className="text-[10px] text-surface-muted leading-snug">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OPPORTUNITY DASHBOARD ═══════ */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Global Opportunity</p>
            <h2 className="font-display text-3xl font-medium tracking-tight mb-2">The scale <em className="text-gold italic">already exists</em></h2>
            <p className="text-xs text-surface-muted">Organizations, businesses, members, and buying power already exist. Economic Empowerment helps connect, strengthen, and activate them.</p>
          </div>
          <OpportunityTable />
        </div>
      </section>

      {/* ═══════ ECOSYSTEM STRENGTH ═══════ */}
      <section className="py-14 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl font-medium tracking-tight mb-3">The ecosystem grows <em className="text-gold italic">stronger</em> with every participant</h2>
          <p className="text-xs text-surface-muted mb-8">More connections. More participation. More opportunities. More visibility.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { n:'1', l:'Organization', items:['Local connections','Limited visibility','Few merchant relationships','Basic participation'], cl:'border-surface-border' },
              { n:'10', l:'Organizations', items:['Regional connections','Shared visibility','Cross-org merchant access','Growing participation'], cl:'border-gold/15' },
              { n:'100', l:'Organizations', items:['National connections','Federation visibility','Merchant ecosystem','Strong participation'], cl:'border-gold/30' },
              { n:'1,000+', l:'Organizations', items:['Global connections','International visibility','Massive merchant network','Full ecosystem participation'], cl:'border-gold' },
            ].map(s => (
              <div key={s.n} className={`bg-navy-800 border ${s.cl} rounded-2xl p-5 text-center`}>
                <p className="font-display text-3xl text-gold leading-none">{s.n}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-surface-muted mt-1 mb-3">{s.l}</p>
                {s.items.map(i => <p key={i} className="text-[10px] text-surface-secondary py-0.5">{i}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SIMULATOR ═══════ */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Sustainability Simulator</p>
            <h2 className="font-display text-2xl font-medium tracking-tight">Disconnected vs. <em className="text-gold italic">Activated</em></h2>
            <p className="text-xs text-surface-muted mt-2">Illustrative only. Adjust to reflect your organization.</p>
          </div>
          <GrowthSimulator />
        </div>
      </section>

      {/* ═══════ ORG TYPES ═══════ */}
      <section className="py-10 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-xl font-medium tracking-tight mb-2">Qualified organizations across every sector</h2>
          <div className="flex flex-wrap justify-center gap-1.5 mt-4">
            {['Socio-Cultural','Religious','Educational','Youth','Health','Clinics','Hospitals','Maternity Centers','Professional Associations','Chambers of Commerce','Foundations','Nonprofits','Clubs','Associations','Diaspora Organizations','Indigenous Nations','Immigrant Organizations'].map(t => (
              <span key={t} className="bg-navy-800 border border-surface-border rounded-full px-3 py-1 text-[10px] text-surface-secondary">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ APPLICATIONS ═══════ */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-medium tracking-tight">Apply for Consideration</h2>
            <p className="text-xs text-surface-muted mt-1">Participation is earned through qualification, review, and approval.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon:'🏢', t:'Member Organization', d:'National, regional, or local organizations', href:'/apply/member-organization/', primary:true },
              { icon:'🚀', t:'Entrepreneur / Participant', d:'Individual professionals and entrepreneurs', href:'/apply/entrepreneur/' },
              { icon:'🏪', t:'Merchant / Professional', d:'Businesses and professional practices', href:'/apply/merchant/' },
              { icon:'🏛️', t:'Chamber / Association', d:'Chambers and business associations', href:'/apply/chamber/' },
              { icon:'🤝', t:'Strategic Partner / Sponsor', d:'Organizational sponsors and partners', href:'/apply/sponsor/' },
              { icon:'🌐', t:'Mundus.Center Partners', d:'Liaison and Coordinator opportunities', href:'https://mundus.center/partners', ext:true },
            ].map(c => (
              <a key={c.t} href={c.href} target={c.ext?'_blank':undefined} rel={c.ext?'noopener noreferrer':undefined}
                 className={`flex items-center gap-3 rounded-xl px-4 py-3 no-underline transition-all border ${c.primary?'bg-gold/10 border-gold/25 hover:bg-gold/15':c.ext?'bg-navy-800 border-gold/15 hover:border-gold/30':'bg-navy-800 border-surface-border hover:border-gold/20'}`}>
                <span className="text-xl">{c.icon}</span>
                <div>
                  <p className={`text-sm font-semibold ${c.primary?'text-gold':''}`}>{c.t}</p>
                  <p className="text-[10px] text-surface-muted">{c.d}{c.ext?' ↗':''}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FINAL ═══════ */}
      <section className="py-12 px-5">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-xl font-medium tracking-tight mb-2">Your organization already has value.</h2>
          <p className="text-surface-muted text-sm mb-5">Economic Empowerment helps activate it.</p>
          <a href="/apply/" className="btn-gold">Begin the Application Process</a>
        </div>
      </section>
    </>
  );
}
