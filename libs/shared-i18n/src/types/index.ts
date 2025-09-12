export type Locale = 'en' | 'fa';

export type LocaleConfig = {
  locale: Locale;
  direction: 'ltr' | 'rtl';
  name: string;
  flag: string;
};

export const locales: Locale[] = ['en', 'fa'];

export const localeConfigs: Record<Locale, LocaleConfig> = {
  en: {
    locale: 'en',
    direction: 'ltr',
    name: 'English',
    flag: '🇺🇸',
  },
  fa: {
    locale: 'fa',
    direction: 'rtl',
    name: 'فارسی',
    flag: '🇮🇷',
  },
};

export type LocaleMessages = {
  [key: string]: string | LocaleMessages;
};
