'use client';
import { useState } from 'react';

const PARTICIPANTS = [
  { id:'org', icon:'🏢', label:'Member Organization',
    who:'National, regional, or local organizations — nonprofits, associations, cultural groups, federations, foundations.',
    contributes:'Members, leadership, community trust, local knowledge, organizational capacity.',
    receives:'Participation tools, dues infrastructure, merchant network, visibility, sustainability pathways, Development Officer support.',
    strengthens:'The entire ecosystem — every organization brings members, merchants, and community trust.' },
  { id:'entrepreneur', icon:'🚀', label:'Entrepreneur',
    who:'Individual professionals and entrepreneurs who participate independently.',
    contributes:'Skills, services, business activity, community engagement, local visibility.',
    receives:'Ecosystem access, merchant participation opportunities, professional network, visibility.',
    strengthens:'Local economic activity and professional diversity within the ecosystem.' },
  { id:'merchant', icon:'🏪', label:'Merchant / Professional',
    who:'Local businesses, professional practices, and service providers serving community members.',
    contributes:'Products, services, discounts, economic participation, local employment.',
    receives:'Customer base, community visibility, ecosystem recognition, merchant accreditation.',
    strengthens:'Local economic activity — the engine that makes member benefits real.' },
  { id:'chamber', icon:'🏛️', label:'Chamber of Commerce',
    who:'Chambers of commerce, business associations, and trade groups connecting businesses.',
    contributes:'Business networks, commercial infrastructure, regional economic leadership.',
    receives:'New participation opportunities for member businesses, ecosystem visibility, expanded reach.',
    strengthens:'Regional and national ecosystem growth — connecting business to community.' },
  { id:'sponsor', icon:'🤝', label:'Sponsor / Strategic Partner',
    who:'Organizations and businesses that support the ecosystem through sponsorship and partnership.',
    contributes:'Resources, funding, expertise, brand support, programmatic investment.',
    receives:'Community exposure, measurable impact, brand visibility across the ecosystem.',
    strengthens:'Organizational capacity and program sustainability across the federation.' },
  { id:'do', icon:'🎯', label:'Development Officer',
    who:'Designated organizational activators who accredit merchants and engage members.',
    contributes:'Merchant accreditation, member engagement, local activation, operational leadership.',
    receives:'Organizational role, training, ecosystem support, activity-based participation.',
    strengthens:'The organization they serve — and every member and merchant they activate.' },
  { id:'liaison', icon:'🌐', label:'Success Liaison',
    who:'Organization support professionals operating through Mundus.Center.',
    contributes:'Strategic guidance, organizational development, activation support.',
    receives:'Ecosystem role, training, coordination scope. (Details at Mundus.Center)',
    strengthens:'Organizational success rates and ecosystem participation quality.' },
  { id:'coordinator', icon:'📍', label:'Coordinator',
    who:'Regional, national, or continental coordinators operating through Mundus.Center.',
    contributes:'Network activation, regional leadership, ecosystem expansion.',
    receives:'Coordination scope, ecosystem role. (Details at Mundus.Center)',
    strengthens:'Geographic reach and density of ecosystem participation.' },
  { id:'member', icon:'👤', label:'Individual Member',
    who:'Individual members affiliated with participating organizations.',
    contributes:'Dues, economic participation, merchant engagement, community presence.',
    receives:'Member benefits, merchant access, events, services, community belonging.',
    strengthens:'Organizational sustainability — every active member strengthens their organization.' },
  { id:'passport', icon:'🌍', label:'Passport to the World',
    who:'Cultural destination participants connecting communities to the global Cultures Celebration.',
    contributes:'Cultural representation, international engagement, destination content.',
    receives:'Global visibility, cultural exchange, ecosystem participation.',
    strengthens:'International connections and cultural diplomacy across the federation.' },
];

export default function ParticipationMap() {
  const [active, setActive] = useState(null);
  const sel = PARTICIPANTS.find(p => p.id === active);

  return (
    <div>
      {/* Participant selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {PARTICIPANTS.map(p => {
          const isActive = active === p.id;
          const isMundus = p.id === 'liaison' || p.id === 'coordinator';
          return (
            <button key={p.id} onClick={() => setActive(isActive ? null : p.id)}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-medium border transition-all
              ${isActive ? 'bg-gold/15 border-gold/40 text-gold scale-105' :
                isMundus ? 'bg-navy-800 border-gold/15 text-surface-muted hover:border-gold/30' :
                'bg-navy-800 border-surface-border text-surface-secondary hover:border-gold/20'}`}>
              <span className="text-sm">{p.icon}</span>{p.label}
              {isMundus && <span className="text-[8px] text-gold/60">↗</span>}
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      {sel ? (
        <div className="bg-navy-800 border border-gold/20 rounded-2xl p-6 animate-fade-up relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-2xl">{sel.icon}</span>
            <h3 className="font-display text-lg font-medium">{sel.label}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Detail color="text-surface-secondary" label="Who they are" value={sel.who} />
            <Detail color="text-blue-400" label="What they contribute" value={sel.contributes} />
            <Detail color="text-gold" label="What they receive" value={sel.receives} />
            <Detail color="text-emerald-400" label="Why their participation matters" value={sel.strengthens} />
          </div>
          {(sel.id === 'liaison' || sel.id === 'coordinator') && (
            <div className="mt-4 pt-4 border-t border-surface-border">
              <a href="https://mundus.center/partners" target="_blank" rel="noopener noreferrer"
                className="text-xs text-gold hover:underline no-underline">Explore this opportunity at Mundus.Center ↗</a>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-navy-800/50 border border-surface-border rounded-2xl p-8 text-center">
          <p className="text-surface-muted text-sm">Select a participant type to see where they fit</p>
          <p className="text-surface-muted/50 text-xs mt-1">Everyone contributes. Everyone benefits. Everyone strengthens the ecosystem.</p>
        </div>
      )}
    </div>
  );
}

function Detail({ color, label, value }) {
  return (
    <div>
      <p className={`text-[9px] font-bold tracking-widest uppercase ${color} mb-1`}>{label}</p>
      <p className="text-xs text-surface-secondary leading-relaxed">{value}</p>
    </div>
  );
}
