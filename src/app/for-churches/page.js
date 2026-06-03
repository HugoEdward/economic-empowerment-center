import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';
import NeedsMap from '@/components/NeedsMap';

export const metadata = {
  title: 'For Churches & Faith Organizations — Strengthen Your Church',
  description: 'We understand what you are going through. 10 most pressing needs of faith organizations worldwide, each with a structured Economic Empowerment Center solution.',
};

const CHURCH_NEEDS = [
  { num:1, need:'Sustainable Financial Stability', why:'Churches everywhere struggle with irregular giving, rising costs, and limited revenue streams — making long-term ministry planning difficult.', solution:'Builds long-term financial sustainability through micro-enterprise programs, revenue-generating community services, financial literacy training, and diversified income models tailored for faith-based organizations.' },
  { num:2, need:'A Permanent, Adequate Worship Facility', why:'Many congregations rent, share, or outgrow their spaces, limiting their ability to serve, gather, and expand programs.', solution:'Facility development planning, access to capital partners, shared-use economic models, and community enterprise strategies that help churches acquire, renovate, or monetize their buildings.' },
  { num:3, need:'Consistent Member Engagement & Growth', why:'Churches face declining attendance, inconsistent participation, and difficulty attracting new members in a rapidly changing cultural environment.', solution:'Engagement frameworks, digital outreach tools, community impact programs, and member-value initiatives that strengthen participation and attract new families.' },
  { num:4, need:'Leadership Development & Succession Planning', why:'Pastors and ministry leaders often lack structured training, and many churches have no plan for future leadership transitions.', solution:'Leadership academies, governance training, pastoral succession planning, and capacity-building programs for clergy and ministry teams.' },
  { num:5, need:'Skilled Volunteers & Ministry Workforce', why:'Most churches depend heavily on volunteers, yet struggle to recruit, train, and retain people with the skills needed for effective ministry.', solution:'Volunteer pipeline systems, skill-development workshops, workforce-readiness programs, and structured ministry team development.' },
  { num:6, need:'Community Outreach Capacity & Local Impact', why:'Churches want to serve their communities but lack the resources, partnerships, or programs to meet local needs consistently.', solution:'Turnkey outreach programs, partnership development, grant-readiness support, and community service models that generate both impact and sustainability.' },
  { num:7, need:'Youth & Young Adult Engagement', why:'Younger generations are increasingly disconnected from traditional church structures, creating a widening generational gap.', solution:'Youth-focused entrepreneurship programs, digital engagement strategies, leadership pipelines, and community-based initiatives that resonate with younger audiences.' },
  { num:8, need:'Technology & Digital Ministry Infrastructure', why:'Churches often lack modern tools for livestreaming, communication, administration, and digital outreach — limiting their reach and relevance.', solution:'Digital transformation support, low-cost tech solutions, training for digital ministry, and access to platforms that expand reach and operational efficiency.' },
  { num:9, need:'Social Services & Family Support Programs', why:'Congregations are expected to respond to rising needs — food insecurity, mental health, immigration, family crises — but lack structured programs.', solution:'Ready-to-deploy programs for food security, family support, financial empowerment, immigration assistance, and crisis response services.' },
  { num:10, need:'Long-Term Organizational Sustainability', why:'Without diversified income, modern systems, or strategic planning, many churches struggle to remain stable and future-ready.', solution:'Strategic planning, governance strengthening, economic development pathways, and multi-year sustainability models tailored for faith-based institutions.' },
];

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Churches & Faith Organizations"
        title={<>Strengthen <em className="text-gold italic">your church.</em></>}
        subtitle="We understand what you are going through. We are here to support you. A pathway for churches, mosques, temples, congregations, and faith-based communities to build sustainability without sacrificing mission."
      />

      <AudienceSection label="We Understand What You Face">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary text-base">Strengthen engagement. Create additional member value. Support families. Encourage local participation.</strong></p>
          <p>Connect congregants with trusted businesses, services, cultural programs, and community opportunities — through a structured framework that respects your traditions, autonomy, and pastoral leadership.</p>
          <p>For each of the 10 most pressing needs faith organizations face worldwide, Economic Empowerment offers a concrete response.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="10 Most Pressing Needs Churches Face Worldwide · And How EEC Addresses Each" dark>
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
