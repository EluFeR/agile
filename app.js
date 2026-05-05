const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to DevOps CI/CD Demo!',
    status: 'running',
    version: '1.0.0',
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/greet/:name?', (req, res) => {
  const name = req.params.name || 'Guest';
  res.json({
    message: `Hello, ${name}!`,
    greeting: 'Welcome to our DevOps demo',
    timestamp: new Date().toISOString(),
  });
});

app.get('/demo', (req, res) => {
  res.json({
    message: 'DevOps CI/CD Demo Endpoint',
    features: ['Auto-format', 'Auto-test', 'Auto-deploy'],
    status: 'success',
  });
});
app.post('/calculate', (req, res) => {
  const { a, b, operation } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = b !== 0 ? a / b : 'Error: Division by zero';
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

// Start server only if not in test mode
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

const x = 10000;
const y = 3;
console.log(x + y);
module.exports = app;
