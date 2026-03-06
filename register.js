const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");

  const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;



  if (firstName === "" ) {
    firstNameError.textContent = "First Name cannot be empty";
    isValid = false;
  }else if (!nameRegex.test(firstName)) {
    firstNameError.textContent ="First name must contain only letters";
    isValid = false;
  }
  if ( lastName === "") {
    lastNameError.textContent = "Last Name cannot be empty";
    isValid = false;
  }else if (!nameRegex.test(lastName)) {
    lastNameError.textContent = "Last name must contain only letters";
    isValid = false;
  }

  const emailError = document.getElementById("emailError");

  if (email === "") {
    emailError.textContent = "Email cannot be empty";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");


  if (password === "") {
    passwordError.textContent = "Password cannot be empty.";
    isValid = false;
  } 
  else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }


  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm password cannot be empty.";
    isValid = false;
  } 
  else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (!isValid) return;

  
  let users = JSON.parse(localStorage.getItem("users")) || [];


  const isEmailExist = users.some((user) => user.email === email);

  if (isEmailExist) {
      emailError.textContent = "This email is already registered!";
      return; 
    }

  const newUser = { firstName, lastName, email, password };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  // save current session
  // localStorage.setItem("currentUser", email);

  window.location.replace("index.html");

});


function clearErrors() {
  document
    .querySelectorAll(".text-danger")
    .forEach((el) => (el.textContent = ""));
}
