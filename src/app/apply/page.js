export const metadata = { title: 'Apply for Consideration' };

const APPS = [
  { id:'organization', icon:'🏢', title:'Member Organization', desc:'National, regional, or local organizations seeking to activate their economic ecosystem through qualified participation.',
    items:['Legal entity documentation','Mission and program overview','Primary contact and leadership','Development Officer designation (upon approval)','Corporate certificate, bylaws, and officer resolution'], href:'/apply/member-organization/' },
  { id:'entrepreneur', icon:'🚀', title:'Entrepreneur / Participant', desc:'Individual entrepreneurs and professionals seeking access to the Economic Empowerment ecosystem.',
    items:['Professional background','Area of participation interest','Country and community','How you intend to contribute'], href:'/apply/entrepreneur/' },
  { id:'merchant', icon:'🏪', title:'Merchant / Professional', desc:'Businesses and professional practices seeking accreditation to serve community members within the ecosystem.',
    items:['Business name, type, and location','Products or services offered','Sponsoring organization (if any)','Service area'], href:'/apply/merchant/' },
  { id:'chamber', icon:'🏛️', title:'Chamber of Commerce / Association', desc:'Chambers and business associations seeking to connect their member businesses to the ecosystem.',
    items:['Chamber or association name','Jurisdiction and membership scope','Current programs','Primary contact'], href:'/apply/chamber/' },
  { id:'sponsor', icon:'🤝', title:'Strategic Partner / Sponsor', desc:'Organizations and businesses seeking sponsorship and strategic partnership participation within the ecosystem.',
    items:['Entity name and type','Partnership level of interest','Target communities or regions','Contact information'], href:'/apply/sponsor/' },
];

export default function ApplyPage() {
  return (
    <>
      <section className="pt-28 pb-8 px-5">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <p className="section-label">Applications</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-3">Apply for Consideration</h1>
          <p className="text-sm text-surface-secondary leading-relaxed">
            Participation in Economic Empowerment is earned through qualification, review, and approval.
            Select the application that fits your organization or role.
          </p>
          <p className="text-[10px] text-surface-muted mt-2">
            Submission does not guarantee approval. Applications are reviewed according to participation
            standards, documentation requirements, and ecosystem guidelines.
          </p>
        </div>
      </section>

      <section className="pb-14 px-5">
        <div className="max-w-4xl mx-auto space-y-4">
          {APPS.map(a => (
            <div key={a.id} id={a.id} className="card flex flex-col md:flex-row gap-5 items-start scroll-mt-20">
              <span className="text-3xl">{a.icon}</span>
              <div className="flex-1">
                <h2 className="font-display text-lg font-medium mb-1.5">{a.title}</h2>
                <p className="text-xs text-surface-secondary leading-relaxed mb-3">{a.desc}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4">
                  {a.items.map(i => (
                    <p key={i} className="text-[10px] text-surface-muted flex items-center gap-1.5"><span className="text-gold text-[7px]">●</span>{i}</p>
                  ))}
                </div>
                <a href={a.href} className="btn-gold !text-xs !py-2 !px-5">Submit Application for Review</a>
              </div>
            </div>
          ))}

          {/* MUNDUS.CENTER */}
          <div className="card border-gold/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="flex flex-col md:flex-row gap-5 items-start">
              <span className="text-3xl">🌐</span>
              <div className="flex-1">
                <h2 className="font-display text-lg font-medium mb-1.5">Organization Success Liaison &amp; Coordinator Opportunities</h2>
                <p className="text-xs text-surface-secondary leading-relaxed mb-3">
                  Success Liaisons and Coordinators operate through Mundus.Center, the
                  administrative and infrastructure layer of the MUNDUS ecosystem.
                </p>
                <a href="https://mundus.center/partners" target="_blank" rel="noopener noreferrer" className="btn-outline !text-xs !py-2 !px-5">
                  Explore Opportunities at Mundus.Center ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 px-5">
        <div className="max-w-2xl mx-auto text-center text-[11px] text-surface-muted leading-relaxed">
          <p>All applications are subject to review. If you experience trouble submitting, email{' '}
            <a href="mailto:immigrantsalliance@gmail.com?subject=Economic%20Empowerment" className="text-gold no-underline hover:underline">immigrantsalliance@gmail.com</a>.
          </p>
          <p className="mt-2">Economic Empowerment welcomes qualified organizations from all nations, territories, cultures, and communities.</p>
        </div>
      </section>
    </>
  );
}
