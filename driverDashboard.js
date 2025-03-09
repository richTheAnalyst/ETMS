// Sample Data
const transportData = {
    routes: [
        { id: 1, routeName: "Office to East Legon", driver: "Kwame Mensah", vehicle: "Bus 12", time: "07:30 AM", status: "active" },
        { id: 2, routeName: "Office to Spintex", driver: "Ama Boateng", vehicle: "Van 05", time: "08:00 AM", status: "pending" },
        { id: 3, routeName: "Office to Airport", driver: "Kofi Annan", vehicle: "Bus 08", time: "06:45 AM", status: "completed" }
    ],
    requests: [
        { id: 1, employee: "John Doe", pickup: "East Legon", time: "Mon 07:30 AM", status: "pending" },
        { id: 2, employee: "Jane Smith", pickup: "Tema", time: "Mon 08:15 AM", status: "pending" }
    ]
};

// Initialize Map
const map = L.map('liveMap').setView([5.6037, -0.1870], 12); // Accra coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add sample markers
L.marker([5.6037, -0.1870]).addTo(map)
    .bindPopup('Office Location')
    .openPopup();

// Render Functions
function renderRoutes() {
    const container = document.getElementById('routesContainer');
    container.innerHTML = transportData.routes.map(route => `
        <div class="transport-card">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6>${route.routeName}</h6>
                    <div class="text-muted small">
                        ${route.vehicle} • ${route.driver} • ${route.time}
                    </div>
                </div>
                <span class="status-indicator status-${route.status}"></span>
            </div>
        </div>
    `).join('');
}

function renderRequests() {
    const container = document.getElementById('requestsContainer');
    container.innerHTML = transportData.requests.map(request => `
        <div class="transport-card mb-2">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <div>${request.employee}</div>
                    <small class="text-muted">${request.pickup} • ${request.time}</small>
                </div>
                <button class="btn btn-sm btn-success">Approve</button>
            </div>
        </div>
    `).join('');
}

// Initialize Dashboard
function initDashboard() {
    document.getElementById('activeCount').textContent = 
        transportData.routes.filter(r => r.status === 'active').length;
    
    document.getElementById('pendingCount').textContent = 
        transportData.requests.length;

    renderRoutes();
    renderRequests();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initDashboard);