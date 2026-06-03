/**
 * EcosystemMap — the visual organizing principle of the entire platform.
 *
 * Per v5.0 spec:
 *
 *      🌎 Cultures Celebration        🤝 Immigrants Alliance
 *      (creates participation,         (creates community,
 *       visibility, understanding)      representation, advocacy)
 *                  \                   /
 *                   \                 /
 *                    ECONOMIC EMPOWERMENT
 *                       (S.E.E.D.)
 *
 *   🏠 ORGANIZATIONS  ──  🌉 CONNECTORS  ──  🛍️ PROVIDERS
 *   become stronger      connect              businesses grow
 *                        opportunities
 *
 * No words to read. Just visual relationship.
 */

export default function EcosystemMap() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* ABOVE — Cultural & Community sky */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 max-w-3xl mx-auto">
        <SkyNode
          icon="🌎"
          name="Cultures Celebration"
          desc="Participation · Visibility · Understanding · Tourism · Cultural Exchange"
          href="/international-cultures-celebration/"
        />
        <SkyNode
          icon="🤝"
          name="Immigrants Alliance"
          desc="Community · Representation · Advocacy · Unity"
          href="https://immigrantsalliance.org"
          external
        />
      </div>

      {/* CONNECTING LINES from above to center */}
      <div className="relative h-8 max-w-3xl mx-auto" aria-hidden>
        <svg viewBox="0 0 400 32" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <line x1="100" y1="0" x2="200" y2="32" stroke="url(#g1)" strokeWidth="1" />
          <line x1="300" y1="0" x2="200" y2="32" stroke="url(#g1)" strokeWidth="1" />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(212,175,55,0.05)" />
              <stop offset="100%" stopColor="rgba(212,175,55,0.4)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CENTER — Economic Empowerment / S.E.E.D. */}
      <div className="max-w-xl mx-auto mb-3">
        <div className="bg-gold/[0.08] border-2 border-gold/50 rounded-3xl p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
          <p className="font-mono text-[9px] text-gold/70 tracking-widest mb-2">THE CENTER</p>
          <p className="font-display text-xl md:text-2xl font-medium text-gold tracking-tight">
            Economic Empowerment
          </p>
          <p className="font-mono text-[11px] text-gold/80 tracking-wider mt-1">S.E.E.D.</p>
          <p className="text-[10px] text-surface-secondary mt-2 italic">Sustainable Economic Empowerment &amp; Development</p>
        </div>
      </div>

      {/* CONNECTING LINES from center to ground level */}
      <div className="relative h-8 max-w-4xl mx-auto" aria-hidden>
        <svg viewBox="0 0 600 32" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <line x1="300" y1="0" x2="100" y2="32" stroke="url(#g2)" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="32" stroke="url(#g2)" strokeWidth="1" />
          <line x1="300" y1="0" x2="500" y2="32" stroke="url(#g2)" strokeWidth="1" />
          <defs>
            <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(212,175,55,0.4)" />
              <stop offset="100%" stopColor="rgba(212,175,55,0.05)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* GROUND LEVEL — three pillars */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <GroundNode
          icon="🏠"
          name="Organizations"
          desc="become stronger"
          href="/for-organizations/"
        />
        <GroundNode
          icon="🌉"
          name="Connectors"
          desc="connect opportunities"
          href="/career-opportunities/"
          center
        />
        <GroundNode
          icon="🛍️"
          name="Providers"
          desc="businesses grow"
          href="/for-merchants/"
        />
      </div>
    </div>
  );
}

function SkyNode({ icon, name, desc, href, external }) {
  const extProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} {...extProps} className="block bg-navy-800 border border-gold/20 rounded-2xl p-4 md:p-5 no-underline hover:border-gold/40 transition-colors text-center">
      <div className="text-2xl mb-2" aria-hidden>{icon}</div>
      <p className="font-display text-sm md:text-base font-medium text-surface-primary mb-1.5 leading-tight">{name}</p>
      <p className="text-[10px] md:text-[11px] text-surface-secondary leading-relaxed">{desc}</p>
    </a>
  );
}

function GroundNode({ icon, name, desc, href, center }) {
  return (
    <a href={href} className={`block rounded-2xl p-4 md:p-5 no-underline text-center transition-colors ${center ? 'bg-gold/[0.06] border-2 border-gold/40 hover:border-gold' : 'bg-navy-800 border border-surface-border hover:border-gold/30'}`}>
      <div className="text-2xl mb-2" aria-hidden>{icon}</div>
      <p className={`font-display text-sm md:text-base font-medium mb-1 leading-tight ${center ? 'text-gold' : 'text-surface-primary'}`}>{name}</p>
      <p className="text-[10px] text-surface-muted">{desc}</p>
    </a>
  );
}
