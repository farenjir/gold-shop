'use client';

import { useI18nHelpers } from '@gold-shop/shared-i18n';
import { Button, Group } from '@mantine/core';

export function LanguageSwitcher() {
  const { currentLocale, switchLocale } = useI18nHelpers();

  return (
    <Group>
      <Button
        variant={currentLocale === 'en' ? 'filled' : 'outline'}
        onClick={() => switchLocale('en')}
        size="sm"
      >
        🇺🇸 English
      </Button>
      <Button
        variant={currentLocale === 'fa' ? 'filled' : 'outline'}
        onClick={() => switchLocale('fa')}
        size="sm"
      >
        🇮🇷 فارسی
      </Button>
    </Group>
  );
}
