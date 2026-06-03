import DiscoveryLevels from '@/components/DiscoveryLevels';
import { CheckList } from '@/components/AudienceSection';

export const metadata = { title:'International Cultures Celebration', description:'We help people understand each other through cultural experience.' };

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'International Cultures Celebration', title:<>Experience <em className="text-gold italic">the world.</em></>, summary:'We help people understand each other through cultural experience.', cta:'Show Me The Three Programs' },
      { label:'Three Programs', title:'Three signature experiences.', content:(
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">The Parade</p><p className="font-display text-base mb-2">International Cultures–Immigrants Parade</p><p className="text-[11px] text-surface-secondary leading-relaxed">41 annual editions. Hundreds of thousands of attendees. 190+ countries represented.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">The Conference</p><p className="font-display text-base mb-2">International Cultures Conference</p><p className="text-[11px] text-surface-secondary leading-relaxed">Hosted at the United Nations. Cultural attachés, leaders, and federations from around the world.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">The Passport</p><p className="font-display text-base mb-2">Passport to the World</p><p className="text-[11px] text-surface-secondary leading-relaxed">Cultural participation across pavilions, venues, cities, and organizations worldwide.</p></div>
        </div>
      ), cta:'Show Me How Culture Becomes Opportunity' },
      { label:'How', title:<>Culture becomes <em className="text-gold italic">opportunity.</em></>, content:(<CheckList items={['Organizations gain visibility through Parade and pavilion participation','Cities gain tourism revenue through structured cultural events','Travelers gain authentic cultural participation through Passport','Merchants gain organized visitors during cultural seasons','Communities gain harmony and peace through understanding']} />), cta:'Show Me How To Participate' },
      { label:'How To Participate', title:<>Three ways <em className="text-gold italic">to engage.</em></>, content:(
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <a href="/for-organizations/" className="bg-navy-800 border border-gold/15 rounded-2xl p-5 no-underline hover:border-gold/40 transition-colors block"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Organizations</p><p className="text-[12px] text-surface-secondary leading-relaxed">Apply as a Member Organization. Become part of the cultural ecosystem. →</p></a>
          <a href="/city-venture-vip/" className="bg-navy-800 border border-gold/15 rounded-2xl p-5 no-underline hover:border-gold/40 transition-colors block"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Cities</p><p className="text-[12px] text-surface-secondary leading-relaxed">Host cultural events. Activate Passport pathways. Welcome the world to your city. →</p></a>
          <a href="/passport-to-the-world/" className="bg-navy-800 border border-gold/15 rounded-2xl p-5 no-underline hover:border-gold/40 transition-colors block"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Travelers</p><p className="text-[12px] text-surface-secondary leading-relaxed">Carry the Passport. Discover authentic cultural participation. →</p></a>
        </div>
      ) },
    ]} />
  );
}
