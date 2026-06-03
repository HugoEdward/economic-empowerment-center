import DiscoveryLevels from '@/components/DiscoveryLevels';

export const metadata = { title:'Career Opportunities — Help Your City Grow Stronger', description:'We help people find opportunities. Six paths to build a career while strengthening your community.' };

const ROLES = [
  { slug:'development-officer', name:'Development Officer', promise:'One person helping one organization grow stronger.', target:'$120K+' },
  { slug:'success-liaison', name:'Success Liaison', promise:'Coordinator of 10 organizations and their Development Officers.', target:'$120K+' },
  { slug:'city-coordinator', name:'City Coordinator', promise:'Activator of an entire city — 50 organizations, restaurants, hospitality, tourism.', target:'$240K+' },
  { slug:'state-coordinator', name:'State Coordinator', promise:'Activator of multiple cities across a state or province.', target:'$500K+' },
  { slug:'national-coordinator', name:'National Coordinator', promise:'National-scale ecosystem activator. National sponsors, chambers, government.', target:'$1M+' },
  { slug:'strategic-partner', name:'Strategic Partner', promise:'Corporate, foundation, NGO, media, or technology partner — scaled engagement.', target:'Custom' },
];

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'Career Opportunities', title:<>Help your city <em className="text-gold italic">grow stronger.</em></>, summary:'We help people find opportunities. Six paths to build a career while strengthening organizations and businesses in your community.', cta:'Show Me The Six Paths' },
      { label:'The Six Paths', title:'Pick the role that fits you.', content:(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {ROLES.map(r=>(
            <a key={r.slug} href={'/career-opportunities/'+r.slug+'/'} className="bg-navy-800 border border-gold/15 rounded-2xl p-5 no-underline hover:border-gold/40 transition-colors block group">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">{r.target}</p>
              <p className="font-display text-base font-medium text-surface-primary mb-2 group-hover:text-gold transition-colors">{r.name}</p>
              <p className="text-[11px] text-surface-secondary leading-relaxed mb-3">{r.promise}</p>
              <p className="text-[10px] text-gold font-bold tracking-wider">SHOW ME HOW →</p>
            </a>
          ))}
        </div>
      ), cta:'Show Me What Happens After Recognition' },
      { label:'After Recognition', title:<>Confidential details <em className="text-gold italic">activate after recognition.</em></>, content:(<div className="max-w-2xl mx-auto text-center"><p className="text-[14px] text-surface-secondary leading-relaxed mb-4">Simulators on Economic Empowerment show illustrative ecosystem activity. Confidential contracts, coordinator rankings, payout systems, and processor requirements will be shared with recognized partners after the application and review process.</p><a href="/apply/" className="btn-gold inline-block mt-3">Apply for Consideration</a></div>) },
    ]} />
  );
}
