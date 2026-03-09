const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    if (email === "") {
        emailError.textContent = "Please enter your email";
        return;
    }
    if (password === "") {
        passwordError.textContent = "Please enter your password";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email);

    if (!user) {
        emailError.textContent = "Email not found";
        return;
    }

    if (user.password !== password) {
        passwordError.textContent = "Incorrect password";
        return;
    }

    localStorage.setItem("currentUser", email);

    window.location.replace("exam.html");

});