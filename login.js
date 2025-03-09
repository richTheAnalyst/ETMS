document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (username === "" || password === "" || role === "") {
        alert("Please fill all fields!");
        return;
    }

    if (role === "worker") {
        window.location.href = "empDashboard.html";
    } else if (role === "driver") {
        window.location.href = "driverDashbaord.html";
    } else if (role === "manager") {
        window.location.href = "managerDashboard.html";
    } else {
        alert("Invalid Role");
    }
});




