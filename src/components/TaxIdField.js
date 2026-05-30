'use client';
import { useState } from 'react';

// Country-specific tax/ID labels by applicant type
const TAX_ID_MAP = {
  'United States': {
    individual: { type: 'SSN / ITIN', label: 'Social Security Number or ITIN', help: 'Individual taxpayer identification.' },
    business:   { type: 'EIN',         label: 'Employer Identification Number (EIN)', help: 'Federal business tax ID.' },
  },
  'Brazil': {
    individual: { type: 'CPF',  label: 'Cadastro de Pessoas Físicas (CPF)', help: 'Brazilian individual tax ID.' },
    business:   { type: 'CNPJ', label: 'Cadastro Nacional da Pessoa Jurídica (CNPJ)', help: 'Brazilian business tax ID.' },
  },
  'Canada': {
    individual: { type: 'SIN', label: 'Social Insurance Number (SIN)', help: 'Canadian individual tax ID.' },
    business:   { type: 'BN',  label: 'Business Number (BN)', help: 'Canadian business registration number.' },
  },
  'United Kingdom': {
    individual: { type: 'NIN / UTR', label: 'National Insurance Number / UTR', help: 'UK individual tax identification.' },
    business:   { type: 'CRN / VAT', label: 'Company Registration Number or VAT', help: 'UK business registration.' },
  },
  'Mexico': {
    individual: { type: 'RFC',  label: 'Registro Federal de Contribuyentes (RFC)', help: 'Mexican individual or business tax ID.' },
    business:   { type: 'RFC',  label: 'Registro Federal de Contribuyentes (RFC)', help: 'Mexican individual or business tax ID.' },
  },
  'India': {
    individual: { type: 'PAN',  label: 'Permanent Account Number (PAN)', help: 'Indian individual or entity tax ID.' },
    business:   { type: 'PAN / GSTIN', label: 'PAN or GST Identification Number', help: 'Indian business tax ID.' },
  },
};

const DEFAULT = {
  individual: { type: 'National Tax ID', label: 'National Tax / Identification Number', help: 'Legally recognized identification number used for tax reporting in your country.' },
  business:   { type: 'Business Tax ID', label: 'National Business Registration / Tax ID', help: 'Legally recognized business registration or tax identification number in your country.' },
};

export default function TaxIdField({ prefix = '', defaultType = 'individual' }) {
  const [country, setCountry] = useState('');
  const [appType, setAppType] = useState(defaultType);

  const lookup = (TAX_ID_MAP[country] && TAX_ID_MAP[country][appType]) || DEFAULT[appType];

  const cls = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim';

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
            Country for Tax / ID<span className="text-gold ml-0.5">*</span>
          </label>
          <input
            type="text" name={`${prefix}tax_country`}
            value={country} onChange={e => setCountry(e.target.value)}
            placeholder="e.g., United States, Brazil..."
            required className={cls}
          />
        </div>
        <div>
          <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
            Applicant Type<span className="text-gold ml-0.5">*</span>
          </label>
          <select name={`${prefix}tax_id_applicant_type`} value={appType} onChange={e => setAppType(e.target.value)} className={cls + ' appearance-none'}>
            <option value="individual">Individual</option>
            <option value="business">Business / Organization</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
          {lookup.label}<span className="text-gold ml-0.5">*</span>
        </label>
        <input type="text" name={`${prefix}tax_id_value`} placeholder={lookup.type} required className={cls} autoComplete="off" />
        <p className="text-[9px] text-surface-muted mt-1">{lookup.help} Required for KYC/KYB and processor compliance.</p>
        <input type="hidden" name={`${prefix}tax_id_type`} value={lookup.type} />
      </div>
    </div>
  );
}
