// home.js

// Wait for the DOM to load before initializing the map
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    var map = L.map('map').setView([-25.363, 131.044], 4); // Set the initial map center and zoom level

    // Add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([-25.363, 131.044]).addTo(map)
        .bindPopup('.').openPopup();
});