'use client';
import { useRef } from 'react';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';
import LocationSelector from '@/components/LocationSelector';
import AddressBlock from '@/components/AddressBlock';
import DocumentChecklist from '@/components/DocumentChecklist';
import TaxIdField from '@/components/TaxIdField';
import { KycExplanationBlock, RulesAcknowledgment } from '@/components/KycComponents';
import { DOC_REQUIREMENTS } from '@/lib/documentRequirements';

function collectData(form) {
  const v = n => form.querySelector(`[name="${n}"]`)?.value || '';
  return { appData: {
    entity_name: v('org_name'), legal_name: v('org_name'), organization_type: v('org_type'),
    year_founded: parseInt(v('year'))||null, contact_person: v('name'), contact_email: v('email'),
    contact_phone: v('phone'), contact_title: v('title'),
    country_name: v('org_country_value')||v('org_country'), city: v('org_city')==='_other'?v('org_city_other'):v('org_city'),
    address_line_1: v('org_address_line_1'), address_line_2: v('org_address_line_2'), postal_code: v('org_postal_code'),
    website: v('website'), mission: v('mission'), programs: v('programs'),
    member_count: parseInt(v('members'))||null, communities_served: v('cultures'),
    do_name: v('do_name'), do_email: v('do_email'),
    tax_id: v('org_tax_id_value'),
    community_wellbeing_declaration:true, ethics_declaration:true, no_guarantee_acknowledgment:true, independent_operation_acknowledgment:true,
  }, documents: [] };
}

export default function MemberOrgForm() {
  const docRef = useRef(null);
  return (
    <ApplicationFormWrapper applicationType="member_organization" collectData={collectData} docChecklistRef={docRef}>
      <G label="Organization"><F n="org_name" l="Legal Organization Name" req/><R2><Sel n="org_type" l="Type" opts={['Nonprofit','CBO','Cultural Association','Federation','Chamber of Commerce','Professional Association','Foundation','Religious Organization','Educational Institution','Health Organization','Youth Organization','Other']}/><F n="year" l="Year Founded" t="number"/></R2><LocationSelector prefix="org_"/><AddressBlock prefix="org_"/><F n="website" l="Website" t="url"/></G>
      <G label="Tax / Legal Identification"><TaxIdField prefix="org_" defaultType="business"/></G>
      <G label="Mission & Programs"><TA n="mission" l="Organization Mission" req/><TA n="programs" l="Current Programs"/><R2><F n="members" l="Members (approx)" t="number"/><F n="cultures" l="Communities Served"/></R2></G>
      <G label="Primary Contact"><R2><F n="name" l="Full Name" req/><F n="title" l="Title" req/></R2><R2><F n="email" l="Email" t="email" req/><F n="phone" l="Phone" t="tel"/></R2></G>
      <G label="Development Officer"><R2><F n="do_name" l="DO Name (if known)"/><F n="do_email" l="DO Email" t="email"/></R2></G>
      <KycExplanationBlock/>
      <G label="Required Documents"><DocumentChecklist ref={docRef} requirements={DOC_REQUIREMENTS.member_organization}/></G>
      <G label="Declarations"><C n="decl_wellbeing" l="The applicant declares that the entity exists to further the well-being of its community and is committed to upholding the highest standards of professional ethics in its field, service area, and community responsibilities." req/><C n="decl_ethics" l="The applicant commits to operating in accordance with the participation standards, compliance requirements, and ecosystem guidelines of Economic Empowerment." req/></G>
      <RulesAcknowledgment prefix="org_"/>
      <G label="Acknowledgments"><C n="ack1" l="I understand that submission does not guarantee approval." req/><C n="ack2" l="I understand that no income is guaranteed." req/><C n="ack3" l="I understand my organization operates independently within the ecosystem." req/></G>
    </ApplicationFormWrapper>
  );
}
function G({label,children}){return <fieldset className="space-y-2.5"><legend className="text-[9px] font-bold tracking-widest uppercase text-gold mb-1">{label}</legend>{children}</fieldset>}
function R2({children}){return <div className="grid grid-cols-2 gap-2.5">{children}</div>}
const cls='w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim';
function F({n,l,t='text',req}){return <div><label className="block text-[10px] font-medium text-surface-secondary mb-0.5">{l}{req&&<span className="text-gold ml-0.5">*</span>}</label><input name={n} type={t} required={req} className={cls}/></div>}
function TA({n,l,req}){return <div><label className="block text-[10px] font-medium text-surface-secondary mb-0.5">{l}{req&&<span className="text-gold ml-0.5">*</span>}</label><textarea name={n} rows={2} required={req} className={cls+' resize-y'}/></div>}
function Sel({n,l,opts}){return <div><label className="block text-[10px] font-medium text-surface-secondary mb-0.5">{l}</label><select name={n} className={cls+' appearance-none'}><option value="">Select...</option>{opts.map(o=><option key={o} value={o}>{o}</option>)}</select></div>}
function C({n,l,req}){return <label className="flex items-start gap-2 cursor-pointer group"><input type="checkbox" name={n} required={req} className="mt-0.5 w-3 h-3 rounded border-surface-border bg-navy-950 text-gold accent-gold flex-shrink-0"/><span className="text-[10px] text-surface-secondary leading-relaxed group-hover:text-surface-primary transition-colors">{l}</span></label>}
