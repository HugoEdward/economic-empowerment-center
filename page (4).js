import OpportunityTable from '@/components/OpportunityTable';
import FounderTrustBlock from '@/components/FounderTrustBlock';

export const metadata = {
  title: 'Economic Empowerment — Economic Opportunities In Your Own Backyard',
  description: 'Sustainable revenue and economic opportunities for organizations, churches, chambers, entrepreneurs, merchants, and communities. Activate the resources already organized in your city.',
  openGraph: {
    title: 'Economic Empowerment — Show Me The Opportunity',
    description: 'Sustainable revenue for organizations. New customers for merchants. Growth for cities. The resources are already organized.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      {/* HERO — SHOW ME DISCOVERY */}
      <section className="relative min-h-[95vh] flex items-center pt-16 pb-12 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="animate-fade-up text-center mb-10">
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2">A Discovery</p>
            <p className="text-[9px] text-surface-muted tracking-wider mb-5">
              Founded by <a href="/about/" className="text-gold/80 no-underline hover:underline">Hugo Edward Juarez, Sr.</a> · Since 1976 · UN ECOSOC Status Since 1989
            </p>
            <h1 className="font-display text-[2.6rem] md:text-[4rem] font-medium leading-[1.02] tracking-tight mb-5 max-w-4xl mx-auto">
              Economic opportunities are <em className="text-gold italic">already around you.</em>
            </h1>
            <p className="text-base md:text-lg text-surface-secondary leading-relaxed max-w-2xl mx-auto">
              Hundreds of millions of people are organized. Millions of businesses already serve them.
              The structure exists. The relationships exist. The trust exists.
              <br/>
              <span className="text-surface-primary font-medium">Economic Empowerment Center brings them together.</span>
            </p>
          </div>

          {/* 5 SHOW ME PUNCHLINES */}
          <div className="grid md:grid-cols-5 gap-3 mb-8 animate-fade-up-delay">
            <ShowMe punch="NEED FUNDING?" href="#audiences" />
            <ShowMe punch="KEEP YOUR MISSION ALIVE." href="#audiences" />
            <ShowMe punch="BUILD SUSTAINABLE REVENUE." href="#audiences" highlight />
            <ShowMe punch="SERVE MORE PEOPLE." href="#audiences" />
            <ShowMe punch="GROW YOUR CITY." href="/city-venture-vip/" />
          </div>

          {/* MISSION → IMPACT FLOW */}
          <div className="bg-navy-800/50 border border-gold/15 rounded-2xl px-5 py-3 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-medium">
              <span className="text-surface-secondary">Mission</span>
              <span className="text-gold/40">→</span>
              <span className="text-surface-secondary">Funding</span>
              <span className="text-gold/40">→</span>
              <span className="text-gold">Sustainability</span>
              <span className="text-gold/40">→</span>
              <span className="text-surface-secondary">Growth</span>
              <span className="text-gold/40">→</span>
              <span className="text-surface-primary font-medium">Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BLOCK — first scroll position */}
      <FounderTrustBlock />

      {/* AUDIENCES — SHOW ME */}
      <section id="audiences" className="py-16 px-5 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">Who This Is For</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              You may be sitting on <em className="text-gold italic">the activation point.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Audience tag="Entrepreneurs" punch="NEW OPPORTUNITY IN YOUR CITY." href="/apply/entrepreneur/" />
            <Audience tag="Member Organizations" punch="KEEP YOUR MISSION ALIVE." href="/apply/member-organization/" highlight />
            <Audience tag="Churches / Faith Organizations" punch="STRENGTHEN YOUR CHURCH." href="/apply/member-organization/" />
            <Audience tag="Chambers" punch="NEW VALUE FOR MEMBERS." href="/apply/chamber/" />
            <Audience tag="Merchants / Professionals" punch="REACH NEW CUSTOMERS." href="/apply/merchant/" />
            <Audience tag="Sponsors / Strategic Partners" punch="REAL IMPACT. REAL COMMUNITIES." href="/apply/sponsor/" />
            <Audience tag="Cities / 1City.VIP" punch="GROW YOUR CITY." href="/city-venture-vip/" />
            <Audience tag="International Cultures Celebration" punch="TURN CULTURE INTO OPPORTUNITY." href="/international-cultures-celebration/" />
            <Audience tag="Passport to the World" punch="TRAVEL AROUND THE WORLD." href="/international-cultures-celebration/" />
          </div>
        </div>
      </section>

      {/* ENTREPRENEUR PATHWAY */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">For Entrepreneurs</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-3">
              Trusted people can help <em className="text-gold italic">activate entire cities.</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              You already know the organizations. You already know the merchants. You already know your community.
            </p>
          </div>

          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-6 relative overflow-hidden mb-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-7 gap-2 items-center justify-items-center">
              <Node label="You" highlight />
              <Arrow />
              <Node label="Organizations" />
              <Arrow />
              <Node label="Merchants" />
              <Arrow />
              <Node label="Professionals" />
            </div>
            <div className="text-center my-3 text-gold/40 text-lg">↓</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 items-center justify-items-center">
              <Node label="1City.VIP" highlight />
              <Arrow />
              <Node label="City Participation" />
              <Arrow />
              <Node label="Economic Empowerment" highlight />
            </div>
          </div>

          <div className="text-center">
            <a href="/apply/entrepreneur/" className="btn-gold">Entrepreneur Application</a>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES TEASER */}
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Career Opportunities</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Build economic opportunities <em className="text-gold italic">where you live.</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              Six-figure opportunity pathways through approved participation, performance, retention, and disciplined execution.
            </p>
          </div>
          <div className="text-center">
            <a href="/career-opportunities/" className="btn-gold">SHOW ME →</a>
          </div>
        </div>
      </section>

      {/* THE ECOSYSTEM */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">Federated Economic Ecosystem Infrastructure</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Separate platforms. <em className="text-gold italic">Connected purpose.</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              Each platform has its own mission. Together, they form an integrated pathway from culture to economic empowerment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <EcoCard tag="You Are Here" name="EconomicEmpowerment.Center" desc="Economic opportunities and sustainability pathway." href="/" here />
            <EcoCard tag="Cultural Engine" name="CulturesCelebration.com" desc="Culture, tourism, public participation, city/nation visibility." href="https://culturescelebration.com" external />
            <EcoCard tag="Administration" name="Mundus.Center" desc="Contracts, compensation, payments, compliance." href="https://mundus.center/partners" external />
            <EcoCard tag="Transaction Layer" name="MundusPASS" desc="Benefits, transactions, members, merchants." href="https://munduspass.com" external />
            <EcoCard tag="City Activation" name="1City.VIP" desc="City business, tourism, merchant, hospitality." href="/city-venture-vip/" />
            <EcoCard tag="Federation" name="ImmigrantsAlliance.org" desc="Federation, immigrant organizations, multicultural leadership." href="https://immigrantsalliance.org" external />
          </div>

          <div className="text-center">
            <a href="/international-cultures-celebration/" className="text-[11px] text-gold no-underline hover:underline">See How They Work Together →</a>
          </div>
        </div>
      </section>

      {/* GOLDEN OPPORTUNITIES */}
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">The Opportunity Dashboard</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-3">
              Golden opportunities in your <em className="text-gold italic">own backyard.</em>
            </h2>
            <p className="text-sm text-surface-secondary">Every city. Every country. Every territory.</p>
          </div>
          <OpportunityTable />
        </div>
      </section>

      {/* CITY VENTURE VIP TEASER */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label justify-center">City Venture VIP</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
            Activate <em className="text-gold italic">your city.</em>
          </h2>
          <p className="text-sm text-surface-secondary max-w-2xl mx-auto mb-5">
            If your city does not yet exist in 1City.VIP, a clear seven-step pathway shows how a recognized entrepreneur or organization may begin activating it.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Kuala_Lumpur.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Atlantic.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Newark.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Copacabana.VIP</span>
          </div>
          <a href="/city-venture-vip/" className="btn-gold">SHOW ME →</a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">Apply for Consideration</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
            The opportunity is real. <em className="text-gold italic">Your move.</em>
          </h2>
          <a href="/apply/" className="btn-gold">View All Application Types</a>
        </div>
      </section>
    </>
  );
}

function ShowMe({ punch, href, highlight }) {
  return (
    <a href={href} className={`block rounded-xl px-4 py-5 border text-center no-underline transition-all hover:translate-y-[-2px] ${highlight ? 'bg-gold/[0.08] border-gold/30' : 'bg-navy-800 border-surface-border hover:border-gold/25'}`}>
      <p className={`font-display text-[12px] md:text-[13px] font-bold leading-tight tracking-tight mb-2 ${highlight ? 'text-gold' : 'text-surface-primary'}`}>{punch}</p>
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold/80">SHOW ME →</p>
    </a>
  );
}

function Audience({ tag, punch, href, highlight }) {
  return (
    <a href={href} className={`block bg-navy-800 rounded-2xl p-5 border relative overflow-hidden no-underline transition-all hover:translate-y-[-2px] ${highlight ? 'border-gold/30' : 'border-surface-border hover:border-gold/20'}`}>
      {highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">{tag}</p>
      <h3 className="font-display text-base md:text-lg font-medium tracking-tight mb-3 text-surface-primary">{punch}</h3>
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold/80">SHOW ME →</p>
    </a>
  );
}

function Node({ label, highlight }) {
  return (
    <div className={`text-[10px] font-medium text-center px-3 py-2 rounded-lg border ${highlight ? 'bg-gold/15 border-gold/30 text-gold' : 'bg-navy-950 border-surface-border text-surface-secondary'}`}>
      {label}
    </div>
  );
}

function Arrow() { return <span className="text-gold/40 text-sm hidden md:inline">→</span>; }

function EcoCard({ tag, name, desc, href, external, here }) {
  const isExt = external;
  return (
    <a href={href} target={isExt ? '_blank' : undefined} rel={isExt ? 'noopener noreferrer' : undefined}
      className={`block bg-navy-800 border rounded-2xl p-4 transition-all no-underline relative overflow-hidden ${here ? 'border-gold/30' : 'border-surface-border hover:border-gold/20'}`}>
      {here && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
      <p className="text-[9px] font-bold tracking-widest uppercase text-gold/70 mb-1">{tag}</p>
      <p className={`font-mono text-[11px] mb-1.5 ${here ? 'text-gold' : 'text-surface-primary'}`}>
        {name}{isExt && <span className="text-gold/60 ml-1">↗</span>}
      </p>
      <p className="text-[10px] text-surface-secondary leading-relaxed">{desc}</p>
    </a>
  );
}
