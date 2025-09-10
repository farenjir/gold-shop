# Husky Git Hooks Setup

This project uses Husky to manage Git hooks and ensure code quality across all projects in the Nx workspace.

## What's Configured

### Pre-commit Hook
- **Linting**: Runs ESLint on staged TypeScript/JavaScript files
- **Type Checking**: Runs TypeScript type checking on affected projects
- **Formatting**: Runs Prettier on JSON, Markdown, and YAML files

### Commit Message Hook
- **Conventional Commits**: Enforces conventional commit message format
- **Validation**: Ensures commit messages follow the established pattern

## Commit Message Format

Use the following format for commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools
- `ci`: Changes to our CI configuration files and scripts
- `build`: Changes that affect the build system or external dependencies
- `revert`: Reverts a previous commit

### Examples
```bash
feat(auth): add user authentication
fix(ui): resolve button click issue
docs: update API documentation
chore: update dependencies
```

## Available Scripts

- `npm run lint`: Run linting on all projects
- `npm run lint:fix`: Run linting with auto-fix on all projects
- `npm run typecheck`: Run type checking on all projects
- `npm run format`: Format all files with Prettier
- `npm run format:check`: Check if files are properly formatted
- `npm run test`: Run tests on all projects
- `npm run build`: Build all projects

## Configuration Files

- `.husky/pre-commit`: Pre-commit hook configuration
- `.husky/commit-msg`: Commit message validation
- `commitlint.config.js`: Commit message rules
- `.prettierrc`: Prettier formatting rules
- `.prettierignore`: Files to ignore for formatting
- `package.json`: Lint-staged configuration

## How It Works

1. **Pre-commit**: When you run `git commit`, Husky automatically:
   - Runs linting on staged files
   - Runs type checking on affected projects
   - Formats JSON, Markdown, and YAML files
   - Prevents commit if any checks fail

2. **Commit Message**: When you commit, Husky:
   - Validates the commit message format
   - Ensures it follows conventional commit standards
   - Prevents commit if message format is invalid

## Bypassing Hooks (Not Recommended)

If you need to bypass hooks in an emergency:

```bash
git commit --no-verify -m "your message"
```

**Warning**: Only use this in exceptional circumstances as it bypasses all quality checks.

## Troubleshooting

### Hook Not Running
1. Ensure Husky is installed: `npm install`
2. Run the prepare script: `npm run prepare`
3. Check if `.husky` directory exists and has proper permissions

### Linting Errors
1. Run `npm run lint:fix` to auto-fix issues
2. Manually fix remaining issues
3. Re-stage files and commit again

### Type Checking Errors
1. Fix TypeScript errors in your code
2. Run `npm run typecheck` to verify fixes
3. Re-stage files and commit again

### Commit Message Rejected
1. Follow the conventional commit format
2. Use one of the allowed types
3. Keep the subject line under 100 characters
4. Don't end the subject with a period
