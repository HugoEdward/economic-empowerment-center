import DiscoveryLevels from '@/components/DiscoveryLevels';
import { CheckList, FeasibilityBlock } from '@/components/AudienceSection';

export const metadata = { title:'Passport to the World — Discover the World', description:'We help people discover the world.' };

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'Passport to the World', title:<>Travel around <em className="text-gold italic">the world.</em></>, summary:'We help people discover the world — and help cities welcome them.', cta:'Show Me How' },
      { label:'How', title:'Three roles, one experience.', content:(<CheckList items={['Travelers carry the Passport and discover cultural experiences worldwide','Cities and venues welcome organized, opt-in visitor flows','Recognized organizations host visiting members across borders']} />), cta:'Show Me What You Discover' },
      { label:'What You Discover', title:<>Participation <em className="text-gold italic">across the world.</em></>, content:(
        <div className="max-w-2xl mx-auto bg-navy-800 border border-gold/15 rounded-2xl p-5">
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
      ), cta:'Show Me Why It Matters' },
      { label:'Why It Matters', title:<>Tourism that <em className="text-gold italic">strengthens communities.</em></>, content:(<div className="max-w-2xl mx-auto text-center"><p className="text-[14px] text-surface-secondary leading-relaxed mb-4">Conventional tourism extracts value from places without contributing to them.</p><p className="text-[14px] text-surface-secondary leading-relaxed mb-4">Passport to the World connects travelers to organized communities in the places they visit — communities that benefit when visitors engage.</p><p className="text-[14px] text-gold font-medium">This is participation, not extraction.</p></div>), cta:'Show Me What Success Looks Like' },
      { label:'Success · Explore', title:<>What success <em className="text-gold italic">looks like.</em></>, content:(<>
        <FeasibilityBlock items={[{value:'Multi',label:'Country Participation'},{value:'Cultural',label:'Authentic Experiences'},{value:'Organized',label:'Visitor Flows'},{value:'Community',label:'Revenue Destination'}]} />
        <div className="max-w-3xl mx-auto text-center mt-7"><a href="/international-cultures-celebration/" className="btn-gold inline-block mb-3">Explore Cultural Programs</a><p className="text-[11px] text-surface-secondary mt-3">Cities and tourism boards: see <a href="/city-venture-vip/" className="text-gold no-underline hover:underline">/city-venture-vip/ →</a><br/>Member organizations and pavilions: see <a href="/for-organizations/" className="text-gold no-underline hover:underline">/for-organizations/ →</a></p></div>
      </>) },
    ]} />
  );
}
