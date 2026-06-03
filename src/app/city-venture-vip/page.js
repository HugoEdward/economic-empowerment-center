import DiscoveryLevels from '@/components/DiscoveryLevels';
import { CheckList, FeasibilityBlock, ApplyCTA } from '@/components/AudienceSection';

export const metadata = { title:'Cities · 1City.VIP — Activate Your City', description:'We help cities grow.' };

const STEPS = [
  { num:1, t:'Identify City Assets', d:'Population, human resources, social/religious/sportive clubs, cultural and professional organizations.' },
  { num:2, t:'Identify City Needs', d:'Park maintenance, youth development, tourism, senior services, cultural development.' },
  { num:3, t:'Identify Organizations', d:'Recognized member organizations operating in your city.' },
  { num:4, t:'Identify Merchants', d:'Local restaurants, retailers, hospitality, professionals serving the community.' },
  { num:5, t:'Identify Tourism Opportunities', d:'Cultural venues, pavilions, visitor pathways, Passport to the World participation.' },
  { num:6, t:'Activate Participation', d:'Member organizations onboard, merchants register, tourism activates.' },
  { num:7, t:'Develop 1City.VIP', d:'Launch your dedicated city portal — Newark.1City.VIP, Copacabana.VIP, etc.' },
];

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'Cities · 1City.VIP', title:<>Activate <em className="text-gold italic">your city.</em></>, summary:'We help cities grow — through 7 simple steps.', cta:'Show Me The 7 Steps' },
      { label:'The 7 Steps · Part 1', title:'First three steps.', content:(<div className="space-y-2 max-w-3xl mx-auto">{STEPS.slice(0,3).map(s=>(<div key={s.num} className="bg-navy-800 border border-gold/15 rounded-xl p-4 flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center font-display text-base text-gold">0{s.num}</div><div><p className="text-[13px] font-medium text-surface-primary mb-1">{s.t}</p><p className="text-[11px] text-surface-secondary leading-relaxed">{s.d}</p></div></div>))}</div>), cta:'Show Me The Next Steps' },
      { label:'The 7 Steps · Part 2', title:'Steps four through seven.', content:(<div className="space-y-2 max-w-3xl mx-auto">{STEPS.slice(3).map(s=>(<div key={s.num} className="bg-navy-800 border border-gold/15 rounded-xl p-4 flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center font-display text-base text-gold">0{s.num}</div><div><p className="text-[13px] font-medium text-surface-primary mb-1">{s.t}</p><p className="text-[11px] text-surface-secondary leading-relaxed">{s.d}</p></div></div>))}</div>), cta:'Show Me Existing City Portals' },
      { label:'Existing Cities', title:<>Cities already <em className="text-gold italic">activating.</em></>, content:(<div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"><span className="text-[12px] font-mono bg-navy-800 border border-gold/15 rounded-full px-4 py-2 text-gold">Kuala_Lumpur.1City.VIP</span><span className="text-[12px] font-mono bg-navy-800 border border-gold/15 rounded-full px-4 py-2 text-gold">Atlantic.1City.VIP</span><span className="text-[12px] font-mono bg-navy-800 border border-gold/15 rounded-full px-4 py-2 text-gold">Newark.1City.VIP</span><span className="text-[12px] font-mono bg-navy-800 border border-gold/15 rounded-full px-4 py-2 text-gold">Copacabana.VIP</span></div>), cta:'Show Me The Feasibility' },
      { label:'Feasibility · Apply', title:<>Real numbers. <em className="text-gold italic">Real next step.</em></>, content:(<>
        <FeasibilityBlock items={[{value:'50',label:'Organizations'},{value:'2,500',label:'Merchants'},{value:'1City.VIP',label:'Subdomain'},{value:'Citywide',label:'Activation'}]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto mb-7">A fully activated city ecosystem coordinates 50 organizations, 2,500 merchants, restaurants, hospitality, tourism, and Passport visitors.</p>
        <div className="max-w-3xl mx-auto bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 text-center"><ApplyCTA href="/apply/" label="Apply for Consideration" /></div>
      </>) },
    ]} />
  );
}
