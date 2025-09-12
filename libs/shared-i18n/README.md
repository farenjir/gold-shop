# @gold-shop/shared-i18n

A shared internationalization library for the Gold Shop monorepo using `next-international`.

## Features

- 🌍 Multi-language support (English & Persian)
- 🔄 RTL/LTR direction support
- 🎯 Type-safe translations
- ⚡ Server and client-side rendering
- 🛠️ Easy-to-use hooks and components

## Supported Languages

- **English (en)** - Left-to-right
- **Persian (fa)** - Right-to-left

## Usage

### Basic Setup

1. Import the i18n provider in your app's layout:

```tsx
import { SimpleI18nProvider } from '@gold-shop/shared-i18n';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <SimpleI18nProvider locale={locale}>{children}</SimpleI18nProvider>
      </body>
    </html>
  );
}
```

2. Add middleware for automatic locale detection:

```tsx
// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fa'];

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

### Using Translations

```tsx
'use client';

import { useI18n, useI18nHelpers } from '@gold-shop/shared-i18n';

export function MyComponent() {
  const t = useI18n();
  const { isRTL, currentLocale, switchLocale } = useI18nHelpers();

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <h1>{t('shop.title')}</h1>
      <p>{t('shop.description')}</p>
      <button onClick={() => switchLocale('fa')}>Switch to Persian</button>
    </div>
  );
}
```

### Available Translation Keys

#### Common

- `common.loading` - Loading text
- `common.error` - Error text
- `common.success` - Success text
- `common.cancel` - Cancel button
- `common.confirm` - Confirm button
- `common.save` - Save button
- `common.edit` - Edit button
- `common.delete` - Delete button
- `common.search` - Search text
- `common.open` - Open button
- `common.close` - Close button
- `common.yes` - Yes button
- `common.no` - No button

#### Navigation

- `navigation.home` - Home
- `navigation.about` - About
- `navigation.contact` - Contact
- `navigation.products` - Products
- `navigation.services` - Services
- `navigation.admin` - Admin
- `navigation.dashboard` - Dashboard
- `navigation.settings` - Settings
- `navigation.profile` - Profile
- `navigation.logout` - Logout

#### Shop

- `shop.title` - Gold Shop
- `shop.description` - Shop description
- `shop.addToCart` - Add to Cart
- `shop.buyNow` - Buy Now
- `shop.price` - Price
- `shop.quantity` - Quantity
- `shop.total` - Total
- `shop.cart` - Cart
- `shop.checkout` - Checkout
- `shop.order` - Order

#### Admin

- `admin.title` - Admin Panel
- `admin.description` - Admin description
- `admin.users` - Users
- `admin.orders` - Orders
- `admin.products` - Products
- `admin.categories` - Categories
- `admin.reports` - Reports
- `admin.analytics` - Analytics

## API Reference

### Hooks

#### `useI18n()`

Returns the translation function for the current locale.

#### `useI18nHelpers()`

Returns helper functions and current locale information:

- `currentLocale` - Current locale code
- `localeConfig` - Current locale configuration
- `switchLocale(locale)` - Switch to a different locale
- `isRTL` - Whether current locale is right-to-left

### Components

#### `SimpleI18nProvider`

Provider component that wraps your app to enable i18n functionality.

## Adding New Translations

1. Add your new translation keys to both locale files:
   - `src/config/locales/en.ts`
   - `src/config/locales/fa.ts`

2. The translations will be automatically available in your components.

## Type Safety

All translation keys are type-safe. TypeScript will provide autocomplete and error checking for translation keys.
