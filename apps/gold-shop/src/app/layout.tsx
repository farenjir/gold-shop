import '@mantine/core/styles.css';
import './global.css';

import { MantineBaseProvider } from '@gold-shop/shared-provider';

export const metadata = {
  title: 'Gold Shop',
  description: 'Gold Shop Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineBaseProvider>
          {children}
        </MantineBaseProvider>
      </body>
    </html>
  );
}
