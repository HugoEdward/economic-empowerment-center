'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';
import ExampleExplainer from '@/components/ExampleExplainer';

const INPUTS = [
  { name:'tier', label:'Partnership Tier (1=Local, 5=Global)', min:1, max:5, step:1, default:3, unit:'tier' },
  { name:'orgs', label:'Organizations Reached', min:10, max:10000, step:10, default:500, unit:'orgs' },
  { name:'membersPerOrg', label:'Avg Members per Org', min:50, max:5000, step:50, default:500, unit:'members' },
  { name:'cities', label:'Cities Activated', min:1, max:100, step:1, default:10, unit:'cities' },
  { name:'events', label:'Sponsored Events per Year', min:0, max:100, step:1, default:8, unit:'events' },
  { name:'avgEventAudience', label:'Avg Event Audience', min:100, max:50000, step:100, default:2000, unit:'people' },
  { name:'campaignReach', label:'Annual Campaign Reach', min:0, max:5000000, step:10000, default:250000, unit:'people' },
  { name:'passportPartnership', label:'Passport to the World Partnership ($K)', min:0, max:2000, step:25, default:200, unit:'$K' },
];

function calculate(v) {
  const totalMembersReached = v.orgs * v.membersPerOrg;
  const totalEventAudience = v.events * v.avgEventAudience;
  const totalTouchpoints = totalMembersReached + totalEventAudience + v.campaignReach;
  const partnershipInvestment = v.tier * 50000 + v.events * 10000 + v.cities * 15000 + (v.passportPartnership * 1000);

  return {
    rangeLow: partnershipInvestment,
    rangeHigh: Math.round(partnershipInvestment * 2.5),
    hierarchyLabel: `Strategic Partnership across ${v.cities} cities, ${formatNumber(v.orgs)} organizations, ${formatNumber(totalMembersReached)} member touchpoints, ${v.events} events, and Passport / 1City.VIP programs`,
    outputs: [
      { label:'Organizations Reached', value: formatNumber(v.orgs) },
      { label:'Cities Activated', value: v.cities.toLocaleString() },
      { label:'Member Touchpoints', value: formatNumber(totalMembersReached) },
      { label:'Event Audience', value: formatNumber(totalEventAudience) },
      { label:'Campaign Reach', value: formatNumber(v.campaignReach) },
      { label:'Total Touchpoints', value: formatNumber(totalTouchpoints) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <section className="pt-20 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label justify-center mb-3">Strategic Partner</p>
          <OpportunitySimulator
            target={0}
            customHeadline="STRATEGIC PARTNERSHIP — REACH & IMPACT AT SCALE"
            rangeLabel="Illustrative Partnership Investment Range"
            inputs={INPUTS}
            calculate={calculate}
          />
        </div>
      </section>
      <ExampleExplainer>
        This example shows a tier-3 strategic partnership: 500 organizations, 250,000 members,
        10 activated cities, 8 sponsored events reaching 16,000 attendees, and a $250K annual campaign
        reach plus Passport to the World partnership. Strategic Partners include PR/marketing firms,
        corporate sponsors, tourism partners, chambers, city partners, national pavilion partners,
        professional service partners, technology/payment partners, and media partners.
        The investment range shown is illustrative — actual partnership structures are scoped under
        written agreement.
      </ExampleExplainer>
      <RoleSection title="Real impact. Real communities." cards={[
        ['What a Strategic Partner Does','Corporate, foundation, NGO, government, media, technology, or service partner engaging entire ecosystems through structured collaboration. Sponsorships, campaigns, events, programs, and long-term community engagement.'],
        ['What Must Happen','Defined partnership scope. Compliance review. Aligned community impact goals. Sustained engagement across the partnership term.'],
        ['Who Benefits','Communities receive resources. Partners reach organized, engaged multicultural audiences. Cultural visibility scales. Long-term mutual value is created.'],
      ]} />
    </>
  );
}
