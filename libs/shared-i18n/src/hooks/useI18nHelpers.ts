'use client';

import { useCurrentLocale, useChangeLocale } from '../config/i18n';
import { localeConfigs, type Locale } from '../types';

export function useI18nHelpers() {
  const currentLocale = useCurrentLocale() as Locale;
  const changeLocale = useChangeLocale();

  const localeConfig = localeConfigs[currentLocale];

  const switchLocale = (locale: Locale) => {
    changeLocale(locale);
  };

  const isRTL = localeConfig.direction === 'rtl';

  return {
    currentLocale,
    localeConfig,
    switchLocale,
    isRTL,
  };
}
