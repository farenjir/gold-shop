'use client';

import { MantineBaseProvider } from '@gold-shop/shared-provider';
import { I18nProvider } from '@gold-shop/shared-i18n';

type ClientProvidersProps = {
  children: React.ReactNode;
  locale: string;
};

export function ClientProviders({ children, locale }: ClientProvidersProps) {
  return (
    <I18nProvider locale={locale}>
      <MantineBaseProvider>
        {children}
      </MantineBaseProvider>
    </I18nProvider>
  );
}
