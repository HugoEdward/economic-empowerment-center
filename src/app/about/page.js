import DiscoveryLevels from '@/components/DiscoveryLevels';
import FounderTrustBlock from '@/components/FounderTrustBlock';

export const metadata = { title:'About — Built by Hugo Edward Juarez, Sr. since 1976', description:'Built since 1976. UN ECOSOC consultative status since 1989.' };

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'About Economic Empowerment', title:<>Built by Hugo Edward Juarez, Sr. <em className="text-gold italic">Since 1976.</em></>, summary:'49 years of community organizing. UN ECOSOC consultative status since 1989. A platform built on real institutional credibility.', cta:'Show Me The Story' },
      { label:'The Institution', title:'What we are part of.', content:(
        <div className="grid md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5 text-center"><p className="font-display text-2xl text-gold mb-1">1976</p><p className="text-[11px] text-surface-secondary">Founded</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5 text-center"><p className="font-display text-2xl text-gold mb-1">1989</p><p className="text-[11px] text-surface-secondary">UN ECOSOC Consultative Status</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5 text-center"><p className="font-display text-2xl text-gold mb-1">41</p><p className="text-[11px] text-surface-secondary">Annual editions of the International Cultures–Immigrants Parade</p></div>
        </div>
      ), cta:'Show Me The Founder' },
      { label:'The Founder', title:'Hugo Edward Juarez, Sr.', content:(<FounderTrustBlock />) },
    ]} />
  );
}
