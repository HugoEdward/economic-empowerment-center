/**
 * NeedsMap — "We Know Your Needs" framework.
 *
 * Displays a list of pressing needs with the corresponding EEC solution
 * for each. Used on /for-organizations/, /for-churches/, /for-chambers/.
 *
 * Props:
 *   intro — short intro paragraph (e.g., "We know the 10 most pressing needs...")
 *   needs — array of { num, need, why, solution }
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
            {/* NEED */}
            <div className="px-5 py-4 bg-navy-950/40 border-b border-surface-border">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 font-display text-xs text-gold/60 mt-0.5 tabular-nums">{String(item.num).padStart(2, '0')}</span>
                <div className="flex-1">
                  <h3 className="text-[14px] font-medium text-surface-primary mb-1">{item.need}</h3>
                  {item.why && <p className="text-[11px] text-surface-secondary leading-relaxed">{item.why}</p>}
                </div>
              </div>
            </div>
            {/* SOLUTION */}
            <div className="px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold">→</span>
                <div className="flex-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-1">EEC Solution</p>
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
