// Export types
export type { Locale, LocaleConfig, LocaleMessages } from './types';
export { localeConfigs } from './types';

// Export client-side i18n functions
export {
  I18nProviderClient,
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
  locales,
} from './config/i18n';

// Export components
export { SimpleI18nProvider } from './components/SimpleI18nProvider';

// Export hooks
export { useI18nHelpers } from './hooks/useI18nHelpers';

// Export locale messages
export { default as enMessages } from './config/locales/en';
export { default as faMessages } from './config/locales/fa';