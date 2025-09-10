# Development Dependencies Guide

This document explains how to use the development dependencies installed in your Nx workspace.

## 📦 Installed Dev Dependencies

### @svgr/cli (^8.1.0)
**Purpose**: Convert SVG files to React components

**Usage**:
```bash
# Convert all SVG files in a directory
npm run generate:icons

# Convert specific SVG file
npx @svgr/cli --out-dir src/components -- src/assets/logo.svg

# Convert with TypeScript support
npx @svgr/cli --typescript --out-dir src/components -- src/assets/*.svg
```

**Configuration**: Create `.svgrrc.js` for custom settings:
```javascript
module.exports = {
  typescript: true,
  ref: true,
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
    ],
  },
};
```

### @types/lodash (^4.17.20)
**Purpose**: TypeScript definitions for Lodash

**Usage**:
```typescript
import _ from 'lodash';

// Now you get full TypeScript support
const users = _.groupBy(userList, 'role');
const uniqueIds = _.uniq(idList);
```

### dotenv (^17.2.2)
**Purpose**: Load environment variables from .env files

**Usage**:
```typescript
// In your app or lib
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Access variables
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const dbHost = process.env.DATABASE_URL;
```

**Setup**:
```bash
# Copy example environment file
npm run env:setup

# Edit .env with your actual values
```

### husky (^9.1.7)
**Purpose**: Git hooks manager

**Already configured hooks**:
- **pre-commit**: Runs linting and type checking
- **commit-msg**: Validates commit message format

**Usage**:
```bash
# Add new hook
npx husky add .husky/pre-push "npm test"

# Edit existing hook
npx husky edit .husky/pre-commit
```

### lint-staged (^16.1.6)
**Purpose**: Run linters on staged files

**Current configuration** (in package.json):
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "nx affected --target=lint --fix",
      "nx affected --target=typecheck"
    ],
    "*.{json,md,yml,yaml}": [
      "prettier --write"
    ]
  }
}
```

### orval (^7.11.2)
**Purpose**: Generate TypeScript client from OpenAPI/Swagger specs

**Usage**:
```bash
# Generate API client
npm run generate:api

# Generate with custom config
npx orval --config ./orval.config.js
```

**Configuration**: See `orval.config.js` for setup

**Generated files structure**:
```
libs/shared-data-access/src/
├── api/
│   ├── generated/          # Generated API client
│   ├── schemas/           # Generated TypeScript schemas
│   └── mutator.ts         # Custom axios instance
└── admin-api/
    ├── generated/         # Admin API client
    └── schemas/          # Admin API schemas
```

## 🚀 Available Scripts

### Package Management
```bash
npm run env:setup          # Copy .env to .env
```

### Code Generation
```bash
npm run generate:api       # Generate API client from OpenAPI spec
npm run generate:icons     # Convert SVG files to React components
```

### Quality Assurance
```bash
npm run lint              # Lint all projects
npm run lint:fix          # Auto-fix linting issues
npm run typecheck         # Type check all projects
npm run format            # Format all files
npm run format:check      # Check formatting
```

## 🔧 Configuration Files

### orval.config.js
Configures API code generation for both shop and admin APIs.

### .svgrrc.js (optional)
Custom SVGR configuration for icon generation.

### .env
Environment variables (copy from .env).

## 📁 File Structure

```
├── libs/
│   └── shared-data-access/
│       └── src/
│           ├── api/
│           │   ├── generated/     # Generated API client
│           │   ├── schemas/      # Generated schemas
│           │   └── mutator.ts    # Axios configuration
│           └── admin-api/
│               ├── generated/    # Admin API client
│               └── schemas/     # Admin schemas
├── src/
│   └── assets/
│       └── icons/               # SVG files for conversion
├── orval.config.js             # API generation config
├── .env                 # Environment variables template
└── .env                        # Your environment variables
```

## 🎯 Best Practices

### Environment Variables
1. **Never commit .env files** - Use ..env as template
2. **Use NEXT_PUBLIC_ prefix** for client-side variables
3. **Validate required variables** on app startup

### API Generation
1. **Keep OpenAPI specs updated** - Regenerate when API changes
2. **Use custom mutator** - Configure axios instance for auth, error handling
3. **Organize by domain** - Separate shop and admin APIs

### SVG Icons
1. **Optimize SVGs** - Use SVGO to reduce file size
2. **Consistent naming** - Use kebab-case for file names
3. **Generate TypeScript** - Enable TypeScript support for better DX

### Git Hooks
1. **Don't bypass hooks** - Fix issues instead of using --no-verify
2. **Keep hooks fast** - Only run necessary checks
3. **Test hooks locally** - Ensure they work before pushing

## 🔄 Workflow Examples

### Adding New API Endpoint
1. Update OpenAPI spec
2. Run `npm run generate:api`
3. Use generated types and functions
4. Commit changes

### Adding New Icon
1. Add SVG to `src/assets/icons/`
2. Run `npm run generate:icons`
3. Import and use in components
4. Commit generated files

### Setting Up New Environment
1. Copy `.env` to `.env`
2. Fill in actual values
3. Test with `npm run dev`
4. Never commit `.env` file

## 🐛 Troubleshooting

### SVGR Issues
- Ensure SVG files are valid
- Check .svgrrc.js configuration
- Verify output directory exists

### Orval Issues
- Validate OpenAPI spec syntax
- Check orval.config.js paths
- Ensure output directories exist

### Environment Variables
- Check .env file exists
- Verify variable names match
- Restart dev server after changes

### Git Hooks
- Run `npm run prepare` to reinstall hooks
- Check .husky directory permissions
- Verify lint-staged configuration
