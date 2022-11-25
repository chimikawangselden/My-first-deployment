const usernameE1 = document.querySelector("#username");
const emailE1 = document.querySelector("#email");
const oldPasswordE1 = document.querySelector("#old_password");
const newPasswordE1 = document.querySelector("#new_password");
const confirmPasswordE1 = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isOldPasswordValid = checkOldPassword(),
    isNewPasswordValid = checkNewPassword(),
    isConfirmPasswordValid = checkConfirmPassword();
  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isOldPasswordValid &&
    isNewPasswordValid &&
    isConfirmPasswordValid;
  if (isFormValid) {
  }
});
const isUsernameValid = (username) => {
  const re = /^([0-9])+$/;
  return re.test(username);
};

function checkUsername() {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameE1.value.trim();
  if (!isRequired(username)) {
    showError(usernameE1, "Username cannot be blank.");
  } else if (!isUsernameValid(username)) {
    showError(usernameE1, "Invalid username. Must contain only numbers");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameE1,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameE1);
    valid = true;
  }
  return valid;
}

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

let showError = (input, message) => {
  let formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");

  formField.querySelector("small").textContent = "";
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function checkEmail() {
  let valid = false;
  const email = emailE1.value.trim();
  if (!isRequired(email)) {
    showError(emailE1, " Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailE1, `Email is not valid`);
  } else {
    showSuccess(emailE1);
    valid = true;
  }
  return valid;
}
const isOldPasswordValid = (old_password) => {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return re.test(old_password);
};

function checkOldPassword() {
  let valid = false;
  const min = 3,
    max = 25;
  const oldPassword = oldPasswordE1.value.trim();
  if (!isRequired(oldPassword)) {
    showError(oldPasswordE1, "You have to enter your former password");
  } else if (!isOldPasswordValid(oldPassword)) {
    showError(
      oldPasswordE1,
      "Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character "
    );
  } else {
    showSuccess(oldPasswordE1);
    valid = true;
  }
  return true;
}

const isnewPasswordValid = (new_password) => {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return re.test(new_password);
};

function checkNewPassword() {
  let valid = false;
  const min = 3,
    max = 25;
  const newPassword = newPasswordE1.value.trim();
  if (!isRequired(newPassword)) {
    showError(newPasswordE1, "You have to set a new password");
  } else if (!isOldPasswordValid(newPassword)) {
    showError(
      newPasswordE1,
      "Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character "
    );
  } else {
    showSuccess(newPasswordE1);
    valid = true;
  }
  return true;
}

function checkConfirmPassword() {
  let valid = false;
  const passwordCheck = confirmPasswordE1.value.trim();
  if (!isRequired(passwordCheck)) {
    showError(confirmPasswordE1, "You will have to confirm to proceed");
  } else if (!passwordMatch()) {
    showError(confirmPasswordE1, "Password is not matching");
  } else {
    showSuccess(confirmPasswordE1);
    valid = true;
  }
  return valid;
}
const passwordMatch = () => {
  if (passwordE1.value == confirmPasswordE1.value) {
    return true;
  }
};
