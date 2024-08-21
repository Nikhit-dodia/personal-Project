// Simulate fetching user data from a server or local storage
window.onload = function() {
    const userData = {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        mobile: '1234567890'
    };

    populateProfileData(userData);
};

// Function to populate profile data into the HTML
function populateProfileData(data) {
    document.getElementById('username').value = data.username;
    document.getElementById('email').value = data.email;
    document.getElementById('mobile').value = data.mobile;
}

// Function to handle form submission and update profile details
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate that password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate updating user data
    alert('Profile updated successfully!\n' +
          'Username: ' + username + '\n' +
          'Email ID: ' + email + '\n' +
          'Mobile Number: ' + mobile);

    // Optionally, you can send the updated data to a server here

    // Reset form after update
    document.getElementById('profileForm').reset();
});
