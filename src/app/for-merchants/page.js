import DiscoveryLevels from '@/components/DiscoveryLevels';
import { CheckList, ExampleBox, FeasibilityBlock, ApplyCTA } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Businesses & Professionals — Reach New Customers',
  description: 'We help your business reach new, organized customers. Discover how, step by step.',
};

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      // LEVEL 1
      {
        label: 'For Businesses & Professionals',
        title: <>Reach <em className="text-gold italic">new customers.</em></>,
        summary: 'We help your business reach new, organized customers across your city and beyond.',
        cta: 'Show Me How',
      },

      // LEVEL 2 — Three bullets
      {
        label: 'How',
        title: 'Three things you do.',
        content: (
          <CheckList items={[
            'Offer a member benefit — discount, bonus, free service, or priority',
            'Get listed in MundusPASS — visible to organized member audiences',
            'Honor the benefit when members redeem — repeat engagement compounds',
          ]} />
        ),
        cta: 'Show Me Example Benefits',
      },

      // LEVEL 3 — Example benefits
      {
        label: 'Example Member Benefits',
        title: <>What kind of <em className="text-gold italic">benefit?</em></>,
        summary: 'Choose what fits your business margins. The right benefit is one you can honor every time without resenting it.',
        content: (
          <ExampleBox title="Examples Merchants Offer" items={[
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
        ),
        cta: 'Show Me Who This Is For',
      },

      // LEVEL 4 — Who this is for
      {
        label: 'Who This Is For',
        title: <>Is this <em className="text-gold italic">for you?</em></>,
        content: (
          <CheckList items={[
            'Restaurants, cafes, food trucks, and hospitality venues',
            'Retail stores — clothing, groceries, books, electronics, gifts',
            'Service businesses — repair, cleaning, beauty, fitness, wellness',
            'Licensed professionals — lawyers, accountants, doctors, dentists, real estate',
            'Trades — contractors, plumbers, electricians, mechanics',
            'Tourism and travel services',
            'Professional consultants and trainers',
          ]} />
        ),
        cta: 'Show Me What Success Looks Like',
      },

      // LEVEL 5 — Success + Apply
      {
        label: 'Success · Ready to Apply',
        title: <>Real results. <em className="text-gold italic">Real next step.</em></>,
        content: (
          <>
            <FeasibilityBlock items={[
              { value:'1', label:'Active Benefit' },
              { value:'10s-100s', label:'Local Org Members' },
              { value:'Repeat', label:'Engagement Pattern' },
              { value:'Variable', label:'Revenue Outcome' },
            ]} />
            <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto mb-7">
              Merchant outcomes depend on your benefit's appeal, your margins, and the recognized organizations near your location. Repeat engagement compounds over time — most successful merchants see growth in months 4–12.
            </p>
            <div className="max-w-3xl mx-auto bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3">Apply for Consideration</p>
              <ApplyCTA href="/apply/merchant/" label="Apply as Merchant / Professional" />
              <p className="text-[11px] text-surface-secondary mt-5">
                Individual entrepreneur offering services? See <a href="/for-entrepreneurs/" className="text-gold no-underline hover:underline">/for-entrepreneurs/ →</a>
              </p>
            </div>
          </>
        ),
      },
    ]} />
  );
}
