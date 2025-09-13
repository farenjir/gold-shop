import { ReactNode } from 'react';

import { SimpleI18nProvider } from '@gold-shop/shared-i18n';

import '../global.css';
import { ClientWrapper } from '../../providers/ClientWrapper';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <SimpleI18nProvider locale={locale}>
          <ClientWrapper >{children}</ClientWrapper>
        </SimpleI18nProvider>
      </body>
    </html>
  );
}
