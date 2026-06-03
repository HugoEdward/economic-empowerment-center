import DiscoveryLevels from '@/components/DiscoveryLevels';
import NeedsMap from '@/components/NeedsMap';
import { PhaseLegend } from '@/components/PhaseIndicator';
import { CheckList, FeasibilityBlock, ApplyCTA } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Churches & Faith Organizations — Strengthen Your Church',
  description: 'We understand what you are going through. Discover how, step by step.',
};

const CHURCH_NEEDS = [
  { num:1, need:'Sustainable Financial Stability', phase:'activating', why:'Churches everywhere struggle with irregular giving, rising costs, and limited revenue streams.', solution:'Long-term financial sustainability through micro-enterprise programs, revenue-generating community services, financial literacy training, and diversified income models. Stronger as more congregations and merchants participate.' },
  { num:2, need:'A Permanent, Adequate Worship Facility', phase:'developing', why:'Many congregations rent, share, or outgrow their spaces.', solution:'Facility development planning, partner introductions, and shared-use economic models. Built and expanded together with mature participating congregations.' },
  { num:3, need:'Consistent Member Engagement & Growth', phase:'available', why:'Churches face declining attendance and difficulty attracting new members.', solution:'Engagement frameworks, cultural visibility through Cultures Celebration programs, and member-value initiatives via MundusPASS.' },
  { num:4, need:'Leadership Development & Succession Planning', phase:'activating', why:'Pastors and ministry leaders often lack structured training and succession plans.', solution:'Direct access to ecosystem leadership advisors, governance toolkits, pastoral succession planning. Stronger as the leadership network grows.' },
  { num:5, need:'Skilled Volunteers & Ministry Workforce', phase:'activating', why:'Most churches depend heavily on volunteers but struggle to recruit and retain.', solution:'Curated volunteer-platform recommendations, skill-development workshops, operational playbooks.' },
  { num:6, need:'Community Outreach Capacity & Local Impact', phase:'activating', why:'Churches want to serve their communities but lack resources, partnerships, or programs.', solution:'Partnership development through ecosystem relationships, grant-readiness support, community service models.' },
  { num:7, need:'Youth & Young Adult Engagement', phase:'activating', why:'Younger generations are increasingly disconnected from traditional church structures.', solution:'Youth-focused entrepreneurship pathways through the Entrepreneur and 1City.VIP programs, plus cultural visibility through ICC and Passport to the World.' },
  { num:8, need:'Technology & Digital Ministry Infrastructure', phase:'activating', why:'Churches often lack modern tools for communication, administration, and digital outreach.', solution:'MundusPASS member infrastructure, digital ministry training, and platform recommendations. Stronger as more congregations onboard.' },
  { num:9, need:'Social Services & Family Support Programs', phase:'activating', why:'Congregations are expected to respond to food insecurity, immigration, family crises — but lack structured programs.', solution:'Operator-led program design support, with ready-to-deploy program templates growing as the network expands.' },
  { num:10, need:'Long-Term Organizational Sustainability', phase:'activating', why:'Without diversified income, modern systems, or strategic planning, many churches struggle to remain stable.', solution:'Strategic planning, governance strengthening, and multi-year sustainability models tailored for faith-based institutions.' },
];

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'For Churches & Faith Organizations', title:<>Strengthen <em className="text-gold italic">your church.</em></>, summary:'We understand what you are going through. We help your church serve families and stay strong.', cta:'Show Me How' },
      { label:'How', title:'Three ways we help.', content:(<CheckList items={['Strengthen families and member engagement','Connect congregants to trusted businesses and services','Build sustainable monthly income beyond Sunday offerings']} />), cta:'Show Me Who Benefits' },
      { label:'Who Benefits', title:<>Three groups <em className="text-gold italic">all benefit.</em></>, content:(
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Congregations</p><p className="text-[12px] text-surface-secondary leading-relaxed">Real economic value through MundusPASS. Programs gain stable funding. Ministry freed from constant fundraising.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Families</p><p className="text-[12px] text-surface-secondary leading-relaxed">Real savings at local merchants. Trusted professional services. Cultural events and visibility through ICC.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Local Businesses</p><p className="text-[12px] text-surface-secondary leading-relaxed">Reach a trusted, organized, regular community. Build relationships. Participate in city activation.</p></div>
        </div>
      ), cta:'Show Me The 10 Pressing Needs' },
      { label:'The 10 Pressing Needs', title:<>The 10 most pressing needs · <em className="text-gold italic">and our response.</em></>, summary:'For each pressure, a concrete response — marked with how the platform engages with you.', content:(<><div className="mb-6"><PhaseLegend /></div><NeedsMap needs={CHURCH_NEEDS} /></>), cta:'Show Me The Feasibility' },
      { label:'Feasibility · Apply', title:<>Real numbers. <em className="text-gold italic">Real next step.</em></>, content:(<>
        <FeasibilityBlock items={[{value:'200+',label:'Congregants'},{value:'30+',label:'Local Merchants'},{value:'$15-25',label:'Monthly Dues Range'},{value:'Sustained',label:'Program Funding'}]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto mb-7">A 200-member congregation with 30 participating merchants can build meaningful program-funding sustainability. Larger congregations scale proportionally.</p>
        <div className="max-w-3xl mx-auto bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <ApplyCTA href="/apply/member-organization/" label="Apply for Faith Organization Recognition" />
        </div>
      </>) },
    ]} />
  );
}
