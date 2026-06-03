/**
 * SisterPlatforms — reusable cross-ecosystem component.
 *
 * Appears on the homepage, footer, and major audience pages to make
 * the three-platform ecosystem visible and navigable.
 *
 * Props:
 *   variant — "card" (default, large cards) or "row" (compact horizontal)
 */

const PLATFORMS = [
  {
    name: 'Immigrants Alliance',
    domain: 'ImmigrantsAlliance.org',
    tag: 'Identity · Belonging',
    desc: 'Building stronger communities.',
    href: 'https://immigrantsalliance.org',
  },
  {
    name: 'Cultures Celebration',
    domain: 'CulturesCelebration.com',
    tag: 'Culture · Understanding',
    desc: 'Experience the world.',
    href: 'https://culturescelebration.com',
  },
  {
    name: 'Economic Empowerment',
    domain: 'EconomicEmpowerment.Center',
    tag: 'Sustainability · Growth',
    desc: 'Helping organizations become stronger and more sustainable.',
    href: '/',
    self: true,
  },
];

export default function SisterPlatforms({ variant = 'card' }) {
  if (variant === 'row') {
    return (
      <div className="border-t border-surface-border pt-6 pb-2">
        <p className="text-[9px] font-bold tracking-widest uppercase text-gold/70 mb-3 text-center">Visit Our Sister Platforms</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px]">
          {PLATFORMS.map(p => (
            <a key={p.domain} href={p.href} {...(p.self ? {} : { target:'_blank', rel:'noopener noreferrer' })}
               className={`no-underline hover:underline ${p.self ? 'text-gold font-medium' : 'text-surface-secondary hover:text-gold'}`}>
              {p.domain} {p.self ? '·You Are Here' : '↗'}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-5 bg-navy-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-7">
          <p className="section-label justify-center mb-3">The Ecosystem</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
            Visit our <em className="text-gold italic">sister platforms.</em>
          </h2>
          <p className="text-[13px] text-surface-secondary leading-relaxed max-w-2xl mx-auto mt-3">
            Three platforms. One ecosystem. Identity, culture, and economic sustainability — together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {PLATFORMS.map(p => (
            <a key={p.domain} href={p.href} {...(p.self ? {} : { target:'_blank', rel:'noopener noreferrer' })}
               className={`block rounded-2xl p-5 no-underline transition-colors group ${p.self ? 'bg-gold/[0.06] border-2 border-gold/40' : 'bg-navy-800 border border-gold/15 hover:border-gold/35'}`}>
              <p className={`text-[9px] font-bold tracking-widest uppercase mb-2 ${p.self ? 'text-gold' : 'text-gold/70'}`}>{p.tag}{p.self ? ' · You Are Here' : ''}</p>
              <h3 className={`font-display text-lg font-medium mb-1 ${p.self ? 'text-gold' : 'text-surface-primary group-hover:text-gold'} transition-colors`}>
                {p.name}
              </h3>
              <p className="font-mono text-[10px] text-surface-muted mb-3">{p.domain}</p>
              <p className="text-[12px] text-surface-secondary leading-relaxed">{p.desc}</p>
              {!p.self && <p className="text-[10px] text-gold/70 mt-3">Visit ↗</p>}
            </a>
          ))}
        </div>

        <div className="text-center mt-7">
          <a href="/three-platforms/" className="text-[11px] text-gold no-underline hover:underline">How the three platforms work together →</a>
        </div>
      </div>
    </section>
  );
}
