import '@mantine/core/styles.css';
import './global.css';

import { getCurrentLocale } from '@gold-shop/shared-i18n';
import { ClientProviders } from '../providers/ClientProviders';

export const metadata = {
  title: 'Gold Shop',
  description: 'Gold Shop Application',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <ClientProviders locale={locale}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
