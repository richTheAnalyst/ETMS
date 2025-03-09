document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    var map = L.map('map').setView([-5.363, 1.044], 4); // Set the initial map center and zoom level

    // Add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([-25.363, 131.044]).addTo(map)
        .bindPopup('.').openPopup();
    // Rest of your map code...

    // Single form submission handler
    const requestForm = document.getElementById('requestForm');
    if(requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if(validateRequestForm()) {
                handleFormSubmission();
                bootstrap.Modal.getInstance(
                    document.getElementById('requestModal')
                ).hide();
            }
        });
    }
});

// Consolidated form handling
function validateRequestForm() {
    const form = document.getElementById('requestForm');
    if(!form.reportValidity()) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if(!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
        }
    });
    
    return isValid;
}

function handleFormSubmission() {
    const form = document.getElementById('requestForm');
    const formData = {
        type: form.querySelector('select').value,
        date: form.querySelector('input[type="date"]').value,
        details: form.querySelector('textarea').value
    };
    
    addNewRequest(formData);
    form.reset();
    showToast('Request submitted successfully!');
}

function addNewRequest(request) {
    const requestsList = document.querySelector('.requests-list');
    
    const requestCard = document.createElement('div');
    requestCard.className = 'request-card';
    requestCard.innerHTML = `
        <div class="request-header">
            <span class="badge bg-warning">Pending</span>
            <small class="text-muted">Submitted: ${new Date().toLocaleDateString()}</small>
        </div>
        <div class="request-body">
            <h5>${request.type}</h5>
            <p>Date: ${request.date}</p>
            <p>Details: ${request.details}</p>
        </div>
    `;
    
    requestsList.prepend(requestCard);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-success border-0';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    new bootstrap.Toast(toast).show();
    setTimeout(() => toast.remove(), 3000);
}

const profile = document.getElementById("profileView");

// Add event listener for click
profile.addEventListener("click", function() {
    const profileStyle = document.querySelector('.profile-container');
    profileStyle.style.display = "flex"; 

});








