import { AudienceSection, AudienceProse, CheckList, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'Three Platforms — One Empowerment Ecosystem',
  description: 'ImmigrantsAlliance.org for identity & belonging. CulturesCelebration.com for cultural understanding & peace. EconomicEmpowerment.Center for sustainable income. Together: unbreakable.',
};

const COMBINED_IMPACT = [
  { need:'Sustainable Income', solution:'S.E.E.D. revenue engine via EconomicEmpowerment.Center — member dues, merchant participation, sponsorships, MundusPASS transactions, cultural-tourism activity.' },
  { need:'Visibility & Awareness', solution:'Cultural showcases via CulturesCelebration.com + global parade via ImmigrantsAlliance.org. Hundreds of thousands of attendees. Global media reach.' },
  { need:'Membership Growth', solution:'Cultural engagement attracts new members; ecosystem-wide visibility brings them in; structured benefits keep them.' },
  { need:'Community Engagement', solution:'International Cultures Celebration parades and performances; Passport to the World; 1City.VIP city activation.' },
  { need:'Professional & Merchant Networks', solution:'MundusPASS merchant enrollment, Chamber activation tools, cross-organization referrals.' },
  { need:'Youth & Sports Activation', solution:'Parade participation, cultural-sports representation, youth entrepreneurship programs.' },
  { need:'Faith-Based Support', solution:'Churches included in S.E.E.D. revenue pathways with full preservation of doctrine, tradition, and autonomy.' },
  { need:'Chamber of Commerce Support', solution:'Dedicated chamber activation programs, measurable member-business value, ecosystem partnerships.' },
  { need:'NGO & Nonprofit Sustainability', solution:'Tools and pathways to move beyond donation-only survival into structured monthly revenue.' },
  { need:'Cultural Preservation & Celebration', solution:'International Cultures Celebration ecosystem — cultures stay alive through participation, not preservation behind glass.' },
];

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="The Three Platforms"
        title={<>Three platforms. <em className="text-gold italic">One empowerment ecosystem.</em></>}
        subtitle="Identity, cultural understanding, and economic sustainability are the three dimensions of organizational and community life. Each has its own platform. Together, they form the complete empowerment ecosystem."
      />

      {/* THREE DIMENSIONS */}
      <AudienceSection label="Three Dimensions · Three Platforms" dark>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* ImmigrantsAlliance */}
          <div className="bg-navy-800 border border-gold/25 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-[9px] font-bold tracking-widest uppercase text-gold/80 mb-2">Dimension 1 · Identity & Belonging</p>
            <h3 className="font-display text-lg font-medium mb-2">ImmigrantsAlliance.org</h3>
            <p className="text-[11px] text-surface-secondary leading-relaxed mb-3">
              Federation. Advocacy. Recognition. Voice.
              Being seen, being organized, being represented — locally and at the United Nations (ECOSOC Special Consultative Status since 1989).
            </p>
            <div className="space-y-1">
              <p className="text-[10px] text-surface-muted">• International Cultures–Immigrants Parade (41st annual)</p>
              <p className="text-[10px] text-surface-muted">• 190+ countries represented</p>
              <p className="text-[10px] text-surface-muted">• Diaspora & consular engagement</p>
            </div>
            <a href="https://immigrantsalliance.org" target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] text-gold no-underline hover:underline mt-4">Visit ImmigrantsAlliance.org ↗</a>
          </div>

          {/* CulturesCelebration */}
          <div className="bg-navy-800 border border-gold/25 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-[9px] font-bold tracking-widest uppercase text-gold/80 mb-2">Dimension 2 · Culture & Understanding</p>
            <h3 className="font-display text-lg font-medium mb-2">CulturesCelebration.com</h3>
            <p className="text-[11px] text-surface-secondary leading-relaxed mb-3">
              Cultural expression. Understanding. Harmony. Peace.
              A portal to personally experience the cultures of the world — through Passport to the World, the International Cultures Conference at the UN, and the International Cultures–Immigrants Parade.
            </p>
            <div className="space-y-1">
              <p className="text-[10px] text-surface-muted">• Passport to the World in NYC and beyond</p>
              <p className="text-[10px] text-surface-muted">• International Cultures Conference (UN)</p>
              <p className="text-[10px] text-surface-muted">• Cultural-tourism infrastructure</p>
            </div>
            <a href="https://culturescelebration.com" target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] text-gold no-underline hover:underline mt-4">Visit CulturesCelebration.com ↗</a>
          </div>

          {/* EconomicEmpowerment */}
          <div className="bg-gold/[0.06] border-2 border-gold/40 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
            <p className="text-[9px] font-bold tracking-widest uppercase text-gold mb-2">Dimension 3 · Economic Sustainability · You Are Here</p>
            <h3 className="font-display text-lg font-medium mb-2 text-gold">EconomicEmpowerment.Center</h3>
            <p className="text-[11px] text-surface-secondary leading-relaxed mb-3">
              Sustainable income. Programs. Members. Merchants. Governance.
              Through the S.E.E.D. program — Sustainable Economic Empowerment & Development — organizations move beyond donation dependency into structured, monthly revenue.
            </p>
            <div className="space-y-1">
              <p className="text-[10px] text-surface-muted">• Member, merchant, sponsor, tourism activation</p>
              <p className="text-[10px] text-surface-muted">• MundusPASS transaction infrastructure</p>
              <p className="text-[10px] text-surface-muted">• Development Officers & coordinator network</p>
            </div>
            <a href="/" className="inline-block text-[10px] text-gold no-underline hover:underline mt-4">Explore the S.E.E.D. Program →</a>
          </div>
        </div>
      </AudienceSection>

      {/* WHY ALL THREE */}
      <AudienceSection label="Why All Three Together">
        <div className="max-w-3xl mx-auto bg-navy-800 border border-gold/15 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-[14px] text-surface-secondary leading-relaxed mb-4">
            An organization that has <strong className="text-surface-primary">only identity</strong> is seen but cannot sustain itself.
          </p>
          <p className="text-[14px] text-surface-secondary leading-relaxed mb-4">
            An organization that has <strong className="text-surface-primary">only cultural expression</strong> celebrates but cannot federate.
          </p>
          <p className="text-[14px] text-surface-secondary leading-relaxed mb-5">
            An organization that has <strong className="text-surface-primary">only economic infrastructure</strong> functions but lacks soul.
          </p>
          <div className="border-t border-gold/15 pt-5">
            <p className="text-[16px] text-gold font-display italic text-center leading-relaxed">
              An organization that has <strong className="not-italic">all three</strong> — identity, culture, and economic sustainability — <strong className="not-italic">is unbreakable.</strong>
            </p>
          </div>
        </div>
      </AudienceSection>

      {/* COMBINED IMPACT TABLE */}
      <AudienceSection label="What The Combined Ecosystem Solves" dark>
        <div className="max-w-4xl mx-auto space-y-2">
          {COMBINED_IMPACT.map((item, i) => (
            <div key={i} className="bg-navy-800 border border-surface-border rounded-xl p-4 grid md:grid-cols-[200px_1fr] gap-4 items-start">
              <p className="text-[12px] font-bold text-gold tracking-wide">{item.need}</p>
              <p className="text-[12px] text-surface-secondary leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </AudienceSection>

      {/* THE FLOW */}
      <AudienceSection label="How an Organization Moves Through the Ecosystem">
        <div className="max-w-3xl mx-auto">
          <AudienceProse>
            <p>An organization typically encounters the ecosystem in this order:</p>
          </AudienceProse>
          <div className="mt-7 space-y-3">
            <FlowStep n="1" platform="ImmigrantsAlliance.org" action="Identity established" desc="Federation, advocacy, recognition — voice in the global immigrant and multicultural network." />
            <FlowStep n="2" platform="CulturesCelebration.com" action="Cultural visibility activated" desc="Parade participation, pavilion presence, Passport to the World, cultural conference engagement." />
            <FlowStep n="3" platform="EconomicEmpowerment.Center" action="Sustainability structured" desc="S.E.E.D. recognition, Development Officer assigned, member-merchant-sponsor activation, monthly revenue established." here />
            <FlowStep n="4" platform="MundusPASS + 1City.VIP" action="Operational layer engaged" desc="Members carry MundusPASS, local merchants activate, city pathway through 1City.VIP." />
            <FlowStep n="5" platform="Mundus.Center" action="Partner and coordinator layer" desc="Confidential contracts, compensation, payouts — after recognition, governed by written agreement." />
          </div>
        </div>
      </AudienceSection>

      {/* CALL TO ACTION */}
      <AudienceSection label="Where Do You Start?" dark>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[14px] text-surface-secondary leading-relaxed mb-7">
            Most organizations start where the need is most urgent. If your organization needs sustainability — <strong className="text-surface-primary">start here, on EconomicEmpowerment.Center.</strong> The cultural and identity layers will activate as your S.E.E.D. participation grows.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <a href="/apply/" className="btn-gold">Apply for Consideration</a>
            <a href="/for-organizations/" className="btn-outline">For Member Organizations</a>
          </div>
          <p className="text-[11px] text-surface-muted mt-5">
            Visit the connected platforms: <a href="https://immigrantsalliance.org" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">ImmigrantsAlliance.org ↗</a> · <a href="https://culturescelebration.com" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">CulturesCelebration.com ↗</a>
          </p>
        </div>
      </AudienceSection>
    </>
  );
}

function FlowStep({ n, platform, action, desc, here }) {
  return (
    <div className={`rounded-2xl p-5 border ${here ? 'bg-gold/[0.06] border-gold/30' : 'bg-navy-800 border-surface-border'} relative overflow-hidden`}>
      {here && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
      <div className="grid grid-cols-[40px_1fr] gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-base ${here ? 'bg-gold/20 border-2 border-gold/40 text-gold' : 'bg-navy-950 border border-surface-border text-surface-secondary'}`}>{n}</div>
        <div>
          <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
            <p className={`font-mono text-[11px] ${here ? 'text-gold' : 'text-surface-primary'}`}>{platform}</p>
            {here && <span className="text-[8px] font-bold uppercase tracking-widest text-gold/80">You Are Here</span>}
          </div>
          <p className="text-[13px] font-medium text-surface-primary mb-1">{action}</p>
          <p className="text-[11px] text-surface-secondary leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
