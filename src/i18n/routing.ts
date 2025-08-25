import languages from '@/i18n/languages';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.keys(languages),
  // Used when no locale matches
  defaultLocale: 'en',

  localePrefix: 'as-needed',
});
