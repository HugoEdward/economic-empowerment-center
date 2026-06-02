'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';

const INPUTS = [
  { name:'orgs', label:'Active Organizations in City', min:5, max:100, step:5, default:25, unit:'orgs' },
  { name:'members', label:'Avg Members per Organization', min:50, max:1500, step:50, default:300, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:50, step:1, default:10, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:300, step:10, default:75, unit:'$' },
  { name:'merchants', label:'Participating Merchants', min:10, max:500, step:10, default:100, unit:'merchants' },
  { name:'restaurants', label:'Participating Restaurants', min:0, max:200, step:5, default:30, unit:'venues' },
  { name:'hospitality', label:'Hospitality Venues (Hotels/B&Bs)', min:0, max:100, step:1, default:8, unit:'venues' },
  { name:'tourismActivity', label:'1City.VIP Annual Tourism Activity', min:0, max:5000, step:50, default:500, unit:'$K' },
  { name:'passportVisitors', label:'Passport to the World Annual Visitors', min:0, max:50000, step:500, default:5000, unit:'visitors' },
  { name:'avgVisitorSpend', label:'Avg Visitor Spend', min:50, max:1000, step:25, default:200, unit:'$' },
];

function calculate(v) {
  const totalMembers = v.orgs * v.members;
  const annualMemberDues = totalMembers * v.monthlyDues * 12;
  const annualMemberPurchases = totalMembers * v.memberPurchase * 12;
  const annualMerchantActivity = v.merchants * 50 * 12 + v.merchants * 150;
  const annualRestaurantActivity = v.restaurants * 80 * 12 + v.restaurants * 200;
  const annualHospitalityActivity = v.hospitality * 200 * 12 + v.hospitality * 500;
  const annualTourism = v.tourismActivity * 1000;
  const annualPassport = v.passportVisitors * v.avgVisitorSpend;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantActivity + annualRestaurantActivity + annualHospitalityActivity + annualTourism + annualPassport;
  return {
    rangeLow: Math.round(totalActivity * 0.008),
    rangeHigh: Math.round(totalActivity * 0.022),
    outputs: [
      { label:'Total Members in City', value: formatNumber(totalMembers) },
      { label:'Total Participating Venues', value: formatNumber(v.merchants + v.restaurants + v.hospitality) },
      { label:'Annual Member Activity', value: formatCurrency(annualMemberDues + annualMemberPurchases) },
      { label:'Hospitality + Restaurant Activity', value: formatCurrency(annualRestaurantActivity + annualHospitalityActivity) },
      { label:'Tourism + Passport Activity', value: formatCurrency(annualTourism + annualPassport) },
      { label:'Total City Ecosystem Activity', value: formatCurrency(totalActivity) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <section className="pt-20 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label justify-center mb-3">City Coordinator</p>
          <OpportunitySimulator target={240000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <RoleSection title="Grow your entire city." cards={[
        ['What a City Coordinator Does','Activates a city through 1City.VIP — engaging local organizations, merchants, restaurants, hospitality, tourism boards, and Passport to the World participation. Coordinates city-wide ecosystem growth.'],
        ['What Must Happen','Multiple organizations recognized. Merchant network activated. Restaurant and hospitality partners participating. Tourism programs operational. Passport visitor activity sustained.'],
        ['Who Benefits','The city economy grows. Local businesses get organized customers. Visitors discover the city. The City Coordinator earns through city-wide ecosystem activity.'],
      ]} />
    </>
  );
}
