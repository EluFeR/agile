# DevOps CI/CD Demo with GitHub Actions

A simple demonstration project showcasing CI/CD pipeline using GitHub Actions for the SEng5304 presentation.

## Project Overview

This demo includes:
- A simple Node.js web application
- Automated testing with Jest
- CI/CD pipeline using GitHub Actions
- Automated deployment workflow

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run the application locally:
```bash
npm start
```

3. Run tests:
```bash
npm test
```

## CI/CD Pipeline

The GitHub Actions workflow automatically:
1. Runs on every push and pull request
2. Installs dependencies
3. Runs automated tests
4. Builds the application
5. Deploys (simulated deployment step)

## Project Structure

- `app.js` - Main application file
- `app.test.js` - Test suite
- `.github/workflows/ci-cd.yml` - CI/CD pipeline configuration
