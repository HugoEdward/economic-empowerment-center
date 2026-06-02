'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';
import ExampleExplainer from '@/components/ExampleExplainer';
import WhatMustIDo from '@/components/WhatMustIDo';

const INPUTS = [
  { name:'orgs', label:'Organizations in Portfolio', min:1, max:25, step:1, default:10, unit:'orgs', hint:'10 orgs = 10 Development Officers supported' },
  { name:'members', label:'Avg Members per Organization', min:50, max:5000, step:50, default:1000, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:100, step:1, default:20, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:500, step:10, default:250, unit:'$', hint:'Through ecosystem merchants' },
  { name:'merchants', label:'Avg Merchants per Org', min:0, max:200, step:5, default:50, unit:'merchants' },
  { name:'merchantMonthly', label:'Merchant Monthly Membership', min:0, max:500, step:5, default:200, unit:'$' },
  { name:'retention', label:'Annual Retention Rate', min:30, max:95, step:5, default:80, unit:'%', hint:'Higher retention = more sustained activity' },
];

function calculate(v) {
  const retentionMultiplier = v.retention / 100;
  const totalMembers = v.orgs * v.members;
  const totalMerchants = v.orgs * v.merchants;
  const annualMemberDues = totalMembers * v.monthlyDues * 12 * retentionMultiplier;
  const annualMemberPurchases = totalMembers * v.memberPurchase * 12 * retentionMultiplier;
  const annualMerchantActivity = totalMerchants * v.merchantMonthly * 12 * retentionMultiplier;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantActivity;

  return {
    rangeLow: Math.round(totalActivity * 0.0037),
    rangeHigh: Math.round(totalActivity * 0.0054),
    hierarchyLabel: `${v.orgs} Organizations · ${v.orgs} Development Officers · 1 Success Liaison (You)`,
    outputs: [
      { label:'Portfolio Size', value: v.orgs + ' Orgs' },
      { label:'Development Officers Supported', value: v.orgs.toLocaleString() },
      { label:'Total Members', value: formatNumber(totalMembers) },
      { label:'Total Merchants', value: formatNumber(totalMerchants) },
      { label:'Member Activity (Retention-Adj.)', value: formatCurrency(annualMemberDues + annualMemberPurchases) },
      { label:'Total Ecosystem Activity', value: formatCurrency(totalActivity) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <WhatMustIDo
        subtitle="Success Liaison Example"
        actions={[
          'Support a portfolio of 10 active Member Organizations',
          'Coordinate with 10 Development Officers across the portfolio',
          'Help maintain approximately 10,000 active members across the portfolio',
          'Help sustain approximately 500 participating merchants',
          'Drive strong member retention (80%+) through ongoing support',
          'Conduct quarterly engagement reviews with each organization',
          'Help organizations sustain MundusPASS participation',
          'Coordinate Passport to the World and 1City.VIP engagement',
          'Support compliance with S.E.E.D. program requirements',
          'Focus on retention, sustainability, and portfolio-wide growth',
        ]}
        represents={[
          '10 Organizations',
          '10 Development Officers',
          '10,000 Members',
          '1 Success Liaison',
        ]}
        pathway="Illustrative pathway near $120,000+"
      />
      <section className="pt-4 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <OpportunitySimulator target={120000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <ExampleExplainer>
        This example represents a portfolio of 10 activated organizations supported by 10 Development Officers.
        The Success Liaison's pathway depends on organization activation, retention, member participation,
        merchant participation, and continued support. Higher retention means more sustained ecosystem activity.
      </ExampleExplainer>
      <RoleSection title="Help your organization succeed." cards={[
        ['What a Success Liaison Does','Designated representative for a portfolio of recognized organizations. Manages operational success, member retention, growth planning, ecosystem coordination, and quarterly reviews. Focus on long-term sustainability.'],
        ['What Must Happen','Strong member retention. Active merchant participation. Quarterly engagement reviews. Continued compliance with S.E.E.D. program requirements.'],
        ['Who Benefits','Organizations stay strong. Members feel supported. Activity sustains. Success Liaisons earn through sustained retention and growth across their portfolio.'],
      ]} />
    </>
  );
}
