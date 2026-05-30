import OpportunityTable from '@/components/OpportunityTable';

export const metadata = { title: 'Economic Empowerment — The Discovery' };

export default function Home() {
  return (
    <>
      {/* HERO — THE DISCOVERY */}
      <section className="relative min-h-[92vh] flex items-center pt-16 pb-12 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          <div className="animate-fade-up">
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">A Discovery</p>
            <h1 className="font-display text-[2.6rem] md:text-[3.8rem] font-medium leading-[1.02] tracking-tight mb-6 max-w-4xl mx-auto">
              The world's biggest <em className="text-gold italic">untapped resource</em><br/>
              is already organized.
            </h1>
            <p className="text-lg text-surface-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Hundreds of millions of people are organized.
              Millions of businesses already serve them.
              The structure exists. The relationships exist. The trust exists.
              <br/>
              <span className="text-surface-primary font-medium">ECONOMIC EMPOWERMENT CENTER brings them together, strengthening mutual SUSTAINABLE DEVELOPMENT.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a href="#what" className="btn-gold">Show Me the Gold Pot</a>
              <a href="/how-do-i-start-today/" className="btn-outline">How It Activates</a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto animate-fade-up-delay">
            <Stat top="195+" bot="Countries & Territories" />
            <Stat top="Hundreds of Millions" bot="Members Already Organized" highlight />
            <Stat top="Millions" bot="Businesses Already Operating" />
          </div>
        </div>
      </section>

      {/* 5-SECOND ANSWERS */}
      <section id="what" className="py-16 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">The Five-Second Answers</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Everything you need to know — <em className="text-gold italic">quickly.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            <Answer q="What is the gold pot?" a="Hundreds of millions of organized members, plus millions of businesses already operating within them, plus the chambers, federations, and professional networks that connect them." />
            <Answer q="Where is the gold pot?" a="Already in every city, every country, every territory. Cultural associations, federations, chambers, professional groups, religious organizations, educational institutions, youth organizations, health organizations." />
            <Answer q="Why is it not activated?" a="It is fragmented. Organizations operate in silos. Members do not see each other. Merchants do not see the organized communities they could serve. No shared infrastructure has connected them — until now." highlight />
            <Answer q="How does Economic Empowerment activate it?" a="By connecting recognized organizations, entrepreneurs, merchants, and chambers through a federated network supported by MundusPASS — without changing how any organization operates." />
            <Answer q="Why should I continue reading?" a="Because if you lead an organization, run a business, or know your community, you may already be sitting on the activation point. The next sections show what that looks like." />
          </div>
        </div>
      </section>

      {/* ENTREPRENEUR-FIRST */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label justify-center">For Entrepreneurs</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Trusted people can help <em className="text-gold italic">activate entire cities.</em>
            </h2>
            <p className="text-sm text-surface-secondary max-w-2xl mx-auto">
              Entrepreneurs are trusted connectors. They already know the organizations, merchants, professionals,
              chambers, leaders, and communities. They can help activate cities.
            </p>
          </div>

          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-7 relative overflow-hidden mb-8">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-7 gap-2 items-center justify-items-center">
              <Node label="Recognized Entrepreneur" highlight />
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
              <Node label="Economic Empowerment Ecosystem" highlight />
            </div>
          </div>

          <div className="text-center">
            <a href="/apply/entrepreneur/" className="btn-gold">Entrepreneur Application</a>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">Who This Is For</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Five audiences. <em className="text-gold italic">Five pathways.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Audience tag="Member Organization" punchline="Realize your mission with sustainability." body="Nonprofits, federations, cultural associations, and community organizations may activate their existing membership while pursuing operating sustainability through ecosystem participation." cta="Organization Application" href="/apply/member-organization/" />
            <Audience tag="Merchant / Professional" punchline="Reach new organized communities, not just existing customers." body="Economic Empowerment can help introduce merchants to new customers, additional multicultural communities, organizations, events, visitors, city programs, Passport to the World participants, and 1City.VIP activity." cta="Merchant Application" href="/apply/merchant/" highlight />
            <Audience tag="Chamber / Association" punchline="Connect your members to a larger organized ecosystem." body="Chambers and trade associations may extend their member benefits, visibility, and economic activity through coordinated ecosystem participation." cta="Chamber Application" href="/apply/chamber/" />
            <Audience tag="Strategic Partner / Sponsor" punchline="Reach organized multicultural communities at scale." body="Sponsors and strategic partners may engage communities, cultural networks, and city ecosystems through structured partnership pathways." cta="Partner Application" href="/apply/sponsor/" />
          </div>
        </div>
      </section>

      {/* GOLDEN OPPORTUNITIES */}
      <section className="py-20 px-5">
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
      <section className="py-16 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label justify-center">City Venture VIP</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Activate <em className="text-gold italic">your city.</em>
          </h2>
          <p className="text-sm text-surface-secondary max-w-2xl mx-auto mb-6">
            If your city does not yet exist in 1City.VIP, a clear seven-step pathway shows how a recognized
            entrepreneur or organization may begin activating it.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Kuala_Lumpur.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Atlantic.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Newark.1City.VIP</span>
            <span className="text-[10px] font-mono bg-navy-800 border border-gold/15 rounded-full px-3 py-1 text-gold">Copacabana.VIP</span>
          </div>
          <a href="/city-venture-vip/" className="btn-gold">Explore City Venture VIP →</a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">Apply for Consideration</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-5">
            The gold pot is real. <em className="text-gold italic">The activation begins with qualified people.</em>
          </h2>
          <p className="text-sm text-surface-secondary mb-8 max-w-xl mx-auto">
            Submission does not guarantee approval. Applications are reviewed according to documentation requirements,
            participation standards, program objectives, compliance requirements, and ecosystem guidelines.
          </p>
          <a href="/apply/" className="btn-gold">View All Application Types</a>
        </div>
      </section>
    </>
  );
}

function Stat({ top, bot, highlight }) {
  return (
    <div className={`rounded-xl p-4 text-center border ${highlight ? 'bg-gold/[0.08] border-gold/25' : 'bg-navy-800/70 border-surface-border'}`}>
      <p className={`font-display leading-tight text-lg md:text-2xl text-gold`}>{top}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-surface-secondary mt-1.5">{bot}</p>
    </div>
  );
}

function Answer({ q, a, highlight }) {
  return (
    <div className={`rounded-xl p-5 border ${highlight ? 'bg-gold/[0.05] border-gold/25' : 'bg-navy-800 border-surface-border'}`}>
      <p className={`text-[11px] font-bold mb-2 ${highlight ? 'text-gold' : 'text-gold/80'}`}>{q}</p>
      <p className="text-[11px] text-surface-secondary leading-relaxed">{a}</p>
    </div>
  );
}

function Node({ label, highlight }) {
  return (
    <div className={`text-[10px] font-medium text-center px-3 py-2 rounded-lg border ${highlight ? 'bg-gold/15 border-gold/30 text-gold' : 'bg-navy-950 border-surface-border text-surface-secondary'}`}>
      {label}
    </div>
  );
}

function Arrow() {
  return <span className="text-gold/40 text-sm hidden md:inline">→</span>;
}

function Audience({ tag, punchline, body, cta, href, highlight }) {
  return (
    <div className={`bg-navy-800 rounded-2xl p-6 border relative overflow-hidden ${highlight ? 'border-gold/30' : 'border-surface-border'}`}>
      {highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">{tag}</p>
      <h3 className="font-display text-lg md:text-xl font-medium tracking-tight mb-3">{punchline}</h3>
      <p className="text-[12px] text-surface-secondary leading-relaxed mb-4">{body}</p>
      <a href={href} className="text-[11px] text-gold no-underline hover:underline">{cta} →</a>
    </div>
  );
}
