'use client';

import { ReactNode } from 'react';
import { MantineBaseProvider } from '@gold-shop/shared-provider';
import { SimpleI18nProvider } from '@gold-shop/shared-i18n';

type ClientWrapperProps = {
  children: ReactNode;
  locale: string;
};

export function ClientWrapper({ children, locale }: ClientWrapperProps) {
  return (
    <SimpleI18nProvider locale={locale}>
      <MantineBaseProvider>
        {children}
      </MantineBaseProvider>
    </SimpleI18nProvider>
  );
}
