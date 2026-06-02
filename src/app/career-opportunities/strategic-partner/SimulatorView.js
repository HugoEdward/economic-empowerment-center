'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';

const INPUTS = [
  { name:'tier', label:'Partnership Tier (1=Local, 5=Global)', min:1, max:5, step:1, default:3, unit:'tier' },
  { name:'orgs', label:'Organizations Reached', min:10, max:5000, step:10, default:300, unit:'orgs' },
  { name:'membersPerOrg', label:'Avg Members per Org', min:50, max:1500, step:50, default:300, unit:'members' },
  { name:'events', label:'Sponsored Events per Year', min:0, max:50, step:1, default:5, unit:'events' },
  { name:'avgEventAudience', label:'Avg Event Audience', min:100, max:10000, step:100, default:1500, unit:'people' },
  { name:'campaignReach', label:'Annual Campaign Reach', min:0, max:1000000, step:10000, default:100000, unit:'people' },
];

function calculate(v) {
  const totalMembersReached = v.orgs * v.membersPerOrg;
  const totalEventAudience = v.events * v.avgEventAudience;
  const totalTouchpoints = totalMembersReached + totalEventAudience + v.campaignReach;
  const partnershipInvestment = v.tier * 25000 + v.events * 5000;
  return {
    rangeLow: partnershipInvestment,
    rangeHigh: partnershipInvestment * 3,
    outputs: [
      { label:'Organizations Reached', value: formatNumber(v.orgs) },
      { label:'Member Touchpoints', value: formatNumber(totalMembersReached) },
      { label:'Event Audience', value: formatNumber(totalEventAudience) },
      { label:'Campaign Reach', value: formatNumber(v.campaignReach) },
      { label:'Total Touchpoints', value: formatNumber(totalTouchpoints) },
      { label:'Partnership Investment Range', value: formatCurrency(partnershipInvestment) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <section className="pt-20 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label justify-center mb-3">Strategic Partner</p>
          <OpportunitySimulator target={0} inputs={INPUTS} calculate={calculate} />
          <p className="text-[10px] text-surface-muted text-center mt-3 italic">
            For Strategic Partners, the range above shows Illustrative Partnership Investment, not personal earnings.
          </p>
        </div>
      </section>
      <RoleSection title="Real impact. Real communities." cards={[
        ['What a Strategic Partner Does','Corporate, foundation, NGO, or government partner engaging entire ecosystems through structured collaboration. Sponsorships, campaigns, events, programs, and long-term community engagement.'],
        ['What Must Happen','Defined partnership scope. Compliance review. Aligned community impact goals. Sustained engagement across the partnership term.'],
        ['Who Benefits','Communities receive resources. Partners reach organized, engaged multicultural audiences. Cultural visibility scales. Long-term mutual value is created.'],
      ]} />
    </>
  );
}
