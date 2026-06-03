import DiscoveryLevels from '@/components/DiscoveryLevels';
import NeedsMap from '@/components/NeedsMap';
import { PhaseLegend } from '@/components/PhaseIndicator';
import { CheckList, FeasibilityBlock, ApplyCTA } from '@/components/AudienceSection';

export const metadata = { title:'For Chambers of Commerce — New Value for Members', description:'We help your chamber bring real value to your member businesses.' };

const CHAMBER_NEEDS = [
  { num:1, need:'Sustainable Revenue & Financial Stability', phase:'activating', why:'Chambers struggle with declining dues, rising costs, and unpredictable funding.', solution:'Revenue-generating programs, sponsorship pathways, monetizable member benefits. Stronger as the merchant network grows.' },
  { num:2, need:'Membership Growth & Retention', phase:'activating', why:'Chambers must constantly attract and keep members.', solution:'High-value member benefits through MundusPASS, business support tools, training programs.' },
  { num:3, need:'Clear, Modern Value Proposition', phase:'available', why:'Businesses demand measurable ROI; networking alone is no longer enough.', solution:'A ready-made suite of cultural visibility, sponsor pathways, and partner introductions Chambers can offer today.' },
  { num:4, need:'Workforce Development & Talent Pipeline', phase:'developing', why:'Businesses face labor shortages and skill gaps.', solution:'Workforce-readiness programs and employer pipelines. Built together with participating Chambers as the ecosystem matures.' },
  { num:5, need:'Small Business & Entrepreneurship Support', phase:'activating', why:'Most Chamber members are small businesses needing hands-on help.', solution:'Entrepreneur pathway through MundusPASS, micro-enterprise tools, merchant activation, financial literacy.' },
  { num:6, need:'Advocacy & Government Influence', phase:'available', why:'Chambers must represent business interests but often lack research or policy capacity.', solution:'UN ECOSOC participation pathway through Immigrants Alliance federation (since 1989), International Cultures Conference, and ecosystem advocacy tools.' },
  { num:7, need:'Digital Transformation', phase:'activating', why:'Chambers and members lag in technology and digital marketing.', solution:'MundusPASS digital infrastructure for member businesses, modern admin tools, and digital adoption support.' },
  { num:8, need:'Partnerships & Sponsorship Development', phase:'available', why:'Chambers need corporate, government, and nonprofit partners.', solution:'Direct connections to national and global partners through the ecosystem, government relationships through Immigrants Alliance.' },
  { num:9, need:'Branding, Marketing & Visibility', phase:'available', why:'Many Chambers struggle with low visibility.', solution:'Co-branding through CulturesCelebration.com, ImmigrantsAlliance.org, the International Cultures–Immigrants Parade, and 1City.VIP city sites.' },
  { num:10, need:'Leadership Capacity & Long-Term Sustainability', phase:'activating', why:'Boards, staff, and volunteers often lack training and succession planning.', solution:'Direct access to ecosystem leadership advisors and governance frameworks.' },
];

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'For Chambers of Commerce', title:<>New value <em className="text-gold italic">for your members.</em></>, summary:'We help your chamber bring real value to your member businesses.', cta:'Show Me How' },
      { label:'How', title:'Three things Chambers gain.', content:(<CheckList items={['Tangible value for member businesses — beyond networking','Sponsor and partnership pathways through the ecosystem','Cultural visibility through ICC, the Parade, and 1City.VIP']} />), cta:'Show Me Who Benefits' },
      { label:'Who Benefits', title:<>Three groups <em className="text-gold italic">all benefit.</em></>, content:(
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Chambers</p><p className="text-[12px] text-surface-secondary leading-relaxed">Differentiate membership through tangible value. Activate cross-promotion. Deliver metrics.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Merchants</p><p className="text-[12px] text-surface-secondary leading-relaxed">Listed in MundusPASS. Featured at city, cultural, and Passport events. Reach organized audiences.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Local Economies</p><p className="text-[12px] text-surface-secondary leading-relaxed">Money flows between local organizations and businesses. Tourism via Passport. City activation via 1City.VIP.</p></div>
        </div>
      ), cta:'Show Me The 10 Pressing Needs' },
      { label:'The 10 Pressing Needs', title:<>The 10 most pressing Chamber needs · <em className="text-gold italic">and our response.</em></>, content:(<><div className="mb-6"><PhaseLegend /></div><NeedsMap needs={CHAMBER_NEEDS} /></>), cta:'Show Me The Feasibility' },
      { label:'Feasibility · Apply', title:<>Real numbers. <em className="text-gold italic">Real next step.</em></>, content:(<>
        <FeasibilityBlock items={[{value:'200+',label:'Member Businesses'},{value:'30-50%',label:'Initial Activation'},{value:'Multi-Org',label:'Connections'},{value:'Citywide',label:'1City.VIP Engagement'}]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto mb-7">A 200-member Chamber activating 30–50% of members as MundusPASS merchants generates significant ecosystem engagement. Larger Chambers scale proportionally.</p>
        <div className="max-w-3xl mx-auto bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 text-center"><ApplyCTA href="/apply/chamber/" label="Apply as Chamber / Association" /></div>
      </>) },
    ]} />
  );
}
