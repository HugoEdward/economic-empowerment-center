'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';

const INPUTS = [
  { name:'cities', label:'Active Cities in State / Province', min:2, max:30, step:1, default:8, unit:'cities' },
  { name:'orgsPerCity', label:'Avg Organizations per City', min:5, max:100, step:5, default:20, unit:'orgs' },
  { name:'membersPerOrg', label:'Avg Members per Organization', min:50, max:1500, step:50, default:250, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:50, step:1, default:10, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:300, step:10, default:65, unit:'$' },
  { name:'merchantsPerCity', label:'Merchants per City', min:10, max:500, step:10, default:80, unit:'merchants' },
  { name:'sponsorsPerCity', label:'Sponsors per City', min:0, max:50, step:1, default:5, unit:'sponsors' },
  { name:'stateEvents', label:'Annual State-Wide Events', min:0, max:20, step:1, default:3, unit:'events' },
  { name:'eventActivity', label:'Avg Activity per Event', min:0, max:500, step:25, default:75, unit:'$K' },
];

function calculate(v) {
  const totalOrgs = v.cities * v.orgsPerCity;
  const totalMembers = totalOrgs * v.membersPerOrg;
  const totalMerchants = v.cities * v.merchantsPerCity;
  const annualMemberDues = totalMembers * v.monthlyDues * 12;
  const annualMemberPurchases = totalMembers * v.memberPurchase * 12;
  const annualMerchantActivity = totalMerchants * 50 * 12 + totalMerchants * 100;
  const annualSponsors = v.cities * v.sponsorsPerCity * 5000;
  const annualEvents = v.stateEvents * v.eventActivity * 1000;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantActivity + annualSponsors + annualEvents;
  return {
    rangeLow: Math.round(totalActivity * 0.005),
    rangeHigh: Math.round(totalActivity * 0.015),
    outputs: [
      { label:'Total Organizations', value: formatNumber(totalOrgs) },
      { label:'Total Members Reached', value: formatNumber(totalMembers) },
      { label:'Total Merchants', value: formatNumber(totalMerchants) },
      { label:'Member Activity', value: formatCurrency(annualMemberDues + annualMemberPurchases) },
      { label:'Sponsor + Event Activity', value: formatCurrency(annualSponsors + annualEvents) },
      { label:'Total State Ecosystem', value: formatCurrency(totalActivity) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <section className="pt-20 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label justify-center mb-3">State / Province Coordinator</p>
          <OpportunitySimulator target={500000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <RoleSection title="Expand the opportunity across your state." cards={[
        ['What a State Coordinator Does','Coordinates multiple cities across a state or province. Mentors City Coordinators. Organizes state-wide events. Builds state-level partnerships and federation.'],
        ['What Must Happen','Multiple cities operating with City Coordinators. Sustained activity across cities. State-level sponsor relationships. Annual state events activating cross-city participation.'],
        ['Who Benefits','The whole state-level ecosystem strengthens. Federation of cities builds collective bargaining power. State Coordinators earn through aggregated state-wide activity.'],
      ]} />
    </>
  );
}
