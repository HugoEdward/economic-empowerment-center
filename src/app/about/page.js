export const metadata = {
  title: 'About — Hugo Edward Juarez, Sr. & The Mission Behind Economic Empowerment',
  description: 'Nearly five decades of real-world work helping communities organize, become visible, and build the strength to survive.',
  openGraph: {
    title: 'About Economic Empowerment',
    description: 'Founded by Hugo Edward Juarez, Sr. in 1976. UN ECOSOC Consultative Status since 1989.',
  },
};

const HISTORY = [
  { year:'1976', age:'age 26', title:'The Immigrants Foundation founded', desc:'Built from zero into a recognized organization. Eventually owned its own building at 7 West 44th Street in New York City, on the distinguished Club Row, near some of the most respected institutions in the world.' },
  { year:'1980', title:'Immigrants Alliance established', desc:'Founded to unite immigrant, multicultural, civic, and community organizations throughout the New York metropolitan area.' },
  { year:'1986', title:'International Cultures Celebration launches', desc:'First major events including the International Cultures Conference and the International Cultures–Immigrants Parade, held on October 28, 1986, commemorating the Centennial of the Statue of Liberty.' },
  { year:'1989', title:'United Nations recognition', desc:'The Immigrants Foundation received Special Consultative Status with the Economic and Social Council of the United Nations — an important international recognition of its mission and work.', highlight:true },
  { year:'Today', title:'EconomicEmpowerment.Center', desc:'The next major stage. Through the Sustainable Economic Empowerment & Development Program — S.E.E.D. — designed to help organizations worldwide build practical systems for membership, merchant participation, community benefits, recurring income, and long-term sustainability.', highlight:true },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-12 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label justify-center mb-4">About</p>
          <h1 className="font-display text-[2.4rem] md:text-[3.4rem] font-medium leading-[1.05] tracking-tight mb-5">
            Nearly five decades of <em className="text-gold italic">real-world work.</em>
          </h1>
          <p className="text-base text-surface-secondary leading-relaxed max-w-2xl mx-auto">
            Economic Empowerment is not a new idea. It is the result of decades of building
            institutions that helped communities organize, become visible, and build the strength to survive.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-12 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-800 border border-gold/15 rounded-2xl p-7 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="grid md:grid-cols-[200px_1fr] gap-7 md:gap-10 items-start">
              {/* PHOTO PLACEHOLDER */}
              <div className="mx-auto md:mx-0">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 border-2 border-gold/30 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center px-3">
                    <p className="text-[40px] mb-2 opacity-30">👤</p>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-gold/60">Founder Photo</p>
                    <p className="text-[8px] tracking-widest uppercase text-surface-muted/60 mt-1">Pending</p>
                  </div>
                </div>
                <p className="text-[9px] text-surface-muted text-center md:text-left mt-2 italic">
                  Final founder photo pending.
                </p>
              </div>

              {/* BIO */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Founder</p>
                <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-2">
                  Hugo Edward Juarez, Sr.
                </h2>
                <p className="text-sm text-surface-muted mb-5">
                  Founder, The Immigrants Foundation · Immigrants Alliance · International Cultures Celebration · Economic Empowerment
                </p>

                <div className="space-y-4 text-[13px] text-surface-secondary leading-relaxed">
                  <p>
                    Hugo Edward Juarez, Sr. is the founder of The Immigrants Foundation, Immigrants Alliance,
                    and the creator of the International Cultures Celebration, the International Cultures
                    Conference, and the International Cultures–Immigrants Parade.
                  </p>
                  <p>
                    In <strong className="text-surface-primary">1976</strong>, at the age of 26, he founded
                    <strong className="text-surface-primary"> The Immigrants Foundation</strong>, building the
                    institution from zero into a recognized organization that eventually owned its own building
                    at <strong className="text-surface-primary">7 West 44th Street in New York City</strong>,
                    on the distinguished Club Row, near some of the most respected institutions in the world.
                  </p>
                  <p>
                    In <strong className="text-surface-primary">1980</strong>, he founded
                    <strong className="text-surface-primary"> Immigrants Alliance</strong> to unite immigrant,
                    multicultural, civic, and community organizations throughout the New York metropolitan area.
                    His vision was clear: immigrant and cultural communities should not remain isolated, invisible,
                    or dependent only on occasional donations. They needed organization, recognition, public voice,
                    and long-term institutional strength.
                  </p>
                  <p>
                    In <strong className="text-surface-primary">1986</strong>, he launched the first major events
                    of what became the <strong className="text-surface-primary">International Cultures Celebration</strong>,
                    including the International Cultures Conference and the International Cultures–Immigrants Parade,
                    held on <strong className="text-surface-primary">October 28, 1986</strong>, commemorating the
                    Centennial of the Statue of Liberty.
                  </p>
                  <p>
                    In <strong className="text-surface-primary">1989</strong>, The Immigrants Foundation received
                    <strong className="text-surface-primary"> Special Consultative Status with the Economic and Social
                    Council of the United Nations</strong>, marking an important international recognition of its
                    mission and work.
                  </p>
                  <p>
                    After decades of experience working with immigrant, cultural, civic, and community organizations,
                    Hugo Edward Juarez, Sr. established <strong className="text-surface-primary">EconomicEmpowerment.Center</strong> as
                    the next major stage of this mission. Through the <strong className="text-surface-primary">Sustainable
                    Economic Empowerment & Development Program — S.E.E.D.</strong>, EconomicEmpowerment.Center is designed
                    to help organizations worldwide move beyond survival, dependency, and underfunding by building
                    practical systems for membership, merchant participation, community benefits, recurring income,
                    and long-term sustainability.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-surface-border">
                  <p className="text-[14px] text-surface-primary leading-relaxed font-display italic">
                    "Organizations that serve communities should not be left struggling to survive.
                    They should be equipped to grow, support their members, strengthen their communities,
                    and become economically sustainable."
                  </p>
                  <p className="text-[10px] text-gold tracking-widest uppercase mt-3">— Hugo Edward Juarez, Sr.</p>
                </div>

                <p className="text-[9px] text-surface-muted italic mt-5">
                  Final approved bio pending. Bio shown represents current direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label justify-center">A Real History</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Five major chapters. <em className="text-gold italic">Five decades of work.</em>
            </h2>
          </div>

          <div className="space-y-3">
            {HISTORY.map(h => (
              <div key={h.year} className={`bg-navy-800 border rounded-2xl p-5 ${h.highlight ? 'border-gold/30' : 'border-surface-border'} relative overflow-hidden`}>
                {h.highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-5 items-start">
                  <div className="text-center md:text-left">
                    <p className={`font-display text-xl md:text-2xl ${h.highlight ? 'text-gold' : 'text-surface-primary'}`}>{h.year}</p>
                    {h.age && <p className="text-[9px] text-surface-muted mt-0.5">{h.age}</p>}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-surface-primary mb-1.5">{h.title}</h3>
                    <p className="text-[12px] text-surface-secondary leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN ECOSOC HIGHLIGHT */}
      <section className="py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gold/[0.05] border border-gold/25 rounded-2xl p-7 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3">United Nations Recognition</p>
            <h2 className="font-display text-xl md:text-2xl font-medium mb-3">
              Special Consultative Status with ECOSOC, <em className="text-gold italic">since 1989.</em>
            </h2>
            <p className="text-sm text-surface-secondary leading-relaxed max-w-xl mx-auto">
              The Immigrants Foundation holds Special Consultative Status with the United Nations
              Economic and Social Council — a recognition granted to organizations whose work
              aligns with the mission of the United Nations.
            </p>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER: PARTICIPATING ORGANIZATIONS */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Participating Organizations</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Real organizations. <em className="text-gold italic">Real communities.</em>
            </h2>
          </div>

          <div className="bg-navy-800 border border-dashed border-surface-border rounded-2xl p-7 text-center">
            <p className="text-3xl mb-3 opacity-30">🏢</p>
            <p className="text-sm text-surface-secondary mb-2">
              Participating organization logos and names will be featured here.
            </p>
            <p className="text-[10px] text-surface-muted italic">
              Currently inviting recognized organizations to be featured. Placeholder pending real participants with permission.
            </p>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER: TESTIMONIALS */}
      <section className="py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label justify-center">From The Communities We Serve</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Real voices. <em className="text-gold italic">Real outcomes.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="bg-navy-800 border border-dashed border-surface-border rounded-2xl p-5 text-center">
                <p className="text-2xl mb-2 opacity-30">💬</p>
                <p className="text-[11px] text-surface-muted italic">
                  Testimonial #{i} pending. Will feature name, role, photo, and organization with permission.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHYSICAL ADDRESS */}
      <section className="py-12 px-5 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label justify-center">A Real Place</p>
          <h2 className="font-display text-xl md:text-2xl font-medium mb-2">
            The Immigrants Building
          </h2>
          <p className="text-sm text-surface-secondary mb-1">7 West 44th Street</p>
          <p className="text-sm text-surface-secondary">New York, New York · United States</p>
          <p className="text-[10px] text-surface-muted italic mt-4">
            On Club Row in Manhattan, near some of the most respected institutions in the world.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            The work continues. <em className="text-gold italic">Your community may be next.</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/apply/" className="btn-gold">Apply for Consideration</a>
            <a href="/how-do-i-start-today/" className="btn-outline">How to Start</a>
          </div>
        </div>
      </section>
    </>
  );
}
