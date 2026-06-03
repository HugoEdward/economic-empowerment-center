/**
 * PhaseIndicator — Trust Language phased delivery markers.
 *
 * Per v2.1.7 spec, every capability is marked with one of three phases:
 *   🟢 available       — Available Now (deliverable today, no gates)
 *   🟡 activating      — Activating With First Cohorts (live within months 1–6)
 *   🔵 developing      — Developing For Future Expansion (Phase 2/3, year 1–3+)
 *
 * Use inline within text, as a row prefix, or as a standalone badge.
 *
 * Props:
 *   phase    — 'available' | 'activating' | 'developing'
 *   inline   — boolean, render compact inline pill (default: false → small block)
 */

const STYLES = {
  available:  { dot:'🟢', label:'Available Now',                  color:'text-emerald-300',  bg:'bg-emerald-500/10',  border:'border-emerald-500/30'  },
  activating: { dot:'🟡', label:'Activating With First Cohorts',  color:'text-amber-300',    bg:'bg-amber-500/10',    border:'border-amber-500/30'    },
  developing: { dot:'🔵', label:'Developing For Future Expansion',color:'text-sky-300',      bg:'bg-sky-500/10',      border:'border-sky-500/30'      },
};

export default function PhaseIndicator({ phase, inline }) {
  const s = STYLES[phase] || STYLES.developing;
  if (inline) {
    return (
      <span className={`inline-flex items-center gap-1.5 ${s.bg} ${s.border} border rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide ${s.color}`}>
        <span aria-hidden>{s.dot}</span>
        <span>{s.label}</span>
      </span>
    );
  }
  return (
    <div className={`inline-flex items-center gap-2 ${s.bg} ${s.border} border rounded-md px-2.5 py-1`}>
      <span aria-hidden className="text-[11px]">{s.dot}</span>
      <span className={`text-[10px] font-bold tracking-widest uppercase ${s.color}`}>{s.label}</span>
    </div>
  );
}

/**
 * PhaseLegend — explanatory block placed near the top of pages that use phase markers.
 */
export function PhaseLegend() {
  return (
    <div className="max-w-3xl mx-auto bg-navy-800 border border-surface-border rounded-2xl p-5">
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3 text-center">How To Read This Page</p>
      <p className="text-[12px] text-surface-secondary leading-relaxed text-center mb-4">
        Each capability below is marked with its current delivery phase. We tell you what is real today, what activates as the first cohorts onboard, and what is being built for the longer-term ecosystem.
      </p>
      <div className="grid sm:grid-cols-3 gap-2 text-[11px]">
        <PhaseRow phase="available" desc="Deliverable today through existing operations." />
        <PhaseRow phase="activating" desc="Live within the first 1–6 months of network participation." />
        <PhaseRow phase="developing" desc="Being built — phased rollout in Years 1–3." />
      </div>
    </div>
  );
}

function PhaseRow({ phase, desc }) {
  const s = STYLES[phase];
  return (
    <div className="bg-navy-950/50 rounded-lg px-3 py-3">
      <div className="flex items-center gap-2 mb-1">
        <span aria-hidden>{s.dot}</span>
        <span className={`text-[10px] font-bold tracking-wide ${s.color}`}>{s.label}</span>
      </div>
      <p className="text-[11px] text-surface-secondary leading-snug">{desc}</p>
    </div>
  );
}
