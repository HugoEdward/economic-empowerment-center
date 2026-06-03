import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';
import BonusBox from '@/components/BonusBox';

export const metadata = {
  title: 'For Entrepreneurs — New Opportunity in Your City',
  description: 'An entrepreneur joins MundusPASS to offer products and services to the member network at a 15–25% discount plus an optional Bonus.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Entrepreneurs"
        title={<>New opportunity <em className="text-gold italic">in your city.</em></>}
        subtitle="We help you reach new customers in your city — by offering a discount and a bonus."
      />

      <AudienceSection label="Who's Who">
        <AudienceProse>
          <p>This opportunity is for an <strong className="text-surface-primary">Entrepreneur</strong> to provide services or products to the membership network of MundusPASS.</p>
          <p>We consider in this category an individual who conducts business individually — organizes, manages, and assumes the risks of a business — to create economic value, often through innovation and opportunity recognition.</p>
          <p className="text-[12px] text-surface-muted italic mt-3">
            Note: This is the <strong>Entrepreneur pathway</strong> — for individuals offering products or services. If you want to help activate organizations, merchants, and city ecosystems, see the <a href="/career-opportunities/success-liaison/" className="text-gold no-underline hover:underline">Success Liaison pathway</a> instead.
          </p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">Economic Empowerment helps Entrepreneur Members transform local relationships into economic activity.</strong></p>
          <p>Members of recognized organizations carry MundusPASS. When you join as an Entrepreneur Member, your products or services become visible to those organized, opt-in audiences — pre-aligned with communities that may already trust you.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="How">
        <AudienceProse>
          <p><strong className="text-surface-primary">The Entrepreneur joins MundusPASS.net</strong> — an international network of services and product providers.</p>
          <p><strong className="text-surface-primary">Entrepreneur Members offer their services or products at a discounted rate of 15–25% to Members of the MundusPASS network.</strong></p>
          <p>In addition, Entrepreneur Members are offered the possibility to offer a <strong className="text-gold">Bonus</strong> — as an additional incentive to drive participation and excitement.</p>
        </AudienceProse>
        <div className="mt-7"><BonusBox /></div>
      </AudienceSection>

      <AudienceSection label="And Then?" dark>
        <AudienceProse>
          <p>As more merchants, membership organizations, and their members participate, <strong className="text-surface-primary">more opportunities are created for partnerships, promotions, events, visitor activity, Passport to the World experiences, and development.</strong></p>
          <p>You start with one offer. The ecosystem grows around you.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <p className="text-[11px] text-surface-muted text-center mb-5 italic">
          The Entrepreneur's role is to offer real value to members. Activation, federation, and coordinator work belong to <a href="/career-opportunities/success-liaison/" className="text-gold no-underline hover:underline">Success Liaisons</a> and <a href="/career-opportunities/" className="text-gold no-underline hover:underline">Coordinators</a>.
        </p>
        <CheckList items={[
          'Join MundusPASS.net as an Entrepreneur Member',
          'Define your 15–25% discount for ecosystem members',
          'Define your Bonus (Value · % · What It Is) — optional but recommended',
          'Apply for Consideration with your identity and business documentation',
          'Pass review for compliance and ethical conduct',
          'Honor your discount and Bonus consistently when members redeem',
          'Serve members well — repeat engagement is the pathway',
          'Maintain compliance with processor and program rules',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <AudienceProse>
          <p>A successful Entrepreneur builds <strong className="text-surface-primary">sustained, repeat engagement</strong> with members of recognized organizations — not a single transaction.</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Active discount + Bonus listed and discoverable in MundusPASS',
            'Consistent honoring of offers when members redeem',
            'Positive ratings from member redemptions over time',
            'Recognizable base of repeat-engagement members',
            'Optional participation in city events for added visibility',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'1', label:'Discount Offer' },
          { value:'+1', label:'Optional Bonus' },
          { value:'Local', label:'Member Reach' },
          { value:'Repeat', label:'Engagement Pattern' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          Entrepreneur outcomes depend on your discount + Bonus appeal, your margins, the recognized organizations near you, and your ability to honor offers reliably. Compounding revenue typically appears as repeat engagement builds over months.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/entrepreneur/" label="Apply as Entrepreneur" />
      </AudienceSection>
    </>
  );
}
