import { AudienceSection, AudienceProse, CheckList, ExampleBox, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Merchants & Professionals — Reach Organized Customers',
  description: 'Pathway for businesses and professionals to reach organized member audiences through approved member benefits in the MundusPASS network.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Merchants & Professionals"
        title={<>Reach <em className="text-gold italic">organized customers.</em></>}
        subtitle="Offer approved member benefits to reach organized, opt-in audiences from recognized Member Organizations across your city and beyond."
      />

      <AudienceSection label="Who Is This For?" title={<>Businesses and <em className="text-gold italic">licensed professionals.</em></>}>
        <AudienceProse>
          <p>This pathway is for established businesses and licensed professionals who want to participate in the MundusPASS network:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Restaurants, cafes, food trucks, and hospitality venues',
            'Retail stores — clothing, groceries, books, electronics, gifts',
            'Service businesses — repair, cleaning, beauty, fitness, wellness',
            'Licensed professionals — lawyers, accountants, doctors, dentists, real estate',
            'Trades — contractors, plumbers, electricians, mechanics',
            'Tourism and travel services',
            'Professional consultants and trainers',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="What Is It?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">The Merchant pathway connects your business to organized communities through approved member benefits.</strong></p>
          <p>Recognized Member Organizations carry MundusPASS for their members. When you become a participating merchant, your business is visible to those organized audiences — pre-qualified, opt-in, and aligned with the communities you already serve.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Why Participate?">
        <CheckList items={[
          'Reach organized customer audiences instead of building them from scratch',
          'Build repeat-customer relationships through benefit redemptions',
          'Differentiate from competitors who don\'t offer organized member value',
          'Increase visibility in city activation (1City.VIP) and cultural events (ICC)',
          'Connect with tourism through Passport to the World participation',
          'Trade short-term discount margin for long-term customer loyalty',
        ]} />
      </AudienceSection>

      <AudienceSection label="How Does It Work?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">You define an approved member benefit and register with MundusPASS.</strong> Members of recognized organizations engage with your benefit, redeem it through MundusPASS, and become part of your repeat-customer base.</p>
        </AudienceProse>
        <div className="mt-7">
          <ExampleBox title="Example Member Benefits" items={[
            '10% discount on all services',
            '15% discount on first visit',
            'Free consultation (30 min)',
            'Priority appointment',
            'Bonus service add-on',
            'Preferred pricing tier',
            'Buy-one-get-one offer',
            'Free delivery on member orders',
            'Loyalty stamps faster',
            'Family/group discounts',
          ]} />
        </div>
        <p className="text-[11px] text-surface-muted text-center mt-4 italic max-w-2xl mx-auto">
          Offer what fits your margins. The right benefit is one you can honor consistently, every time, without resenting it.
        </p>
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <CheckList items={[
          'Submit business registration and licensing documentation',
          'Provide tax identification (encrypted on submission)',
          'Verify business operating address',
          'Provide owner government identification',
          'Show evidence of active business operations',
          'Define your approved member benefit',
          'Pass compliance and ethical conduct review',
          'Integrate MundusPASS at your point of sale or service',
          'Honor your member benefit consistently for participating members',
          'Sustain monthly merchant participation',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <AudienceProse>
          <p>A successful participating merchant:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Has an active, listed member benefit in MundusPASS',
            'Is reliably honored when members present their MundusPASS',
            'Maintains positive ratings from member redemptions',
            'Has a recognizable cluster of repeat-engagement members from local organizations',
            'Participates in city activation (1City.VIP) when relevant',
            'Receives referrals from Member Organizations to their members',
            'Sees compounding revenue from organized community engagement',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'1', label:'Active Benefit' },
          { value:'10s-100s', label:'Local Org Members' },
          { value:'Repeat', label:'Engagement Pattern' },
          { value:'Variable', label:'Revenue Outcome' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          Merchant outcomes depend on your benefit's appeal, your margins, the recognized organizations near your location, and your ability to honor the benefit consistently. Repeat engagement compounds over time — most successful merchants see growth in months 4–12.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/merchant/" label="Apply as Merchant / Professional" />
      </AudienceSection>
    </>
  );
}
