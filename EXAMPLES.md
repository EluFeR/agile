# DevOps CI/CD Demo Examples

This document contains practical examples for demonstrating CI/CD pipeline features.

---

## 📍 Demo 1: Auto-Format Success (1 min)

### Step 1: Add messy code

```js
const x = 1const y = 2const z = x + yconsole.log(z)
```

### Step 2: Commit changes

```bash
git add app.js
git commit -m "feat: add calculation"
```

✅ **Expected Result:**  
CI automatically formats the code (Prettier/ESLint) and passes.

---

## 📍 Demo 2: Catch an Error (1.5 min)

### Step 1: Add broken code

```js
function broken() {
  return new;
}
```

<!-- ### Step 2: Commit changes -->

```bash
git add app.js
git commit -m "feat: add broken function"
```

❌ **Expected Result:**  
CI fails due to syntax error → prevents bad code from merging.

---

## 📍 Demo 3: Break a Test (1 min)

### Step 1: Introduce a breaking change

```js
'broken';
```

### Step 2: Commit & push

```bash
git add app.js
git commit -m "fix: update status"
git push origin main
```

❌ **Expected Result:**  
Tests fail → deployment is blocked.

---

## 📍 Working Example (Passing Code)

### API Endpoint

```js
app.get('/demo', (req, res) => {
  res.json({
    message: 'DevOps CI/CD Demo Endpoint',
    features: ['Auto-format', 'Auto-test', 'Auto-deploy'],
    status: 'success',
  });
});
```

### Test Case

```js
test('GET /demo should return demo information', async () => {
  const response = await request(app).get('/demo');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('DevOps CI/CD Demo Endpoint');
  expect(response.body.features).toEqual([
    'Auto-format',
    'Auto-test',
    'Auto-deploy',
  ]);
  expect(response.body.status).toBe('success');
});
```
