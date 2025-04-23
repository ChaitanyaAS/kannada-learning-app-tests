// __tests__/login.test.js
document.body.innerHTML = `
    <form id="login-form">
        <input type="email" id="login-email">
        <input type="password" id="login-password">
        <button type="submit">Login</button>
    </form>
`;

test('Login form elements exist', () => {
    expect(document.getElementById('login-form')).not.toBeNull();
    expect(document.getElementById('login-email')).not.toBeNull();
    expect(document.getElementById('login-password')).not.toBeNull();
});

test('Login button exists and is clickable', () => {
    const button = document.querySelector('button[type="submit"]');
    expect(button).not.toBeNull();
    expect(button.disabled).toBe(false);  // Ensure it's not disabled
});

test('Submit form with valid inputs', () => {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const form = document.getElementById('login-form');
    const mockSubmit = jest.fn();

    form.onsubmit = mockSubmit;  // Attach mock submit function

    emailInput.value = 'test@example.com';
    passwordInput.value = 'validPassword123';

    form.submit();  // Simulate form submission

    expect(mockSubmit).toHaveBeenCalled();  // Verify form was submitted
});

test('Validate email format', () => {
    const emailInput = document.getElementById('login-email');

    emailInput.value = 'invalid-email';
    expect(emailInput.checkValidity()).toBe(false);

    emailInput.value = 'test@example.com';
    expect(emailInput.checkValidity()).toBe(true);
});

test('Validate password length', () => {
    const passwordInput = document.getElementById('login-password');

    passwordInput.value = 'short';
    expect(passwordInput.checkValidity()).toBe(false);

    passwordInput.value = 'ValidPassword123';
    expect(passwordInput.checkValidity()).toBe(true);
});

test('Form should not submit if fields are empty', () => {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const form = document.getElementById('login-form');
    const mockSubmit = jest.fn();

    form.onsubmit = mockSubmit;

    emailInput.value = '';
    passwordInput.value = '';

    form.submit();

    expect(mockSubmit).not.toHaveBeenCalled();
});

test('Form should not submit if email is empty', () => {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const form = document.getElementById('login-form');
    const mockSubmit = jest.fn();

    form.onsubmit = mockSubmit;

    emailInput.value = '';
    passwordInput.value = 'ValidPassword123';

    form.submit();

    expect(mockSubmit).not.toHaveBeenCalled();
});
