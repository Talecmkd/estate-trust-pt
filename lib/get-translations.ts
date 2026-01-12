import { Locale } from './i18n';
import enTranslations from './translations/en.json';
import ptTranslations from './translations/pt.json';

export type Translations = typeof enTranslations;

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  pt: ptTranslations,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en;
}
