import { createI18nServer } from 'next-international/server';
import { createI18nClient } from 'next-international/client';
import { locales, type Locale } from '../types';

// Server-side i18n
const serverI18n = createI18nServer({
  en: () => import('./locales/en'),
  fa: () => import('./locales/fa'),
});

// Client-side i18n
const clientI18n = createI18nClient({
  en: () => import('./locales/en'),
  fa: () => import('./locales/fa'),
});

// Re-export server functions
export const getI18n = serverI18n.getI18n;
export const getScopedI18n = serverI18n.getScopedI18n;
export const getStaticParams = serverI18n.getStaticParams;
export const getCurrentLocale = serverI18n.getCurrentLocale;

// Re-export client functions
export const I18nProviderClient = clientI18n.I18nProviderClient;
export const useI18n = clientI18n.useI18n;
export const useScopedI18n = clientI18n.useScopedI18n;
export const useChangeLocale = clientI18n.useChangeLocale;
export const useCurrentLocale = clientI18n.useCurrentLocale;

// Export types and constants
export { locales };
export type { Locale };