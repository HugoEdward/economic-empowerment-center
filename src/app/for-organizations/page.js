import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Member Organizations — Strengthen Your Sustainability',
  description: 'Pathway for nonprofits, associations, federations, and community organizations to activate members, merchants, and sponsors for long-term sustainability.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Member Organizations"
        title={<>Keep your mission alive. <em className="text-gold italic">Build sustainability.</em></>}
        subtitle="A pathway for organizations serving communities to move beyond grant dependency through structured member, merchant, sponsor, and Passport participation."
      />

      <AudienceSection label="Who Is This For?" title={<>Organizations that <em className="text-gold italic">serve communities.</em></>}>
        <AudienceProse>
          <p>This pathway is for organizations that already serve communities and want to strengthen long-term sustainability:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Nonprofits, charities, and 501(c)(3) organizations',
            'Cultural associations and ethnic federations',
            'Civic organizations and community groups',
            'Professional associations',
            'Youth organizations and education-focused groups',
            'Senior service organizations',
            'Multicultural and immigrant-serving organizations',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="What Is It?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">A pathway to strengthen organizational sustainability through the Economic Empowerment ecosystem.</strong></p>
          <p>Recognized organizations gain a structured framework to activate their existing members, recruit local merchants and professionals offering member benefits, engage sponsors, participate in Passport to the World and 1City.VIP, and build sustained revenue from ecosystem activity — not from a single grant cycle.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Why Participate?">
        <CheckList items={[
          'Move beyond grant dependency and donation cycles',
          'Activate value for your existing members — not just ask them for dues',
          'Build a local merchant network that serves your members',
          'Engage sponsors with concrete community impact',
          'Participate in cultural visibility through International Cultures Celebration',
          'Connect your members to travel and discovery through Passport to the World',
          'Develop a sustainable revenue floor that supports your mission',
        ]} />
      </AudienceSection>

      <AudienceSection label="How Does It Work?" dark>
        <AudienceProse>
          <p>Recognition through the S.E.E.D. program activates the ecosystem framework for your organization:</p>
          <p><strong className="text-surface-primary">Members</strong> pay dues and receive benefits through MundusPASS — including discounts and bonuses from local merchants who participate to reach your members.</p>
          <p><strong className="text-surface-primary">Merchants</strong> register with MundusPASS to offer approved benefits to your members. They reach an organized audience; your members get real value.</p>
          <p><strong className="text-surface-primary">Sponsors</strong> engage your organization with concrete impact metrics — visible, measurable community engagement.</p>
          <p><strong className="text-surface-primary">Cultural participation</strong> through International Cultures Celebration and Passport to the World gives your organization visibility beyond your local geography.</p>
          <p><strong className="text-surface-primary">A Development Officer or Success Liaison</strong> (from the Economic Empowerment ecosystem) helps you implement and sustain activation.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <p className="text-[11px] text-surface-muted text-center mb-5 italic">As organization leadership, your responsibilities focus on governance and member activation — not coordinator functions.</p>
        <CheckList items={[
          'Submit governing documents (incorporation, bylaws, officer resolution)',
          'Provide tax identification and tax-exempt status documentation',
          'Verify operating address and active operating status',
          'Designate authorized officers to act on behalf of the organization',
          'Acknowledge S.E.E.D. Rules and program requirements',
          'Communicate the program to your existing members',
          'Authorize a Development Officer or Success Liaison to support activation',
          'Maintain compliance, governance, and reporting standards',
          'Provide member roster updates and participation reporting',
          'Stay engaged with quarterly reviews and ecosystem coordination',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <AudienceProse>
          <p>A successful recognized Member Organization:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Has active members participating in MundusPASS',
            'Has a network of local merchants serving its members',
            'Maintains strong member retention through real value delivery',
            'Engages sponsors and community partners on a sustained basis',
            'Participates in cultural events and Passport to the World programming',
            'Reports clear, measurable community impact',
            'Builds revenue independent of single-grant dependence',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'~1,000', label:'Active Members' },
          { value:'~50', label:'Local Merchants' },
          { value:'$20', label:'Monthly Dues' },
          { value:'$240K+', label:'Ann. Dues Activity' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          A fully activated organization with ~1,000 members and ~50 participating merchants generates significant ecosystem activity. Outcomes depend on member retention, merchant participation, sponsor engagement, and program compliance.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/member-organization/" label="Apply as Member Organization" />
      </AudienceSection>
    </>
  );
}
