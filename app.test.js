const request = require('supertest');
const app = require('./app');

describe('DevOps Demo API Tests', () => {
  
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to DevOps CI/CD Demo!');
    expect(response.body.status).toBe('running');
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.timestamp).toBeDefined();
  });

  test('POST /calculate should add two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ a: 5, b: 3, operation: 'add' });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(8);
  });

  test('POST /calculate should subtract two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ a: 10, b: 4, operation: 'subtract' });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(6);
  });

  test('POST /calculate should multiply two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ a: 6, b: 7, operation: 'multiply' });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(42);
  });

  test('POST /calculate should divide two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ a: 20, b: 4, operation: 'divide' });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(5);
  });

  test('POST /calculate should handle division by zero', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ a: 10, b: 0, operation: 'divide' });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('Error: Division by zero');
  });

  test('POST /calculate should return error for invalid operation', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ a: 5, b: 3, operation: 'invalid' });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid operation');
  });
});
