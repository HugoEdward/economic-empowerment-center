import { AudienceSection, AudienceProse, CheckList, ExampleBox, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Entrepreneurs — Offer Approved Member Benefits',
  description: 'Independent individuals offering products and services through approved member benefits in the MundusPASS network.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Entrepreneurs"
        title={<>Offer a real benefit. <em className="text-gold italic">Reach organized members.</em></>}
        subtitle="An Entrepreneur is an individual who independently provides products or services and wishes to participate in the MundusPASS network through an approved member benefit."
      />

      <AudienceSection label="Who Is This For?" title={<>Independent <em className="text-gold italic">individuals.</em></>}>
        <AudienceProse>
          <p>This pathway is for individual entrepreneurs — independent freelancers, small operators, side businesses, solo founders, consultants, creators, artisans, traders — who offer products or services and want to participate in the MundusPASS network.</p>
          <p>You don't need a chamber, a federation, or a large business. You need a real product, a real service, and a real offer for members.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Is It?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">The Entrepreneur pathway lets you offer products or services to participating members through an approved member benefit.</strong></p>
          <p>An approved member benefit is normally a discount, bonus, preferred pricing, preferred service, or other approved value extended to members of recognized organizations.</p>
          <p>Members of recognized organizations carry MundusPASS. When they engage with your offer, you reach a pre-organized audience — without needing to build that audience yourself.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Why Participate?">
        <CheckList items={[
          'Reach organized, opt-in audiences without building them from scratch',
          'Get visibility through recognized Member Organizations in your community',
          'Build customer relationships through repeated benefit redemptions',
          'Participate in cultural events, 1City.VIP city programs, and Passport to the World',
          'Differentiate from competitors who don\'t offer organized member value',
          'Start with a single offer — scale through sustained participation',
        ]} />
      </AudienceSection>

      <AudienceSection label="How Does It Work?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">You define an approved member benefit.</strong> The benefit is what members receive when they engage with you through MundusPASS.</p>
        </AudienceProse>
        <div className="mt-7">
          <ExampleBox title="Bonus Opportunity Examples" items={[
            '10% additional discount',
            '15% discount on first service',
            'Free 30-minute consultation',
            'Free delivery on member orders',
            'Bonus product with purchase',
            'Priority appointment booking',
            'Preferred pricing tier',
            'Buy-one-get-one for members',
          ]} />
        </div>
        <p className="text-[11px] text-surface-muted text-center mt-4 italic max-w-2xl mx-auto">
          Discounts create participation. Bonuses create excitement. Choose the benefit that fits your business and your margins.
        </p>
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <CheckList items={[
          'Define an approved member benefit that fits your business',
          'Apply for Consideration with your identity, business documentation, and proposed benefit',
          'Pass review for compliance and ethical conduct',
          'Activate your benefit through MundusPASS once approved',
          'Honor the benefit consistently for participating members',
          'Maintain compliance with processor and program rules',
          'Focus on serving members well — repeat engagement is the pathway',
        ]} />
        <div className="mt-7 max-w-2xl mx-auto bg-navy-800/50 border border-surface-border rounded-xl p-4 text-center">
          <p className="text-[11px] text-surface-secondary">
            <strong className="text-surface-primary">Note:</strong> Introducing organizations, activating organizations, and coordinating ecosystem participation are generally functions of <a href="/career-opportunities/success-liaison/" className="text-gold no-underline hover:underline">Success Liaisons</a> and <a href="/career-opportunities/" className="text-gold no-underline hover:underline">Coordinators</a>, not the Entrepreneur. The Entrepreneur's role is to offer real value to members.
          </p>
        </div>
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <AudienceProse>
          <p>Success for an Entrepreneur is <strong className="text-surface-primary">sustained, repeat engagement</strong> with members of recognized organizations — not a single transaction, not a viral campaign.</p>
          <p>A successful Entrepreneur:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Has an active benefit listed and discoverable in MundusPASS',
            'Is honored consistently when members redeem the benefit',
            'Maintains positive ratings from member redemptions',
            'Develops a base of repeat-engagement members over time',
            'Participates in city or cultural events for added visibility',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'1', label:'Approved Benefit' },
          { value:'~100s', label:'Member Reach via Org' },
          { value:'Ongoing', label:'Redemption Cycle' },
          { value:'Variable', label:'Revenue Outcome' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          Entrepreneur outcomes depend on the benefit you offer, your margins, the size and engagement of the participating organizations near you, and your ability to honor the benefit reliably over time.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/entrepreneur/" label="Apply as Entrepreneur" />
      </AudienceSection>
    </>
  );
}
