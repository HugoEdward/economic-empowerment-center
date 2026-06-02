'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';

const INPUTS = [
  { name:'orgs', label:'Organizations in Portfolio', min:1, max:15, step:1, default:5, unit:'orgs', hint:'Recognized organizations you support' },
  { name:'members', label:'Avg Members per Organization', min:50, max:1500, step:50, default:250, unit:'members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:50, step:1, default:10, unit:'$' },
  { name:'memberPurchase', label:'Avg Member Monthly Purchases', min:0, max:300, step:10, default:60, unit:'$', hint:'Through ecosystem merchants' },
  { name:'merchants', label:'Avg Merchants per Org', min:0, max:50, step:1, default:10, unit:'merchants' },
  { name:'merchantMonthly', label:'Merchant Monthly Membership', min:0, max:200, step:5, default:50, unit:'$' },
  { name:'retention', label:'Annual Retention Rate', min:30, max:95, step:5, default:75, unit:'%', hint:'Higher retention = more sustained activity' },
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
    rangeLow: Math.round(totalActivity * 0.015),
    rangeHigh: Math.round(totalActivity * 0.030),
    outputs: [
      { label:'Portfolio Size', value: v.orgs + ' Orgs' },
      { label:'Total Members', value: formatNumber(totalMembers) },
      { label:'Total Merchants', value: formatNumber(totalMerchants) },
      { label:'Retention-Adjusted Dues', value: formatCurrency(annualMemberDues) },
      { label:'Member Purchase Activity', value: formatCurrency(annualMemberPurchases) },
      { label:'Total Ecosystem Activity', value: formatCurrency(totalActivity) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <section className="pt-20 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label justify-center mb-3">Success Liaison</p>
          <OpportunitySimulator target={120000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <RoleSection title="Help your organization succeed." cards={[
        ['What a Success Liaison Does','Designated representative for recognized organizations. Manages operational success, member retention, growth planning, ecosystem coordination, and quarterly reviews. Focus on long-term sustainability.'],
        ['What Must Happen','Strong member retention. Active merchant participation. Quarterly engagement reviews. Continued compliance with S.E.E.D. program requirements.'],
        ['Who Benefits','Organizations stay strong. Members feel supported. Activity sustains. Success Liaisons earn through sustained retention and growth across their portfolio.'],
      ]} />
    </>
  );
}
