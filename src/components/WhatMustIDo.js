/**
 * WhatMustIDo — required action checklist + example representation block.
 *
 * Appears immediately BEFORE a simulator (or application form) on every
 * opportunity page. Visitor must understand "What do I have to do?" before
 * seeing "What might happen if I do it?"
 *
 * Props:
 *   subtitle — e.g. "Development Officer Example"
 *   actions — array of strings (each becomes a checkmark line)
 *   represents — array of strings (concrete numbers, one per line)
 *   pathway — optional illustrative pathway line (e.g. "Illustrative pathway near $120,000+")
 *   transition — optional transition text (default: "MOVE THE SLIDERS TO TEST DIFFERENT SCENARIOS")
 */

export default function WhatMustIDo({ subtitle, actions, represents, pathway, transition }) {
  const trans = transition || 'MOVE THE SLIDERS TO TEST DIFFERENT SCENARIOS';
  return (
    <section className="pt-20 pb-4 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-navy-800 border-2 border-gold/40 rounded-2xl p-6 md:p-7 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

          {/* HEADER */}
          <div className="text-center mb-6">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold mb-2">Required Action</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-1">
              What must I do <em className="text-gold italic">to approach this pathway?</em>
            </h2>
            {subtitle && <p className="text-[11px] text-surface-muted tracking-wider uppercase">{subtitle}</p>}
          </div>

          {/* ACTION CHECKLIST */}
          <ul className="space-y-2 mb-6">
            {actions.map((action, i) => (
              <li key={i} className="flex gap-3 items-start text-[13px] text-surface-secondary leading-relaxed">
                <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold">✓</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>

          {/* THIS EXAMPLE REPRESENTS */}
          <div className="bg-navy-950/70 border border-gold/15 rounded-xl p-5">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3 text-center">This Example Represents</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              {represents.map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-[11px] font-medium text-surface-primary leading-tight">{item}</p>
                </div>
              ))}
            </div>
            {pathway && (
              <p className="text-center text-[12px] text-gold font-medium border-t border-gold/15 pt-3 italic">{pathway}</p>
            )}
          </div>

          {/* TRANSITION */}
          <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-gold/70 mt-5">
            ↓ {trans} ↓
          </p>
        </div>
      </div>
    </section>
  );
}
