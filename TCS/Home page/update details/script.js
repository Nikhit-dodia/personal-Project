// Function to handle form submission and update user details
document.getElementById('updateDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate that password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you would typically send this data to a server
    alert('Your details have been updated successfully!');

    // Reset form after update
    document.getElementById('updateDetailsForm').reset();
});

// Function to handle user logout
function logout() {
    // Implement your logout logic here
    alert('You have been logged out.');
    // Redirect to login page or home page
    window.location.href = 'login.html';
}
