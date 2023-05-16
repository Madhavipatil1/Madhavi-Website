document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Madhavi" && password === "MP1234") {
        document.getElementById("message").textContent = "Login successful!";
    } else {
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});
