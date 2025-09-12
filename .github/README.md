# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the Gold Shop monorepo.

## Workflows

### 1. CI (`ci.yml`)

**Triggers:** Push to main/master/develop branches, Pull Requests

**Purpose:** Continuous Integration pipeline that runs on every push and PR.

**Jobs:**

- **Cache**: Caches dependencies and Nx cache
- **Lint and Typecheck**: Runs linting and type checking for all projects
- **Build Libs**: Builds shared libraries first
- **Build Gold Shop**: Builds and tests the gold-shop application
- **Build Gold Admin**: Builds and tests the gold-admin application
- **E2E Tests**: Runs end-to-end tests for both applications
- **Build Artifacts**: Creates production build artifacts for deployment

### 2. CD (`cd.yml`)

**Triggers:** Push to main/master branches, Manual dispatch

**Purpose:** Continuous Deployment pipeline for deploying applications.

**Jobs:**

- **Deploy Gold Shop**: Deploys the gold-shop application
- **Deploy Gold Admin**: Deploys the gold-admin application
- **Deploy Docker**: Alternative Docker-based deployment
- **Notify**: Sends deployment status notifications

**Deployment Options:**

- Vercel (recommended for Next.js apps)
- GitHub Pages
- Docker containers

### 3. E2E Tests (`e2e.yml`)

**Triggers:** Push to main/master/develop branches, Pull Requests, Manual dispatch

**Purpose:** Dedicated end-to-end testing pipeline.

**Jobs:**

- **E2E Gold Shop**: Runs E2E tests for gold-shop
- **E2E Gold Admin**: Runs E2E tests for gold-admin
- **Visual Regression**: Visual regression tests (on PRs)
- **Performance Tests**: Performance testing (on main branch)

### 4. Dependency Updates (`dependency-update.yml`)

**Triggers:** Weekly schedule (Mondays at 9 AM UTC), Manual dispatch

**Purpose:** Automatically updates dependencies and creates PRs.

**Jobs:**

- **Update Dependencies**: Updates npm packages and creates PR
- **Security Audit**: Runs security audit and fixes vulnerabilities
- **Check Outdated**: Generates dependency reports

### 5. Security (`security.yml`)

**Triggers:** Push to main/master/develop branches, Pull Requests, Daily schedule

**Purpose:** Security scanning and vulnerability detection.

**Jobs:**

- **CodeQL Analysis**: GitHub's code analysis for security vulnerabilities
- **Dependency Scan**: Scans for vulnerable dependencies
- **License Check**: Ensures license compliance
- **Secret Scan**: Scans for accidentally committed secrets

### 6. Release (`release.yml`)

**Triggers:** Git tags (v\*), Manual dispatch

**Purpose:** Automated release process.

**Jobs:**

- **Create Release**: Creates GitHub release with changelog
- **Build and Upload**: Builds applications and uploads artifacts
- **Publish NPM**: Publishes shared libraries to npm (if configured)

### 7. PR Checks (`pr-checks.yml`)

**Triggers:** Pull Request events

**Purpose:** Additional checks for pull requests.

**Jobs:**

- **PR Ready Check**: Validates PR size and file changes
- **Code Quality**: Runs linting, type checking, and tests on changed files
- **Build Affected**: Builds only affected projects
- **E2E Affected**: Runs E2E tests on affected projects
- **Comment Results**: Comments on PR with check results

## Required Secrets

To use these workflows, you need to configure the following secrets in your repository:

### For Deployment (CD workflow):

- `VERCEL_TOKEN`: Vercel API token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_GOLD_SHOP_PROJECT_ID`: Vercel project ID for gold-shop
- `VERCEL_GOLD_ADMIN_PROJECT_ID`: Vercel project ID for gold-admin

### For Docker Deployment:

- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password or access token

### For NPM Publishing:

- `NPM_TOKEN`: NPM authentication token

### For Notifications:

- `SLACK_WEBHOOK`: Slack webhook URL for notifications

## Configuration Files

- `audit-ci.json`: Configuration for dependency vulnerability scanning
- `playwright.config.ts`: Playwright configuration for E2E tests (in each app)
- `jest.config.ts`: Jest configuration for unit tests (in each app)

## Usage

### Running Workflows Manually

1. Go to the "Actions" tab in your GitHub repository
2. Select the workflow you want to run
3. Click "Run workflow"
4. Choose the branch and any required inputs

### Monitoring Workflows

- Check the "Actions" tab for workflow status
- Set up branch protection rules to require CI checks to pass
- Configure notifications for failed workflows

### Customizing Workflows

- Modify workflow files in `.github/workflows/`
- Add new jobs or steps as needed
- Update triggers and conditions
- Add new secrets for additional services

## Best Practices

1. **Use Nx Affected**: Workflows use `nx affected` to only run on changed projects
2. **Cache Dependencies**: All workflows cache npm dependencies and Nx cache
3. **Parallel Execution**: Jobs run in parallel when possible for faster execution
4. **Security First**: Security scanning runs on every PR and push
5. **Automated Updates**: Dependencies are updated automatically with PRs
6. **Comprehensive Testing**: Unit tests, E2E tests, and visual regression tests
7. **Multiple Deployment Options**: Support for Vercel, GitHub Pages, and Docker

## Troubleshooting

### Common Issues

1. **Cache Misses**: Clear Nx cache if builds are failing unexpectedly
2. **Dependency Issues**: Check `package-lock.json` for conflicts
3. **E2E Test Failures**: Ensure Playwright browsers are installed
4. **Build Failures**: Check Node.js version compatibility

### Getting Help

- Check workflow logs in the Actions tab
- Review Nx documentation for build issues
- Check Playwright documentation for E2E test issues
- Review GitHub Actions documentation for workflow issues
