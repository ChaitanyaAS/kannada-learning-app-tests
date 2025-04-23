// auth.test.js

const login = require('./auth');  // Import the login function

test('should return token when login is successful', () => {
  const response = login('user', 'password');  // Valid credentials
  expect(response.token).toBe('someGeneratedJWTToken');  // Expect the token to be a specific value
});

test('should return null token when login fails', () => {
  const response = login('user', 'wrongpassword');  // Invalid credentials
  expect(response.token).toBeNull();  // Expect the token to be null
});

test('should return null token for non-existent user', () => {
  const response = login('nonexistent', 'password');  // Non-existent user
  expect(response.token).toBeNull();  // Expect the token to be null
});
