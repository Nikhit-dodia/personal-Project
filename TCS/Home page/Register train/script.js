// Function to handle form submission and register a new train
document.getElementById('registerTrainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const trainNumber = document.getElementById('trainNumber').value;
    const trainID = document.getElementById('trainID').value;
    const trainName = document.getElementById('trainName').value;
    const sourceStation = document.getElementById('sourceStation').value;
    const destinationStation = document.getElementById('destinationStation').value;
    const departureTime = document.getElementById('departureTime').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const ticketCategories = document.getElementById('ticketCategories').value;

    // Simulate sending data to a server or handling registration
    alert('Train registered successfully!\n' +
          'Train Number: ' + trainNumber + '\n' +
          'Train ID: ' + trainID + '\n' +
          'Train Name: ' + trainName + '\n' +
          'Source Station: ' + sourceStation + '\n' +
          'Destination Station: ' + destinationStation + '\n' +
          'Departure Time: ' + departureTime + '\n' +
          'Arrival Time: ' + arrivalTime + '\n' +
          'Ticket Categories: ' + ticketCategories);

    // Reset form after registration
    document.getElementById('registerTrainForm').reset();
});
