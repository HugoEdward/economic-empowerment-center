import './globals.css';
import AdvisorPreviewGate from '@/components/AdvisorPreviewGate';
import FeedbackButton from '@/components/FeedbackButton';

export const metadata = {
  title: { default: 'Economic Empowerment — Sustainable Revenue & Opportunities', template: '%s | Economic Empowerment' },
  description: 'Sustainable revenue and economic opportunities for organizations, churches, chambers, entrepreneurs, merchants, and communities across 195+ countries and territories.',
  keywords: ['economic empowerment','economic opportunities','sustainable revenue','membership organization revenue','church funding','chamber benefits','merchant customer growth','city economic development','cultural economic development','community empowerment','nonprofit sustainability','1City.VIP','MundusPASS','International Cultures Celebration','Passport to the World'],
  openGraph: {
    title: 'Economic Empowerment — Sustainable Revenue & Opportunities',
    description: 'Sustainable revenue for organizations. New customers for merchants. Growth for cities. The resources are already organized.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    languages: {
      'en': '/',
      'es': '/es/',
      'pt': '/pt/',
      'fr': '/fr/',
      'ar': '/ar/',
      'hi': '/hi/',
      'zh': '/zh/',
    },
  },
};

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/career-opportunities/', label: 'Careers' },
  { href: '/international-cultures-celebration/', label: 'Cultures Celebration' },
  { href: '/city-venture-vip/', label: 'City Venture' },
  { href: '/how-do-i-start-today/', label: 'How to Start' },
  { href: '/apply/', label: 'Applications' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AdvisorPreviewGate>
          <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-navy-950/80 border-b border-surface-border">
            <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
              <a href="/" className="no-underline flex items-baseline gap-2">
                <span className="font-display text-base md:text-lg font-semibold tracking-tight text-surface-primary">
                  Economic<span className="text-gold ml-1">Empowerment</span>
                </span>
                <span className="hidden sm:inline text-[10px] font-mono text-gold/60 tracking-wider border-l border-gold/20 pl-2">S.E.E.D.</span>
              </a>
              <div className="hidden md:flex items-center gap-5">
                {NAV.map(l => (
                  <a key={l.href} href={l.href} className="text-[13px] font-medium text-surface-secondary no-underline hover:text-surface-primary transition-colors">{l.label}</a>
                ))}
                <a href="/apply/" className="btn-primary !py-1.5 !px-4 !text-xs">Apply for Consideration</a>
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <FeedbackButton />
        <footer className="border-t border-surface-border">
          {/* Ecosystem links */}
          <div className="bg-navy-900 py-8 px-5 border-b border-surface-border/50">
            <div className="max-w-5xl mx-auto">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold text-center mb-5">The MUNDUS Ecosystem</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                <a href="/" className="text-center bg-navy-800 border border-gold/20 rounded-xl px-3 py-3 hover:border-gold/40 transition-colors no-underline">
                  <p className="font-mono text-[10px] text-gold mb-1">EconomicEmpowerment</p>
                  <p className="text-[9px] text-surface-muted leading-snug">Sustainability pathway</p>
                </a>
                <a href="https://mundus.center/partners" target="_blank" rel="noopener noreferrer" className="text-center bg-navy-800 border border-surface-border rounded-xl px-3 py-3 hover:border-gold/30 transition-colors no-underline">
                  <p className="font-mono text-[10px] text-gold mb-1">Mundus.Center ↗</p>
                  <p className="text-[9px] text-surface-muted leading-snug">Contracts & compensation</p>
                </a>
                <a href="https://munduspass.com" target="_blank" rel="noopener noreferrer" className="text-center bg-navy-800 border border-surface-border rounded-xl px-3 py-3 hover:border-gold/30 transition-colors no-underline">
                  <p className="font-mono text-[10px] text-gold mb-1">MundusPASS ↗</p>
                  <p className="text-[9px] text-surface-muted leading-snug">Benefits & transactions</p>
                </a>
                <a href="https://culturescelebration.com" target="_blank" rel="noopener noreferrer" className="text-center bg-navy-800 border border-surface-border rounded-xl px-3 py-3 hover:border-gold/30 transition-colors no-underline">
                  <p className="font-mono text-[10px] text-gold mb-1">CulturesCelebration ↗</p>
                  <p className="text-[9px] text-surface-muted leading-snug">Culture & engagement</p>
                </a>
                <a href="/city-venture-vip/" className="text-center bg-navy-800 border border-surface-border rounded-xl px-3 py-3 hover:border-gold/30 transition-colors no-underline">
                  <p className="font-mono text-[10px] text-gold mb-1">1City.VIP</p>
                  <p className="text-[9px] text-surface-muted leading-snug">City activation</p>
                </a>
                <a href="https://culturescelebration.com" target="_blank" rel="noopener noreferrer" className="text-center bg-navy-800 border border-surface-border rounded-xl px-3 py-3 hover:border-gold/30 transition-colors no-underline">
                  <p className="font-mono text-[10px] text-gold mb-1">Passport to the World ↗</p>
                  <p className="text-[9px] text-surface-muted leading-snug">Visitor participation</p>
                </a>
                <a href="https://immigrantsalliance.org" target="_blank" rel="noopener noreferrer" className="text-center bg-navy-800 border border-surface-border rounded-xl px-3 py-3 hover:border-gold/30 transition-colors no-underline">
                  <p className="font-mono text-[10px] text-gold mb-1">ImmigrantsAlliance ↗</p>
                  <p className="text-[9px] text-surface-muted leading-snug">Federation & advocacy</p>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-navy-900 py-8 px-5">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <p className="text-xs text-surface-secondary leading-relaxed">
                Economic Empowerment is a global economic empowerment platform supported through the MUNDUS ecosystem.
                MundusPASS powers transaction infrastructure, while participating organizations operate independently
                within their own communities and jurisdictions.
              </p>
              <p className="text-xs text-surface-muted leading-relaxed">
                Economic Empowerment operates in partnership with participating organizations across the MUNDUS ecosystem,
                including Immigrants Alliance and the International Cultures Mission.
              </p>
              <p className="text-[10px] text-surface-muted/60">
                Participation is subject to qualification, review, approval, and ongoing compliance with ecosystem guidelines.
              </p>
              <p className="text-[9px] text-surface-muted/50 leading-relaxed max-w-2xl mx-auto mt-2">
                Economic Empowerment welcomes participation from organizations, businesses, institutions, chambers, associations,
                nonprofits, cultural communities, educational institutions, professional groups, faith-based organizations,
                health organizations, youth organizations, and partners from countries and territories worldwide.
              </p>
            </div>
          </div>
          <div className="bg-navy-950 py-4 px-5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-[11px] text-surface-muted">&copy; {new Date().getFullYear()} Economic Empowerment · Founded by Hugo Edward Juarez, Sr. · Since 1976</p>
              <div className="flex gap-4">
                {['Privacy','Terms','Contact'].map(l => (
                  <a key={l} href="#" className="text-[11px] text-surface-muted hover:text-surface-primary transition-colors no-underline">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
        </AdvisorPreviewGate>
      </body>
    </html>
  );
}
