'use client';
import { useState } from 'react';

export default function GrowthSimulator() {
  const [v, set] = useState({ members: 5000, dues: 10, active: 40, merchants: 100, sponsors: 10 });
  const u = (k, val) => set(p => ({ ...p, [k]: Number(val) || 0 }));

  const beforeDues = Math.round(v.members * v.dues * 0.12 * 12);
  const afterDues = Math.round(v.members * v.dues * (v.active / 100) * 12);
  const afterMerchant = v.merchants * 150 * 12;
  const afterSponsor = v.sponsors * 5000 * 12;
  const afterTotal = afterDues + afterMerchant + afterSponsor;
  const beforeTotal = beforeDues + v.sponsors * 800;

  const bars = [
    { label: 'Dues Collection', before: beforeDues, after: afterDues },
    { label: 'Merchant Participation', before: 0, after: afterMerchant },
    { label: 'Sponsor Revenue', before: v.sponsors * 800, after: afterSponsor },
    { label: 'Community Activity', before: 15, after: Math.min(95, v.active + 35), pct: true },
    { label: 'Member Engagement', before: 12, after: Math.min(90, v.active + 25), pct: true },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 gap-3 bg-navy-800 border border-surface-border rounded-2xl p-5">
        <S label="Organization Members" value={v.members} min={500} max={50000} step={500} onChange={val => u('members', val)} />
        <S label="Monthly Dues" value={v.dues} min={5} max={50} step={5} onChange={val => u('dues', val)} prefix="$" />
        <S label="Active %" value={v.active} min={10} max={90} step={5} onChange={val => u('active', val)} suffix="%" />
        <S label="Merchants" value={v.merchants} min={10} max={500} step={10} onChange={val => u('merchants', val)} />
        <S label="Sponsors" value={v.sponsors} min={0} max={50} step={1} onChange={val => u('sponsors', val)} />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-navy-800 border border-red-500/15 rounded-2xl p-5">
          <p className="text-[10px] font-bold tracking-widest uppercase text-red-400/70 mb-4">Current — Disconnected</p>
          {bars.map(b => <Bar key={b.label+'b'} label={b.label} value={b.before} max={b.pct?100:afterTotal} color="bg-red-400/40" pct={b.pct} />)}
          <div className="border-t border-surface-border pt-3 mt-3 flex justify-between">
            <span className="text-xs text-surface-muted">Est. Annual</span>
            <span className="font-display text-lg text-red-400/80">${beforeTotal.toLocaleString()}</span>
          </div>
        </div>
        <div className="bg-navy-800 border border-emerald-500/15 rounded-2xl p-5">
          <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 mb-4">Activated — Connected</p>
          {bars.map(b => <Bar key={b.label+'a'} label={b.label} value={b.after} max={b.pct?100:afterTotal} color="bg-emerald-400" pct={b.pct} />)}
          <div className="border-t border-surface-border pt-3 mt-3 flex justify-between">
            <span className="text-xs text-surface-muted">Illustrative Annual</span>
            <span className="font-display text-lg text-gold">${afterTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <p className="text-[10px] text-surface-muted text-center"><strong className="text-gold">Illustrative planning scenario only. No income is guaranteed.</strong> Results depend on participation, compliance, and program rules.</p>
    </div>
  );
}

function S({ label, value, min, max, step, onChange, prefix='', suffix='' }) {
  return (
    <div className="text-center">
      <p className="text-[9px] text-surface-muted mb-1">{label}</p>
      <p className="text-sm font-bold text-surface-primary mb-1">{prefix}{value.toLocaleString()}{suffix}</p>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(e.target.value)}
        className="w-full h-1 rounded-full appearance-none cursor-pointer bg-navy-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold" />
    </div>
  );
}

function Bar({ label, value, max, color, pct }) {
  const w = max > 0 ? Math.max(2, (value/max)*100) : 2;
  return (
    <div className="mb-2.5">
      <div className="flex justify-between text-[10px] mb-0.5">
        <span className="text-surface-muted">{label}</span>
        <span className="text-surface-secondary font-medium">{pct ? `${value}%` : `$${value.toLocaleString()}`}</span>
      </div>
      <div className="h-1.5 bg-navy-950 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}
