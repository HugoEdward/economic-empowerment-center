'use client';
import { useState } from 'react';

/**
 * Diagnostic — interactive Organizational Needs Assessment.
 *
 * 4-question flow → personalized pathway results.
 *
 * Questions:
 *   1. Greatest challenge today (10 options)
 *   2. Type of organization (9 options)
 *   3. Organization size (3 options)
 *   4. Biggest goal (6 options)
 *
 * Result: Profile + Top Challenges + Recommended Programs + Recommended Pages + Apply CTA
 */

// CHALLENGE → category mapping (per v3.0 spec)
const CHALLENGES = [
  { id:'income',         label:'Income / Revenue',           category:'Financial Sustainability' },
  { id:'membership',     label:'Membership Growth',          category:'Membership & Community Engagement' },
  { id:'volunteers',     label:'Volunteers',                 category:'Membership & Community Engagement' },
  { id:'leadership',     label:'Leadership / Governance',    category:'Leadership & Governance' },
  { id:'technology',     label:'Technology',                 category:'Operations & Infrastructure' },
  { id:'space',          label:'Physical Space',             category:'Operations & Infrastructure' },
  { id:'visibility',     label:'Visibility / Awareness',     category:'Visibility & Communications' },
  { id:'fundraising',    label:'Fundraising',                category:'Financial Sustainability' },
  { id:'partnerships',   label:'Partnerships',               category:'Partnerships & External Relations' },
  { id:'other',          label:'Other / Multiple',           category:'Long-Term Sustainability' },
];

const ORG_TYPES = [
  { id:'cultural',      label:'Cultural Organization',         page:'/for-organizations/',  applyTo:'/apply/member-organization/' },
  { id:'chamber',       label:'Chamber / Trade Association',   page:'/for-chambers/',       applyTo:'/apply/chamber/' },
  { id:'church',        label:'Church / Faith Organization',   page:'/for-churches/',       applyTo:'/apply/member-organization/' },
  { id:'sports',        label:'Sports Club',                   page:'/for-organizations/',  applyTo:'/apply/member-organization/' },
  { id:'youth',         label:'Youth Organization',            page:'/for-organizations/',  applyTo:'/apply/member-organization/' },
  { id:'ngo',           label:'NGO / Nonprofit',               page:'/for-organizations/',  applyTo:'/apply/member-organization/' },
  { id:'professional',  label:'Professional Association',      page:'/for-organizations/',  applyTo:'/apply/member-organization/' },
  { id:'federation',    label:'Federation / Coalition',        page:'/for-organizations/',  applyTo:'/apply/member-organization/' },
  { id:'other',         label:'Other',                         page:'/for-organizations/',  applyTo:'/apply/member-organization/' },
];

const SIZES = [
  { id:'small',  label:'Small',  desc:'Up to ~100 active members' },
  { id:'medium', label:'Medium', desc:'~100 to ~1,000 active members' },
  { id:'large',  label:'Large',  desc:'1,000+ active members or members across multiple cities' },
];

const GOALS = [
  { id:'sustainability', label:'Long-term sustainability' },
  { id:'growth',         label:'Organizational growth' },
  { id:'membership',     label:'Membership growth' },
  { id:'visibility',     label:'Visibility & cultural presence' },
  { id:'economic',       label:'Economic development' },
  { id:'impact',         label:'Community impact' },
];

// Program recommendations based on challenge category + goal
function getRecommendations({ challenge, orgType, size, goal }) {
  const ch = CHALLENGES.find(c => c.id === challenge);
  const ot = ORG_TYPES.find(c => c.id === orgType);
  const sz = SIZES.find(c => c.id === size);
  const gl = GOALS.find(c => c.id === goal);

  // Map challenges to recommended programs
  const programs = [];
  const opportunities = [];
  const nextSteps = [];

  // Core program — applies to everyone
  programs.push({
    name: 'S.E.E.D. Recognition Program',
    why: 'The foundation: organizational recognition through Sustainable Economic Empowerment & Development.',
    link: ot.page,
  });

  // Challenge-driven recommendations
  if (challenge === 'income' || challenge === 'fundraising') {
    programs.push({
      name: 'Sustainable Monthly Revenue Development',
      why: 'Structured income through member dues, merchant participation, sponsorships, and MundusPASS transactions.',
      link: '/for-organizations/',
    });
    opportunities.push({ name:'Sponsor & Partner Development', link:'/for-sponsors/' });
  }
  if (challenge === 'membership') {
    programs.push({
      name: 'Member Activation & Retention Framework',
      why: 'Engage existing members with real benefits through MundusPASS; attract new members through cultural visibility.',
      link: '/for-organizations/',
    });
    opportunities.push({ name:'Passport to the World participation', link:'/passport-to-the-world/' });
  }
  if (challenge === 'volunteers' || challenge === 'leadership') {
    programs.push({
      name: 'Development Officer Assignment',
      why: 'A dedicated, paid Development Officer supports your organization on activation, leadership, and member engagement.',
      link: '/career-opportunities/development-officer/',
    });
  }
  if (challenge === 'visibility') {
    programs.push({
      name: 'Cultural Visibility through ICC & ImmigrantsAlliance.org',
      why: 'Participation in the International Cultures–Immigrants Parade and the International Cultures Conference (UN).',
      link: '/international-cultures-celebration/',
    });
    opportunities.push({ name:'1City.VIP city activation', link:'/city-venture-vip/' });
  }
  if (challenge === 'partnerships') {
    programs.push({
      name: 'Strategic Partnership Connection',
      why: 'Connect to corporate, foundation, NGO, government, and media partners through structured partnership programs.',
      link: '/for-sponsors/',
    });
  }
  if (challenge === 'technology' || challenge === 'space') {
    programs.push({
      name: 'Operational Infrastructure Pathway',
      why: 'MundusPASS digital infrastructure and revenue stability that supports physical headquarters acquisition over time.',
      link: '/for-organizations/',
    });
  }

  // Goal-driven recommendations
  if (goal === 'economic') {
    opportunities.push({ name:'Member Organization recognition', link:ot.page });
    opportunities.push({ name:'Local merchant activation', link:'/for-merchants/' });
  }
  if (goal === 'visibility') {
    opportunities.push({ name:'International Cultures Celebration', link:'/international-cultures-celebration/' });
  }
  if (goal === 'impact') {
    opportunities.push({ name:'UN ECOSOC representation pathway', link:ot.page });
  }

  // Always-present next steps
  nextSteps.push({ label:`Read the full ${ot.label} pathway`, link:ot.page });
  nextSteps.push({ label:'See the three-platform ecosystem', link:'/three-platforms/' });
  nextSteps.push({ label:'Apply for Consideration when ready', link:ot.applyTo });

  // Deduplicate opportunities
  const seen = new Set();
  const uniqueOpps = opportunities.filter(o => {
    if (seen.has(o.name)) return false;
    seen.add(o.name);
    return true;
  });

  return { challengeLabel: ch.label, category: ch.category, orgType: ot, size: sz, goal: gl, programs, opportunities: uniqueOpps, nextSteps };
}

export default function Diagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ challenge:null, orgType:null, size:null, goal:null });

  function answer(key, value) {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(s => s + 1);
  }

  function restart() {
    setAnswers({ challenge:null, orgType:null, size:null, goal:null });
    setStep(0);
  }

  if (step === 0) {
    return (
      <section className="py-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="section-label justify-center mb-4">Discover Your Pathway</p>
          <h1 className="font-display text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-5">
            Show us where you are. <em className="text-gold italic">We\'ll reveal your pathway.</em>
          </h1>
          <p className="text-[14px] text-surface-secondary leading-relaxed mb-8">
            You don't need to read the entire site to find where you belong. Answer four short questions,
            and we'll show you the programs, opportunities, and next steps that match your organization.
          </p>
          <button onClick={() => setStep(1)} className="btn-gold inline-block">Begin Discovery →</button>
          <p className="text-[11px] text-surface-muted mt-5 italic">About 60 seconds. No personal data collected. Pure discovery.</p>
        </div>
      </section>
    );
  }

  if (step >= 1 && step <= 4) {
    const questions = [
      { num:1, key:'challenge', q:'Tell us your challenge.', options:CHALLENGES, render:o => o.label },
      { num:2, key:'orgType',   q:'Help us understand your organization.',     options:ORG_TYPES,  render:o => o.label },
      { num:3, key:'size',      q:'Show us your scale.',         options:SIZES,      render:o => <><span>{o.label}</span><span className="text-[10px] text-surface-muted block mt-1">{o.desc}</span></> },
      { num:4, key:'goal',      q:'Show us your goal.',              options:GOALS,      render:o => o.label },
    ];
    const cur = questions[step - 1];

    return (
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-7">
            {[1,2,3,4].map(n => (
              <div key={n} className="flex-1">
                <div className={`h-1 rounded-full ${n <= step ? 'bg-gold' : 'bg-surface-border'}`} />
                <p className={`text-[9px] tracking-widest uppercase mt-1.5 ${n === step ? 'text-gold font-bold' : 'text-surface-muted'}`}>
                  Q{n}
                </p>
              </div>
            ))}
          </div>

          <p className="section-label mb-3">Question {cur.num} of 4</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-6">{cur.q}</h2>

          <div className="space-y-2">
            {cur.options.map(o => (
              <button key={o.id} onClick={() => answer(cur.key, o.id)}
                className="w-full text-left bg-navy-800 border border-surface-border rounded-xl p-4 hover:border-gold/40 hover:bg-navy-700 transition-colors group">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[13px] text-surface-primary leading-snug">{cur.render(o)}</div>
                  <span className="text-gold text-lg flex-shrink-0 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </button>
            ))}
          </div>

          {step > 1 && (
            <button onClick={() => setStep(s => s - 1)} className="text-[11px] text-surface-muted mt-6 hover:text-gold no-underline">
              ← Back
            </button>
          )}
        </div>
      </section>
    );
  }

  // RESULTS
  const r = getRecommendations(answers);

  return (
    <section className="py-12 px-5">
      <div className="max-w-3xl mx-auto">

        {/* PROFILE */}
        <div className="text-center mb-8">
          <p className="section-label justify-center mb-3">Your Personalized Pathway</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-2">
            We see <em className="text-gold italic">your organization.</em>
          </h1>
        </div>

        {/* TRUST LANGUAGE BANNER */}
        <div className="bg-navy-800 border border-surface-border rounded-2xl p-4 mb-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2 text-center">Reading Your Recommendations</p>
          <p className="text-[11px] text-surface-secondary leading-relaxed text-center mb-3">
            Each recommended program is in one of three phases. We tell you exactly what we deliver today versus what activates as you onboard.
          </p>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-md px-2 py-1.5 text-center">
              <span aria-hidden>🟢</span> <span className="text-emerald-300 font-bold tracking-wide">Available Now</span>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-md px-2 py-1.5 text-center">
              <span aria-hidden>🟡</span> <span className="text-amber-300 font-bold tracking-wide">Activating</span>
            </div>
            <div className="bg-sky-500/10 border border-sky-500/30 rounded-md px-2 py-1.5 text-center">
              <span aria-hidden>🔵</span> <span className="text-sky-300 font-bold tracking-wide">Developing</span>
            </div>
          </div>
        </div>

        {/* PROFILE BOX */}
        <div className="bg-navy-800 border-2 border-gold/30 rounded-2xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4 text-center">Your Organization Profile</p>
          <div className="grid grid-cols-2 gap-3">
            <ProfileItem label="Type" value={r.orgType.label} />
            <ProfileItem label="Size" value={r.size.label} />
            <ProfileItem label="Primary Challenge" value={r.challengeLabel} />
            <ProfileItem label="Top Goal" value={r.goal.label} />
          </div>
          <div className="border-t border-gold/15 mt-5 pt-4 text-center">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gold/70 mb-1">Need Category</p>
            <p className="text-[14px] text-surface-primary">{r.category}</p>
          </div>
        </div>

        {/* RECOMMENDED PROGRAMS */}
        <div className="bg-navy-800 border border-surface-border rounded-2xl p-6 mb-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4">Recommended Programs</p>
          <div className="space-y-3">
            {r.programs.map((p, i) => (
              <a key={i} href={p.link} className="block bg-navy-950/50 border border-surface-border rounded-xl p-4 hover:border-gold/40 transition-colors no-underline group">
                <p className="text-[13px] font-medium text-surface-primary mb-1 group-hover:text-gold transition-colors">{p.name} →</p>
                <p className="text-[11px] text-surface-secondary leading-relaxed">{p.why}</p>
              </a>
            ))}
          </div>
        </div>

        {/* RECOMMENDED OPPORTUNITIES */}
        {r.opportunities.length > 0 && (
          <div className="bg-navy-800 border border-surface-border rounded-2xl p-6 mb-6">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4">Recommended Opportunities</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {r.opportunities.map((o, i) => (
                <a key={i} href={o.link} className="bg-navy-950/50 border border-surface-border rounded-lg px-4 py-2.5 hover:border-gold/40 text-[12px] text-surface-primary hover:text-gold no-underline transition-colors">
                  {o.name} →
                </a>
              ))}
            </div>
          </div>
        )}

        {/* NEXT STEPS */}
        <div className="bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
          <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4">Recommended Next Steps</p>
          <div className="space-y-2">
            {r.nextSteps.map((s, i) => (
              <a key={i} href={s.link} className="flex items-start gap-3 bg-navy-950/40 rounded-lg px-4 py-3 hover:bg-navy-950/70 transition-colors no-underline">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold">{i+1}</span>
                <span className="text-[12px] text-surface-primary group-hover:text-gold flex-1">{s.label}</span>
                <span className="text-gold text-sm flex-shrink-0">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* RESTART */}
        <div className="text-center mt-7">
          <button onClick={restart} className="text-[11px] text-surface-muted hover:text-gold no-underline">
            ↻ Restart assessment
          </button>
        </div>

        <p className="text-[10px] text-surface-muted text-center mt-6 italic max-w-xl mx-auto leading-relaxed">
          This is illustrative guidance, not a binding commitment. Final programs and benefits are determined through the application and recognition process. Implementation timelines depend on organizational readiness, compliance review, and program phase.
        </p>
      </div>
    </section>
  );
}

function ProfileItem({ label, value }) {
  return (
    <div className="bg-navy-950/50 rounded-lg px-3 py-2.5">
      <p className="text-[9px] font-bold tracking-widest uppercase text-gold/70 mb-1">{label}</p>
      <p className="text-[12px] text-surface-primary">{value}</p>
    </div>
  );
}
