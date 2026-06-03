import OpportunityTable from '@/components/OpportunityTable';
import FounderTrustBlock from '@/components/FounderTrustBlock';

export const metadata = {
  title: 'Economic Empowerment Center — We help people, organizations, and cities grow stronger together',
  description: 'Choose what you want to do. We help organizations stay strong, businesses grow, communities thrive, cities expand, and cultures connect.',
  openGraph: {
    title: 'Economic Empowerment Center',
    description: 'We help people, organizations, and cities grow stronger — together.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      {/* HERO — 5-second comprehension */}
      <section className="relative pt-24 pb-10 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-up">
          <h1 className="font-display text-[2.2rem] md:text-[3.4rem] font-medium leading-[1.08] tracking-tight mb-5 max-w-4xl mx-auto">
            We help people, organizations, and cities <em className="text-gold italic">grow stronger — together.</em>
          </h1>
          <p className="text-base md:text-lg text-surface-secondary">
            Choose what you want to do.
          </p>
        </div>
      </section>

      {/* FIVE BIG CARDS — primary navigation */}
      <section className="pb-12 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-3 animate-fade-up-delay">
          <BigCard icon="🏠" title="ORGANIZATIONS" promise="We help your organization stay strong."
            examples={['Churches','Clubs','NGOs','Associations','Cultural Organizations','Chambers']}
            cta="SHOW ME HOW" href="/for-organizations/" />
          <BigCard icon="🛍️" title="BUSINESSES" promise="We help your business grow."
            examples={['Entrepreneurs','Merchants','Professionals','Restaurants','Service Providers']}
            cta="SHOW ME HOW" href="/for-merchants/" />
          <BigCard icon="🌉" title="CONNECTORS" promise="We help people find opportunities."
            examples={['Success Liaisons','Coordinators','Federations','Business Associations','Chambers']}
            cta="SHOW ME HOW" href="/career-opportunities/" highlight />
          <BigCard icon="🌎" title="CULTURES" promise="Experience the world."
            examples={['Passport to the World','International Cultures Celebration','Parade','Conference']}
            cta="EXPLORE" href="/international-cultures-celebration/" />
          <BigCard icon="🤝" title="COMMUNITIES" promise="Building stronger communities."
            examples={['Immigrants Alliance','Advocacy','Unity','Representation']}
            cta="JOIN US" href="https://immigrantsalliance.org" external />
        </div>
      </section>

      {/* THE BRIDGE */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-9">
            <p className="section-label justify-center mb-3">How It Connects</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              We are the bridge that <em className="text-gold italic">connects everyone.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto mb-2">
            <BridgePartner name="Cultures Celebration" tag="The World Comes Together" />
            <BridgePartner name="Immigrants Alliance" tag="Communities United" />
          </div>

          <div className="relative max-w-3xl mx-auto h-12 mb-2 flex items-center" aria-hidden>
            <div className="absolute inset-x-[16%] top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10" />
            <div className="absolute left-[16%] top-1/2 -translate-y-1/2 w-px h-6 bg-gold/30" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-6 bg-gold/30" />
            <div className="absolute right-[16%] top-1/2 -translate-y-1/2 w-px h-6 bg-gold/30" />
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
            <BridgePillar label="Organizations" sub="need support" href="/for-organizations/" />
            <BridgePillar label="Connectors" sub="bring people together" href="/career-opportunities/" center />
            <BridgePillar label="Businesses" sub="offer value" href="/for-merchants/" />
          </div>

          <div className="max-w-2xl mx-auto mt-9 space-y-1.5 text-center">
            <p className="text-[13px] text-surface-secondary">Organizations need support.</p>
            <p className="text-[13px] text-surface-secondary">Businesses offer value.</p>
            <p className="text-[13px] text-surface-secondary">Connectors bring people together.</p>
            <p className="text-[14px] text-surface-primary font-medium mt-3">Economic Empowerment Center helps everyone grow.</p>
          </div>

          <div className="text-center mt-8">
            <a href="/organizational-needs-assessment/" className="text-[11px] text-gold no-underline hover:underline">
              ↪ Not sure where to start? Take the 60-second Needs Assessment →
            </a>
          </div>
        </div>
      </section>

      {/* Below the fold — existing content moved lower, NOT deleted */}
      <FounderTrustBlock />

      <section id="audiences" className="py-14 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">More Detail · By Audience</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Which one are you?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Audience tag="Entrepreneurs" punch="New opportunity in your city." href="/for-entrepreneurs/" />
            <Audience tag="Member Organizations" punch="Keep your mission alive." href="/for-organizations/" highlight />
            <Audience tag="Churches / Faith Organizations" punch="Strengthen your church." href="/for-churches/" />
            <Audience tag="Chambers" punch="New value for members." href="/for-chambers/" />
            <Audience tag="Merchants / Professionals" punch="Reach new customers." href="/for-merchants/" />
            <Audience tag="Sponsors / Strategic Partners" punch="Real impact. Real communities." href="/for-sponsors/" />
            <Audience tag="Cities / 1City.VIP" punch="Grow your city." href="/city-venture-vip/" />
            <Audience tag="International Cultures Celebration" punch="Turn culture into opportunity." href="/international-cultures-celebration/" />
            <Audience tag="Passport to the World" punch="Travel around the world." href="/passport-to-the-world/" />
          </div>
        </div>
      </section>

      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label justify-center">Career Opportunities</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
            Help your city <em className="text-gold italic">grow stronger.</em>
          </h2>
          <p className="text-sm text-surface-secondary max-w-2xl mx-auto mb-5">
            Six paths to build a career while strengthening organizations and businesses in your community.
          </p>
          <a href="/career-opportunities/" className="btn-gold">See the Six Paths →</a>
        </div>
      </section>

      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label justify-center">Cities</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
            Activate <em className="text-gold italic">your city.</em>
          </h2>
          <p className="text-sm text-surface-secondary max-w-2xl mx-auto mb-5">
            A clear seven-step pathway to grow your city.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Kuala_Lumpur.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Atlantic.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Newark.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Copacabana.VIP</span>
          </div>
          <a href="/city-venture-vip/" className="btn-gold">Show Me How →</a>
        </div>
      </section>

      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">The Three Platforms</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Three platforms. <em className="text-gold italic">One ecosystem.</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              Identity, culture, and sustainability — together.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            <EcoCard tag="You Are Here" name="EconomicEmpowerment.Center" desc="We help everyone grow." href="/" here />
            <EcoCard tag="Cultural Engine" name="CulturesCelebration.com" desc="The world comes together." href="https://culturescelebration.com" external />
            <EcoCard tag="Federation" name="ImmigrantsAlliance.org" desc="Communities united." href="https://immigrantsalliance.org" external />
          </div>
          <div className="text-center">
            <a href="/three-platforms/" className="text-[11px] text-gold no-underline hover:underline">See How The Three Platforms Work Together →</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">More Detail · Opportunity Dashboard</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              The opportunities <em className="text-gold italic">already near you.</em>
            </h2>
          </div>
          <OpportunityTable />
        </div>
      </section>

      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">Apply for Consideration</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Ready to start? <em className="text-gold italic">Your move.</em>
          </h2>
          <a href="/apply/" className="btn-gold">View All Application Types</a>
        </div>
      </section>
    </>
  );
}

function BigCard({ icon, title, promise, examples, cta, href, highlight, external }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} {...externalProps} className={`group block rounded-2xl p-5 no-underline transition-all hover:-translate-y-0.5 ${highlight ? 'bg-gold/[0.06] border-2 border-gold/40 hover:border-gold' : 'bg-navy-800 border border-surface-border hover:border-gold/40'}`}>
      <div className="text-3xl mb-3" aria-hidden>{icon}</div>
      <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${highlight ? 'text-gold' : 'text-gold/80'}`}>{title}</p>
      <p className="text-[14px] font-medium text-surface-primary leading-snug mb-4">{promise}</p>
      <ul className="space-y-0.5 mb-5">
        {examples.map(ex => <li key={ex} className="text-[11px] text-surface-secondary leading-snug">{ex}</li>)}
      </ul>
      <p className={`text-[10px] font-bold tracking-[0.15em] uppercase ${highlight ? 'text-gold' : 'text-gold'} flex items-center gap-1`}>
        {cta} <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </p>
    </a>
  );
}

function BridgePartner({ name, tag }) {
  return (
    <div className="bg-navy-800 border border-gold/15 rounded-xl px-4 py-2.5 text-center">
      <p className="text-[9px] font-bold tracking-widest uppercase text-gold/70 mb-0.5">{tag}</p>
      <p className="text-[12px] text-surface-primary font-medium">{name}</p>
    </div>
  );
}

function BridgePillar({ label, sub, href, center }) {
  return (
    <a href={href} className={`block text-center rounded-2xl py-5 px-3 no-underline transition-colors ${center ? 'bg-gold/[0.06] border-2 border-gold/40 hover:border-gold' : 'bg-navy-800 border border-surface-border hover:border-gold/30'}`}>
      <p className={`font-display text-base md:text-lg font-medium mb-0.5 ${center ? 'text-gold' : 'text-surface-primary'}`}>{label}</p>
      <p className="text-[10px] text-surface-muted">{sub}</p>
    </a>
  );
}

function Audience({ tag, punch, href, highlight }) {
  return (
    <a href={href} className={`group block rounded-xl p-4 no-underline transition-all hover:-translate-y-0.5 ${highlight ? 'bg-gold/[0.06] border-2 border-gold/40' : 'bg-navy-800 border border-surface-border hover:border-gold/30'}`}>
      <p className="text-[9px] font-bold tracking-widest uppercase text-gold/80 mb-1.5">{tag}</p>
      <p className="text-[13px] text-surface-primary mb-2 leading-snug">{punch}</p>
      <p className="text-[10px] text-gold font-bold tracking-wider">SHOW ME HOW →</p>
    </a>
  );
}

function EcoCard({ tag, name, desc, href, external, here }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} {...externalProps} className={`block rounded-2xl p-4 no-underline ${here ? 'bg-gold/[0.06] border-2 border-gold/40' : 'bg-navy-800 border border-gold/15 hover:border-gold/35'} transition-colors`}>
      <p className={`text-[9px] font-bold tracking-widest uppercase mb-2 ${here ? 'text-gold' : 'text-gold/70'}`}>{tag}</p>
      <p className={`font-display text-sm font-medium mb-1.5 ${here ? 'text-gold' : 'text-surface-primary'}`}>{name}</p>
      <p className="text-[11px] text-surface-secondary leading-relaxed">{desc}</p>
    </a>
  );
}
