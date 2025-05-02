document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Add your login logic here (e.g., API call)
    alert(`Welcome back, ${email}!`);
});
