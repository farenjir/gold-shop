'use client';

import { Button, Text, Group, Container } from '@mantine/core';
import { IconHome, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export default function Index() {
  const [count, setCount] = useState(0);
  const [id] = useState(() => uuidv4());

  return (
    <Container size="md" py="xl">
      <Text size="xl" fw={700} mb="md">
        Gold Shop - Shared Packages Test
      </Text>
      
      <Group gap="md" mb="lg">
        <Button 
          leftSection={<IconHome size={16} />}
          onClick={() => setCount(c => c + 1)}
        >
          Count: {count}
        </Button>
        
        <Button 
          variant="outline" 
          leftSection={<IconUser size={16} />}
        >
          User ID: {id.slice(0, 8)}...
        </Button>
      </Group>

      <Text size="sm" c="dimmed">
        Current time: {dayjs().format('YYYY-MM-DD HH:mm:ss')}
      </Text>
      
      <Text size="sm" c="dimmed" mt="xs">
        ✅ All shared packages are working correctly!
      </Text>
    </Container>
  );
}
