export default function RoleSection({ title, cards }) {
  return (
    <>
      <section className="py-12 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">The Role</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">{title}</h2>
          </div>
          <div className="space-y-4">
            {cards.map(([t,b]) => (
              <div key={t} className="bg-navy-800 border border-surface-border rounded-xl p-5">
                <h3 className="text-base font-medium text-surface-primary mb-2">{t}</h3>
                <p className="text-[12px] text-surface-secondary leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <a href="https://mundus.center/partners" target="_blank" rel="noopener noreferrer" className="btn-gold">Visit Mundus.Center for Full Details ↗</a>
          <p className="text-[10px] text-surface-muted mt-3">Detailed compensation, contracts, and payout systems managed on Mundus.Center.</p>
        </div>
      </section>
    </>
  );
}
