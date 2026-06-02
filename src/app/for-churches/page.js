import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Churches & Faith Organizations — Strengthen Your Community',
  description: 'Pathway for churches, mosques, temples, and faith organizations to strengthen congregational sustainability and serve families.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Churches & Faith Organizations"
        title={<>Strengthen your church. <em className="text-gold italic">Serve your community.</em></>}
        subtitle="A pathway for churches, mosques, temples, congregations, and faith-based community organizations to build sustainability while strengthening service to families."
      />

      <AudienceSection label="Who Is This For?" title={<>Faith communities of <em className="text-gold italic">every tradition.</em></>}>
        <AudienceProse>
          <p>This pathway is for faith organizations serving congregations and families — across all traditions and sizes:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Churches, congregations, parishes, and denominations',
            'Mosques and Islamic community centers',
            'Synagogues and Jewish community organizations',
            'Temples and faith centers of all traditions',
            'Faith-based community service organizations',
            'Multi-denominational service ministries',
            'Small storefront congregations as well as larger institutions',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="What Is It?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">A practical pathway for faith communities to build sustainability without sacrificing mission.</strong></p>
          <p>Through recognition, your congregation participates in the Economic Empowerment ecosystem — connecting members to organized merchant benefits, building local business relationships, and sustaining congregational programming through structured participation rather than collection-plate dependency.</p>
          <p>Faith organizations are recognized through the same Member Organization pathway, with operational support that respects the autonomy and traditions of each congregation.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Why Participate?">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How congregations benefit:</strong></p>
        </AudienceProse>
        <div className="mt-3 mb-7">
          <CheckList items={[
            'Members receive real economic value — discounts, bonuses, preferred services',
            'Congregation builds sustained revenue beyond weekly offerings',
            'Programs (youth, seniors, community service) gain stable funding',
            'Pastoral leadership is freed to focus on ministry, not constant fundraising',
          ]} />
        </div>
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How families benefit:</strong></p>
        </AudienceProse>
        <div className="mt-3 mb-7">
          <CheckList items={[
            'Real savings at local merchants offering member benefits',
            'Trusted professional services through the network',
            'Cultural events and visibility through International Cultures Celebration',
            'Stronger congregational programs that serve children, youth, and elders',
          ]} />
        </div>
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How local businesses benefit:</strong></p>
        </AudienceProse>
        <div className="mt-3">
          <CheckList items={[
            'Reach a trusted, organized, regular community',
            'Build relationships through repeat congregational engagement',
            'Participate in city activation through 1City.VIP',
            'Contribute to community sustainability while growing their own business',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="How Does It Work?" dark>
        <AudienceProse>
          <p>The faith organization applies as a Member Organization. Once recognized, members of the congregation enroll in MundusPASS and access the ecosystem.</p>
          <p>Local merchants — neighborhood restaurants, professional services, retail, hospitality — register to offer member benefits to your congregation.</p>
          <p>A Development Officer or Success Liaison supports the implementation while respecting your congregation's autonomy, traditions, and pastoral leadership.</p>
          <p>Your congregation maintains full governance, leadership, doctrine, and community identity. The ecosystem provides the practical sustainability framework.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <CheckList items={[
          'Apply as a Member Organization with your governing documents',
          'Provide tax-exempt status (501(c)(3) or country equivalent)',
          'Designate authorized leadership (pastor, board, deacons, council)',
          'Communicate the program to your congregation',
          'Authorize a Development Officer to support member activation',
          'Maintain your traditions, doctrine, and community identity',
          'Engage congregants on a voluntary, no-pressure basis',
          'Report participation in line with governance and reporting standards',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <AudienceProse>
          <p>A successful recognized faith organization:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Has a meaningful share of its congregation actively participating',
            'Has a network of local merchants serving congregational families',
            'Sees youth, senior, and community programs strengthened by sustainable revenue',
            'Maintains its full pastoral, doctrinal, and traditional identity',
            'Participates in cultural visibility through ICC and Passport programs',
            'Builds long-term community relationships beyond Sunday/Friday/Saturday',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'200+', label:'Congregants' },
          { value:'30+', label:'Local Merchants' },
          { value:'$15-25', label:'Monthly Dues Range' },
          { value:'Sustained', label:'Program Funding' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          A 200-member congregation with 30 participating merchants can build meaningful program-funding sustainability. Larger congregations scale proportionally. Outcomes depend on congregational engagement and merchant participation.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <ApplyCTA href="/apply/member-organization/" label="Apply for Faith Organization Recognition" />
      </AudienceSection>
    </>
  );
}
