'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';
import ExampleExplainer from '@/components/ExampleExplainer';
import WhatMustIDo from '@/components/WhatMustIDo';

const INPUTS = [
  { name:'states', label:'Active States / Provinces', min:1, max:50, step:1, default:5, unit:'states' },
  { name:'citiesPerState', label:'Avg Cities per State', min:2, max:50, step:1, default:5, unit:'cities' },
  { name:'orgsPerCity', label:'Avg Organizations per City', min:5, max:200, step:5, default:50, unit:'orgs' },
  { name:'membersPerOrg', label:'Avg Members per Organization', min:50, max:5000, step:50, default:1000, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:100, step:1, default:20, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:500, step:10, default:250, unit:'$' },
  { name:'merchantsPerCity', label:'Avg Merchants per City', min:10, max:10000, step:50, default:2500, unit:'merchants' },
  { name:'nationalSponsors', label:'National Sponsors', min:0, max:100, step:1, default:5, unit:'sponsors' },
  { name:'sponsorValue', label:'Avg National Sponsor Annual', min:0, max:2000, step:25, default:250, unit:'$K' },
  { name:'nationalEvents', label:'National Annual Events', min:0, max:20, step:1, default:2, unit:'events' },
];

function calculate(v) {
  const totalCities = v.states * v.citiesPerState;
  const totalOrgs = totalCities * v.orgsPerCity;
  const developmentOfficers = totalOrgs;
  const successLiaisons = Math.ceil(totalOrgs / 10);
  const cityCoordinators = totalCities;
  const stateCoordinators = v.states;
  const totalMembers = totalOrgs * v.membersPerOrg;
  const totalMerchants = totalCities * v.merchantsPerCity;
  const annualMemberDues = totalMembers * v.monthlyDues * 12;
  const annualMemberPurchases = totalMembers * v.memberPurchase * 12;
  const annualMerchantActivity = totalMerchants * 200 * 12;
  const annualSponsors = v.nationalSponsors * v.sponsorValue * 1000;
  const annualEvents = v.nationalEvents * 1000000;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantActivity + annualSponsors + annualEvents;

  return {
    rangeLow: Math.round(totalActivity * 0.00020),
    rangeHigh: Math.round(totalActivity * 0.00027),
    hierarchyLabel: `${v.states} States · ${totalCities} Cities · ${formatNumber(totalOrgs)} Organizations · ${formatNumber(developmentOfficers)} Development Officers · ${formatNumber(successLiaisons)} Success Liaisons · ${cityCoordinators} City Coordinators · ${stateCoordinators} State Coordinators · 1 National Coordinator (You)`,
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
      <WhatMustIDo
        subtitle="National Coordinator Example"
        actions={[
          'Activate 5 states/provinces and 25 cities country-wide',
          'Mentor 5 State Coordinators and the full coordinator network',
          'Coordinate 1,250 organizations and 1,250 Development Officers',
          'Support 125 Success Liaisons and 25 City Coordinators',
          'Help reach approximately 1.25 million national members',
          'Build national sponsor and partnership relationships',
          'Organize national annual events',
          'Engage national chambers, government, and trade partners',
          'Activate national Passport and 1City.VIP expansion',
          'Focus on country-wide federation and scale',
        ]}
        represents={[
          '5 States',
          '25 Cities',
          '1,250 Organizations',
          '1 National Coordinator',
        ]}
        pathway="Illustrative pathway near $1,000,000+"
      />
      <section className="pt-4 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <OpportunitySimulator target={1000000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <ExampleExplainer>
        This is a scalable national model, not a fixed quota: 5 states × 5 cities × 50 organizations =
        25 cities and 1,250 organizations, with 1,250 Development Officers, 125 Success Liaisons,
        25 City Coordinators, and 5 State Coordinators. Your actual national pathway depends on the
        country's size, states or provinces, cities, organizations, chambers, merchants, national sponsors,
        tourism, trade, and cultural participation.
      </ExampleExplainer>
      <RoleSection title="Open national doors." cards={[
        ['What a National Coordinator Does','Builds national-level relationships, sponsor partnerships, federation structures, and country-wide activation pathways. Mentors State Coordinators. Organizes national events.'],
        ['What Must Happen','Multiple states operating with State Coordinators. National sponsor relationships established. Cross-state events. Federation governance. Country-wide compliance.'],
        ['Who Benefits','The country-wide ecosystem matures. National brands engage organized communities. Cultural visibility scales. National Coordinators earn through national-scale ecosystem activity.'],
      ]} />
    </>
  );
}
