'use client';

import { Button, Text, Group, Container } from '@mantine/core';
import { IconHome, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useI18n, useI18nHelpers } from '@gold-shop/shared-i18n';

export default function Index() {
  const [count, setCount] = useState(0);
  const [id] = useState(() => uuidv4());
  const t = useI18n();
  const { isRTL } = useI18nHelpers();

  return (
    <Container size="md" py="xl" dir={isRTL ? 'rtl' : 'ltr'}>
      <Group justify="space-between" mb="md">
        <Text size="xl" fw={700}>
          {t('shop.title')} - {t('common.loading')}
        </Text>
        <LanguageSwitcher />
      </Group>
      
      <Text size="md" mb="lg">
        {t('shop.description')}
      </Text>
      
      <Group gap="md" mb="lg">
        <Button 
          leftSection={<IconHome size={16} />}
          onClick={() => setCount(c => c + 1)}
        >
          {t('common.loading')}: {count}
        </Button>
        
        <Button 
          variant="outline" 
          leftSection={<IconUser size={16} />}
        >
          {t('navigation.profile')}: {id.slice(0, 8)}...
        </Button>
      </Group>

      <Text size="sm" c="dimmed">
        {t('common.loading')}: {dayjs().format('YYYY-MM-DD HH:mm:ss')}
      </Text>
      
      <Text size="sm" c="dimmed" mt="xs">
        ✅ {t('common.success')} - {t('common.loading')}!
      </Text>
    </Container>
  );
}
