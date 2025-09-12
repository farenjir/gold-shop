import { ReactNode } from 'react';
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
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientWrapper locale={locale}>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
