let registeredUsers = [];

function showLogin() {
    document.getElementById('prompt').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function showRegister() {
    document.getElementById('prompt').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username is registered
    const user = registeredUsers.find(user => user.username === username);

    if (user) {
        // Check if password is correct
        if (user.password === password) {
            window.location.href = 'success.html'; // Redirect to success page
        } else {
            showMessage('Password not matched', 'red');
        }
    } else {
        showMessage('Username not available', 'red');
    }
}

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if username already exists
    const userExists = registeredUsers.some(user => user.username === newUsername);
    if (userExists) {
        showMessage('Username already exists', 'red');
        return;
    }

    // Add new user to the database
    registeredUsers.push({ username: newUsername, password: newPassword });
    showMessage('Registration successful', 'green');

    // Hide registration form and show login form
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function showMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    messageDiv.style.color = color;
}
