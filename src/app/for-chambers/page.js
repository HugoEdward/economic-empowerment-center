import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';
import NeedsMap from '@/components/NeedsMap';
import { PhaseLegend } from '@/components/PhaseIndicator';

export const metadata = {
  title: 'For Chambers of Commerce — New Value for Members',
  description: '10 most pressing needs of Chambers worldwide, each with a structured Economic Empowerment Center solution. Give member businesses access to additional visibility, customers, and partnerships.',
};

const CHAMBER_NEEDS = [
  { num:1, need:'Sustainable Revenue & Financial Stability', phase:'activating', why:'Chambers worldwide struggle with declining dues, rising costs, and unpredictable funding.', solution:'Revenue-generating programs, sponsorship pathways, monetizable member benefits, and structured income floor through member-merchant activation. Activates per cohort as Stripe processing is provisioned.' },
  { num:2, need:'Membership Growth & Retention', phase:'activating', why:'Chambers must constantly attract new members while keeping existing ones engaged.', solution:'High-value member benefits through MundusPASS, business support tools, and training programs that increase acquisition and renewal. Live as merchant network activates city by city.' },
  { num:3, need:'Clear, Modern Value Proposition', phase:'available', why:'Businesses demand measurable ROI; traditional networking alone is no longer enough.', solution:'Ready-made suite of cultural visibility, sponsor pathways, and partner introductions Chambers can offer to member businesses today.' },
  { num:4, need:'Workforce Development & Talent Pipeline', phase:'developing', why:'Businesses everywhere face labor shortages and skill gaps.', solution:'Workforce-readiness programs, employer pipelines, upskilling workshops. Formal workforce-development partnerships activate in Phase 2 as the ecosystem matures.' },
  { num:5, need:'Small Business & Entrepreneurship Support', phase:'activating', why:'Most Chamber members are small businesses needing hands-on help to survive and grow.', solution:'Entrepreneur pathway through MundusPASS, micro-enterprise tools, and merchant activation. Direct coaching and financial literacy programs activate per cohort.' },
  { num:6, need:'Advocacy & Government Influence', phase:'available', why:'Chambers must represent business interests but often lack research, data, or policy capacity.', solution:'UN ECOSOC participation pathway through ImmigrantsAlliance.org federation (Special Consultative Status since 1989), International Cultures Conference at the UN, and ecosystem advocacy tools.' },
  { num:7, need:'Digital Transformation (Chamber + Members)', phase:'activating', why:'Many Chambers and their members lag in technology, automation, and digital marketing.', solution:'MundusPASS digital infrastructure for member businesses, modern admin tools, and digital adoption support. Full chamber-facing dashboards are Phase 2.' },
  { num:8, need:'Partnerships & Sponsorship Development', phase:'available', why:'Chambers need corporate, government, and nonprofit partners to expand resources and impact.', solution:'Direct connections to national and global partners through the ecosystem, government agency relationships through Immigrants Alliance, and sponsor pathways live today.' },
  { num:9, need:'Branding, Marketing & Visibility', phase:'available', why:'Many Chambers struggle with low visibility or outdated public perception.', solution:'Co-branding through CulturesCelebration.com, ImmigrantsAlliance.org, the International Cultures–Immigrants Parade (41 annual editions), and 1City.VIP city sites.' },
  { num:10, need:'Leadership Capacity & Long-Term Sustainability', phase:'activating', why:'Boards, staff, and volunteers often lack training, structure, or succession planning.', solution:'Direct access to ecosystem leadership advisors and governance frameworks. Formal Leadership Academy and succession-planning toolkits activate in Phase 2.' },
];

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Chambers of Commerce"
        title={<>New value <em className="text-gold italic">for your members.</em></>}
        subtitle="We help your chamber bring real value to your member businesses."
      />

      <AudienceSection label="We Know What Chambers Face">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary text-base">Chambers worldwide face the same 10 pressing structural pressures.</strong></p>
          <p>From declining dues to digital transformation, from workforce shortages to leadership succession — these are the constant needs that never go away. For each one, Economic Empowerment offers a concrete response.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="10 Most Pressing Chamber Needs · And How EEC Addresses Each" dark>
        <div className="mb-6"><PhaseLegend /></div>
        <NeedsMap needs={CHAMBER_NEEDS} />
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <CheckList items={[
          'Submit Chamber governing documents and charter',
          'Provide member business roster and category breakdown',
          'Verify Chamber operating address and active status',
          'Designate authorized Chamber officers',
          'Acknowledge S.E.E.D. Rules and federation requirements',
          'Engage member businesses in the program',
          'Promote opportunities to your member businesses',
          'Build local partnerships across organizations and city activation',
          'Support local commerce through coordinated city programs',
          'Maintain Chamber compliance and reporting standards',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <CheckList items={[
          'A meaningful share of member businesses registered as MundusPASS merchants',
          'Tangible engagement metrics reported to member businesses',
          'Measurable foot traffic and revenue driven to participating businesses',
          'Coordinated city-wide activation through 1City.VIP',
          'Member-business engagement in cultural and tourism programs',
          'Renewed and growing membership through demonstrated value',
          'Reputation as the Chamber that delivers, not just convenes',
        ]} />
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'200+', label:'Member Businesses' },
          { value:'30-50%', label:'Initial Activation' },
          { value:'Multi-Org', label:'Connections' },
          { value:'Citywide', label:'1City.VIP Engagement' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          A 200-member Chamber activating 30–50% of its members as MundusPASS merchants generates significant ecosystem engagement. Larger Chambers scale proportionally.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/chamber/" label="Apply as Chamber / Association" />
      </AudienceSection>
    </>
  );
}
