'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';
import ExampleExplainer from '@/components/ExampleExplainer';
import WhatMustIDo from '@/components/WhatMustIDo';

const INPUTS = [
  { name:'cities', label:'Active Cities in State / Province', min:2, max:50, step:1, default:5, unit:'cities' },
  { name:'orgsPerCity', label:'Avg Organizations per City', min:5, max:200, step:5, default:50, unit:'orgs' },
  { name:'membersPerOrg', label:'Avg Members per Organization', min:50, max:5000, step:50, default:1000, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:100, step:1, default:20, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:500, step:10, default:250, unit:'$' },
  { name:'merchantsPerCity', label:'Avg Merchants per City', min:10, max:10000, step:50, default:2500, unit:'merchants', hint:'Consistent with city model (orgs × merchants/org)' },
  { name:'sponsorsPerCity', label:'Sponsors per City', min:0, max:100, step:1, default:10, unit:'sponsors' },
  { name:'stateEvents', label:'Annual State-Wide Events', min:0, max:20, step:1, default:3, unit:'events' },
  { name:'eventActivity', label:'Avg Activity per Event', min:0, max:5000, step:50, default:500, unit:'$K' },
];

function calculate(v) {
  const totalOrgs = v.cities * v.orgsPerCity;
  const developmentOfficers = totalOrgs;
  const successLiaisons = Math.ceil(totalOrgs / 10);
  const cityCoordinators = v.cities;
  const totalMembers = totalOrgs * v.membersPerOrg;
  const totalMerchants = v.cities * v.merchantsPerCity;
  const annualMemberDues = totalMembers * v.monthlyDues * 12;
  const annualMemberPurchases = totalMembers * v.memberPurchase * 12;
  const annualMerchantActivity = totalMerchants * 200 * 12 + totalMerchants * 300;
  const annualSponsors = v.cities * v.sponsorsPerCity * 5000;
  const annualEvents = v.stateEvents * v.eventActivity * 1000;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantActivity + annualSponsors + annualEvents;

  return {
    rangeLow: Math.round(totalActivity * 0.0005),
    rangeHigh: Math.round(totalActivity * 0.0007),
    hierarchyLabel: `${v.cities} Cities · ${totalOrgs.toLocaleString()} Organizations · ${developmentOfficers.toLocaleString()} Development Officers · ${successLiaisons} Success Liaisons · ${cityCoordinators} City Coordinators · 1 State Coordinator (You)`,
    outputs: [
      { label:'Total Cities', value: v.cities.toLocaleString() },
      { label:'Total Organizations', value: formatNumber(totalOrgs) },
      { label:'Total Members Reached', value: formatNumber(totalMembers) },
      { label:'Total Merchants', value: formatNumber(totalMerchants) },
      { label:'Member Activity', value: formatCurrency(annualMemberDues + annualMemberPurchases) },
      { label:'Total State Ecosystem', value: formatCurrency(totalActivity) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <WhatMustIDo
        subtitle="State / Province Coordinator Example"
        actions={[
          'Activate 5 cities across your state or province',
          'Mentor 5 City Coordinators and the coordinator network beneath them',
          'Coordinate 250 organizations and 250 Development Officers',
          'Support 25 Success Liaisons managing portfolios across cities',
          'Help reach approximately 250,000 state-wide members',
          'Build state-level sponsor relationships',
          'Organize annual state-wide events',
          'Coordinate cross-city federation governance',
          'Activate regional Passport and 1City.VIP programs',
          'Focus on state-wide expansion and federation',
        ]}
        represents={[
          '5 Cities',
          '250 Organizations',
          '25 Success Liaisons + 5 City Coordinators',
          '1 State Coordinator',
        ]}
        pathway="Illustrative pathway near $500,000+"
      />
      <section className="pt-4 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <OpportunitySimulator target={500000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <ExampleExplainer>
        This example shows one scalable state model: 5 cities × 50 organizations = 250 organizations,
        250 Development Officers, 25 Success Liaisons, and 5 City Coordinators. Your actual state pathway
        depends on city count, organization density, member participation, merchants, sponsors, chambers,
        and regional partners. Use the sliders to model a small state, a major state, or a multi-city
        regional expansion.
      </ExampleExplainer>
      <RoleSection title="Expand the opportunity across your state." cards={[
        ['What a State Coordinator Does','Coordinates multiple cities across a state or province. Mentors City Coordinators. Organizes state-wide events. Builds state-level partnerships and federation.'],
        ['What Must Happen','Multiple cities operating with City Coordinators. Sustained activity across cities. State-level sponsor relationships. Annual state events activating cross-city participation.'],
        ['Who Benefits','The whole state-level ecosystem strengthens. Federation of cities builds collective bargaining power. State Coordinators earn through aggregated state-wide activity.'],
      ]} />
    </>
  );
}
