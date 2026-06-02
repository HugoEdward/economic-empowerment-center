'use client';
import { useState, useMemo } from 'react';

/**
 * OpportunitySimulator — interactive illustrative simulator.
 *
 * Inputs: array of { name, label, min, max, step, default, unit, hint }
 * Calculate: function (values) => { outputs: [{label, value, format}], rangeLow, rangeHigh, activityTotal }
 *
 * IMPORTANT: All numbers shown are illustrative. No formulas or percentages
 * are published. Detailed compensation belongs to Mundus.Center.
 */

export default function OpportunitySimulator({ target, inputs, calculate }) {
  const [values, setValues] = useState(
    Object.fromEntries(inputs.map(i => [i.name, i.default]))
  );

  const result = useMemo(() => calculate(values), [values, calculate]);

  function update(name, value) {
    setValues(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="bg-navy-800 border border-gold/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* HEADER */}
      <div className="text-center mb-6">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold mb-2">Interactive Simulator</p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-2">
          HOW DO I REACH <em className="text-gold italic">${target.toLocaleString()}+?</em>
        </h2>
        <p className="text-xs text-surface-secondary">Move the sliders. Watch the opportunity update live.</p>
      </div>

      {/* LIVE OPPORTUNITY OUTPUT — STICKY AT TOP */}
      <div className="bg-gold/[0.08] border border-gold/30 rounded-xl p-5 mb-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/40" />
        <p className="text-[9px] font-bold tracking-widest uppercase text-gold/80 mb-1">Illustrative Annual Opportunity</p>
        <p className="font-display text-3xl md:text-5xl text-gold font-medium leading-none mb-1">
          ${Math.round(result.rangeLow / 1000)}K
          <span className="text-surface-secondary text-2xl md:text-3xl mx-2">–</span>
          ${Math.round(result.rangeHigh / 1000)}K
        </p>
        <p className="text-[10px] text-surface-muted mt-2 italic">
          Illustrative only. Subject to performance, retention, processor approval, and program rules.
          Detailed compensation managed on Mundus.Center.
        </p>
      </div>

      {/* INPUTS */}
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
        {inputs.map(input => (
          <SliderInput
            key={input.name}
            input={input}
            value={values[input.name]}
            onChange={v => update(input.name, v)}
          />
        ))}
      </div>

      {/* CALCULATED OUTPUTS */}
      <div className="bg-navy-950/50 border border-surface-border rounded-xl p-5">
        <p className="text-[9px] font-bold tracking-widest uppercase text-gold mb-3">Ecosystem Activity Generated</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {result.outputs.map(output => (
            <div key={output.label} className="text-center">
              <p className="font-display text-lg md:text-xl text-gold leading-none">{output.value}</p>
              <p className="text-[9px] text-surface-muted tracking-wider uppercase mt-1.5">{output.label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[9px] text-surface-muted text-center mt-5 italic max-w-xl mx-auto">
        Simulator shows illustrative ecosystem scenarios only. Actual compensation, contracts, ranks, and payout systems are managed on Mundus.Center and subject to written agreement, compliance, processor, legal, and tax review. No income is guaranteed.
      </p>
    </div>
  );
}

function SliderInput({ input, value, onChange }) {
  const display = input.unit === '$'
    ? '$' + Number(value).toLocaleString()
    : Number(value).toLocaleString() + (input.unit ? ' ' + input.unit : '');

  return (
    <div>
      <div className="flex items-baseline justify-between mb-1">
        <label className="text-[11px] font-medium text-surface-primary">{input.label}</label>
        <span className="text-sm font-bold text-gold tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        min={input.min}
        max={input.max}
        step={input.step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-gold cursor-pointer"
      />
      {input.hint && <p className="text-[9px] text-surface-muted mt-0.5">{input.hint}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────
// CALCULATION HELPERS — Illustrative formulas
// All ranges are bounded illustrative scenarios.
// No exact compensation percentages are published.
// ─────────────────────────────────────────────

export function formatCurrency(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return '$' + Math.round(n / 1000) + 'K';
  return '$' + Math.round(n);
}

export function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return Math.round(n / 1000) + 'K';
  return Math.round(n).toString();
}
