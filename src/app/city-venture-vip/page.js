export const metadata = { title: 'City Venture VIP — 1City.VIP Activation' };

const STEPS = [
  { num:'01', title:'Apply for Consideration', desc:'Complete your Request for Recognition for the city you wish to activate.' },
  { num:'02', title:'Become Recognized', desc:'After review, you become eligible to begin city activation.' },
  { num:'03', title:'Activate the City', desc:'Your recognized entity becomes the activation anchor for the city.' },
  { num:'04', title:'Identify Merchants', desc:'Begin identifying local restaurants, retailers, service providers, and hospitality.' },
  { num:'05', title:'Identify Professionals', desc:'Identify lawyers, doctors, accountants, real-estate, and trusted professional services.' },
  { num:'06', title:'Build City Participation', desc:'Activate members, merchants, sponsors, events, and visitor pathways.' },
  { num:'07', title:'Start Earning $ustainable Income', desc:'Sustainable income depends on activation, participation, compliance, and program rules. No income is guaranteed.', final:true },
];

const ACTIVE_CITIES = [
  { name:'Kuala_Lumpur.1City.VIP', flag:'🇲🇾', country:'Malaysia', focus:'Cultural tourism, hospitality, restaurants' },
  { name:'Atlantic.1City.VIP', flag:'🇺🇸', country:'United States', focus:'Coastal hospitality, entertainment, tourism' },
  { name:'Newark.1City.VIP', flag:'🇺🇸', country:'United States', focus:'Urban professionals, community business' },
  { name:'Copacabana.VIP', flag:'🇧🇷', country:'Brazil', focus:'Beach hospitality, tourism, cultural events' },
];

export default function CityVentureVIPPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-12 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
          <p className="section-label justify-center mb-4">City Venture VIP</p>
          <h1 className="font-display text-[2.4rem] md:text-[3.4rem] font-medium leading-[1.05] tracking-tight mb-4">
            Activate <em className="text-gold italic">your city.</em>
          </h1>
          <p className="text-base text-surface-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            1City.VIP helps activate local restaurants, entertainment venues, hospitality providers, merchants,
            professionals, tourism organizations, and visitors through city-focused participation pathways.
          </p>
          <p className="text-[10px] text-gold tracking-widest uppercase">Official Economic Empowerment ecosystem asset</p>
        </div>
      </section>

      {/* CITY NOT YET IN 1CITY.VIP MESSAGE */}
      <section className="py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="text-center mb-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">If your city does not yet exist in 1City.VIP</p>
              <h2 className="font-display text-2xl md:text-3xl font-medium">A clear pathway awaits.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 7 STEPS */}
      <section className="py-6 px-5">
        <div className="max-w-4xl mx-auto space-y-3">
          {STEPS.map(s => (
            <div key={s.num} className={`bg-navy-800 border rounded-xl px-5 py-4 ${s.final ? 'border-gold/30' : 'border-surface-border'} relative overflow-hidden`}>
              {s.final && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
              <div className="grid grid-cols-[50px_1fr] gap-4 items-center">
                <p className="font-display text-2xl text-gold/40 leading-none">{s.num}</p>
                <div>
                  <h3 className="text-base font-medium mb-1">{s.title}</h3>
                  <p className="text-[12px] text-surface-secondary leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-surface-muted text-center mt-6 max-w-2xl mx-auto">
          City participation begins by organizing local participation and business activation.
          Income is illustrative only and depends on activation, participation, compliance, and program rules.
        </p>
      </section>

      {/* ACTIVE CITIES */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Currently Activating</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Cities <em className="text-gold italic">in motion.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ACTIVE_CITIES.map(c => (
              <div key={c.name} className="bg-navy-800 border border-surface-border rounded-xl p-4 hover:border-gold/30 transition-colors">
                <p className="text-3xl mb-2">{c.flag}</p>
                <p className="text-xs font-mono text-gold mb-1 break-all">{c.name}</p>
                <p className="text-[10px] text-surface-muted mb-2">{c.country}</p>
                <p className="text-[10px] text-surface-secondary leading-snug">{c.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Ready to activate your city?
          </h2>
          <p className="text-sm text-surface-secondary mb-6">
            Qualified entrepreneurs and organizations may apply for consideration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/apply/entrepreneur/" className="btn-gold">Entrepreneur Application</a>
            <a href="/apply/member-organization/" className="btn-outline">Organization Application</a>
          </div>
        </div>
      </section>
    </>
  );
}
