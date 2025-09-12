# GoldShop 🏪

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern e-commerce platform for gold trading built with **Next.js**, **Nx**, and **Mantine UI**.

## 🏗️ Architecture

This is a **monorepo** containing two main applications and shared libraries:

### Applications

- **`gold-shop`** - Customer-facing e-commerce store
- **`gold-admin`** - Admin panel for managing products and orders

### Shared Libraries

- **`shared-provider`** - Mantine UI provider and theme configuration
- **`shared-icons`** - Custom icon components
- **`shared-types`** - TypeScript type definitions
- **`shared-ui`** - Reusable UI components
- **`shared-utils`** - Utility functions
- **`shared-data-access`** - API client and data access layer

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gold-shop

# Install dependencies
npm install

# Setup environment variables
cp environment.template .env
# Edit .env with your configuration

# Start development servers
npm run dev
```

### Development Commands

#### Run Applications

```bash
# Run gold-shop (customer store) - Port 3010
npx nx dev gold-shop

# Run gold-admin (admin panel) - Port 3020
npx nx dev gold-admin

# Run both applications
npm run dev
```

#### Build Applications

```bash
# Build gold-shop
npx nx build gold-shop

# Build gold-admin
npx nx build gold-admin

# Build all applications
npx nx run-many --target=build --projects=tag:type:app
```

#### Testing

```bash
# Run unit tests
npx nx test gold-shop
npx nx test gold-admin

# Run E2E tests
npx nx e2e gold-shop-e2e
npx nx e2e gold-admin-e2e

# Run all tests
npx nx run-many --target=test --all
```

#### Linting & Type Checking

```bash
# Lint all projects
npx nx run-many --target=lint --all

# Type check all projects
npx nx run-many --target=typecheck --all
```

### Project Structure

```
gold-shop/
├── apps/
│   ├── gold-shop/          # Customer e-commerce store
│   ├── gold-admin/         # Admin panel
│   ├── gold-shop-e2e/      # E2E tests for gold-shop
│   └── gold-admin-e2e/     # E2E tests for gold-admin
├── libs/
│   ├── shared-provider/    # Mantine UI provider
│   ├── shared-icons/       # Custom icons
│   ├── shared-types/       # TypeScript types
│   ├── shared-ui/          # UI components
│   ├── shared-utils/       # Utility functions
│   └── shared-data-access/ # API client
└── .github/workflows/      # GitHub Actions CI/CD
```

## 🛠️ Development

### Adding New Projects

To generate a new Next.js application:

```bash
npx nx g @nx/next:app my-app
```

To generate a new React library:

```bash
npx nx g @nx/react:lib my-lib
```

To generate a new E2E test project:

```bash
npx nx g @nx/playwright:configuration my-app-e2e --project=my-app
```

### Nx Commands

```bash
# Show project graph
npx nx graph

# Show project details
npx nx show project gold-shop

# Run affected projects only
npx nx affected --target=build

# List all available targets
npx nx list
```

### Code Generation

```bash
# Generate a new component
npx nx g @nx/react:component my-component --project=shared-ui

# Generate a new service
npx nx g @nx/js:service my-service --project=shared-data-access

# Generate a new hook
npx nx g @nx/react:hook use-my-hook --project=shared-utils
```

## 🚀 CI/CD Pipeline

This project includes comprehensive GitHub Actions workflows for:

### Automated Workflows

- **CI Pipeline** - Build, test, and lint on every push/PR
- **CD Pipeline** - Deploy to staging/production
- **E2E Testing** - Automated end-to-end testing
- **Security Scanning** - Vulnerability detection and code analysis
- **Dependency Updates** - Automated dependency management
- **Release Management** - Automated releases with changelog

### Workflow Features

- ✅ **Nx Affected** - Only runs on changed projects
- ✅ **Parallel Execution** - Faster build times
- ✅ **Caching** - npm and Nx cache optimization
- ✅ **Multiple Deployment Options** - Vercel, GitHub Pages, Docker
- ✅ **Security First** - Comprehensive security scanning
- ✅ **Automated Testing** - Unit, E2E, and visual regression tests

### Setup CI/CD

1. **Connect to Nx Cloud** (optional but recommended):

```bash
npx nx connect
```

2. **Configure GitHub Secrets** for deployment:
   - `VERCEL_TOKEN` - Vercel API token
   - `VERCEL_ORG_ID` - Vercel organization ID
   - `VERCEL_GOLD_SHOP_PROJECT_ID` - Vercel project ID for gold-shop
   - `VERCEL_GOLD_ADMIN_PROJECT_ID` - Vercel project ID for gold-admin

3. **Deploy** - Workflows will automatically deploy on push to main branch

### Manual Workflows

- **Dependency Updates** - Run weekly or manually
- **Security Audit** - Run daily or manually
- **Release** - Trigger with git tags or manually

## 🛠️ Tools & Extensions

### Nx Console

Install the Nx Console extension for your IDE to get:

- Visual task runner
- Code generation UI
- Project graph visualization
- Enhanced autocompletion

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Recommended VS Code Extensions

- Nx Console
- TypeScript Importer
- ESLint
- Prettier
- Tailwind CSS IntelliSense

## 📚 Tech Stack

- **Framework**: Next.js 14
- **Monorepo**: Nx
- **UI Library**: Mantine
- **Styling**: Tailwind CSS
- **Testing**: Jest, Playwright
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel, GitHub Pages, Docker

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npx nx run-many --target=test --all`
5. Run linting: `npx nx run-many --target=lint --all`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📖 Documentation

### Project Documentation

- [Contributing Guide](CONTRIBUTING.md) - How to contribute to the project
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines
- [Community Guidelines](.github/COMMUNITY_GUIDELINES.md) - Detailed community standards
- [Maintainers](.github/MAINTAINERS.md) - Project maintainers and team information
- [Roadmap](.github/ROADMAP.md) - Project roadmap and future plans
- [Security Policy](SECURITY.md) - Security reporting and guidelines
- [Privacy Policy](.github/PRIVACY.md) - Data privacy and protection guidelines
- [Terms of Service](.github/TERMS.md) - Terms and conditions of use
- [Support Guide](.github/SUPPORT.md) - Getting help and support
- [Release Checklist](.github/RELEASE_CHECKLIST.md) - Release process and quality assurance
- [Release Template](.github/RELEASE_TEMPLATE.md) - Template for creating releases
- [Changelog](CHANGELOG.md) - Project changelog and release notes
- [Environment Setup](environment.template) - Environment configuration template

### External Documentation

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Mantine Documentation](https://mantine.dev)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🔗 Useful Links

- [Nx Workspace Setup](https://nx.dev/nx-api/next?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Nx Plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Nx Community](https://go.nx.dev/community)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
