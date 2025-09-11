import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './global.css';

export const metadata = {
  title: 'Gold Admin',
  description: 'Gold Admin Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
