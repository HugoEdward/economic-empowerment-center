'use client';
import { useRef } from 'react';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';
import LocationSelector from '@/components/LocationSelector';
import AddressBlock from '@/components/AddressBlock';
import DocumentChecklist from '@/components/DocumentChecklist';
import TaxIdField from '@/components/TaxIdField';
import { KycExplanationBlock, RulesAcknowledgment } from '@/components/KycComponents';
import { DOC_REQUIREMENTS } from '@/lib/documentRequirements';
import { G, R2, F, TA, Declarations } from '@/components/SimpleFormFields';

function collectData(form) {
  const v = n => form.querySelector(`[name="${n}"]`)?.value || '';
  return { appData: {
    entity_name: v('chamber_name'), legal_name: v('chamber_name'), organization_type: v('chamber_type'),
    contact_person: v('contact_name'), contact_email: v('email'), contact_phone: v('phone'), contact_title: v('title'),
    country_name: v('ch_country_value')||v('ch_country'), city: v('ch_city')==='_other'?v('ch_city_other'):v('ch_city'),
    address_line_1: v('ch_address_line_1'), address_line_2: v('ch_address_line_2'), postal_code: v('ch_postal_code'),
    website: v('website'), member_count: parseInt(v('members'))||null,
    participation_interest: v('jurisdiction'), programs: v('programs'),
    tax_id: v('ch_tax_id_value'),
    community_wellbeing_declaration:true, ethics_declaration:true, no_guarantee_acknowledgment:true,
  }, documents: [] };
}

export default function ChamberForm() {
  const docRef = useRef(null);
  return (
    <ApplicationFormWrapper applicationType="chamber_association" collectData={collectData} docChecklistRef={docRef}>
      <G label="Chamber / Association"><F n="chamber_name" l="Name" req/><R2><F n="chamber_type" l="Type" req/><F n="members" l="Member Businesses" t="number"/></R2><LocationSelector prefix="ch_"/><AddressBlock prefix="ch_"/><F n="website" l="Website" t="url"/></G>
      <G label="Tax / Legal Identification"><TaxIdField prefix="ch_" defaultType="business"/></G>
      <G label="Programs & Jurisdiction"><F n="jurisdiction" l="Jurisdiction / Coverage" req/><TA n="programs" l="Current programs"/></G>
      <G label="Contact"><R2><F n="contact_name" l="Contact Name" req/><F n="title" l="Title" req/></R2><R2><F n="email" l="Email" t="email" req/><F n="phone" l="Phone" t="tel"/></R2></G>
      <KycExplanationBlock/>
      <G label="Required Documents"><DocumentChecklist ref={docRef} requirements={DOC_REQUIREMENTS.chamber_association}/></G>
      <Declarations/>
      <RulesAcknowledgment prefix="ch_"/>
    </ApplicationFormWrapper>
  );
}
