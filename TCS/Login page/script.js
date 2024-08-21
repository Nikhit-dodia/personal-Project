document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password123") {
        alert('Login successful!');
        // Redirect to another page or show further content.
    } else {
        alert('Invalid username or password.');
    }
});

