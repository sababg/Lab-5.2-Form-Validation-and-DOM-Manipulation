let registrationForm = document.getElementById("registrationForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

window.addEventListener("load", () => {
  if (localStorage.getItem("username")) {
    username.value = localStorage.getItem("username");
  }
});

const validateUsername = (input) => {
  if (input.validity.valueMissing) {
    usernameError.textContent = "This field is required.";
  } else {
    usernameError.textContent = "";
  }
};

username.addEventListener("input", (e) => {
  const input = e.target;
  validateUsername(input);
});

const validateEmail = (input) => {
  input.setCustomValidity("");
  if (input.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address.";
  } else if (input.validity.valueMissing) {
    emailError.textContent = "This field is required.";
  } else {
    emailError.textContent = "";
  }
};

email.addEventListener("input", (e) => {
  const input = e.target;
  validateEmail(input);
});

password.addEventListener("input", (e) => {
  const input = e.target;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasNumber = /\d/;
  if (input.validity.valueMissing) {
    passwordError.textContent = "This field is required.";
  } else if (input.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
  } else if (!hasUpperCase.test(input.value)) {
    passwordError.textContent =
      "Password must include at least an uppercase character.";
  } else if (!hasLowerCase.test(input.value)) {
    passwordError.textContent =
      "Password must include at least an lowercase character.";
  } else if (!hasNumber.test(input.value)) {
    passwordError.textContent = "Password must include at least a number.";
  } else {
    passwordError.textContent = "";
  }
});

const validateConfirmPassword = (input) => {
  if (input.validity.valueMissing) {
    confirmPasswordError.textContent = "This field is required.";
  } else if (input.value.length < 8) {
    confirmPasswordError.textContent =
      "Password must be at least 8 characters long.";
  } else if (input.value !== password.value) {
    confirmPasswordError.textContent =
      "Confirm Password is not the same as the password";
  } else {
    confirmPasswordError.textContent = "";
  }
};

confirmPassword.addEventListener("input", (e) => {
  const input = e.target;
  validateConfirmPassword(input);
});

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUsernameValid = validateUsername(registrationForm.elements.username);
  const isEmailValid = validateEmail(registrationForm.elements.email);
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  alert("Registration successful");
});
