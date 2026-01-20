let registrationForm = document.getElementById("registrationForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

// Load saved username
window.addEventListener("load", () => {
  if (localStorage.getItem("username")) {
    username.value = localStorage.getItem("username");
  }
});

//Real-time validation
const validateUsername = (input) => {
  if (input.validity.valueMissing) {
    usernameError.textContent = "This field is required.";
    return false;
  } else {
    usernameError.textContent = "";
    return true;
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
    return false;
  } else if (input.validity.valueMissing) {
    emailError.textContent = "This field is required.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
};

email.addEventListener("input", (e) => {
  const input = e.target;
  validateEmail(input);
});

const validatePassword = (input) => {
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasNumber = /\d/;
  if (input.validity.valueMissing) {
    passwordError.textContent = "This field is required.";
    return false;
  } else if (input.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    return false;
  } else if (!hasUpperCase.test(input.value)) {
    passwordError.textContent =
      "Password must include at least an uppercase character.";
    return false;
  } else if (!hasLowerCase.test(input.value)) {
    passwordError.textContent =
      "Password must include at least an lowercase character.";
    return false;
  } else if (!hasNumber.test(input.value)) {
    passwordError.textContent = "Password must include at least a number.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
};

password.addEventListener("input", (e) => {
  const input = e.target;
  validatePassword(input);
});

const validateConfirmPassword = (input) => {
  if (input.validity.valueMissing) {
    confirmPasswordError.textContent = "This field is required.";
    return false;
  } else if (input.value.length < 8) {
    confirmPasswordError.textContent =
      "Password must be at least 8 characters long.";
    return false;
  } else if (input.value !== password.value) {
    confirmPasswordError.textContent =
      "Confirm Password is not the same as the password";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
};

confirmPassword.addEventListener("input", (e) => {
  const input = e.target;
  validateConfirmPassword(input);
});

//Form submission
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (finalValidation.find((item) => !item.isValid)) {
    finalValidation.find((item) => !item.isValid).name.focus;
    return;
  }
  alert("Registration successful");
  localStorage.setItem("username", username.value);
  registrationForm.reset();
});

const finalValidation = [
  {
    name: username,
    isValid: validateUsername(username), // use the  document.getElementById
  },
  // **********or we can use The document.getElementById, Means we can use username instead of registrationForm.elements.username**************

  {
    name: email,
    isValid: validateEmail(registrationForm.elements.email), // used the name of the input, and it's not really safe to use
  },
  {
    name: username,
    isValid: validatePassword(registrationForm.elements.password),
  },
  {
    name: username,
    isValid: validateConfirmPassword(registrationForm.elements.confirmPassword),
  },
];
