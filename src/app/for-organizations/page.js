import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';
import NeedsMap from '@/components/NeedsMap';
import { PhaseLegend } from '@/components/PhaseIndicator';

export const metadata = {
  title: 'For Member Organizations, Churches & Chambers — Keep Your Mission Alive',
  description: 'We know what organizations face. We know the 10 most pressing universal needs. Economic Empowerment provides the structured solution for sustainability.',
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
    <>
      <AudienceHero
        tag="For Member Organizations · Churches · Chambers"
        title={<>Keep your mission alive. <em className="text-gold italic">Strengthen your organization.</em></>}
        subtitle="We help your organization stay strong — beyond donations, beyond grant cycles."
      />

      <AudienceSection label="We Know What You Face">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary text-base">We know your needs.</strong></p>
          <p>Here are the <strong className="text-surface-primary">10 most pressing, universal needs</strong> that all types of organizations face worldwide — socio-cultural, professional, youth, NGOs, sports clubs, community groups, advocacy groups. These are the core structural pressures that never go away.</p>
          <p>For each one, Economic Empowerment offers a structured response — not a slogan.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Top 10 Pressing Needs · And How EEC Addresses Each" dark>
        <div className="mb-6"><PhaseLegend /></div>
        <NeedsMap needs={TOP_10_NEEDS} />
      </AudienceSection>

      <AudienceSection label="What Economic Empowerment Provides">
        <AudienceProse>
          <p>Most organizations struggle because they depend almost entirely on donations, volunteers, and occasional fundraising. Economic Empowerment offers a different foundation:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'A Sustainable Monthly Revenue Development Program tailored to your organization',
            'A dedicated, exclusive, and paid Development Officer assigned to support you',
            'Consistent, joint focus on raising the funds your mission requires',
            'Membership growth and retention through structured engagement',
            'Meaningful member benefits delivered through MundusPASS',
            'Increased visibility through the cultural and immigrant ecosystem',
            'Connection to merchants and professionals who serve your community',
            'Participation in a larger cooperative ecosystem with shared resources',
            'Access to UN conferences (Global Forum on Migration and Development; International Cultures Conference)',
            'Yearly participation in selecting your UN Official Representative before ECOSOC',
            'Support for your organization\'s permanent physical headquarters',
            'Facilitation: skilled volunteers · staff · leadership · governance · compliance · grant management · marketing · technology · financial management · partnerships · advocacy · conflict resolution · burnout prevention · youth engagement · long-term sustainability',
          ]} />
        </div>
        <div className="mt-7 max-w-3xl mx-auto bg-gold/[0.06] border border-gold/25 rounded-2xl p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-[13px] text-surface-primary leading-relaxed font-display italic">
            "Economic Empowerment's objective is not to replace your mission. It is to <strong className="text-gold not-italic">STRENGTHEN IT.</strong>"
          </p>
        </div>
      </AudienceSection>

      <AudienceSection label="What Must I Do?" dark>
        <CheckList items={[
          'Maintain an active organization with governance and reporting',
          'Encourage member participation in the ecosystem',
          'Activate member benefits through MundusPASS',
          'Engage local merchants and professionals serving your members',
          'Participate in community and cultural initiatives',
          'Authorize a Development Officer to support sustained activation',
          'Build long-term sustainability through structured income, not single-grant dependence',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?">
        <CheckList items={[
          'Sustained monthly revenue independent of single-grant cycles',
          'Active members participating in MundusPASS ecosystem benefits',
          'Local merchant network serving your members',
          'Strong member retention through real value delivery',
          'Engaged sponsors and community partners on a sustained basis',
          'Participation in cultural events and UN programs',
          'A stronger mission with the resources to deliver it',
        ]} />
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility" dark>
        <FeasibilityBlock items={[
          { value:'~1,000', label:'Active Members' },
          { value:'~50', label:'Local Merchants' },
          { value:'$20', label:'Monthly Dues' },
          { value:'Sustainable', label:'Revenue Floor' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          A fully activated organization with ~1,000 members and ~50 participating merchants generates significant ecosystem activity. Smaller organizations scale proportionally smaller; larger organizations scale up. Outcomes depend on member retention, merchant participation, sponsor engagement, and program compliance.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration">
        <ApplyCTA href="/apply/member-organization/" label="Apply as Member Organization" />
        <p className="text-[11px] text-surface-secondary text-center mt-5">
          Faith organizations: see also <a href="/for-churches/" className="text-gold no-underline hover:underline">/for-churches/ →</a><br/>
          Chambers of Commerce: see also <a href="/for-chambers/" className="text-gold no-underline hover:underline">/for-chambers/ →</a>
        </p>
      </AudienceSection>
    </>
  );
}
