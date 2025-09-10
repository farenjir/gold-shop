# Shared Packages Documentation

This document lists all the shared packages installed in the Nx workspace that are available for all apps and libs.

## 📦 Installed Packages

### UI Components & Styling
- **@mantine/core** (^8.3.1) - Core Mantine components and styling system
- **@mantine/dates** (^8.3.1) - Date picker and calendar components
- **@mantine/dropzone** (^8.3.1) - File dropzone component
- **@mantine/form** (^8.3.1) - Form management and validation
- **@mantine/hooks** (^8.3.1) - Custom React hooks
- **@mantine/notifications** (^8.3.1) - Notification system
- **@tabler/icons-react** (^3.34.1) - Icon library

### Data Management & State
- **@tanstack/react-query** (^5.87.4) - Data fetching and caching
- **zustand** (^5.0.8) - State management
- **axios** (^1.11.0) - HTTP client

### Utilities & Helpers
- **lodash** (^4.17.21) - Utility functions
- **dayjs** (^1.11.18) - Date manipulation
- **uuid** (^13.0.0) - UUID generation
- **@bprogress/core** (^1.3.4) - Progress tracking

### Charts & Visualization
- **echarts** (^5.6.0) - Charting library
- **echarts-gl** (^2.0.9) - 3D charts for ECharts

### Authentication & Internationalization
- **next-auth** (^4.24.11) - Authentication for Next.js
- **next-international** (^1.3.1) - Internationalization

### Image Processing
- **sharp** (^0.34.3) - Image processing

## 🚀 Usage Examples

### Mantine Components
```tsx
import { Button, TextInput, Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { notifications } from '@mantine/notifications';

function MyComponent() {
  return (
    <Group>
      <TextInput placeholder="Enter text" />
      <DatePicker placeholder="Pick date" />
      <Button onClick={() => notifications.show({ message: 'Hello!' })}>
        Show notification
      </Button>
    </Group>
  );
}
```

### React Query
```tsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => axios.get(`/api/users/${userId}`).then(res => res.data)
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user</div>;

  return <div>{data?.name}</div>;
}
```

### Zustand State Management
```tsx
import { create } from 'zustand';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

function UserComponent() {
  const { user, setUser } = useUserStore();
  return <div>{user?.name}</div>;
}
```

### Icons
```tsx
import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';

function Navigation() {
  return (
    <nav>
      <IconHome size={24} />
      <IconUser size={24} />
      <IconSettings size={24} />
    </nav>
  );
}
```

### Date Manipulation
```tsx
import dayjs from 'dayjs';
import 'dayjs/locale/fa'; // Persian locale

dayjs.locale('fa');

function DateComponent() {
  const now = dayjs();
  const formatted = now.format('YYYY/MM/DD');
  
  return <div>{formatted}</div>;
}
```

### Utilities
```tsx
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

function UtilityExample() {
  const id = uuidv4();
  const debouncedFunction = _.debounce(() => {
    console.log('Debounced!');
  }, 300);
  
  return <div>ID: {id}</div>;
}
```

### Charts
```tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function ChartComponent() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }]
      };
      chart.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}
```

## 🔧 TypeScript Support

All packages have TypeScript support. Type definitions are included for:
- `@types/lodash` - Lodash type definitions
- `@types/uuid` - UUID type definitions

## 📁 Package Structure

Since these packages are installed in the root `package.json`, they are available to:
- All apps in the `apps/` directory
- All libs in the `libs/` directory
- Any new projects created in the workspace

## 🎯 Best Practices

1. **Import only what you need**: Use tree-shaking friendly imports
   ```tsx
   // Good
   import { Button } from '@mantine/core';
   
   // Avoid
   import * as Mantine from '@mantine/core';
   ```

2. **Use shared libs**: Create shared libraries for common patterns
   ```tsx
   // In libs/shared-ui/src/index.ts
   export { Button } from './button/button';
   ```

3. **Consistent styling**: Use Mantine's design system consistently across apps

4. **State management**: Use Zustand for local state, React Query for server state

5. **Error handling**: Always handle errors in React Query and API calls

## 🔄 Updates

To update all packages:
```bash
npm update
```

To update specific packages:
```bash
npm install package-name@latest
```

## 📚 Additional Resources

- [Mantine Documentation](https://mantine.dev/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [ECharts Documentation](https://echarts.apache.org/)
- [Tabler Icons](https://tabler-icons.io/)
