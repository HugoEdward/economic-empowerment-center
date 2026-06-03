import DiscoveryLevels from '@/components/DiscoveryLevels';
import { CheckList, FeasibilityBlock, ApplyCTA } from '@/components/AudienceSection';

export const metadata = { title:'For Sponsors & Strategic Partners — Real Impact, Real Communities', description:'We help your company reach real communities and create real impact.' };

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'For Sponsors & Strategic Partners', title:<>Real impact. <em className="text-gold italic">Real communities.</em></>, summary:'We help your company reach real communities and create real impact.', cta:'Show Me How' },
      { label:'How', title:'Three reach dimensions.', content:(<CheckList items={['Organizations — engage hundreds of recognized organizations','Cities — activate presence across multiple cities','Events — sponsor cultural events with measurable engagement']} />), cta:'Show Me The Partnership Tiers' },
      { label:'Partnership Tiers', title:<>Five tiers · <em className="text-gold italic">from local to global.</em></>, content:(
        <div className="space-y-2 max-w-3xl mx-auto">
          {[{tier:'Tier 1 · Local',scope:'Single-city activation, one or more events, member organization support'},{tier:'Tier 2 · Regional',scope:'Multi-city activation, regional cultural programming'},{tier:'Tier 3 · State / Province',scope:'State-wide activation, state cultural events'},{tier:'Tier 4 · National',scope:'Country-wide activation, national cultural programs'},{tier:'Tier 5 · Global',scope:'Multi-country activation, International Cultures Celebration, Passport to the World'}].map(t=>(
            <div key={t.tier} className="bg-navy-800 border border-gold/15 rounded-xl p-4"><p className="text-[12px] font-bold text-gold mb-1">{t.tier}</p><p className="text-[12px] text-surface-secondary leading-relaxed">{t.scope}</p></div>
          ))}
        </div>
      ), cta:'Show Me Who Benefits' },
      { label:'Who Benefits', title:<>Three groups <em className="text-gold italic">all benefit.</em></>, content:(
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Sponsors</p><p className="text-[12px] text-surface-secondary leading-relaxed">Brand presence across organizations. Featured visibility at ICC events. Coordinated campaigns reaching organized audiences.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Partners</p><p className="text-[12px] text-surface-secondary leading-relaxed">Measurable engagement metrics. Cultural authenticity. Mission-aligned long-term relationships.</p></div>
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-5"><p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Communities</p><p className="text-[12px] text-surface-secondary leading-relaxed">Concrete resources flow into programs. Organizations gain sustainability. Cities activate cultural programs.</p></div>
        </div>
      ), cta:'Show Me The Feasibility' },
      { label:'Feasibility · Apply', title:<>Real numbers. <em className="text-gold italic">Real next step.</em></>, content:(<>
        <FeasibilityBlock items={[{value:'500+',label:'Organizations Reached'},{value:'10+',label:'Cities Activated'},{value:'250K+',label:'Member Touchpoints'},{value:'$580K-1.45M',label:'Tier 3 Range'}]} />
        <div className="max-w-3xl mx-auto bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 text-center mt-7"><ApplyCTA href="/apply/sponsor/" label="Apply for Strategic Partnership" /><p className="text-[11px] text-surface-secondary mt-5">Interested in the career role? See <a href="/career-opportunities/strategic-partner/" className="text-gold no-underline hover:underline">/career-opportunities/strategic-partner/ →</a></p></div>
      </>) },
    ]} />
  );
}
