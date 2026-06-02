'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';

const INPUTS = [
  { name:'states', label:'Active States / Provinces', min:1, max:50, step:1, default:10, unit:'states' },
  { name:'citiesPerState', label:'Avg Cities per State', min:2, max:30, step:1, default:6, unit:'cities' },
  { name:'orgsPerCity', label:'Avg Organizations per City', min:5, max:100, step:5, default:20, unit:'orgs' },
  { name:'membersPerOrg', label:'Avg Members per Organization', min:50, max:1500, step:50, default:200, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:50, step:1, default:10, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:300, step:10, default:60, unit:'$' },
  { name:'merchantsPerCity', label:'Merchants per City', min:10, max:500, step:10, default:60, unit:'merchants' },
  { name:'nationalSponsors', label:'National Sponsors', min:0, max:50, step:1, default:5, unit:'sponsors' },
  { name:'sponsorValue', label:'Avg National Sponsor Annual', min:0, max:500, step:10, default:100, unit:'$K' },
  { name:'nationalEvents', label:'National Annual Events', min:0, max:20, step:1, default:2, unit:'events' },
];

function calculate(v) {
  const totalCities = v.states * v.citiesPerState;
  const totalOrgs = totalCities * v.orgsPerCity;
  const totalMembers = totalOrgs * v.membersPerOrg;
  const totalMerchants = totalCities * v.merchantsPerCity;
  const annualMemberDues = totalMembers * v.monthlyDues * 12;
  const annualMemberPurchases = totalMembers * v.memberPurchase * 12;
  const annualMerchantActivity = totalMerchants * 50 * 12;
  const annualSponsors = v.nationalSponsors * v.sponsorValue * 1000;
  const annualEvents = v.nationalEvents * 250000;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantActivity + annualSponsors + annualEvents;
  return {
    rangeLow: Math.round(totalActivity * 0.003),
    rangeHigh: Math.round(totalActivity * 0.010),
    outputs: [
      { label:'Total Cities', value: formatNumber(totalCities) },
      { label:'Total Organizations', value: formatNumber(totalOrgs) },
      { label:'Total Members Reached', value: formatNumber(totalMembers) },
      { label:'Total Merchants', value: formatNumber(totalMerchants) },
      { label:'National Sponsor Activity', value: formatCurrency(annualSponsors) },
      { label:'Total National Ecosystem', value: formatCurrency(totalActivity) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <section className="pt-20 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label justify-center mb-3">National Coordinator</p>
          <OpportunitySimulator target={1000000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <RoleSection title="Open national doors." cards={[
        ['What a National Coordinator Does','Builds national-level relationships, sponsor partnerships, federation structures, and country-wide activation pathways. Mentors State Coordinators. Organizes national events.'],
        ['What Must Happen','Multiple states operating with State Coordinators. National sponsor relationships established. Cross-state events. Federation governance. Country-wide compliance.'],
        ['Who Benefits','The country-wide ecosystem matures. National brands engage organized communities. Cultural visibility scales. National Coordinators earn through national-scale ecosystem activity.'],
      ]} />
    </>
  );
}
