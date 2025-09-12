'use client';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import useMantineBaseTheme from './useMantineBaseTheme.js';

export default function MantineBaseProvider(props: React.PropsWithChildren) {
  const { mantineBaseTheme } = useMantineBaseTheme('green', false);

  return (
    <MantineProvider
      defaultColorScheme={'light'}
      withCssVariables
      withStaticClasses
      withGlobalClasses
      theme={mantineBaseTheme}
    >
      <Notifications position="top-right" zIndex={Number.MAX_SAFE_INTEGER} />
      {props.children}
    </MantineProvider>
  );
}
