function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!username || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (username === "admin" && password === "12345") {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirects to dashboard page
        }, 2000);
    } else {
        errorMessage.textContent = "Invalid username or password. Try again.";
    }
}

function simulateFaceRecognition() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.color = "green";
    errorMessage.textContent = "Scanning face...";

    setTimeout(() => {
        errorMessage.textContent = "Face recognized! Redirecting...";

        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirects to dashboard page
        }, 2000);
    }, 2000);
}
