// Export types
export type { Locale, LocaleConfig, LocaleMessages } from './types';
export { locales, localeConfigs } from './types';

// Export i18n configuration and hooks
export {
  getI18n,
  getScopedI18n,
  getStaticParams,
  getCurrentLocale,
  I18nProviderClient,
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
} from './config/i18n';

// Export components
export { I18nProvider } from './components/I18nProvider';

// Export hooks
export { useI18nHelpers } from './hooks/useI18nHelpers';

// Export locale messages
export { default as enMessages } from './config/locales/en';
export { default as faMessages } from './config/locales/fa';