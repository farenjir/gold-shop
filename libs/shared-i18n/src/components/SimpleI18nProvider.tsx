'use client';

import { ReactNode } from 'react';
import { I18nProviderClient } from '../config/i18n';

type SimpleI18nProviderProps = {
  children: ReactNode;
  locale: string;
};

export function SimpleI18nProvider({ children, locale }: SimpleI18nProviderProps) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  );
}
