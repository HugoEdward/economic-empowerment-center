'use client';
import { useRef } from 'react';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';
import LocationSelector from '@/components/LocationSelector';
import AddressBlock from '@/components/AddressBlock';
import DocumentChecklist from '@/components/DocumentChecklist';
import TaxIdField from '@/components/TaxIdField';
import { KycExplanationBlock, RulesAcknowledgment } from '@/components/KycComponents';
import { DOC_REQUIREMENTS } from '@/lib/documentRequirements';
import { G, R2, F, TA, C } from '@/components/SimpleFormFields';

function collectData(form) {
  const v = n => form.querySelector(`[name="${n}"]`)?.value || '';
  return { appData: {
    entity_name: v('entity_name'), legal_name: v('entity_name'), organization_type: v('entity_type'),
    contact_person: v('name'), contact_email: v('email'), contact_phone: v('phone'), contact_title: v('title'),
    country_name: v('sp_country_value')||v('sp_country'), city: v('sp_city')==='_other'?v('sp_city_other'):v('sp_city'),
    address_line_1: v('sp_address_line_1'), address_line_2: v('sp_address_line_2'), postal_code: v('sp_postal_code'),
    website: v('website'), participation_interest: v('level'), communities_served: v('regions'), programs: v('goals'),
    tax_id: v('sp_tax_id_value'),
    community_wellbeing_declaration:true, ethics_declaration:true, no_guarantee_acknowledgment:true,
  }, documents: [] };
}

export default function SponsorForm() {
  const docRef = useRef(null);
  return (
    <ApplicationFormWrapper applicationType="strategic_partner_sponsor" collectData={collectData} docChecklistRef={docRef}>
      <G label="Organization / Company"><F n="entity_name" l="Entity Name" req/><R2><F n="entity_type" l="Type" req/><F n="industry" l="Industry / Sector"/></R2><LocationSelector prefix="sp_"/><AddressBlock prefix="sp_"/><F n="website" l="Website" t="url"/></G>
      <G label="Tax / Legal Identification"><TaxIdField prefix="sp_" defaultType="business"/></G>
      <G label="Partnership Interest"><TA n="level" l="Partnership level of interest" req/><F n="regions" l="Target communities or regions"/><TA n="goals" l="Partnership objectives"/></G>
      <G label="Contact"><R2><F n="name" l="Contact Name" req/><F n="title" l="Title" req/></R2><R2><F n="email" l="Email" t="email" req/><F n="phone" l="Phone" t="tel"/></R2></G>
      <KycExplanationBlock/>
      <G label="Required Documents"><DocumentChecklist ref={docRef} requirements={DOC_REQUIREMENTS.strategic_partner_sponsor}/></G>
      <G label="Declarations"><C n="decl_wellbeing" l="The applicant declares that the entity exists to further the well-being of its community and is committed to upholding the highest standards of professional ethics." req/></G>
      <RulesAcknowledgment prefix="sp_"/>
      <G label="Acknowledgments"><C n="ack1" l="I understand submission does not guarantee partnership approval." req/></G>
    </ApplicationFormWrapper>
  );
}
