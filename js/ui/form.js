/**
 * Form Script
 * This script handles form on submission with validation-checking...
 *
 * Features:
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 */

const NOT_EMPTY = "NOT_EMPTY";
const MAX_LENGTH = "MAX_LENGTH";
const VALID_EMAIL = "VALID_EMAIL";

/**
 * Generic validation flags for evaluating user inputs.
 */
function validate(value, flag, validatorValue) {
  if (flag === NOT_EMPTY) {
    return value.trim().length > 0;
  }
  if (flag === MAX_LENGTH) {
    return value.trim().length >= validatorValue;
  }
  if (flag === VALID_EMAIL) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  }
}

/**
 * Validation of user input for login form.
 */
function validateLoginUser(userEmail, userPassword) {
  if (!validate(userEmail, NOT_EMPTY)) {
    return {
      success: false,
      error: "Error: Email is required.",
    };
  }
  if (!validate(userEmail, VALID_EMAIL)) {
    return {
      success: false,
      error: "Error: Please enter a valid email address.",
    };
  }
  if (!validate(userPassword, NOT_EMPTY)) {
    return {
      success: false,
      error: "Error: Password is required.",
    };
  }
  if (!validate(userPassword, MAX_LENGTH, 8)) {
    return {
      success: false,
      error: "Error: Password must be at least 8 characters.",
    };
  }

  // TODO: Create API endpoint call to check user exists.

  return {
    success: true,
    data: { userEmail, userPassword },
  };
}

/**
 * Gets the value of an input element by id.
 */
function getUserInput(id) {
  return document.getElementById(id).value;
}

/**
 * Handles the login form submission.
 */
function loginHandler(event) {
  event.preventDefault();

  const enteredEmail = getUserInput("email");
  const enteredPassword = getUserInput("password");

  const validationResult = validateLoginUser(
    enteredEmail.value,
    enteredPassword.value
  );

  if (validationResult.success) {
    try {
      console.log(validationResult.data);
      // TODO: Create API endpoint to create session and redirect user to shop.
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(validationResult.error);
  }
}

/**
 *
 */
function connectForm(formId, onSubmitHandler) {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", onSubmitHandler);
}

connectForm("user-input", loginHandler);
