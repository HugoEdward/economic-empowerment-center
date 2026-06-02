'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';
import ExampleExplainer from '@/components/ExampleExplainer';

const INPUTS = [
  { name:'orgs', label:'Active Organizations in City', min:5, max:200, step:5, default:50, unit:'orgs', hint:'50 orgs = 50 DOs + 5 SLs' },
  { name:'members', label:'Avg Members per Organization', min:50, max:5000, step:50, default:1000, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:100, step:1, default:20, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:500, step:10, default:250, unit:'$' },
  { name:'merchantsPerOrg', label:'Avg Merchants per Organization', min:0, max:200, step:5, default:50, unit:'merchants', hint:'Total city merchants derived from orgs × this' },
  { name:'restaurants', label:'Participating Restaurants', min:0, max:500, step:5, default:100, unit:'venues' },
  { name:'hospitality', label:'Hospitality Venues (Hotels/B&Bs)', min:0, max:200, step:1, default:20, unit:'venues' },
  { name:'tourismActivity', label:'1City.VIP Annual Tourism Activity', min:0, max:20000, step:100, default:1000, unit:'$K' },
  { name:'passportVisitors', label:'Passport Annual Visitors', min:0, max:200000, step:1000, default:10000, unit:'visitors' },
  { name:'avgVisitorSpend', label:'Avg Visitor Spend', min:50, max:2000, step:25, default:300, unit:'$' },
];

function calculate(v) {
  const totalMerchants = v.orgs * v.merchantsPerOrg;
  const developmentOfficers = v.orgs;
  const successLiaisons = Math.ceil(v.orgs / 10);
  const totalMembers = v.orgs * v.members;
  const annualMemberDues = totalMembers * v.monthlyDues * 12;
  const annualMemberPurchases = totalMembers * v.memberPurchase * 12;
  const annualMerchantActivity = totalMerchants * 200 * 12 + totalMerchants * 500;
  const annualRestaurantActivity = v.restaurants * 400 * 12 + v.restaurants * 300;
  const annualHospitalityActivity = v.hospitality * 1000 * 12 + v.hospitality * 1000;
  const annualTourism = v.tourismActivity * 1000;
  const annualPassport = v.passportVisitors * v.avgVisitorSpend;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantActivity + annualRestaurantActivity + annualHospitalityActivity + annualTourism + annualPassport;

  return {
    rangeLow: Math.round(totalActivity * 0.0012),
    rangeHigh: Math.round(totalActivity * 0.0016),
    hierarchyLabel: `${v.orgs} Organizations · ${developmentOfficers} Development Officers · ${successLiaisons} Success Liaisons · 1 City Coordinator (You)`,
    outputs: [
      { label:'Total Members in City', value: formatNumber(totalMembers) },
      { label:'Total Participating Venues', value: formatNumber(totalMerchants + v.restaurants + v.hospitality) },
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
      <ExampleExplainer>
        This example represents one activated city ecosystem: 50 organizations, 50 Development Officers,
        and 5 Success Liaisons — coordinating 50,000 members, 2,500 merchants, restaurants, hospitality, tourism,
        and Passport visitor activity. Move the sliders to test smaller cities, major metropolitan cities,
        or high-tourism city models.
      </ExampleExplainer>
      <RoleSection title="Grow your entire city." cards={[
        ['What a City Coordinator Does','Activates a city through 1City.VIP — engaging local organizations, merchants, restaurants, hospitality, tourism boards, and Passport to the World participation. Coordinates city-wide ecosystem growth.'],
        ['What Must Happen','Multiple organizations recognized. Merchant network activated. Restaurant and hospitality partners participating. Tourism programs operational. Passport visitor activity sustained.'],
        ['Who Benefits','The city economy grows. Local businesses get organized customers. Visitors discover the city. The City Coordinator earns through city-wide ecosystem activity.'],
      ]} />
    </>
  );
}
