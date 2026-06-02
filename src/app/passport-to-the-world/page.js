import { AudienceSection, AudienceProse, CheckList, StepList, FeasibilityBlock, ApplyCTA, AudienceHero } from '@/components/AudienceSection';

export const metadata = {
  title: 'Passport to the World — Travel, Discover, Participate',
  description: 'A participation and discovery experience connecting travelers, members, pavilions, cities, and cultural venues through the Economic Empowerment ecosystem.',
};

export default function Page() {
  return (
    <>
      <AudienceHero
        tag="Passport to the World"
        title={<>Travel around <em className="text-gold italic">the world.</em></>}
        subtitle="A participation and discovery experience connecting travelers, members, cities, organizations, merchants, and cultural pavilions across the global Economic Empowerment ecosystem."
      />

      <AudienceSection label="Who Is This For?" title={<>Travelers, members, and <em className="text-gold italic">curious participants.</em></>}>
        <AudienceProse>
          <p>Passport to the World is for:</p>
        </AudienceProse>
        <div className="mt-5">
          <CheckList items={[
            'Members of recognized organizations who want to travel and discover',
            'Cultural communities curious about other cultures and traditions',
            'Tourism participants wanting authentic, community-rooted experiences',
            'Cities and tourism boards seeking organized visitor flows',
            'Cultural pavilions and venues hosting visitors',
            'Member Organizations sharing their cultural heritage with the world',
          ]} />
        </div>
      </AudienceSection>

      <AudienceSection label="What Is It?" dark>
        <AudienceProse>
          <p><strong className="text-surface-primary">A participation and discovery experience.</strong> Members carry a Passport that recognizes participation across countries, cities, cultural venues, pavilions, and merchant experiences.</p>
          <p>Unlike commercial loyalty programs, Passport to the World is rooted in cultural participation — recognizing not just visits, but engagement with communities, organizations, and authentic experiences.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="Why Participate?">
        <CheckList items={[
          'Discover authentic cultural experiences rooted in real communities',
          'Get recognized for cultural participation across countries and cities',
          'Connect with recognized organizations during your travels',
          'Access merchant benefits in cities you visit',
          'Participate in International Cultures Celebration programming',
          'Support sustainable economic empowerment in the places you visit',
          'Build a record of cultural participation over time',
        ]} />
      </AudienceSection>

      <AudienceSection label="How Does It Work?" dark>
        <AudienceProse>
          <p>Travelers and participants visit participating pavilions, venues, cities, organizations, merchants, and cultural experiences:</p>
        </AudienceProse>
        <div className="mt-5 max-w-2xl mx-auto bg-navy-800 border border-gold/15 rounded-2xl p-5">
          <p className="text-center text-[10px] font-bold tracking-widest uppercase text-gold mb-3">Participation Sources</p>
          <div className="grid grid-cols-2 gap-2 text-[12px] text-surface-secondary">
            <div className="bg-navy-950/50 rounded-lg px-3 py-2.5 text-center">Pavilions at ICC</div>
            <div className="bg-navy-950/50 rounded-lg px-3 py-2.5 text-center">1City.VIP venues</div>
            <div className="bg-navy-950/50 rounded-lg px-3 py-2.5 text-center">Recognized organizations</div>
            <div className="bg-navy-950/50 rounded-lg px-3 py-2.5 text-center">Participating merchants</div>
            <div className="bg-navy-950/50 rounded-lg px-3 py-2.5 text-center">Cultural events</div>
            <div className="bg-navy-950/50 rounded-lg px-3 py-2.5 text-center">Member organizations abroad</div>
          </div>
        </div>
      </AudienceSection>

      <AudienceSection label="Why Now?">
        <AudienceProse>
          <p>Conventional tourism extracts value from places without contributing to them. Passport to the World connects travelers to <strong className="text-surface-primary">organized communities</strong> in the places they visit — communities that benefit when visitors engage.</p>
          <p>Tourism that strengthens communities. Cultural discovery that flows revenue to the people who keep cultures alive.</p>
          <p>This is participation, not extraction.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Must I Do?" dark>
        <p className="text-[11px] text-surface-muted text-center mb-5 italic">As a participant — different roles have different requirements.</p>
        <AudienceProse>
          <p className="text-center"><strong className="text-surface-primary">As a traveler:</strong> Carry MundusPASS, visit participating sites, and engage with cultural communities authentically.</p>
          <p className="text-center"><strong className="text-surface-primary">As a city or tourism board:</strong> Activate participating venues, register cultural sites, and coordinate with recognized organizations.</p>
          <p className="text-center"><strong className="text-surface-primary">As a pavilion or cultural venue:</strong> Register as a participating site, offer authentic experiences, and welcome organized visitors.</p>
          <p className="text-center"><strong className="text-surface-primary">As a recognized organization:</strong> Welcome visiting members, offer cultural programming, and connect to the global ecosystem.</p>
        </AudienceProse>
      </AudienceSection>

      <AudienceSection label="What Does Success Look Like?">
        <CheckList items={[
          'Travelers carrying meaningful records of cultural participation across countries',
          'Cities seeing organized, opt-in visitor flows from culturally engaged audiences',
          'Cultural venues and pavilions hosting visitors who arrived informed and prepared',
          'Recognized organizations welcoming visiting members and building global connections',
          'Revenue from tourism flowing to community-rooted organizations and merchants',
          'Cultural heritage strengthened, not commodified',
        ]} />
      </AudienceSection>

      <AudienceSection label="Show Me the Feasibility" dark>
        <FeasibilityBlock items={[
          { value:'Multi', label:'Country Participation' },
          { value:'Cultural', label:'Authentic Experiences' },
          { value:'Organized', label:'Visitor Flows' },
          { value:'Community', label:'Revenue Destination' },
        ]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto">
          Passport to the World participation scales by city, country, and engagement level. Travelers, cities, venues, and organizations each gain different outcomes from participation.
        </p>
      </AudienceSection>

      <AudienceSection label="Apply for Consideration">
        <div className="text-center max-w-3xl mx-auto">
          <a href="/international-cultures-celebration/" className="btn-gold inline-block mb-3">Explore Cultural Programs</a>
          <p className="text-[11px] text-surface-secondary mt-3">
            Cities and tourism boards: see <a href="/city-venture-vip/" className="text-gold no-underline hover:underline">/city-venture-vip/ →</a><br/>
            Member organizations and pavilions: see <a href="/for-organizations/" className="text-gold no-underline hover:underline">/for-organizations/ →</a>
          </p>
        </div>
      </AudienceSection>
    </>
  );
}
