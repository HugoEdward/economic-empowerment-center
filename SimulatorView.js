'use client';
import { useRef } from 'react';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';
import LocationSelector from '@/components/LocationSelector';
import AddressBlock from '@/components/AddressBlock';
import DocumentChecklist from '@/components/DocumentChecklist';
import TaxIdField from '@/components/TaxIdField';
import { KycExplanationBlock, RulesAcknowledgment, OperatingStatusField } from '@/components/KycComponents';
import { DOC_REQUIREMENTS } from '@/lib/documentRequirements';
import { G, R2, F, TA, Declarations } from '@/components/SimpleFormFields';

function collectData(form) {
  const v = n => form.querySelector(`[name="${n}"]`)?.value || '';
  return { appData: {
    entity_name: v('name'), contact_person: v('name'), contact_email: v('email'), contact_phone: v('phone'), contact_title: v('profession'),
    country_name: v('ent_country_value')||v('ent_country'), city: v('ent_city')==='_other'?v('ent_city_other'):v('ent_city'),
    address_line_1: v('ent_address_line_1'), address_line_2: v('ent_address_line_2'), postal_code: v('ent_postal_code'),
    participation_interest: v('interest'), skills_services: v('skills'), mission: v('org_affiliation'),
    tax_id: v('ent_tax_id_value'),
    community_wellbeing_declaration:true, ethics_declaration:true, no_guarantee_acknowledgment:true,
  }, documents: [] };
}

export default function EntrepreneurForm() {
  const docRef = useRef(null);
  return (
    <ApplicationFormWrapper applicationType="entrepreneur" collectData={collectData} docChecklistRef={docRef}>
      <G label="Personal Information"><R2><F n="name" l="Full Legal Name" req/><F n="email" l="Email" t="email" req/></R2><R2><F n="phone" l="Phone" t="tel"/><F n="profession" l="Profession / Specialty" req/></R2><LocationSelector prefix="ent_"/><AddressBlock prefix="ent_"/></G>
      <G label="Operating Status"><OperatingStatusField prefix="ent_"/></G>
      <G label="Tax / Legal Identification"><TaxIdField prefix="ent_" defaultType="individual"/></G>
      <G label="Participation Interest"><TA n="interest" l="How do you intend to participate?" req/><TA n="skills" l="Skills, services, or expertise"/><F n="org_affiliation" l="Affiliated organization (if any)"/></G>
      <KycExplanationBlock/>
      <G label="Required Documents"><DocumentChecklist ref={docRef} requirements={DOC_REQUIREMENTS.entrepreneur}/></G>
      <Declarations/>
      <RulesAcknowledgment prefix="ent_"/>
    </ApplicationFormWrapper>
  );
}
