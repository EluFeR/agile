# Setup Instructions for Husky & Git Hooks

## Initial Setup (Run these commands)

```bash
# 1. Install all dependencies
npm install

# 2. Initialize Husky
npm run prepare

# 3. Make hook scripts executable (Linux/Mac)
chmod +x .husky/pre-commit
chmod +x .husky/pre-push

# For Windows (Git Bash):
# The hooks should work automatically after npm install
```

## What Happens Now?

### Pre-Commit Hook (Before every commit)

When you run `git commit`, the following happens automatically:

1. ✅ ESLint checks your code for errors
2. ✅ Prettier formats your code
3. ✅ Only staged files are checked (fast!)

If any check fails, the commit is blocked until you fix the issues.

### Pre-Push Hook (Before every push)

When you run `git push`, the following happens automatically:

1. ✅ ESLint checks ALL code
2. ✅ Prettier verifies formatting
3. ✅ All tests run
4. ✅ Coverage report generated

If any check fails, the push is blocked.

## Manual Commands

You can run these commands manually anytime:

```bash
# Check code with ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check if code is formatted
npm run format:check

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## Testing the Hooks

### Test Pre-Commit Hook:

```bash
# Make a small change to app.js
echo "// test comment" >> app.js

# Stage and commit
git add app.js
git commit -m "test: pre-commit hook"

# You should see the hook running!
```

### Test Pre-Push Hook:

```bash
# Try to push
git push

# You should see linting, formatting checks, and tests running!
```

## Bypassing Hooks (Not Recommended)

If you absolutely need to bypass hooks (for emergencies only):

```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency fix"

# Skip pre-push hook
git push --no-verify
```

⚠️ **Warning**: Only use `--no-verify` in emergencies. The hooks are there to maintain code quality!

## Troubleshooting

### Hooks not running?

```bash
# Reinstall Husky
rm -rf .husky
npm run prepare
```

### Permission denied error?

```bash
# Make hooks executable (Linux/Mac)
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

### Windows issues?

- Make sure you're using Git Bash or WSL
- Hooks should work automatically after `npm install`
