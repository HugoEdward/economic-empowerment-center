export const metadata = {
  title: 'Apply — Member Organization',
  description: 'Submit your Member Organization Application for Economic Empowerment.',
};

export default function ApplyMemberOrgPage() {
  return (
    <section className="pt-32 pb-20 px-5">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-up">
          <p className="section-label">Application</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Member Organization Application
          </h1>
          <p className="text-surface-secondary leading-relaxed">
            Complete the application below. All fields are reviewed by the Economic
            Empowerment team. Next steps are communicated within 1–7 business days.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-box mb-8 animate-fade-up-delay">
          <strong>No income is guaranteed.</strong> Submitting this application does not
          guarantee acceptance, income, or participation in any revenue stream. Results
          depend on approval, outreach, implementation, participation, members, merchants,
          sponsors, compliance, and program rules.
        </div>

        {/* Form Card */}
        <div className="bg-navy-800 border border-surface-border rounded-2xl p-8 animate-fade-up-delay-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="space-y-6">
            {/* Organization Details */}
            <fieldset>
              <legend className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Organization Details</legend>
              <div className="space-y-4">
                <FormField label="Legal Organization Name" id="org_name" required />
                <FormField label="Organization Type" id="org_type" type="select" options={['Nonprofit', 'Community-Based Organization', 'Cultural Association', 'Federation', 'Chamber of Commerce', 'Other']} />
                <FormField label="Year Founded" id="year_founded" type="number" />
                <FormField label="Country / Territory" id="country" placeholder="Free-text — all nations, territories, and communities accepted" required />
                <FormField label="State / Province / Region" id="state" />
                <FormField label="City" id="city" required />
                <FormField label="Website (if available)" id="website" type="url" />
                <FormField label="Tax ID / Registration Number" id="tax_id" />
              </div>
            </fieldset>

            {/* Mission & Programs */}
            <fieldset>
              <legend className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Mission & Programs</legend>
              <div className="space-y-4">
                <FormField label="Organization Mission" id="mission" type="textarea" placeholder="Describe your organization's mission and the communities you serve." required />
                <FormField label="Current Programs & Services" id="programs" type="textarea" placeholder="List your active programs, services, or initiatives." />
                <FormField label="Number of Active Members (approximate)" id="member_count" type="number" />
                <FormField label="Communities / Cultures Served" id="cultures" placeholder="Free-text — all cultures, diasporas, and communities accepted" />
              </div>
            </fieldset>

            {/* Primary Contact */}
            <fieldset>
              <legend className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Primary Contact</legend>
              <div className="space-y-4">
                <FormField label="Full Name" id="contact_name" required />
                <FormField label="Title / Role" id="contact_title" required />
                <FormField label="Email" id="contact_email" type="email" required />
                <FormField label="Phone" id="contact_phone" type="tel" />
              </div>
            </fieldset>

            {/* Development Officer */}
            <fieldset>
              <legend className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Development Officer Designation</legend>
              <div className="space-y-4">
                <FormField label="Designated Development Officer Name" id="do_name" />
                <FormField label="Development Officer Email" id="do_email" type="email" />
                <p className="text-xs text-surface-muted leading-relaxed">
                  The Development Officer accredits merchants and engages members on behalf of your organization.
                  You may designate this person now or after approval. Development Officer compensation,
                  if any, is set by your organization — not by Economic Empowerment.
                </p>
              </div>
            </fieldset>

            {/* Acknowledgments */}
            <fieldset>
              <legend className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Acknowledgments</legend>
              <div className="space-y-3">
                <CheckboxField
                  id="ack_no_guarantee"
                  label="I understand that no income is guaranteed and that results depend on operational participation, compliance, and program rules."
                />
                <CheckboxField
                  id="ack_independent"
                  label="I understand that my organization operates independently within the Economic Empowerment ecosystem."
                />
                <CheckboxField
                  id="ack_code"
                  label="I agree to review and abide by the Code of Conduct upon acceptance."
                />
              </div>
            </fieldset>

            {/* Submit */}
            <div className="pt-4">
              <button type="button" className="btn-gold w-full text-center justify-center">
                Submit Application
              </button>
              <p className="text-xs text-surface-muted text-center mt-4">
                Application submission is for review only. An application fee may apply
                upon approval, collected via Stripe Payment Link.
              </p>
            </div>
          </div>
        </div>

        {/* Fallback */}
        <div className="mt-8 text-center">
          <p className="text-sm text-surface-muted leading-relaxed">
            If you experience trouble submitting, email{' '}
            <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment%20-%20Member%20Organization%20Application" className="text-gold hover:underline">
              immigrantsalliance@gmail.com
            </a>{' '}
            with subject &ldquo;Economic Empowerment — Member Organization Application.&rdquo;
          </p>
        </div>

        {/* Inclusive Statement */}
        <p className="text-xs text-surface-muted text-center mt-6 leading-relaxed max-w-lg mx-auto">
          Economic Empowerment welcomes all nations, territories, cultures, and
          communities — including Tibet, Taiwan, Lebanon, Palestine, Indigenous and
          Native nations, regional cultures, and diaspora communities.
        </p>
      </div>
    </section>
  );
}

function FormField({ label, id, type = 'text', placeholder, required, options }) {
  const baseClass =
    'w-full bg-navy-950 border border-surface-border rounded-lg px-4 py-3 text-sm text-surface-primary font-body placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold-dim';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-surface-secondary mb-1.5">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea id={id} name={id} rows={4} placeholder={placeholder} required={required} className={baseClass + ' resize-y'} />
      ) : type === 'select' ? (
        <select id={id} name={id} required={required} className={baseClass + ' appearance-none'}>
          <option value="">Select...</option>
          {options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} required={required} className={baseClass} />
      )}
    </div>
  );
}

function CheckboxField({ id, label }) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
      <input
        type="checkbox"
        id={id}
        name={id}
        className="mt-1 w-4 h-4 rounded border-surface-border bg-navy-950 text-gold focus:ring-gold-dim accent-gold flex-shrink-0"
      />
      <span className="text-sm text-surface-secondary leading-relaxed group-hover:text-surface-primary transition-colors">
        {label}
      </span>
    </label>
  );
}
