# Contributing to GoldShop

Thank you for your interest in contributing to GoldShop! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Git

### Setup Development Environment

1. **Fork and Clone**

   ```bash
   git clone https://github.com/your-username/gold-shop.git
   cd gold-shop
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Servers**

   ```bash
   # Start both applications
   npm run dev:all

   # Or start individually
   npm run dev:shop    # Customer store
   npm run dev:admin   # Admin panel
   ```

## 📝 Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(auth): add login functionality
fix(ui): resolve button alignment issue
docs(readme): update installation instructions
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Build process or auxiliary tool changes

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests for specific project
npx nx test gold-shop
npx nx test gold-admin

# Run E2E tests
npx nx e2e gold-shop-e2e
npx nx e2e gold-admin-e2e
```

### Test Requirements

- All new features must include tests
- Bug fixes must include regression tests
- E2E tests for user-facing features
- Unit tests for utility functions and components

## 🎨 Code Style

### Linting

```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### Formatting

```bash
# Format code
npm run format

# Check formatting
npm run format:check
```

### Type Checking

```bash
# Run type checking
npm run typecheck
```

## 🏗️ Project Structure

### Adding New Features

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make Changes**
   - Follow the existing code patterns
   - Add appropriate tests
   - Update documentation if needed

3. **Test Your Changes**

   ```bash
   npm run lint
   npm run typecheck
   npm test
   ```

4. **Commit and Push**

   ```bash
   git add .
   git commit -m "feat(scope): add amazing feature"
   git push origin feature/amazing-feature
   ```

5. **Create Pull Request**
   - Provide clear description
   - Link related issues
   - Add screenshots if UI changes

### Adding New Libraries

```bash
# Generate new library
npx nx g @nx/react:lib my-library

# Generate new service
npx nx g @nx/js:service my-service --project=shared-data-access
```

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] No linting errors
- [ ] Type checking passes
- [ ] Documentation updated if needed
- [ ] Commit messages follow convention

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)

Add screenshots here

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment**
   - OS and version
   - Node.js version
   - Browser version (if applicable)

2. **Steps to Reproduce**
   - Clear, numbered steps
   - Expected vs actual behavior

3. **Additional Context**
   - Screenshots if applicable
   - Console errors
   - Network errors

## 💡 Feature Requests

When suggesting features:

1. **Use Case**
   - Describe the problem you're trying to solve
   - Explain why this feature would be useful

2. **Proposed Solution**
   - Describe your proposed solution
   - Consider alternative approaches

3. **Additional Context**
   - Screenshots or mockups
   - Related issues or discussions

## 🔧 Development Tools

### Recommended VS Code Extensions

- Nx Console
- TypeScript Importer
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens

### Useful Commands

```bash
# Show project graph
npx nx graph

# Show affected projects
npx nx affected:graph

# Run specific target
npx nx run project:target

# Generate component
npx nx g @nx/react:component MyComponent --project=shared-ui
```

## 📞 Getting Help

- **Discord**: Join our community Discord
- **Issues**: Create a GitHub issue
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check the README and docs folder

## 📄 License

By contributing to GoldShop, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to GoldShop! 🎉
