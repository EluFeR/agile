# CI/CD Demo Guide for Presentation

## Demo Flow (5-7 minutes)

### 1. Introduction (1 min)
"We've created a simple Node.js API to demonstrate a real CI/CD pipeline using GitHub Actions."

### 2. Show the Application (1 min)
- Open `app.js` and explain: "This is a simple Express API with basic endpoints"
- Open `app.test.js` and explain: "We have automated tests using Jest"

### 3. Show the CI/CD Pipeline (2 min)
- Open `.github/workflows/ci-cd.yml`
- Explain the three stages:
  1. **Test Stage**: Runs automated tests on every push
  2. **Build Stage**: Builds the application after tests pass
  3. **Deploy Stage**: Deploys to staging (only on main branch)

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

✅ **Automation**: No manual testing needed - runs automatically on every push

✅ **Fast Feedback**: Developers know immediately if their code breaks something

✅ **Quality Gates**: Code must pass tests before it can be deployed

✅ **Consistency**: Same process runs every time, eliminating "works on my machine"

✅ **Continuous Deployment**: Successful builds automatically deploy to staging

## Setup for GitHub (Before Presentation)

1. Create a new GitHub repository
2. Push this code:
```bash
git init
git add .
git commit -m "Initial commit: CI/CD demo"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. The GitHub Actions workflow will run automatically!

## Talking Points

- "This demonstrates the DevOps principle of automation"
- "Notice how testing, building, and deployment are all automated"
- "This is a simple example, but real-world pipelines follow the same pattern"
- "Tools like Jenkins, GitLab CI, CircleCI work similarly"
- "This ensures code quality and speeds up delivery"

## Backup Plan

If live demo fails, have screenshots ready showing:
1. GitHub Actions workflow running
2. Test results (green checkmarks)
3. Deployment logs
