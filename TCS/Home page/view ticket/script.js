// Simulate fetching ticket data from a server or local storage
window.onload = function() {
    const ticketData = {
        ticketID: 'TICKET12345',
        trainNumber: '123456',
        trainID: 'TRAIN789',
        userID: 'USER001',
        username: 'John Doe',
        boardingStation: 'Central Station',
        boardingTime: '10:00 AM',
        arrivalTime: '02:00 PM',
        numberOfTickets: '2'
    };

    populateTicketData(ticketData);
};

// Function to populate ticket data into the HTML
function populateTicketData(data) {
    document.getElementById('ticketID').textContent = data.ticketID;
    document.getElementById('trainNumber').textContent = data.trainNumber;
    document.getElementById('trainID').textContent = data.trainID;
    document.getElementById('userID').textContent = data.userID;
    document.getElementById('username').textContent = data.username;
    document.getElementById('boardingStation').textContent = data.boardingStation;
    document.getElementById('boardingTime').textContent = data.boardingTime;
    document.getElementById('arrivalTime').textContent = data.arrivalTime;
    document.getElementById('numberOfTickets').textContent = data.numberOfTickets;
}

// Function to display the cancellation confirmation modal
function confirmCancellation() {
    document.getElementById('cancelModal').style.display = 'block';
}

// Function to close the cancellation modal
function closeModal() {
    document.getElementById('cancelModal').style.display = 'none';
}

// Function to process the cancellation
function processCancellation() {
    alert('Your ticket has been cancelled. A cancellation fee of $50 has been charged.');
    closeModal();
    // Here you can add code to handle the actual cancellation logic, like updating the backend or removing the ticket from the list
}
