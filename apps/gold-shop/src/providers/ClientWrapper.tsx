'use client';

import { ReactNode } from 'react';
import { MantineBaseProvider } from '@gold-shop/shared-provider';

type ClientWrapperProps = {
  children: ReactNode;
};

export function ClientWrapper({ children }: ClientWrapperProps) {
  return <MantineBaseProvider>{children}</MantineBaseProvider>;
}
