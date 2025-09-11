# Project Configuration Guide

This document explains the project.json files that have been added to all projects in your Nx workspace.

## 📁 Project Structure

Each project now has its own `project.json` file that defines:

- Project metadata (name, type, tags)
- Build targets and configurations
- Dependencies and relationships
- Custom commands and scripts

## 🎯 Projects with project.json

### Applications

#### @gold-shop/gold-shop

- **Type**: Next.js Application
- **Tags**: `scope:shop`, `type:app`
- **Targets**: build, serve, export, test, lint
- **Configurations**: development, production

#### gold-admin

- **Type**: Next.js Application
- **Tags**: `scope:admin`, `type:app`
- **Targets**: build, serve, export, test, lint
- **Configurations**: development, production

### E2E Test Projects

#### @gold-shop/gold-shop-e2e

- **Type**: Playwright E2E Tests
- **Tags**: `scope:shop`, `type:e2e`
- **Targets**: e2e, lint
- **Dependencies**: @gold-shop/gold-shop

#### gold-admin-e2e

- **Type**: Playwright E2E Tests
- **Tags**: `scope:admin`, `type:e2e`
- **Targets**: e2e, lint
- **Dependencies**: gold-admin

### Libraries

#### @gold-shop/shared-utils

- **Type**: TypeScript Library
- **Tags**: `scope:shared`, `type:util`
- **Targets**: build, lint, test
- **Purpose**: Common utility functions

#### @gold-shop/shared-types

- **Type**: TypeScript Library
- **Tags**: `scope:shared`, `type:types`
- **Targets**: build, lint, test
- **Purpose**: Shared TypeScript interfaces and types

#### @gold-shop/shared-ui

- **Type**: React Component Library
- **Tags**: `scope:shared`, `type:ui`
- **Targets**: build, lint, test, storybook, build-storybook
- **Purpose**: Reusable UI components

#### @gold-shop/shared-data-access

- **Type**: TypeScript Library
- **Tags**: `scope:shared`, `type:data`
- **Targets**: build, lint, test, generate-api
- **Purpose**: API clients and data access layer

## 🚀 Available Commands

### Application Commands

```bash
# Build applications
nx build @gold-shop/gold-shop
nx build gold-admin

# Serve applications
nx serve @gold-shop/gold-shop
nx serve gold-admin

# Run tests
nx test @gold-shop/gold-shop
nx test gold-admin

# Lint applications
nx lint @gold-shop/gold-shop
nx lint gold-admin
```

### Library Commands

```bash
# Build libraries
nx build @gold-shop/shared-utils
nx build @gold-shop/shared-types
nx build @gold-shop/shared-ui
nx build @gold-shop/shared-data-access

# Test libraries
nx test @gold-shop/shared-utils
nx test @gold-shop/shared-types
nx test @gold-shop/shared-ui
nx test @gold-shop/shared-data-access

# Lint libraries
nx lint @gold-shop/shared-utils
nx lint @gold-shop/shared-types
nx lint @gold-shop/shared-ui
nx lint @gold-shop/shared-data-access
```

### E2E Commands

```bash
# Run E2E tests
nx e2e @gold-shop/gold-shop-e2e
nx e2e gold-admin-e2e
```

### Special Commands

```bash
# Generate API client
nx generate-api @gold-shop/shared-data-access

# Run Storybook for UI components
nx storybook @gold-shop/shared-ui

# Build Storybook
nx build-storybook @gold-shop/shared-ui
```

## 🏗️ Build Configurations

### Development Configuration

- Optimized for development
- Includes source maps
- Faster build times
- Hot reload enabled

### Production Configuration

- Optimized for production
- Minified and compressed
- Tree-shaking enabled
- Performance optimized

## 🏷️ Tagging System

Projects are tagged for better organization and filtering:

### Scope Tags

- `scope:shop` - Shop-related projects
- `scope:admin` - Admin-related projects
- `scope:shared` - Shared libraries

### Type Tags

- `type:app` - Applications
- `type:e2e` - E2E test projects
- `type:util` - Utility libraries
- `type:types` - Type definition libraries
- `type:ui` - UI component libraries
- `type:data` - Data access libraries

### Filtering by Tags

```bash
# Run commands on all shop projects
nx run-many --target=build --projects=tag:scope:shop

# Run commands on all shared libraries
nx run-many --target=test --projects=tag:scope:shared

# Run commands on all UI components
nx run-many --target=lint --projects=tag:type:ui
```

## 🔧 Custom Targets

### API Generation

The `shared-data-access` library includes a custom `generate-api` target:

```bash
nx generate-api @gold-shop/shared-data-access
```

### Storybook

The `shared-ui` library includes Storybook targets:

```bash
nx storybook @gold-shop/shared-ui
nx build-storybook @gold-shop/shared-ui
```

## 📊 Project Dependencies

### Implicit Dependencies

- E2E projects automatically depend on their corresponding apps
- Libraries can be imported by any project in the workspace

### Build Dependencies

- Apps automatically build their dependent libraries
- E2E tests run after their target apps are built

## 🎯 Benefits of project.json

1. **Explicit Configuration**: Clear definition of what each project does
2. **Better Caching**: Nx can better understand project boundaries
3. **Target Customization**: Each project can have custom build targets
4. **Dependency Management**: Clear project relationships
5. **Tagging System**: Better project organization and filtering
6. **IDE Support**: Better IntelliSense and project navigation

## 🔄 Migration Notes

- All projects now have explicit project.json files
- Existing inferred targets are preserved
- New custom targets added where beneficial
- Tagging system implemented for better organization
- Build configurations optimized for development and production

## 🚀 Next Steps

1. **Customize Targets**: Add more custom targets as needed
2. **Add More Tags**: Use tags for better project organization
3. **Configure Builds**: Optimize build configurations for your needs
4. **Add Tests**: Implement tests for all libraries
5. **Setup Storybook**: Use Storybook for UI component development
