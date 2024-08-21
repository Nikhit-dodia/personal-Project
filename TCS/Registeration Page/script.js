document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    let valid = true;

    // Username validation
    const username = document.getElementById('username').value;
    const usernamePattern = /^[a-zA-Z0-9]{6,}$/;
    if (!usernamePattern.test(username)) {
        valid = false;
        document.getElementById('usernameError').innerText = 'Username must be at least 6 characters long and contain no special characters.';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        valid = false;
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long, include lowercase, uppercase, a digit, and a special character.';
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
    }

    // Mobile number validation
    const mobile = document.getElementById('mobile').value;
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        valid = false;
        document.getElementById('mobileError').innerText = 'Mobile number must be exactly 10 digits.';
    }

    // Aadhaar card number validation
    const aadhaar = document.getElementById('aadhaar').value;
    const aadhaarPattern = /^[0-9]{12}$/;
    if (!aadhaarPattern.test(aadhaar)) {
        valid = false;
        document.getElementById('aadhaarError').innerText = 'Aadhaar card number must be exactly 12 digits.';
    }

    if (valid) {
        alert('Registration successful!');
        // Redirect to login page
        window.location.href = 'Login.html';
    }
});

function clearErrors() {
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('mobileError').innerText = '';
    document.getElementById('aadhaarError').innerText = '';
}
