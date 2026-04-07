# DevOps CI/CD Demo with GitHub Actions & Git Hooks

A professional demonstration project showcasing complete CI/CD pipeline with local quality gates using Git hooks and automated testing/deployment using GitHub Actions for the SEng5304 presentation.

## Project Overview

This demo includes:

- A simple Node.js web application
- Automated testing with Jest
- Code quality checks with ESLint
- Code formatting with Prettier
- Git hooks with Husky (pre-commit & pre-push)
- CI/CD pipeline using GitHub Actions
- Automated deployment workflow

## Setup Instructions

1. Install dependencies and setup Git hooks:

```bash
npm install
npm run prepare
```

2. Run the application locally:

```bash
npm start
```

3. Run tests:

```bash
npm test
```

4. Check code quality:

```bash
npm run lint        # Check for code issues
npm run format      # Format code with Prettier
```

## Git Hooks (Local Quality Gates)

### Pre-Commit Hook

Runs automatically before every commit:

- ESLint checks staged files
- Prettier formats staged files
- Fast feedback loop

### Pre-Push Hook

Runs automatically before every push:

- Full ESLint check on all files
- Prettier format verification
- All tests must pass
- Prevents broken code from reaching remote

## CI/CD Pipeline (GitHub Actions)

The GitHub Actions workflow automatically:

1. **Code Quality Stage**: ESLint + Prettier checks
2. **Test Stage**: Runs automated tests with coverage
3. **Build Stage**: Builds the application
4. **Deploy Stage**: Deploys to staging (main branch only)

## Project Structure

- `app.js` - Main application file
- `app.test.js` - Test suite
- `.husky/` - Git hooks configuration
- `.eslintrc.json` - ESLint configuration
- `.prettierrc.json` - Prettier configuration
- `.github/workflows/ci-cd.yml` - CI/CD pipeline configuration
- `DEMO_GUIDE.md` - Presentation guide
- `SETUP_INSTRUCTIONS.md` - Detailed setup guide

## Key Features

✅ Multiple quality gates (local + CI)
✅ Shift-left testing approach
✅ Automated code formatting
✅ Comprehensive test coverage
✅ Professional DevOps workflow
