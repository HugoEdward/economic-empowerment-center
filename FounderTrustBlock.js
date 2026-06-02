'use client';
import { useState } from 'react';

const BENEFICIARIES = [
  { id:'members', icon:'👥', label:'Your Members', benefit:'Access to merchant discounts, events, services, community belonging, and economic participation opportunities.' },
  { id:'merchants', icon:'🏪', label:'Your Merchants', benefit:'A connected customer base, community visibility, ecosystem accreditation, and sustainable business relationships.' },
  { id:'community', icon:'🏘️', label:'Your Community', benefit:'Stronger local economic activity, organized programs, visible leadership, and cultural preservation.' },
  { id:'sponsors', icon:'🤝', label:'Your Sponsors', benefit:'Measurable community impact, real visibility, direct engagement with organized populations.' },
  { id:'orgs', icon:'🔗', label:'Other Organizations', benefit:'Shared infrastructure, cross-referral opportunities, federation-scale collective strength.' },
  { id:'chambers', icon:'🏛️', label:'Chambers', benefit:'Activated member businesses, new participation pathways, regional economic engagement.' },
  { id:'entrepreneurs', icon:'🚀', label:'Entrepreneurs', benefit:'Professional network access, community customer base, ecosystem credibility.' },
  { id:'passport', icon:'🌍', label:'Passport to the World', benefit:'Cultural representation, international engagement, destination participation.' },
  { id:'network', icon:'⚡', label:'The Ecosystem', benefit:'Every qualified participant strengthens the entire network for everyone.' },
];

export default function ImpactMap() {
  const [active, setActive] = useState(null);
  const sel = BENEFICIARIES.find(b => b.id === active);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mx-auto" style={{ maxWidth: 520, aspectRatio: '1/1' }}>
        {/* Pulse */}
        <div className="absolute inset-[18%] rounded-full border border-gold/[0.06] animate-pulse" />
        {/* Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gold/25 to-gold/10 border-2 border-gold flex items-center justify-center text-center shadow-lg shadow-gold/10">
          <span className="text-[10px] md:text-xs font-bold text-gold leading-tight px-2">YOUR<br/>ORGANIZATION</span>
        </div>
        {/* Nodes */}
        {BENEFICIARIES.map((b, i) => {
          const angle = (i * 360) / BENEFICIARIES.length;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 40 * Math.cos(rad);
          const y = 50 + 40 * Math.sin(rad);
          const isActive = active === b.id;
          return (
            <button key={b.id} onClick={() => setActive(isActive ? null : b.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full flex flex-col items-center justify-center transition-all duration-300 border
              ${isActive ? 'bg-gold/20 border-gold scale-110 shadow-lg shadow-gold/20' : 'bg-navy-800 border-surface-border hover:border-gold/30 hover:scale-105'}`}
              style={{ left: `${x}%`, top: `${y}%` }}>
              <span className="text-sm md:text-base">{b.icon}</span>
              <span className={`text-[7px] font-semibold leading-tight mt-0.5 ${isActive ? 'text-gold' : 'text-surface-muted'}`}>{b.label.replace('Your ','')}</span>
            </button>
          );
        })}
        {/* Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none">
          {BENEFICIARIES.map((b, i) => {
            const angle = (i * 360) / BENEFICIARIES.length;
            const rad = (angle * Math.PI) / 180;
            const isActive = active === b.id;
            return <line key={b.id} x1="50" y1="50" x2={50 + 40 * Math.cos(rad)} y2={50 + 40 * Math.sin(rad)}
              stroke={isActive ? 'rgba(212,168,83,0.5)' : 'rgba(212,168,83,0.08)'} strokeWidth={isActive ? '0.6' : '0.25'}
              className="transition-all duration-300" />;
          })}
        </svg>
      </div>
      {/* Detail */}
      <div className="mt-6 text-center min-h-[60px]">
        {sel ? (
          <div className="animate-fade-up">
            <p className="text-sm font-semibold mb-1">{sel.icon} {sel.label}</p>
            <p className="text-xs text-surface-secondary max-w-md mx-auto">{sel.benefit}</p>
          </div>
        ) : (
          <p className="text-xs text-surface-muted">Select any participant to see how they benefit from your organization&rsquo;s participation</p>
        )}
      </div>
    </div>
  );
}
