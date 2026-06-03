import PhaseIndicator from './PhaseIndicator';

/**
 * NeedsMap — "We Know Your Needs" framework.
 *
 * v2.1.7 update: each need can carry a `phase` marker
 * ('available' | 'activating' | 'developing') that renders inline
 * with the EEC Solution.
 *
 * Props:
 *   intro — optional intro paragraph
 *   needs — array of { num, need, why, solution, phase }
 */

export default function NeedsMap({ intro, needs }) {
  return (
    <div className="max-w-4xl mx-auto">
      {intro && (
        <p className="text-[13px] text-surface-secondary leading-relaxed text-center mb-7 max-w-3xl mx-auto">
          {intro}
        </p>
      )}
      <div className="space-y-3">
        {needs.map((item) => (
          <div key={item.num} className="bg-navy-800 border border-surface-border rounded-xl overflow-hidden hover:border-gold/25 transition-colors">
            <div className="px-5 py-4 bg-navy-950/40 border-b border-surface-border">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 font-display text-xs text-gold/60 mt-0.5 tabular-nums">{String(item.num).padStart(2, '0')}</span>
                <div className="flex-1">
                  <h3 className="text-[14px] font-medium text-surface-primary mb-1">{item.need}</h3>
                  {item.why && <p className="text-[11px] text-surface-secondary leading-relaxed">{item.why}</p>}
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold">→</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gold">EEC Solution</p>
                    {item.phase && <PhaseIndicator phase={item.phase} inline />}
                  </div>
                  <p className="text-[12px] text-surface-secondary leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
