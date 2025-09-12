'use client';

import { Container, Text, Group, Button, Card, Stack } from '@mantine/core';
import { IconDashboard, IconUsers, IconShoppingCart, IconSettings } from '@tabler/icons-react';
import { useI18n, useI18nHelpers } from '@gold-shop/shared-i18n';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export default function Index() {
  const t = useI18n();
  const { isRTL } = useI18nHelpers();

  return (
    <Container size="lg" py="xl" dir={isRTL ? 'rtl' : 'ltr'}>
      <Group justify="space-between" mb="xl">
        <Text size="xl" fw={700}>
          {t('admin.title')}
        </Text>
        <LanguageSwitcher />
      </Group>
      
      <Text size="md" mb="xl" c="dimmed">
        {t('admin.description')}
      </Text>

      <Group grow>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack align="center" gap="md">
            <IconDashboard size={48} color="blue" />
            <Text size="lg" fw={500}>
              {t('admin.dashboard')}
            </Text>
            <Button variant="light" fullWidth>
              {t('common.open')}
            </Button>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack align="center" gap="md">
            <IconUsers size={48} color="green" />
            <Text size="lg" fw={500}>
              {t('admin.users')}
            </Text>
            <Button variant="light" fullWidth>
              {t('common.open')}
            </Button>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack align="center" gap="md">
            <IconShoppingCart size={48} color="orange" />
            <Text size="lg" fw={500}>
              {t('admin.orders')}
            </Text>
            <Button variant="light" fullWidth>
              {t('common.open')}
            </Button>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack align="center" gap="md">
            <IconSettings size={48} color="gray" />
            <Text size="lg" fw={500}>
              {t('admin.settings')}
            </Text>
            <Button variant="light" fullWidth>
              {t('common.open')}
            </Button>
          </Stack>
        </Card>
      </Group>
    </Container>
  );
}
