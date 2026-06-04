/**
 * i18n — v5.1 Multilingual Foundation
 *
 * 7 locales: en (default), es, pt, fr, ar (RTL), hi, zh
 *
 * Usage:
 *   import { getDictionary, LOCALES } from '@/lib/i18n';
 *   const dict = getDictionary('es');
 *   dict.hero.title_a → 'Ayudamos a las personas...'
 *
 * Static export safe — dictionaries are imported synchronously at build time.
 */

import en from '@/i18n/dictionaries/en.json';
import es from '@/i18n/dictionaries/es.json';
import pt from '@/i18n/dictionaries/pt.json';
import fr from '@/i18n/dictionaries/fr.json';
import ar from '@/i18n/dictionaries/ar.json';
import hi from '@/i18n/dictionaries/hi.json';
import zh from '@/i18n/dictionaries/zh.json';

const dictionaries = { en, es, pt, fr, ar, hi, zh };

export const LOCALES = ['en', 'es', 'pt', 'fr', 'ar', 'hi', 'zh'];
export const DEFAULT_LOCALE = 'en';
export const LOCALE_NAMES = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  ar: 'العربية',
  hi: 'हिन्दी',
  zh: '中文',
};
export const RTL_LOCALES = ['ar'];

export function isValidLocale(locale) {
  return LOCALES.includes(locale);
}

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}

export function getDirection(locale) {
  return RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
}

/**
 * Build the hreflang alternates map for Next.js metadata.
 * Pass the canonical (non-localized) path; we append /<locale>/ for non-English.
 *
 *   alternates: { languages: buildHreflang('/') }
 */
export function buildHreflang(pathname = '/') {
  const out = {};
  LOCALES.forEach(loc => {
    if (loc === DEFAULT_LOCALE) {
      out['en'] = pathname;
      out['x-default'] = pathname;
    } else {
      out[loc] = `/${loc}${pathname === '/' ? '' : pathname}/`;
    }
  });
  return out;
}
