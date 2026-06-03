import { AudienceSection, AudienceProse, CheckList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'For Sponsors & Strategic Partners — Real Impact, Real Communities',
  description: 'Pathway for corporations, foundations, media, and partners to engage organized multicultural communities with measurable impact.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="For Sponsors & Strategic Partners"
        title={<>Real impact. <em className="text-gold italic">Real communities.</em></>}
        subtitle="We help your company reach real communities and create real impact."
      />

      <AudienceSection label="Who Is This For?" title={<>Partners who want <em className="text-gold italic">organized reach.</em></>}>
        <AudienceProse>
          <p>This pathway is for partners who can offer resources, services, or partnership value to the ecosystem:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Corporate sponsors — financial services, consumer goods, healthcare, telecom',
            'Foundations and philanthropic organizations',
            'NGOs and international development organizations',
            'Government and city partners',
            'Tourism boards and destination marketing organizations',
            'Media partners — broadcast, digital, print, social',
            'Technology partners — payments, identity, software',
            'PR, marketing, and professional service partners',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="What Is It?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">A structured framework for engaging entire organized ecosystems — not individual contacts.</strong></p>
          <p>Strategic partnership provides reach into recognized Member Organizations, their members, participating merchants, activated cities, cultural events, and Passport to the World participants — through one coordinated engagement rather than fragmented direct campaigns.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Why Participate?">
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How sponsors gain visibility:</strong></p>
        </AudienceProse>
        <div className="mt-3 mb-7">
          <CheckList items={[
            'Brand presence across recognized organizations and their members',
            'Featured visibility at cultural events and parades through ICC',
            'Logo and recognition in city activation programs through 1City.VIP',
            'Coordinated campaigns reaching organized, opt-in audiences',
          ]} />
        </div>
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How partners gain impact:</strong></p>
        </AudienceProse>
        <div className="mt-3 mb-7">
          <CheckList items={[
            'Measurable community engagement metrics',
            'Cultural authenticity through partnership with multicultural organizations',
            'Alignment with mission-driven activities that strengthen communities',
            'Long-term relationships rather than transactional campaigns',
          ]} />
        </div>
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">How cities, organizations, and communities benefit:</strong></p>
        </AudienceProse>
        <div className="mt-3">
          <CheckList items={[
            'Concrete resources flow into community programs',
            'Recognized organizations gain sustainability beyond grant cycles',
            'Cities activate cultural and economic programs with partner support',
            'Members receive value through partner-supported events and benefits',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="How Does It Work?" dark>
        <AudienceProse>
          <p>Partnership engagement is scoped through written agreement at one of several tiers:</p>
          <p>
            <strong className="text-surface-primary">Tier 1: Local</strong> — single-city activation, one or more events, member organization support<br/>
            <strong className="text-surface-primary">Tier 2: Regional</strong> — multi-city activation, regional cultural programming<br/>
            <strong className="text-surface-primary">Tier 3: State / Province</strong> — state-wide activation, state cultural events<br/>
            <strong className="text-surface-primary">Tier 4: National</strong> — country-wide activation, national cultural programs<br/>
            <strong className="text-surface-primary">Tier 5: Global</strong> — multi-country activation, International Cultures Celebration, Passport to the World programs
          </p>
          <p>Scope is defined collaboratively to fit the partner's goals, budget, and brand alignment with the ecosystem's mission.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Must I Do?">
        <CheckList items={[
          'Define partnership scope, goals, term, and budget alignment',
          'Submit corporate or organizational registration',
          'Provide authorized signer identification',
          'Submit compliance and ethics disclosure',
          'Align with the ecosystem\'s community impact mission',
          'Engage organized multicultural audiences with respect and authenticity',
          'Sponsor or participate in cultural and city events',
          'Build long-term value with recognized organizations',
          'Sustain engagement across the agreed partnership term',
          'Maintain transparent reporting and accountability',
        ]} />
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?" dark>
        <AudienceProse>
          <p>A successful Strategic Partner:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Has clear partnership scope and aligned KPIs',
            'Sees measurable engagement with organized audiences',
            'Gains visibility through cultural and city programming',
            'Builds reputation as a credible partner in multicultural communities',
            'Renews partnership through demonstrated mutual value',
            'Contributes to sustainable community outcomes — not extractive campaigns',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility">
        <FeasibilityBlock items={[
          { value:'500+', label:'Organizations Reached' },
          { value:'10+', label:'Cities Activated' },
          { value:'250K+', label:'Member Touchpoints' },
          { value:'$580K-1.45M', label:'Tier 3 Range' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          A Tier 3 partnership scoped at typical levels reaches 500+ recognized organizations across 10+ cities and 250K+ member touchpoints. Tier 1 and Tier 5 scale proportionally smaller and larger. All partnership scopes are negotiated under written agreement.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration" dark>
        <div className="text-center max-w-3xl mx-auto">
          <ApplyCTA href="/apply/sponsor/" label="Apply for Strategic Partnership" />
          <p className="text-[11px] text-surface-secondary mt-5">
            Interested in the career role of Strategic Partner? See <a href="/career-opportunities/strategic-partner/" className="text-gold no-underline hover:underline">/career-opportunities/strategic-partner/ →</a>
          </p>
        </div>
      </AudienceSection>
    </>
  );
}
