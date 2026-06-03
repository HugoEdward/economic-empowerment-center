/**
 * BonusBox — 3-field Bonus structure (Value, Percentage, Description)
 * Used on /for-entrepreneurs/ next to the discount percentage.
 *
 * Visual: gold-bordered card with three labeled fields per bonus example.
 */

const EXAMPLES = [
  { value: '$25 voucher', pct: '+5%', desc: 'Additional store credit on first purchase' },
  { value: 'Free service', pct: '+10%', desc: 'Free 30-minute consultation included' },
  { value: 'Bonus product', pct: '+15%', desc: 'Free add-on item with purchase' },
  { value: 'Priority booking', pct: '—', desc: 'Skip the wait — member priority appointments' },
  { value: 'Free delivery', pct: '—', desc: 'No delivery fee for ecosystem members' },
  { value: 'BOGO offer', pct: '+50%', desc: 'Buy one, get one half-off for members' },
];

export default function BonusBox() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-navy-800 border-2 border-gold/40 rounded-2xl p-6 md:p-7 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

        <div className="text-center mb-5">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold mb-2">Bonus Opportunity</p>
          <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight mb-2">
            Add a <em className="text-gold italic">Bonus</em> on top of your discount.
          </h3>
          <p className="text-[12px] text-surface-secondary leading-relaxed max-w-xl mx-auto">
            On top of your 15–25% member discount, an additional Bonus can drive participation
            and excitement. A Bonus has three parts:
          </p>
        </div>

        {/* HEADER ROW */}
        <div className="grid grid-cols-12 gap-2 mb-2 px-3">
          <p className="col-span-4 text-[9px] font-bold tracking-widest uppercase text-gold/80">Value</p>
          <p className="col-span-2 text-[9px] font-bold tracking-widest uppercase text-gold/80 text-center">%</p>
          <p className="col-span-6 text-[9px] font-bold tracking-widest uppercase text-gold/80">What It Is</p>
        </div>

        {/* EXAMPLES */}
        <div className="space-y-2">
          {EXAMPLES.map((b, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 bg-navy-950/60 rounded-lg px-3 py-2.5">
              <div className="col-span-4 text-[12px] text-surface-primary font-medium">{b.value}</div>
              <div className="col-span-2 text-[12px] text-gold font-bold text-center tabular-nums">{b.pct}</div>
              <div className="col-span-6 text-[11px] text-surface-secondary">{b.desc}</div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-surface-muted text-center mt-5 italic">
          You define your own Bonus. Choose what fits your business margins and what will excite members.
        </p>
      </div>
    </div>
  );
}
