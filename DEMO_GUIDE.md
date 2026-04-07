# CI/CD Demo Guide for Presentation

## Demo Flow (7-10 minutes)

### 1. Introduction (1 min)

"We've created a professional Node.js API with complete CI/CD pipeline, including Git hooks for local quality checks and GitHub Actions for automated testing and deployment."

### 2. Show the Application (1 min)

- Open `app.js` and explain: "This is a simple Express API with basic endpoints"
- Open `app.test.js` and explain: "We have automated tests using Jest"

### 3. Show Local Quality Gates - Git Hooks (2 min)

- Open `.husky/pre-commit` and explain: "Before every commit, ESLint and Prettier run automatically"
- Open `.husky/pre-push` and explain: "Before pushing, we run full linting, formatting checks, and all tests"
- Show `.eslintrc.json` and `.prettierrc.json`: "Professional code quality standards"

**Live Demo of Hooks:**

```bash
# Make a small change
echo "// test" >> app.js

# Try to commit - watch the pre-commit hook run!
git add app.js
git commit -m "test: demo hooks"

# Try to push - watch all checks run!
git push
```

### 4. Show the CI/CD Pipeline (2 min)

- Open `.github/workflows/ci-cd.yml`
- Explain the four stages:
  1. **Code Quality Stage**: ESLint + Prettier checks
  2. **Test Stage**: Runs automated tests with coverage
  3. **Build Stage**: Builds the application after tests pass
  4. **Deploy Stage**: Deploys to staging (only on main branch)

### 4. Live Demo (2-3 min)

#### Option A: Show GitHub Actions in action

1. Go to your GitHub repository
2. Navigate to "Actions" tab
3. Show a completed workflow run
4. Click through the stages to show logs

#### Option B: Run locally

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start the application
npm start
```

Then test the API:

```bash
# Test in another terminal
curl http://localhost:3000/
curl http://localhost:3000/health
```

### 5. Key Points to Highlight

✅ **Local Quality Gates**: Git hooks catch issues before code is even pushed

✅ **Shift-Left Testing**: Problems caught early in development (cheaper to fix)

✅ **Automation**: No manual testing needed - runs automatically at every stage

✅ **Fast Feedback**: Developers know immediately if their code breaks something

✅ **Multiple Layers**: Pre-commit → Pre-push → CI Pipeline (defense in depth)

✅ **Code Quality**: ESLint + Prettier ensure consistent, clean code

✅ **Quality Gates**: Code must pass all checks before it can be deployed

✅ **Consistency**: Same process runs every time, eliminating "works on my machine"

✅ **Continuous Deployment**: Successful builds automatically deploy to staging

## Setup for GitHub (Before Presentation)

1. Install dependencies and setup Husky:

```bash
npm install
npm run prepare
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

2. Create a new GitHub repository

3. Push this code:

```bash
git init
git add .
git commit -m "Initial commit: CI/CD demo"
# Watch the pre-commit hook run!

git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
# Watch the pre-push hook run!
```

4. The GitHub Actions workflow will run automatically!

## Talking Points

- "This demonstrates the DevOps principle of automation at multiple levels"
- "Git hooks provide immediate feedback - developers catch issues before pushing"
- "This is 'shift-left' testing - catching problems early when they're cheaper to fix"
- "Notice how we have multiple quality gates: local hooks, then CI pipeline"
- "ESLint catches code errors, Prettier ensures consistent formatting"
- "All tests must pass before code can be pushed or deployed"
- "This is a simple example, but real-world pipelines follow the same pattern"
- "Tools like Jenkins, GitLab CI, CircleCI work similarly"
- "This ensures code quality, speeds up delivery, and prevents bad code from reaching production"
- "The same checks run locally and in CI - consistency across environments"

## Backup Plan

If live demo fails, have screenshots ready showing:

1. GitHub Actions workflow running
2. Test results (green checkmarks)
3. Deployment logs
