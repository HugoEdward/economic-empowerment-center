'use client';
import { useState } from 'react';

const NATIONS = [
  { flag:'🇮🇳', name:'India', orgs:'3,400,000+', biz:'63,000,000+', members:'400,000,000+', reach:'$3.5T+', opp:'Massive national ecosystem — religious, educational, professional, cultural' },
  { flag:'🇺🇸', name:'United States', orgs:'1,800,000+', biz:'33,000,000+', members:'250,000,000+', reach:'$25T+', opp:'Strong chamber, nonprofit, cultural, professional, diaspora participation' },
  { flag:'🇨🇳', name:'China', orgs:'900,000+', biz:'44,000,000+', members:'300,000,000+', reach:'$17T+', opp:'Large professional, educational, and trade association ecosystem' },
  { flag:'🇧🇷', name:'Brazil', orgs:'820,000+', biz:'20,000,000+', members:'120,000,000+', reach:'$1.9T+', opp:'Large multicultural, business, and community ecosystem' },
  { flag:'🇮🇩', name:'Indonesia', orgs:'500,000+', biz:'8,700,000+', members:'80,000,000+', reach:'$1.3T+', opp:'Religious, cultural, youth, and community organization density' },
  { flag:'🇳🇬', name:'Nigeria', orgs:'400,000+', biz:'4,000,000+', members:'60,000,000+', reach:'$440B+', opp:'Dynamic religious, professional, diaspora, and trade ecosystem' },
  { flag:'🇲🇽', name:'Mexico', orgs:'350,000+', biz:'5,500,000+', members:'50,000,000+', reach:'$1.3T+', opp:'Cultural, chamber, professional, and cross-border participation' },
  { flag:'🇬🇧', name:'United Kingdom', orgs:'200,000+', biz:'5,500,000+', members:'40,000,000+', reach:'$3.1T+', opp:'Established charity, chamber, diaspora, and professional sector' },
  { flag:'🇩🇪', name:'Germany', orgs:'600,000+', biz:'3,500,000+', members:'45,000,000+', reach:'$4.0T+', opp:'Dense association culture — professional, cultural, trade, sports' },
  { flag:'🇫🇷', name:'France', orgs:'1,500,000+', biz:'4,000,000+', members:'35,000,000+', reach:'$2.8T+', opp:'One of the world\'s largest association ecosystems' },
  { flag:'🇯🇵', name:'Japan', orgs:'400,000+', biz:'3,600,000+', members:'30,000,000+', reach:'$4.2T+', opp:'Professional, trade, cultural, and community associations' },
  { flag:'🇵🇰', name:'Pakistan', orgs:'250,000+', biz:'3,500,000+', members:'40,000,000+', reach:'$340B+', opp:'Religious, educational, professional, and diaspora networks' },
  { flag:'🇵🇭', name:'Philippines', orgs:'300,000+', biz:'1,000,000+', members:'35,000,000+', reach:'$400B+', opp:'Community, religious, diaspora, and professional participation' },
  { flag:'🇨🇴', name:'Colombia', orgs:'200,000+', biz:'1,600,000+', members:'20,000,000+', reach:'$320B+', opp:'Cultural, chamber, foundation, and community organization base' },
  { flag:'🇰🇪', name:'Kenya', orgs:'350,000+', biz:'1,500,000+', members:'18,000,000+', reach:'$110B+', opp:'NGO, community, youth, and professional ecosystem leader' },
  { flag:'🇨🇦', name:'Canada', orgs:'170,000+', biz:'1,200,000+', members:'18,000,000+', reach:'$2.0T+', opp:'Multicultural, chamber, nonprofit, and immigrant org participation' },
  { flag:'🇹🇷', name:'Türkiye', orgs:'180,000+', biz:'3,500,000+', members:'25,000,000+', reach:'$900B+', opp:'Chamber, professional, cultural, and trade association density' },
  { flag:'🇿🇦', name:'South Africa', orgs:'250,000+', biz:'2,600,000+', members:'15,000,000+', reach:'$400B+', opp:'Nonprofit, community, chamber, and professional ecosystem' },
  { flag:'🇪🇬', name:'Egypt', orgs:'50,000+', biz:'2,500,000+', members:'20,000,000+', reach:'$400B+', opp:'Religious, educational, professional, and community organizations' },
  { flag:'🇦🇺', name:'Australia', orgs:'60,000+', biz:'2,400,000+', members:'12,000,000+', reach:'$1.7T+', opp:'Multicultural, charity, professional, and diaspora participation' },
  { flag:'🇦🇷', name:'Argentina', orgs:'120,000+', biz:'1,100,000+', members:'12,000,000+', reach:'$630B+', opp:'Cultural, chamber, foundation, and community organization base' },
  { flag:'🇪🇹', name:'Ethiopia', orgs:'100,000+', biz:'800,000+', members:'15,000,000+', reach:'$120B+', opp:'Religious, community, youth, and diaspora organizations' },
  { flag:'🇻🇳', name:'Vietnam', orgs:'70,000+', biz:'800,000+', members:'20,000,000+', reach:'$400B+', opp:'Trade, professional, youth, and community participation' },
  { flag:'🇧🇩', name:'Bangladesh', orgs:'150,000+', biz:'1,200,000+', members:'30,000,000+', reach:'$420B+', opp:'NGO, microenterprise, community, and diaspora networks' },
  { flag:'🇵🇪', name:'Peru', orgs:'100,000+', biz:'1,000,000+', members:'8,000,000+', reach:'$240B+', opp:'Cultural, community, professional, and indigenous organizations' },
  { flag:'🇮🇹', name:'Italy', orgs:'350,000+', biz:'4,400,000+', members:'25,000,000+', reach:'$2.0T+', opp:'Association, cultural, professional, and diaspora ecosystem' },
  { flag:'🇪🇸', name:'Spain', orgs:'250,000+', biz:'3,400,000+', members:'18,000,000+', reach:'$1.4T+', opp:'Cultural, professional, chamber, and community participation' },
  { flag:'🇷🇺', name:'Russia', orgs:'220,000+', biz:'6,000,000+', members:'30,000,000+', reach:'$1.8T+', opp:'Professional, educational, cultural, and trade associations' },
  { flag:'🇰🇷', name:'South Korea', orgs:'120,000+', biz:'4,000,000+', members:'15,000,000+', reach:'$1.6T+', opp:'Professional, trade, religious, and community organizations' },
  { flag:'🇵🇱', name:'Poland', orgs:'140,000+', biz:'2,300,000+', members:'10,000,000+', reach:'$680B+', opp:'Foundation, association, professional, and diaspora networks' },
  { flag:'🇹🇭', name:'Thailand', orgs:'80,000+', biz:'3,200,000+', members:'15,000,000+', reach:'$500B+', opp:'Religious, community, trade, and professional organizations' },
  { flag:'🇳🇱', name:'Netherlands', orgs:'120,000+', biz:'2,100,000+', members:'8,000,000+', reach:'$1.0T+', opp:'Dense association culture — trade, professional, cultural, sports' },
  { flag:'🇸🇦', name:'Saudi Arabia', orgs:'30,000+', biz:'1,200,000+', members:'5,000,000+', reach:'$800B+', opp:'Chamber, professional, religious, and community participation' },
  { flag:'🇦🇪', name:'United Arab Emirates', orgs:'20,000+', biz:'600,000+', members:'3,000,000+', reach:'$500B+', opp:'Multicultural diaspora, chamber, and professional ecosystem' },
  { flag:'🇨🇱', name:'Chile', orgs:'80,000+', biz:'1,000,000+', members:'5,000,000+', reach:'$300B+', opp:'Foundation, professional, cultural, and community organizations' },
  { flag:'🇬🇭', name:'Ghana', orgs:'80,000+', biz:'900,000+', members:'8,000,000+', reach:'$70B+', opp:'Religious, community, youth, and diaspora participation' },
  { flag:'🇹🇿', name:'Tanzania', orgs:'60,000+', biz:'700,000+', members:'8,000,000+', reach:'$70B+', opp:'Community, religious, NGO, and youth organization base' },
  { flag:'🇺🇬', name:'Uganda', orgs:'50,000+', biz:'500,000+', members:'6,000,000+', reach:'$45B+', opp:'NGO, community, religious, and youth organizations' },
  { flag:'🇲🇦', name:'Morocco', orgs:'50,000+', biz:'700,000+', members:'6,000,000+', reach:'$130B+', opp:'Cultural, professional, chamber, and community ecosystem' },
  { flag:'🇯🇲', name:'Jamaica', orgs:'15,000+', biz:'60,000+', members:'1,000,000+', reach:'$15B+', opp:'Cultural, diaspora, religious, and community participation' },
  { flag:'🇹🇹', name:'Trinidad & Tobago', orgs:'10,000+', biz:'40,000+', members:'500,000+', reach:'$25B+', opp:'Cultural, religious, chamber, and professional networks' },
  { flag:'🇩🇴', name:'Dominican Republic', orgs:'30,000+', biz:'300,000+', members:'3,000,000+', reach:'$100B+', opp:'Community, cultural, diaspora, and chamber participation' },
  { flag:'🇭🇹', name:'Haiti', orgs:'20,000+', biz:'200,000+', members:'3,000,000+', reach:'$20B+', opp:'Community, diaspora, religious, and development organizations' },
  { flag:'🇸🇳', name:'Senegal', orgs:'30,000+', biz:'300,000+', members:'4,000,000+', reach:'$28B+', opp:'Community, religious, youth, and cultural organizations' },
  { flag:'🇨🇩', name:'DR Congo', orgs:'40,000+', biz:'500,000+', members:'10,000,000+', reach:'$55B+', opp:'Religious, community, youth, and development organizations' },
  { flag:'🇳🇵', name:'Nepal', orgs:'50,000+', biz:'400,000+', members:'5,000,000+', reach:'$36B+', opp:'Community, NGO, diaspora, and cultural organizations' },
  { flag:'🇱🇰', name:'Sri Lanka', orgs:'30,000+', biz:'300,000+', members:'4,000,000+', reach:'$74B+', opp:'Religious, community, professional, and cultural networks' },
  { flag:'🇮🇱', name:'Israel', orgs:'40,000+', biz:'600,000+', members:'3,000,000+', reach:'$520B+', opp:'Nonprofit, diaspora, professional, and community participation' },
  { flag:'🇸🇪', name:'Sweden', orgs:'100,000+', biz:'1,200,000+', members:'5,000,000+', reach:'$580B+', opp:'Dense association culture — trade, professional, immigrant, cultural' },
  { flag:'🇳🇴', name:'Norway', orgs:'50,000+', biz:'600,000+', members:'3,000,000+', reach:'$480B+', opp:'Professional, cultural, sports, and community organizations' },
  { flag:'🇹🇼', name:'Taiwan', orgs:'60,000+', biz:'1,500,000+', members:'5,000,000+', reach:'$790B+', opp:'Professional, cultural, educational, and technology associations' },
  { flag:'🇵🇸', name:'Palestine', orgs:'15,000+', biz:'100,000+', members:'2,000,000+', reach:'$18B+', opp:'Community, cultural, diaspora, educational, and youth organizations' },
  { flag:'🏔️', name:'Tibet', orgs:'5,000+', biz:'30,000+', members:'1,000,000+', reach:'—', opp:'Cultural preservation, diaspora, religious, and community organizations' },
  { flag:'🇭🇰', name:'Hong Kong', orgs:'25,000+', biz:'350,000+', members:'3,000,000+', reach:'$360B+', opp:'Chamber, professional, cultural, and diaspora ecosystem' },
  { flag:'🇽🇰', name:'Kosovo', orgs:'8,000+', biz:'50,000+', members:'500,000+', reach:'$9B+', opp:'Community, cultural, diaspora, and youth organizations' },
  { flag:'🇵🇷', name:'Puerto Rico', orgs:'12,000+', biz:'80,000+', members:'1,500,000+', reach:'$100B+', opp:'Cultural, professional, chamber, and diaspora participation' },
  { flag:'🇱🇧', name:'Lebanon', orgs:'20,000+', biz:'200,000+', members:'2,000,000+', reach:'$23B+', opp:'Diaspora, cultural, religious, professional, and community organizations' },
  { flag:'🇬🇱', name:'Greenland', orgs:'1,000+', biz:'5,000+', members:'30,000+', reach:'$3B+', opp:'Indigenous, cultural, and community organizations' },
  { flag:'🇲🇴', name:'Macau', orgs:'3,000+', biz:'40,000+', members:'300,000+', reach:'$24B+', opp:'Cultural, professional, chamber, and community networks' },
];

export default function OpportunityTable() {
  const [search, setSearch] = useState('');
  const filtered = NATIONS.filter(n => n.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="mb-5">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search countries & territories..."
          className="w-full max-w-sm bg-navy-950 border border-surface-border rounded-lg px-4 py-2.5 text-sm text-surface-primary placeholder:text-surface-muted outline-none focus:border-gold focus:ring-1 focus:ring-gold-dim" />
      </div>
      <div className="overflow-x-auto rounded-xl border border-surface-border">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-navy-800 border-b border-surface-border">
              <th className="px-3 py-3 text-[9px] font-bold tracking-widest uppercase text-gold">Country / Territory</th>
              <th className="px-3 py-3 text-[9px] font-bold tracking-widest uppercase text-gold text-right">Orgs</th>
              <th className="px-3 py-3 text-[9px] font-bold tracking-widest uppercase text-gold text-right">Businesses</th>
              <th className="px-3 py-3 text-[9px] font-bold tracking-widest uppercase text-gold text-right hidden md:table-cell">Members</th>
              <th className="px-3 py-3 text-[9px] font-bold tracking-widest uppercase text-gold text-right hidden lg:table-cell">Reach</th>
              <th className="px-3 py-3 text-[9px] font-bold tracking-widest uppercase text-gold hidden xl:table-cell">Participation Opportunity</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((n, i) => (
              <tr key={n.name} className={`border-b border-surface-border/50 hover:bg-navy-800/50 transition-colors ${i%2===0?'bg-navy-950/30':''}`}>
                <td className="px-3 py-2 text-sm font-medium whitespace-nowrap"><span className="mr-1.5">{n.flag}</span>{n.name}</td>
                <td className="px-3 py-2 text-[11px] text-surface-secondary text-right font-mono">{n.orgs}</td>
                <td className="px-3 py-2 text-[11px] text-surface-secondary text-right font-mono">{n.biz}</td>
                <td className="px-3 py-2 text-[11px] text-surface-secondary text-right font-mono hidden md:table-cell">{n.members}</td>
                <td className="px-3 py-2 text-[11px] text-gold text-right font-mono hidden lg:table-cell">{n.reach}</td>
                <td className="px-3 py-2 text-[10px] text-surface-muted hidden xl:table-cell max-w-[220px]">{n.opp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 justify-center">
        <Stat label="Countries & Territories" value="195+" />
        <Stat label="Est. Organizations Worldwide" value="12M+" />
        <Stat label="Est. Businesses Worldwide" value="300M+" />
        <Stat label="Est. Organized Members" value="1.5B+" />
      </div>
      <p className="text-[9px] text-surface-muted text-center mt-4 leading-relaxed max-w-3xl mx-auto">
        Country-level data is directional and will be refined as official registries, business datasets,
        organization databases, and platform participation records are integrated.
        Showing {filtered.length} of 60 featured countries & territories. Full 195+ country & territory dataset architecture in development.
      </p>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-navy-800 border border-surface-border rounded-lg px-5 py-2.5 text-center">
      <p className="font-display text-lg text-gold leading-none">{value}</p>
      <p className="text-[9px] text-surface-muted mt-1">{label}</p>
    </div>
  );
}
