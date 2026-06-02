import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Chambers of Commerce — New Value for Your Members',
  description: 'Pathway for Chambers, BIDs, and trade associations to deliver new value to member businesses and activate local economies.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Chambers of Commerce"
        title={<>New value <em className="text-gold italic">for your members.</em></>}
        subtitle="A pathway for Chambers of Commerce, Business Improvement Districts, and trade associations to deliver new measurable value to member businesses and activate local economic ecosystems."
      />

      <AudienceSection label="Who Is This For?" title={<>Chambers, BIDs, and <em className="text-gold italic">trade federations.</em></>}>
        <AudienceProse>
          <p>This pathway is for organizations representing a base of member businesses:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Chambers of Commerce (local, regional, ethnic, multicultural)',
            'Business Improvement Districts (BIDs)',
            'Trade associations and industry federations',
            'Merchant associations and small business coalitions',
            'Tourism boards and convention/visitor bureaus',
            'Multicultural and immigrant business federations',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="What Is It?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">A framework that turns Chamber membership into measurable economic value.</strong></p>
          <p>Member businesses gain access to organized member audiences through Member Organizations recognized by the ecosystem. The Chamber gains a real, demonstrable value-add that justifies and grows membership — beyond networking events and newsletters.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Why Participate?">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How Chambers create value for member businesses:</strong></p>
        </AudienceProse>
        <div className="mt-3 mb-7">
          <CheckList items={[
            'Connect member businesses to organized, opt-in customer bases',
            'Differentiate Chamber membership through tangible economic value',
            'Activate cross-promotion between member businesses and community organizations',
            'Deliver measurable visibility and engagement metrics to members',
          ]} />
        </div>
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How merchants gain visibility:</strong></p>
        </AudienceProse>
        <div className="mt-3 mb-7">
          <CheckList items={[
            'Listed in MundusPASS with their approved member benefits',
            'Featured at city, cultural, and Passport to the World events',
            'Reach Member Organizations whose audiences match their target customers',
            'Build repeat-customer relationships through sustained engagement',
          ]} />
        </div>
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How local economies benefit:</strong></p>
        </AudienceProse>
        <div className="mt-3">
          <CheckList items={[
            'Money flows between local organizations and local businesses, not to outside platforms',
            'Tourism activity through Passport to the World adds outside revenue',
            'City activation through 1City.VIP coordinates ecosystem growth',
            'Cultural events through ICC bring visibility and pride to the city',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="How Does It Work?" dark>
        <AudienceProse>
          <p>The Chamber applies for recognition through the S.E.E.D. program with its governing documents and member business roster.</p>
          <p>Once recognized, the Chamber coordinates with the ecosystem to:</p>
          <p>
            <strong className="text-surface-primary">→ Onboard member businesses</strong> as MundusPASS-participating merchants offering approved member benefits.<br/>
            <strong className="text-surface-primary">→ Connect to local Member Organizations</strong> whose members will engage with member-business benefits.<br/>
            <strong className="text-surface-primary">→ Coordinate city-level activation</strong> through 1City.VIP — restaurants, hospitality, tourism, retail, professional services.<br/>
            <strong className="text-surface-primary">→ Participate in cultural programming</strong> through International Cultures Celebration and Passport to the World.<br/>
            <strong className="text-surface-primary">→ Provide measurable value metrics</strong> back to member businesses — visibility, engagement, redemptions, repeat customers.
          </p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <CheckList items={[
          'Submit Chamber governing documents and charter',
          'Provide member business roster and category breakdown',
          'Verify Chamber operating address and active status',
          'Designate authorized Chamber officers',
          'Acknowledge S.E.E.D. Rules and federation requirements',
          'Communicate the program to your member businesses',
          'Coordinate member business onboarding to MundusPASS',
          'Facilitate connections to local Member Organizations',
          'Maintain Chamber compliance and reporting standards',
          'Engage in city-level coordination with 1City.VIP',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <AudienceProse>
          <p>A successful recognized Chamber:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Has a meaningful share of member businesses registered as MundusPASS merchants',
            'Reports tangible engagement metrics to member businesses',
            'Drives measurable foot traffic and revenue to participating businesses',
            'Coordinates city-wide activation with 1City.VIP',
            'Engages member businesses in cultural and tourism programs',
            'Renews and grows membership through demonstrated value',
            'Builds reputation as the Chamber that delivers, not just convenes',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'200+', label:'Member Businesses' },
          { value:'30-50%', label:'Initial Activation' },
          { value:'Multi-Org', label:'Connections' },
          { value:'Citywide', label:'1City.VIP Engagement' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          A 200-member Chamber activating 30–50% of its member businesses as merchants generates significant ecosystem engagement. Larger Chambers scale proportionally. Outcomes depend on member business participation and coordination with local Member Organizations.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/chamber/" label="Apply as Chamber / Association" />
      </AudienceSection>
    </>
  );
}
