import './globals.css';

export const metadata = {
  title: { default: 'Economic Empowerment — Global Economic Ecosystem', template: '%s | Economic Empowerment' },
  description: 'A global economic ecosystem connecting organizations, merchants, professionals, and members across 190+ nations.',
};

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/organizations/', label: 'Organizations' },
  { href: '/feasibility-and-roi/', label: 'Feasibility' },
  { href: '/how-do-i-start-today/', label: 'How to Start' },
  { href: '/apply/', label: 'Applications' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-navy-950/80 border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
            <a href="/" className="font-display text-lg font-semibold tracking-tight text-surface-primary no-underline">
              Economic<span className="text-gold ml-1">Empowerment</span>
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
        <footer className="border-t border-surface-border">
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
              <p className="text-[11px] text-surface-muted">&copy; {new Date().getFullYear()} Economic Empowerment. All rights reserved.</p>
              <div className="flex gap-4">
                {['Privacy','Terms','Contact'].map(l => (
                  <a key={l} href="#" className="text-[11px] text-surface-muted hover:text-surface-primary transition-colors no-underline">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
