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
    entity_name: v('biz_name'), legal_name: v('biz_name'), organization_type: v('biz_type'),
    contact_person: v('name'), contact_email: v('email'), contact_phone: v('phone'),
    country_name: v('merch_country_value')||v('merch_country'), city: v('merch_city')==='_other'?v('merch_city_other'):v('merch_city'),
    address_line_1: v('merch_address_line_1'), address_line_2: v('merch_address_line_2'), postal_code: v('merch_postal_code'),
    website: v('website'), skills_services: v('products'), participation_interest: v('service_area'), mission: v('org'),
    tax_id: v('merch_tax_id_value'),
    community_wellbeing_declaration:true, ethics_declaration:true, no_guarantee_acknowledgment:true,
  }, documents: [] };
}

export default function MerchantForm() {
  const docRef = useRef(null);
  return (
    <ApplicationFormWrapper applicationType="merchant_professional" collectData={collectData} docChecklistRef={docRef}>
      <G label="Business Information"><F n="biz_name" l="Business / Practice Name" req/><R2><F n="biz_type" l="Business Type" req/><F n="industry" l="Industry" req/></R2><LocationSelector prefix="merch_"/><AddressBlock prefix="merch_"/><F n="website" l="Website" t="url"/></G>
      <G label="Operating Status"><OperatingStatusField prefix="merch_"/></G>
      <G label="Tax / Legal Identification"><TaxIdField prefix="merch_" defaultType="business"/></G>
      <G label="Products & Services"><TA n="products" l="Products or services offered" req/><F n="service_area" l="Service area"/></G>
      <G label="Contact"><R2><F n="name" l="Contact Name" req/><F n="email" l="Email" t="email" req/></R2><F n="phone" l="Phone" t="tel"/><F n="org" l="Sponsoring organization (if any)"/></G>
      <KycExplanationBlock/>
      <G label="Required Documents"><DocumentChecklist ref={docRef} requirements={DOC_REQUIREMENTS.merchant_professional}/></G>
      <Declarations/>
      <RulesAcknowledgment prefix="merch_"/>
    </ApplicationFormWrapper>
  );
}
