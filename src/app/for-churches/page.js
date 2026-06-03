import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';
import NeedsMap from '@/components/NeedsMap';
import { PhaseLegend } from '@/components/PhaseIndicator';

export const metadata = {
  title: 'For Churches & Faith Organizations — Strengthen Your Church',
  description: 'We understand what you are going through. 10 most pressing needs of faith organizations worldwide, each with a structured Economic Empowerment Center solution.',
};

const CHURCH_NEEDS = [
  { num:1, need:'Sustainable Financial Stability', phase:'activating', why:'Churches everywhere struggle with irregular giving, rising costs, and limited revenue streams — making long-term ministry planning difficult.', solution:'Long-term financial sustainability through micro-enterprise programs, revenue-generating community services, financial literacy training, and diversified income models. Activates per cohort as Stripe processing is provisioned for each recognized faith organization.' },
  { num:2, need:'A Permanent, Adequate Worship Facility', phase:'developing', why:'Many congregations rent, share, or outgrow their spaces, limiting their ability to serve, gather, and expand programs.', solution:'Facility development planning, partner introductions, and shared-use economic models. Formal capital-partner programs activate with mature congregations in Phase 2–3.' },
  { num:3, need:'Consistent Member Engagement & Growth', phase:'available', why:'Churches face declining attendance, inconsistent participation, and difficulty attracting new members in a rapidly changing cultural environment.', solution:'Engagement frameworks, cultural visibility through ICC programs, and member-value initiatives via MundusPASS as the merchant network activates locally.' },
  { num:4, need:'Leadership Development & Succession Planning', phase:'activating', why:'Pastors and ministry leaders often lack structured training, and many churches have no plan for future leadership transitions.', solution:'Direct access to ecosystem leadership advisors, governance toolkits, pastoral succession planning frameworks. Formal Leadership Academy in development for Phase 2.' },
  { num:5, need:'Skilled Volunteers & Ministry Workforce', phase:'activating', why:'Most churches depend heavily on volunteers, yet struggle to recruit, train, and retain people with the skills needed for effective ministry.', solution:'Curated volunteer-platform recommendations, skill-development workshops, and operational playbooks. Native ministry-team development tools are in Phase 2 development.' },
  { num:6, need:'Community Outreach Capacity & Local Impact', phase:'activating', why:'Churches want to serve their communities but lack the resources, partnerships, or programs to meet local needs consistently.', solution:'Partnership development through ecosystem relationships, grant-readiness support, and community service models. Turnkey program packages are in Phase 2 development.' },
  { num:7, need:'Youth & Young Adult Engagement', phase:'activating', why:'Younger generations are increasingly disconnected from traditional church structures, creating a widening generational gap.', solution:'Youth-focused entrepreneurship pathways through the Entrepreneur and 1City.VIP programs, plus cultural visibility through ICC parades and Passport to the World.' },
  { num:8, need:'Technology & Digital Ministry Infrastructure', phase:'activating', why:'Churches often lack modern tools for livestreaming, communication, administration, and digital outreach — limiting their reach and relevance.', solution:'MundusPASS member infrastructure activates per-cohort. Digital ministry training and platform recommendations are available today. Member-facing app and dashboards are Phase 2.' },
  { num:9, need:'Social Services & Family Support Programs', phase:'activating', why:'Congregations are expected to respond to rising needs — food insecurity, mental health, immigration, family crises — but lack structured programs.', solution:'Operator-led program design support for first cohort. Ready-to-deploy program templates for food security, family support, immigration assistance, and crisis response are in Phase 2 development.' },
  { num:10, need:'Long-Term Organizational Sustainability', phase:'activating', why:'Without diversified income, modern systems, or strategic planning, many churches struggle to remain stable and future-ready.', solution:'Strategic planning, governance strengthening, and multi-year sustainability models tailored for faith-based institutions. Full multi-year planning frameworks activate as your organization\'s revenue floor stabilizes.' },
];

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Churches & Faith Organizations"
        title={<>Strengthen <em className="text-gold italic">your church.</em></>}
        subtitle="We understand what you are going through. We help your church serve families and stay strong."
      />

      <AudienceSection label="We Understand What You Face">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary text-base">Strengthen engagement. Create additional member value. Support families. Encourage local participation.</strong></p>
          <p>Connect congregants with trusted businesses, services, cultural programs, and community opportunities — through a structured framework that respects your traditions, autonomy, and pastoral leadership.</p>
          <p>For each of the 10 most pressing needs faith organizations face worldwide, Economic Empowerment offers a concrete response.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="10 Most Pressing Needs Churches Face Worldwide · And How EEC Addresses Each" dark>
        <div className="mb-6"><PhaseLegend /></div>
        <NeedsMap needs={CHURCH_NEEDS} />
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <CheckList items={[
          'Apply as a Member Organization with your governing documents',
          'Provide tax-exempt status (501(c)(3) or country equivalent)',
          'Designate authorized leadership (pastor, board, deacons, council)',
          'Communicate the program to your congregation',
          'Authorize a Development Officer to support member activation',
          'Maintain your traditions, doctrine, and community identity',
          'Engage congregants on a voluntary, no-pressure basis',
          'Report participation in line with governance and reporting standards',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <CheckList items={[
          'A meaningful share of your congregation actively participating',
          'A network of local merchants serving congregational families',
          'Youth, senior, and community programs strengthened by sustainable revenue',
          'Full pastoral, doctrinal, and traditional identity preserved',
          'Visibility through ICC, Passport to the World, and city programs',
          'Long-term community relationships beyond weekly worship',
          'Ministry freed from constant emergency fundraising',
        ]} />
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'200+', label:'Congregants' },
          { value:'30+', label:'Local Merchants' },
          { value:'$15-25', label:'Monthly Dues Range' },
          { value:'Sustained', label:'Program Funding' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          A 200-member congregation with 30 participating merchants can build meaningful program-funding sustainability. Larger congregations scale proportionally. Outcomes depend on congregational engagement and merchant participation.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/member-organization/" label="Apply for Faith Organization Recognition" />
      </AudienceSection>
    </>
  );
}
