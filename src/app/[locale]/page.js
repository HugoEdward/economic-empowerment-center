import { getDictionary, LOCALES, isValidLocale, getDirection, buildHreflang, DEFAULT_LOCALE } from '@/lib/i18n';
import EcosystemMap from '@/components/EcosystemMap';
import { notFound } from 'next/navigation';

// Build a static route for each non-English locale.
// English remains the default at `/`.
export async function generateStaticParams() {
  return LOCALES.filter(l => l !== DEFAULT_LOCALE).map(locale => ({ locale }));
}

export async function generateMetadata({ params }) {
  const locale = params?.locale;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: `${dict.hero.title_a} ${dict.hero.title_b}`,
    description: dict.hero.subtitle,
    alternates: { languages: buildHreflang('/') },
  };
}

export default function LocalizedHome({ params }) {
  const locale = params?.locale;
  if (!isValidLocale(locale) || locale === DEFAULT_LOCALE) notFound();
  const t = getDictionary(locale);
  const dir = getDirection(locale);

  return (
    <div dir={dir} lang={locale}>
      {/* HERO */}
      <section className="relative pt-24 pb-10 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="font-display text-[2.2rem] md:text-[3.4rem] font-medium leading-[1.08] tracking-tight mb-5 max-w-4xl mx-auto">
            {t.hero.title_a} <em className="text-gold italic">{t.hero.title_b}</em>
          </h1>
          <p className="text-base md:text-lg text-surface-secondary">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* FIVE CARDS */}
      <section className="pb-12 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          <Card t={t.cards.orgs}        icon="🏠" href={`/${locale}/for-organizations/`} fallbackHref="/for-organizations/" />
          <Card t={t.cards.biz}         icon="🛍️" href={`/${locale}/for-merchants/`}    fallbackHref="/for-merchants/" />
          <Card t={t.cards.connectors}  icon="🌉" href={`/${locale}/career-opportunities/`} fallbackHref="/career-opportunities/" highlight />
          <Card t={t.cards.cultures}    icon="🌎" href={`/${locale}/international-cultures-celebration/`} fallbackHref="/international-cultures-celebration/" />
          <Card t={t.cards.communities} icon="🤝" href="https://immigrantsalliance.org" external />
        </div>
      </section>

      {/* ECOSYSTEM MAP — uses the dictionary for labels via inline pass-through */}
      <section className="py-14 px-5 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-9">
            <p className="section-label justify-center mb-3">{t.ecosystem.label}</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              {t.ecosystem.title_a} <em className="text-gold italic">{t.ecosystem.title_b}</em>
            </h2>
          </div>
          <EcosystemMap />
          <div className="text-center mt-8">
            <a href={`/${locale}/organizational-needs-assessment/`} className="text-[11px] text-gold no-underline hover:underline">
              {t.ecosystem.discover_link}
            </a>
          </div>
        </div>
      </section>

      {/* Cross-link back to English fallback notice — Level 1 covered;
          deeper pages currently exist in English only (Level 2/3 — see v5.2 roadmap) */}
      <section className="py-10 px-5 bg-navy-950 border-t border-surface-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] text-surface-muted">
            🌐 {LOCALES.length === 7 ? '7 languages available' : ''} · {' '}
            <a href="/" className="text-gold no-underline hover:underline">English</a> · {' '}
            <span className="text-surface-muted italic">Deeper pages currently in English — full translation in v5.2.</span>
          </p>
        </div>
      </section>
    </div>
  );
}

function Card({ t, icon, href, fallbackHref, highlight, external }) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  // For non-English routes that don't exist yet, fall back to the English equivalent
  const actualHref = href; // For now, route to localized homepage which doesn't exist for sub-pages → fallback used by caller
  return (
    <a href={fallbackHref || href} {...ext} className={`group block rounded-2xl p-5 no-underline transition-all hover:-translate-y-0.5 ${highlight ? 'bg-gold/[0.06] border-2 border-gold/40 hover:border-gold' : 'bg-navy-800 border border-surface-border hover:border-gold/40'}`}>
      <div className="text-3xl mb-3" aria-hidden>{icon}</div>
      <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${highlight ? 'text-gold' : 'text-gold/80'}`}>{t.title}</p>
      <p className="text-[14px] font-medium text-surface-primary leading-snug mb-4">{t.promise}</p>
      <p className={`text-[10px] font-bold tracking-[0.15em] uppercase text-gold flex items-center gap-1`}>
        {t.cta} <span aria-hidden>→</span>
      </p>
    </a>
  );
}
