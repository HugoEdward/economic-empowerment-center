'use client';
import OpportunitySimulator, { formatCurrency, formatNumber } from '@/components/OpportunitySimulator';
import RoleSection from '@/components/RoleSection';

const INPUTS = [
  { name:'organizations', label:'Organizations Managed', min:1, max:10, step:1, default:3, unit:'orgs', hint:'Organizations you actively support' },
  { name:'membersPerOrg', label:'Members per Organization', min:50, max:2000, step:50, default:300, unit:'members', hint:'Active recurring members' },
  { name:'monthlyDues', label:'Monthly Member Dues', min:5, max:50, step:1, default:10, unit:'$', hint:'Membership dues per member per month' },
  { name:'avgPurchase', label:'Avg Member Monthly Purchase Activity', min:0, max:300, step:10, default:80, unit:'$', hint:'Through MundusPASS ecosystem merchants' },
  { name:'merchantsPerOrg', label:'Participating Merchants per Org', min:0, max:100, step:5, default:15, unit:'merchants', hint:'Merchants serving the community' },
  { name:'merchantRegFee', label:'Merchant Registration Fee', min:0, max:500, step:25, default:100, unit:'$', hint:'One-time activation' },
  { name:'merchantMonthly', label:'Merchant Monthly Membership', min:0, max:200, step:5, default:50, unit:'$', hint:'Ongoing participation' },
  { name:'sponsorsPerOrg', label:'Sponsors per Organization', min:0, max:20, step:1, default:2, unit:'sponsors', hint:'Annual sponsor relationships' },
  { name:'passportActivity', label:'Passport to the World Annual ($K/org)', min:0, max:200, step:5, default:20, unit:'$K', hint:'Travel & visitor revenue per org' },
  { name:'cityActivity', label:'1City.VIP Annual ($K/org)', min:0, max:200, step:5, default:10, unit:'$K', hint:'City merchant and tourism activity' },
];

function calculate(v) {
  const totalMembers = v.organizations * v.membersPerOrg;
  const totalMerchants = v.organizations * v.merchantsPerOrg;
  const annualMemberDues = totalMembers * v.monthlyDues * 12;
  const annualMemberPurchases = totalMembers * v.avgPurchase * 12;
  const annualMerchantReg = totalMerchants * v.merchantRegFee;
  const annualMerchantMonthly = totalMerchants * v.merchantMonthly * 12;
  const annualSponsors = v.organizations * v.sponsorsPerOrg * 5000;
  const annualPassport = v.organizations * v.passportActivity * 1000;
  const annualCity = v.organizations * v.cityActivity * 1000;
  const totalActivity = annualMemberDues + annualMemberPurchases + annualMerchantReg + annualMerchantMonthly + annualSponsors + annualPassport + annualCity;
  return {
    rangeLow: Math.round(totalActivity * 0.012),
    rangeHigh: Math.round(totalActivity * 0.028),
    outputs: [
      { label:'Total Members Reached', value: formatNumber(totalMembers) },
      { label:'Total Merchants', value: formatNumber(totalMerchants) },
      { label:'Annual Member Dues', value: formatCurrency(annualMemberDues) },
      { label:'Annual Member Purchases', value: formatCurrency(annualMemberPurchases) },
      { label:'Annual Merchant Activity', value: formatCurrency(annualMerchantReg + annualMerchantMonthly) },
      { label:'Total Ecosystem Activity', value: formatCurrency(totalActivity) },
    ],
  };
}

export default function SimulatorView() {
  return (
    <>
      <section className="pt-20 pb-8 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label justify-center mb-3">Development Officer</p>
          <OpportunitySimulator target={120000} inputs={INPUTS} calculate={calculate} />
        </div>
      </section>
      <RoleSection title="Help one organization grow." cards={[
        ['What a Development Officer Does','Supports recognized organizations in activating their existing members, designing membership programs, recruiting local merchants, planning events, and building practical sustainability systems through the Economic Empowerment ecosystem.'],
        ['What Must Happen','The organization must be recognized through the S.E.E.D. application process. Members must activate participation. Merchants must be invited and registered. Activity must be sustained over time. Compliance must be maintained.'],
        ['Who Benefits','The organization grows. Members get benefits. Merchants get customers. The community strengthens. The Development Officer earns through approved participation aligned with the activity generated.'],
      ]} />
    </>
  );
}
