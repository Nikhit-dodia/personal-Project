// Simulate fetching aggregate data from a server or local storage
window.onload = function() {
    const ticketsBookedData = [
        { class: 'AC Tier 1', number: 120 },
        { class: 'AC Tier 2', number: 180 },
        { class: 'General', number: 500 },
        { class: '1st Class', number: 90 }
    ];

    const salesPerQuarterData = [
        { quarter: 'Q1', sales: 15000 },
        { quarter: 'Q2', sales: 20000 },
        { quarter: 'Q3', sales: 18000 },
        { quarter: 'Q4', sales: 22000 }
    ];

    populateTicketsBookedTable(ticketsBookedData);
    populateSalesPerQuarterTable(salesPerQuarterData);
};

// Function to populate the tickets booked table
function populateTicketsBookedTable(data) {
    const tableBody = document.getElementById('ticketsBookedTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.class;
        cell2.textContent = item.number;
    });
}

// Function to populate the sales per quarter table
function populateSalesPerQuarterTable(data) {
    const tableBody = document.getElementById('salesPerQuarterTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.quarter;
        cell2.textContent = `₹${item.sales.toLocaleString()}`;
    });
}
