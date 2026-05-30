export const metadata = { title: 'For Organizations' };

export default function OrganizationsPage() {
  return (
    <>
      <section className="relative pt-28 pb-14 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 to-navy-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">
          <p className="section-label">For Qualified Organizations</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.08] tracking-tight mb-4">
            Your members already spend.<br/>Your community already has businesses.<br/>
            <em className="text-gold italic">They are disconnected.</em>
          </h1>
          <p className="text-base text-surface-secondary leading-relaxed mb-6">
            Economic Empowerment connects your members, merchants, sponsors, and economic
            activity into one ecosystem — generating sustainable, transaction-based
            organizational income.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/apply/member-organization/" className="btn-gold">Apply for Consideration</a>
            <a href="/feasibility-and-roi/" className="btn-outline">Review Feasibility</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-medium tracking-tight mb-6 text-center">The qualification and activation process</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: '01', t: 'Apply for Consideration', d: 'Submit your application with supporting documentation. All applications are reviewed against participation standards.' },
              { n: '02', t: 'Designation & Activation', d: 'Upon approval, designate a Development Officer. Begin merchant accreditation and member engagement.' },
              { n: '03', t: 'Connected Economy', d: 'Members engage. Merchants participate. Dues flow. Sponsors connect. Your organization sustains.' },
            ].map(s => (
              <div key={s.n} className="card">
                <span className="font-display text-3xl text-gold/30 block mb-3">{s.n}</span>
                <h3 className="font-semibold mb-1">{s.t}</h3>
                <p className="text-xs text-surface-secondary leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-medium tracking-tight mb-6">What approved organizations gain</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {['Recurring merchant participation revenue','Organized and automated dues collection','Transaction-based MundusPASS participation income',
              'Sponsor and partner revenue allocation','Passport to the World destination income','Celebration and event participation revenue',
              'Dedicated Development Officer pathway','Real-time organizational activity dashboard','Federation-scale institutional backing',
              'Training, onboarding, and operational support','Cross-promotion across the ecosystem network','Cooperative structure — not competitive'].map(b => (
              <div key={b} className="flex items-start gap-2 bg-navy-800/50 border border-surface-border rounded-lg px-4 py-3">
                <span className="text-gold text-[10px] mt-0.5">✓</span>
                <span className="text-xs text-surface-secondary">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="disclaimer-box mb-6 text-xs">
            <strong>No income is guaranteed.</strong> Results depend on participation, compliance, and program rules.
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[{l:'Emerging',a:'$275K/yr'},{l:'Growing',a:'$550K/yr'},{l:'Highly Activated',a:'$950K+/yr'}].map(p => (
              <div key={p.l} className="card text-center">
                <p className="text-[10px] uppercase tracking-wide text-surface-muted mb-1">{p.l}</p>
                <p className="font-display text-xl text-gold">{p.a}</p>
                <p className="text-[9px] text-surface-muted mt-1">illustrative pathway</p>
              </div>
            ))}
          </div>
          <a href="/feasibility-and-roi/" className="btn-outline !text-xs">Full Feasibility & Simulator →</a>
        </div>
      </section>

      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-xl font-medium tracking-tight mb-3">Ready to be considered?</h2>
          <p className="text-xs text-surface-muted mb-5">Applications are reviewed according to participation standards, documentation requirements, and ecosystem guidelines.</p>
          <a href="/apply/member-organization/" className="btn-gold">Submit Application for Review</a>
        </div>
      </section>
    </>
  );
}
