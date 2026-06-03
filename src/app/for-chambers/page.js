import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';
import NeedsMap from '@/components/NeedsMap';

export const metadata = {
  title: 'For Chambers of Commerce — New Value for Members',
  description: '10 most pressing needs of Chambers worldwide, each with a structured Economic Empowerment Center solution. Give member businesses access to additional visibility, customers, and partnerships.',
};

const CHAMBER_NEEDS = [
  { num:1, need:'Sustainable Revenue & Financial Stability', why:'Chambers worldwide struggle with declining dues, rising costs, and unpredictable funding.', solution:'Revenue-generating programs, shared services, sponsorship pathways, grant-readiness support, and monetizable member benefits that stabilize Chamber finances.' },
  { num:2, need:'Membership Growth & Retention', why:'Chambers must constantly attract new members while keeping existing ones engaged.', solution:'High-value benefits, business support services, training programs, and digital tools that increase both new-member acquisition and renewal rates.' },
  { num:3, need:'Clear, Modern Value Proposition', why:'Businesses demand measurable ROI; traditional networking alone is no longer enough.', solution:'A ready-made suite of impactful programs, services, and measurable outcomes Chambers can offer immediately — strengthening the value story.' },
  { num:4, need:'Workforce Development & Talent Pipeline', why:'Businesses everywhere face labor shortages and skill gaps.', solution:'Workforce-readiness programs, employer pipelines, upskilling workshops, and training partnerships Chambers can deploy locally.' },
  { num:5, need:'Small Business & Entrepreneurship Support', why:'Most Chamber members are small businesses needing hands-on help to survive and grow.', solution:'Coaching, financial literacy, micro-enterprise support, startup tools, and entrepreneurship programs Chambers can offer directly to members.' },
  { num:6, need:'Advocacy & Government Influence', why:'Chambers must represent business interests but often lack research, data, or policy capacity.', solution:'Policy briefs, economic data, research, and advocacy tools that strengthen Chamber influence with government — including UN ECOSOC participation pathways.' },
  { num:7, need:'Digital Transformation (Chamber + Members)', why:'Many Chambers and their members lag in technology, automation, and digital marketing.', solution:'Digital training, e-commerce support, modern tech tools, and digital adoption programs for both Chambers and their business members.' },
  { num:8, need:'Partnerships & Sponsorship Development', why:'Chambers need corporate, government, and nonprofit partners to expand resources and impact.', solution:'Connections to national/global partners, government agencies, funders, and sponsorship opportunities through the ecosystem.' },
  { num:9, need:'Branding, Marketing & Visibility', why:'Many Chambers struggle with low visibility or outdated public perception.', solution:'Marketing content, communication strategies, campaigns, and co-branding through CulturesCelebration.com, ImmigrantsAlliance.org, and 1City.VIP.' },
  { num:10, need:'Leadership Capacity & Long-Term Sustainability', why:'Boards, staff, and volunteers often lack training, structure, or succession planning.', solution:'Governance training, board development, leadership coaching, succession planning, and strategic planning tools to strengthen long-term sustainability.' },
];

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Chambers of Commerce"
        title={<>New value <em className="text-gold italic">for your members.</em></>}
        subtitle="Give member businesses access to additional visibility, customers, partnerships, events, tourism opportunities, cultural initiatives, and participation in a larger economic ecosystem."
      />

      <AudienceSection label="We Know What Chambers Face">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary text-base">Chambers worldwide face the same 10 pressing structural pressures.</strong></p>
          <p>From declining dues to digital transformation, from workforce shortages to leadership succession — these are the constant needs that never go away. For each one, Economic Empowerment offers a concrete response.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="10 Most Pressing Chamber Needs · And How EEC Addresses Each" dark>
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
