// Simulate user login and generate a unique ID
window.onload = function() {
    const userID = generateUserID();
    document.getElementById('userID').value = userID;
};

// Function to generate a random User ID
function generateUserID() {
    return 'USER' + Math.floor(Math.random() * 1000000);
}

// Handle form submission
document.getElementById('bookTicketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const age = document.getElementById('age').value;
    const date = document.getElementById('date').value;
    const boardingStation = document.getElementById('boardingStation').value;
    const destinationStation = document.getElementById('destinationStation').value;
    const ticketCategory = document.getElementById('ticketCategory').value;
    const numberOfTickets = document.getElementById('numberOfTickets').value;

    // Here you can add code to send this data to a server or save it locally

    alert('Ticket booked successfully for ' + name + '!');
    // Reset the form
    document.getElementById('bookTicketForm').reset();
    document.getElementById('userID').value = generateUserID(); // Generate a new ID for next booking
});
