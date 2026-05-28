import './globals.css';

export const metadata = {
  title: {
    default: 'Economic Empowerment — Sustainable Income for Community Organizations',
    template: '%s | Economic Empowerment',
  },
  description:
    'A global economic empowerment platform for community organizations, merchants, and members. Managed through the MUNDUS ecosystem. Powered by MundusPASS.',
};

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/organizations/', label: 'Organizations' },
  { href: '/feasibility-and-roi/', label: 'Feasibility & ROI' },
  { href: '/coordinators/', label: 'Coordinators' },
];

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-navy-950/75 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 no-underline">
          <span className="font-display text-lg font-semibold text-surface-primary tracking-tight">
            Economic<span className="text-gold ml-1">Empowerment</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-surface-secondary no-underline hover:text-surface-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="/apply/member-organization/" className="btn-primary !py-2 !px-5 !text-xs">
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-surface-border">
      {/* Governance band */}
      <div className="bg-navy-900 py-10 px-5">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm text-surface-secondary leading-relaxed">
            Economic Empowerment is a global economic empowerment platform supported through
            the MUNDUS ecosystem. MundusPASS powers transaction infrastructure, while
            participating organizations operate independently within their own communities
            and jurisdictions.
          </p>
          <p className="text-sm text-surface-muted leading-relaxed">
            Economic Empowerment operates in partnership with participating organizations
            across the MUNDUS ecosystem, including Immigrants Alliance and the International
            Cultures Mission.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy-950 py-6 px-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-muted">
            &copy; {new Date().getFullYear()} Economic Empowerment. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-surface-muted hover:text-surface-primary transition-colors no-underline">Privacy</a>
            <a href="#" className="text-xs text-surface-muted hover:text-surface-primary transition-colors no-underline">Terms</a>
            <a href="#" className="text-xs text-surface-muted hover:text-surface-primary transition-colors no-underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
