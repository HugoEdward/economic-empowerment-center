'use client';
import { useState, useEffect } from 'react';
import { LOCALES, LOCALE_NAMES, DEFAULT_LOCALE, getDirection } from '@/lib/i18n';

/**
 * LanguageSwitcher — top-right dropdown
 *
 * Static export pattern:
 * - English at /  (default)
 * - Other locales at /<locale>/  (e.g. /es/, /ar/)
 *
 * Detects current locale from window.location.pathname and writes the user's
 * choice to localStorage for next visit.
 */
export default function LanguageSwitcher() {
  const [current, setCurrent] = useState(DEFAULT_LOCALE);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname;
    const seg = path.split('/')[1];
    if (LOCALES.includes(seg)) {
      setCurrent(seg);
      document.documentElement.lang = seg;
      document.documentElement.dir = getDirection(seg);
    } else {
      const stored = localStorage.getItem('eec_locale');
      if (stored && LOCALES.includes(stored) && stored !== DEFAULT_LOCALE) {
        // Redirect to user's preferred locale on root visit
        if (path === '/' || path === '') {
          window.location.href = `/${stored}/`;
          return;
        }
      }
      setCurrent(DEFAULT_LOCALE);
      document.documentElement.lang = DEFAULT_LOCALE;
      document.documentElement.dir = 'ltr';
    }
  }, []);

  function selectLocale(loc) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('eec_locale', loc);
    // Strip current locale prefix if any
    let path = window.location.pathname;
    const seg = path.split('/')[1];
    if (LOCALES.includes(seg)) {
      path = '/' + path.split('/').slice(2).join('/');
    }
    const target = loc === DEFAULT_LOCALE ? path : `/${loc}${path === '/' ? '/' : path}`;
    window.location.href = target;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-[11px] font-mono text-surface-secondary hover:text-surface-primary transition-colors px-2 py-1 rounded border border-surface-border hover:border-gold/30"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span aria-hidden>🌐</span>
        <span className="uppercase">{current}</span>
        <span aria-hidden className="text-gold/60">▾</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-50 bg-navy-900 border border-gold/20 rounded-lg shadow-xl min-w-[140px] overflow-hidden">
            {LOCALES.map(loc => (
              <button
                key={loc}
                onClick={() => selectLocale(loc)}
                className={`w-full text-left px-3 py-2 text-[12px] hover:bg-gold/[0.06] transition-colors flex items-center justify-between ${loc === current ? 'text-gold' : 'text-surface-primary'}`}
              >
                <span>{LOCALE_NAMES[loc]}</span>
                <span className="text-[9px] font-mono uppercase text-surface-muted">{loc}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
