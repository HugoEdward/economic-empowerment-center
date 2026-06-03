/**
 * PhaseIndicator — v4.1 invitation language.
 *
 * 🟢 Just Waiting For You!         — Available to benefit immediately
 * 🟡 Activates With Your Participation — Stronger as members, merchants, sponsors participate
 * 🔵 Growing With Your Organization — Built and expanded together with participants
 */

const STYLES = {
  available:  { dot:'🟢', label:'Just Waiting For You!',         sub:'You can benefit immediately.',                                                                          color:'text-emerald-300', bg:'bg-emerald-500/10', border:'border-emerald-500/30' },
  activating: { dot:'🟡', label:'Activates With Your Participation', sub:'Stronger as members, merchants, sponsors, and partners participate.',                                color:'text-amber-300',   bg:'bg-amber-500/10',   border:'border-amber-500/30' },
  developing: { dot:'🔵', label:'Growing With Your Organization',    sub:'Built and expanded together with participating organizations, Officers, merchants, and partners.', color:'text-sky-300',     bg:'bg-sky-500/10',     border:'border-sky-500/30' },
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

export function PhaseLegend() {
  return (
    <div className="max-w-3xl mx-auto bg-navy-800 border border-surface-border rounded-2xl p-5">
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3 text-center">How To Read This</p>
      <p className="text-[12px] text-surface-secondary leading-relaxed text-center mb-4">
        Each response is marked with one of three invitations. The platform is ready — the question is when you and others choose to participate.
      </p>
      <div className="grid sm:grid-cols-3 gap-2 text-[11px]">
        <PhaseRow phase="available" />
        <PhaseRow phase="activating" />
        <PhaseRow phase="developing" />
      </div>
    </div>
  );
}

function PhaseRow({ phase }) {
  const s = STYLES[phase];
  return (
    <div className="bg-navy-950/50 rounded-lg px-3 py-3">
      <div className="flex items-center gap-2 mb-1">
        <span aria-hidden>{s.dot}</span>
        <span className={`text-[10px] font-bold tracking-wide ${s.color}`}>{s.label}</span>
      </div>
      <p className="text-[11px] text-surface-secondary leading-snug">{s.sub}</p>
    </div>
  );
}
