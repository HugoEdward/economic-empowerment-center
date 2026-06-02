/**
 * AudienceSection — labeled section wrapper for audience/opportunity pages.
 *
 * Used to build the standard 8-part educational structure:
 *   1. WHO IS THIS FOR?
 *   2. WHAT IS IT?
 *   3. WHY PARTICIPATE?
 *   4. HOW DOES IT WORK?
 *   5. WHAT MUST I DO?
 *   6. WHAT DOES SUCCESS LOOK LIKE?
 *   7. SHOW ME THE FEASIBILITY
 *   8. APPLY FOR CONSIDERATION
 */

export function AudienceSection({ label, title, children, dark }) {
  return (
    <section className={`py-12 px-5 ${dark ? 'bg-navy-900' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-7">
          <p className="section-label justify-center mb-2">{label}</p>
          {title && (
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              {title}
            </h2>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function AudienceProse({ children }) {
  return <div className="text-[14px] text-surface-secondary leading-relaxed space-y-4 max-w-3xl mx-auto">{children}</div>;
}

export function CheckList({ items }) {
  return (
    <ul className="space-y-2 max-w-2xl mx-auto">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start text-[13px] text-surface-secondary leading-relaxed">
          <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StepList({ steps }) {
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="bg-navy-800 border border-surface-border rounded-xl p-5 flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center font-display text-base text-gold">
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-[14px] font-medium text-surface-primary mb-1">{step.title}</h3>
            <p className="text-[12px] text-surface-secondary leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ExampleBox({ title, items }) {
  return (
    <div className="bg-navy-800 border-2 border-gold/30 rounded-2xl p-5 md:p-6 max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4 text-center">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div key={i} className="bg-navy-950/50 rounded-lg px-3 py-2.5 text-center">
            <p className="text-[12px] text-surface-primary font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeasibilityBlock({ items }) {
  return (
    <div className="bg-navy-800 border border-gold/15 rounded-2xl p-6 max-w-3xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <p className="font-display text-xl md:text-2xl text-gold leading-none">{item.value}</p>
            <p className="text-[10px] text-surface-muted tracking-wider uppercase mt-2">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-surface-muted text-center italic mt-3">
        Illustrative only. Actual outcomes depend on activation, participation, retention, and compliance.
      </p>
    </div>
  );
}

export function ApplyCTA({ href, label }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <a href={href} className="btn-gold inline-block">{label || 'Apply for Consideration'}</a>
      <p className="text-[10px] text-surface-muted mt-3">Submission does not guarantee approval. Response within 1–7 business days.</p>
    </div>
  );
}

export function AudienceHero({ tag, title, subtitle }) {
  return (
    <section className="relative pt-28 pb-12 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
        <p className="section-label justify-center mb-4">{tag}</p>
        <h1 className="font-display text-[2.4rem] md:text-[3.6rem] font-medium leading-[1.05] tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base text-surface-secondary leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
