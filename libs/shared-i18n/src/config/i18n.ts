'use client';

import { createI18nClient } from 'next-international/client';
import { locales, type Locale } from '../types';

// Client-side i18n
const clientI18n = createI18nClient({
  en: () => import('./locales/en'),
  fa: () => import('./locales/fa'),
});

// Re-export client functions
export const I18nProviderClient = clientI18n.I18nProviderClient;
export const useI18n = clientI18n.useI18n;
export const useScopedI18n = clientI18n.useScopedI18n;
export const useChangeLocale = clientI18n.useChangeLocale;
export const useCurrentLocale = clientI18n.useCurrentLocale;

// Export types and constants
export { locales };
export type { Locale };