import DiscoveryLevels from '@/components/DiscoveryLevels';
import NeedsMap from '@/components/NeedsMap';
import { PhaseLegend } from '@/components/PhaseIndicator';
import { CheckList, FeasibilityBlock, ApplyCTA } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Organizations · Churches · Chambers — Keep Your Mission Alive',
  description: 'We help your organization stay strong — beyond donations, beyond grant cycles. Discover how, step by step.',
};

const TOP_10_NEEDS = [
  { num:1, need:'Sustainable Monthly Income', phase:'activating', why:'Organizations everywhere struggle to generate predictable revenue to cover rent, utilities, staff, and programs. Without stable income, everything else becomes fragile.', solution:'Sustainable Monthly Revenue Development Program — structured income from member dues, merchant participation, sponsorships, MundusPASS transactions, and cultural-tourism activity. Activates per cohort as Stripe Connect processing is provisioned for each recognized organization.' },
  { num:2, need:'A Permanent or Affordable Physical Space', phase:'developing', why:'Most organizations lack a place to gather, deliver services, or store equipment. Rent is often their biggest burden.', solution:'Long-term support for facility planning, partner introductions as the network grows, and shared-use economic models. Pilot facility programs activate with mature organizations in Phase 2–3.' },
  { num:3, need:'Skilled, Reliable Volunteers', phase:'activating', why:'Organizations depend on volunteers, but volunteers come and go, skills vary, and burnout is common — creating operational instability.', solution:'Curated volunteer-platform recommendations, ecosystem discount partnerships, and operational playbooks developed from 49 years of community organizing experience. Native MundusPASS volunteer features are in development.' },
  { num:4, need:'Professional Staff & Administrative Capacity', phase:'activating', why:'They need administrators, program coordinators, finance managers, and communications staff — but most cannot afford them.', solution:'A dedicated Development Officer is assigned as the network activates in your region. First cohort onboarding occurs in months 1–6 of program participation. Confidential compensation and contracting are managed through Mundus.Center.' },
  { num:5, need:'Leadership Development & Governance', phase:'activating', why:'Boards and leaders often lack training in strategy, compliance, fundraising, and conflict management. Weak governance limits growth.', solution:'Direct access to the founder and ecosystem governance experts, operator-developed governance toolkits, and quarterly leadership webinars. A formal Leadership Academy launches as the network reaches scale.' },
  { num:6, need:'Membership Growth & Engagement', phase:'available', why:'Whether youth club, chamber, or NGO — keeping members active and attracting new ones is a constant struggle.', solution:'Visibility through the International Cultures–Immigrants Parade (41 annual editions), International Cultures Conference at the UN, Passport to the World, and 1City.VIP. Member engagement frameworks and meaningful benefits through MundusPASS as the merchant network activates city by city.' },
  { num:7, need:'Funding & Fundraising Systems', phase:'activating', why:'Organizations need grants, sponsorships, donor programs, and events — but few have the skills or systems to raise money consistently.', solution:'Sponsorship pathway introduction through ecosystem relationships, grant readiness workshops, and a structured revenue floor through member-merchant-sponsor activation. Direct grant writing services activate in Phase 2 as the program scales.' },
  { num:8, need:'Marketing, Visibility & Community Awareness', phase:'available', why:'Most organizations remain invisible — lacking branding, social media, outreach, and communication tools. If people don\'t know they exist, they cannot grow.', solution:'Real visibility today through CulturesCelebration.com, ImmigrantsAlliance.org, the International Cultures–Immigrants Parade (hundreds of thousands of attendees annually), International Cultures Conference at the UN, and 1City.VIP city activation as each city onboards.' },
  { num:9, need:'Program Development & Service Quality', phase:'activating', why:'They must constantly create new programs, improve existing ones, and adapt to community needs — but lack expertise, data, and resources.', solution:'Direct access to the founder\'s expert network, partnership development across the ecosystem, and impact-measurement frameworks. A full expert directory and standardized program-evaluation methodology are being built in Phase 2.' },
  { num:10, need:'Technology, Digital Tools & Data Management', phase:'activating', why:'Organizations struggle with websites, CRMs, online payments, data tracking, and cybersecurity. Digital weakness limits impact and credibility.', solution:'MundusPASS infrastructure and member data systems are architecturally built and activate per-cohort as Stripe Connect processing and admin dashboards are provisioned. Member-facing mobile app and per-organization admin dashboards are in development for Phase 2.' },
];

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      // LEVEL 1 — ONE SCREEN. One promise. One button.
      {
        label: 'For Organizations · Churches · Chambers',
        title: <>Keep your mission alive. <em className="text-gold italic">Stay strong.</em></>,
        summary: 'We help your organization stay strong — beyond donations, beyond grant cycles.',
        cta: 'Show Me How',
      },

      // LEVEL 2 — Three bullets. The simplest possible explanation.
      {
        label: 'How',
        title: 'Three ways we help.',
        content: (
          <CheckList items={[
            'Grow your members and merchants — through MundusPASS',
            'Make you visible — through the Parade, Cultures Celebration, the UN',
            'Build sustainable monthly income — beyond grants and donations',
          ]} />
        ),
        cta: 'Show Me What That Looks Like',
      },

      // LEVEL 3 — What this looks like in practice.
      {
        label: 'In Practice',
        title: <>What does it <em className="text-gold italic">look like for you?</em></>,
        content: (
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Your Members</p>
              <p className="text-[13px] text-surface-secondary leading-relaxed">Receive real discounts and bonuses through MundusPASS at local merchants. Your value to them grows beyond your annual dues.</p>
            </div>
            <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Your Merchants</p>
              <p className="text-[13px] text-surface-secondary leading-relaxed">Local restaurants, professionals, and service providers register as MundusPASS partners. They reach your members; your members get value.</p>
            </div>
            <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Your Sponsors</p>
              <p className="text-[13px] text-surface-secondary leading-relaxed">Engage with concrete community-impact metrics. Real visibility, measurable engagement, sustained partnerships.</p>
            </div>
            <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Your Visibility</p>
              <p className="text-[13px] text-surface-secondary leading-relaxed">International Cultures–Immigrants Parade (41 annual editions). International Cultures Conference at the UN. 1City.VIP in your city. Passport to the World.</p>
            </div>
          </div>
        ),
        cta: 'Show Me The 10 Needs We Solve',
      },

      // LEVEL 4 — The full Top 10 Needs framework.
      {
        label: 'We Know Your Needs',
        title: <>The 10 universal needs · <em className="text-gold italic">and our response.</em></>,
        summary: 'These are the structural pressures every organization faces. Each one has a concrete response — marked with how soon you can expect it.',
        content: (
          <>
            <div className="mb-6"><PhaseLegend /></div>
            <NeedsMap needs={TOP_10_NEEDS} />
          </>
        ),
        cta: 'Show Me The Feasibility',
      },

      // LEVEL 5 — Feasibility numbers + apply.
      {
        label: 'Feasibility · Ready to Apply',
        title: <>Real numbers. <em className="text-gold italic">Real next step.</em></>,
        content: (
          <>
            <FeasibilityBlock items={[
              { value:'~1,000', label:'Active Members' },
              { value:'~50', label:'Local Merchants' },
              { value:'$20', label:'Monthly Dues' },
              { value:'Sustainable', label:'Revenue Floor' },
            ]} />
            <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto mb-7">
              A fully activated organization with ~1,000 members and ~50 participating merchants generates significant ecosystem activity. Smaller and larger organizations scale proportionally.
            </p>
            <div className="max-w-3xl mx-auto bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="text-[14px] text-surface-primary leading-relaxed font-display italic mb-6">
                "Economic Empowerment's objective is not to replace your mission. It is to <strong className="text-gold not-italic">STRENGTHEN IT.</strong>"
              </p>
              <ApplyCTA href="/apply/member-organization/" label="Apply for Consideration" />
            </div>
            <p className="text-[11px] text-surface-secondary text-center mt-7">
              Faith organizations: see also <a href="/for-churches/" className="text-gold no-underline hover:underline">/for-churches/ →</a><br/>
              Chambers of Commerce: see also <a href="/for-chambers/" className="text-gold no-underline hover:underline">/for-chambers/ →</a>
            </p>
          </>
        ),
      },
    ]} />
  );
}
