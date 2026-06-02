'use client';
import { useState } from 'react';

const NODES = [
  { id: 'members', label: 'Members', icon: '👥', angle: 0, input: 'Join your organization', activity: 'Shop, attend events, participate', benefit: 'Discounts, access, belonging' },
  { id: 'dues', label: 'Member Dues', icon: '💰', angle: 30, input: '$10/month per member', activity: 'Automated collection', benefit: 'Recurring organizational income' },
  { id: 'merchants', label: 'Merchants', icon: '🏪', angle: 60, input: 'Accredited by your DO', activity: 'Serve your members', benefit: 'Customer base + visibility' },
  { id: 'professionals', label: 'Professionals', icon: '💼', angle: 90, input: 'Join the network', activity: 'Offer services', benefit: 'Client referrals + credibility' },
  { id: 'sponsors', label: 'Sponsors', icon: '🤝', angle: 120, input: 'Support your mission', activity: 'Fund programs & events', benefit: 'Community exposure + impact' },
  { id: 'events', label: 'Events', icon: '🎭', angle: 150, input: 'Cultural celebrations', activity: 'Showcase your community', benefit: 'Revenue + visibility + pride' },
  { id: 'passport', label: 'Passport to the World', icon: '🌍', angle: 180, input: 'Destination participation', activity: 'Global cultural exchange', benefit: 'International connections + income' },
  { id: 'ee', label: 'Economic Empowerment', icon: '⚡', angle: 210, input: 'Platform + infrastructure', activity: 'Tools, training, support', benefit: 'Organizational capacity building' },
  { id: 'orgs', label: 'Other Organizations', icon: '🔗', angle: 240, input: 'Federation partners', activity: 'Share resources + referrals', benefit: 'Collective strength' },
  { id: 'chambers', label: 'Chambers of Commerce', icon: '🏛️', angle: 270, input: 'Business network access', activity: 'Cross-promote merchants', benefit: 'Expanded economic reach' },
  { id: 'do', label: 'Development Officer', icon: '🎯', angle: 300, input: 'Your dedicated activator', activity: 'Accredit, engage, grow', benefit: 'Operational leadership' },
  { id: 'munduspass', label: 'MundusPASS', icon: '💳', angle: 330, input: 'Transaction infrastructure', activity: 'Process member purchases', benefit: 'Transaction-based income' },
];

export default function EcosystemWeb() {
  const [active, setActive] = useState(null);
  const selected = NODES.find(n => n.id === active);

  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8 items-center">
      {/* WEB */}
      <div className="relative mx-auto w-full" style={{ maxWidth: 520, aspectRatio: '1/1' }}>
        {/* Pulse rings */}
        <div className="absolute inset-[15%] rounded-full border border-gold/[0.06] animate-pulse" />
        <div className="absolute inset-[30%] rounded-full border border-gold/[0.04]" />

        {/* Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                        w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gold/25 to-gold/10
                        border-2 border-gold flex items-center justify-center text-center shadow-lg shadow-gold/10 cursor-default">
          <span className="text-[10px] md:text-xs font-bold text-gold leading-tight px-2">YOUR<br/>ORGANIZATION</span>
        </div>

        {/* Nodes */}
        {NODES.map(n => {
          const rad = (n.angle * Math.PI) / 180;
          const r = 42;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          const isActive = active === n.id;
          return (
            <button key={n.id} onClick={() => setActive(isActive ? null : n.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 w-[54px] h-[54px] md:w-[62px] md:h-[62px]
                rounded-full flex flex-col items-center justify-center transition-all duration-300 border
                ${isActive ? 'bg-gold/20 border-gold scale-110 shadow-lg shadow-gold/20' : 'bg-navy-800 border-surface-border hover:border-gold/30 hover:scale-105'}`}
              style={{ left: `${x}%`, top: `${y}%` }}>
              <span className="text-sm md:text-base">{n.icon}</span>
              <span className={`text-[7px] md:text-[8px] font-semibold leading-tight mt-0.5 ${isActive ? 'text-gold' : 'text-surface-muted'}`}>{n.label.split(' ').slice(0,2).join(' ')}</span>
            </button>
          );
        })}

        {/* Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none">
          {NODES.map(n => {
            const rad = (n.angle * Math.PI) / 180;
            const isActive = active === n.id;
            return <line key={n.id} x1="50" y1="50" x2={50 + 42 * Math.cos(rad)} y2={50 + 42 * Math.sin(rad)}
              stroke={isActive ? 'rgba(212,168,83,0.5)' : 'rgba(212,168,83,0.08)'} strokeWidth={isActive ? '0.6' : '0.25'}
              className="transition-all duration-300" />;
          })}
        </svg>
      </div>

      {/* DETAIL PANEL */}
      <div className="bg-navy-800 border border-surface-border rounded-2xl p-5 min-h-[260px] flex flex-col justify-center">
        {selected ? (
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{selected.icon}</span>
              <h3 className="font-semibold text-sm">{selected.label}</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'INPUT', value: selected.input, color: 'text-blue-400' },
                { label: 'ACTIVITY', value: selected.activity, color: 'text-gold' },
                { label: 'BENEFIT', value: selected.benefit, color: 'text-emerald-400' },
              ].map(r => (
                <div key={r.label}>
                  <p className={`text-[9px] font-bold tracking-widest ${r.color}`}>{r.label}</p>
                  <p className="text-sm text-surface-secondary">{r.value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-surface-muted text-sm mb-1">Tap any node</p>
            <p className="text-xs text-surface-muted/60">to see how it connects to your organization</p>
          </div>
        )}
      </div>
    </div>
  );
}
