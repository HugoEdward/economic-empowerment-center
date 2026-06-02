/**
 * FounderTrustBlock — Homepage trust block, placed on FIRST SCROLL after hero.
 *
 * Placement decision: NOT above the fold. The hero should remain about the
 * mission ("opportunities are around you"), not the founder. But on first
 * scroll — before the visitor has decided whether to keep reading — they
 * should see that a real person and real history is behind this work.
 *
 * Founder photo and final approved bio pending.
 */

export default function FounderTrustBlock() {
  return (
    <section className="py-14 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="section-label justify-center">A Real Person Behind The Mission</p>
        </div>

        <div className="bg-navy-800 border border-gold/15 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-8 items-center">
            {/* PHOTO PLACEHOLDER */}
            <div className="mx-auto md:mx-0">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 border-2 border-gold/30 flex items-center justify-center relative overflow-hidden">
                <div className="text-center px-3">
                  <p className="text-[28px] mb-1 opacity-30">👤</p>
                  <p className="text-[8px] font-bold tracking-widest uppercase text-gold/60">Photo</p>
                  <p className="text-[8px] tracking-widest uppercase text-surface-muted/60">Pending</p>
                </div>
              </div>
            </div>

            {/* BIO */}
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-1">
                Hugo Edward Juarez, Sr.
              </h2>
              <p className="text-[11px] font-medium tracking-widest uppercase text-gold mb-4">
                Founder · Since 1976
              </p>
              <p className="text-sm text-surface-secondary leading-relaxed mb-3">
                Hugo Edward Juarez, Sr. has spent nearly five decades building institutions
                that unite immigrant, cultural, civic, and community organizations.
              </p>
              <p className="text-sm text-surface-secondary leading-relaxed mb-5">
                He founded <strong className="text-surface-primary">The Immigrants Foundation in 1976</strong>,
                <strong className="text-surface-primary"> Immigrants Alliance in 1980</strong>, and created the
                International Cultures Celebration, International Cultures Conference, and International
                Cultures–Immigrants Parade. In <strong className="text-surface-primary">1989</strong>,
                The Immigrants Foundation received <strong className="text-surface-primary">Special Consultative
                Status with the United Nations Economic and Social Council</strong>.
              </p>

              {/* History timeline pills */}
              <div className="flex flex-wrap gap-1.5 mb-5 justify-center md:justify-start">
                <Pill year="1976" label="Foundation Founded" />
                <Pill year="1980" label="Alliance Established" />
                <Pill year="1986" label="First Celebration & Parade" />
                <Pill year="1989" label="UN ECOSOC Status" />
                <Pill year="Today" label="Economic Empowerment" highlight />
              </div>

              <a href="/about/" className="text-[11px] font-bold tracking-widest uppercase text-gold no-underline hover:underline">
                Meet The Founder →
              </a>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-surface-muted text-center mt-5 italic max-w-2xl mx-auto">
          Economic Empowerment is not a new idea. It is the result of nearly five decades
          of real-world work helping communities organize, become visible, and build the
          strength to survive.
        </p>
      </div>
    </section>
  );
}

function Pill({ year, label, highlight }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border ${highlight ? 'bg-gold/[0.12] border-gold/30 text-gold' : 'bg-navy-950 border-surface-border text-surface-secondary'}`}>
      <span className="text-[9px] font-bold tracking-wider">{year}</span>
      <span className="text-gold/40 text-[8px]">·</span>
      <span className="text-[9px]">{label}</span>
    </span>
  );
}
