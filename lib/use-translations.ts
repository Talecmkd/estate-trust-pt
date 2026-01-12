import { Locale } from './i18n';
import { getTranslations, Translations } from './get-translations';

export function useTranslations(locale: Locale): Translations {
  return getTranslations(locale);
}

// Helper function to get nested translation values
export function getNestedTranslation(
  translations: Translations,
  path: string
): string {
  const keys = path.split('.');
  let result: unknown = translations;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path; // Return the path if translation not found
    }
  }

  return typeof result === 'string' ? result : path;
}
