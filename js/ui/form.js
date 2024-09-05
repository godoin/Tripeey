/**
 * Form Script
 * This script handles form on submission with client-side validation.
 *
 * Features:
 * - Basic user input validation.
 * - Display of multiple error messages (usually 5 seconds).
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 */

const NOT_EMPTY = "NOT_EMPTY";
const MAX_LENGTH = "MAX_LENGTH";
const VALID_EMAIL = "VALID_EMAIL";

function print_debug(statement, ...values) {
  console.log(`DEBUG ~ ${statement}:`, values);
}
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
  const errors = [];

  if (!validate(userEmail, NOT_EMPTY)) {
    errors.push({
      elementId: "error-email",
      message: "Email is required.",
    });
  }
  if (!validate(userEmail, VALID_EMAIL)) {
    errors.push({
      elementId: "error-main",
      message: "Please enter a valid email address.",
    });
  }
  if (!validate(userPassword, MAX_LENGTH, 8)) {
    errors.push({
      elementId: "error-pass",
      message: "Password must be atleast 8 characters.",
    });
  }
  if (!validate(userPassword, NOT_EMPTY)) {
    errors.push({
      elementId: "error-pass",
      message: "Password is required.",
    });
  }
  // TODO: Create API endpoint call to check user exists.

  if (errors.length > 0) {
    errors.forEach((error) =>
      handleStateErrorToDOM(error.elementId, error.message)
    );
    return false;
  }

  return {
    success: true,
    data: {
      email: userEmail,
      password: userPassword,
    },
  };
}

/**
 * Dispaly single state error to
 */
function updateStateErrorToDOM(display, text, message) {
  text.textContent = message;
  display.classList.add("active");
}

/**
 * Update an single error element to the DOM.
 */
function handleStateErrorToDOM(displayId, message) {
  const displayElement = document.getElementById(displayId);
  const textElement = displayElement.querySelector(".text");

  // debug_print("Check", ${textElement})

  updateStateErrorToDOM(displayElement, textElement, message);

  setTimeout(() => {
    displayElement.classList.remove("active");
  }, 10000);
}

/**
 * Gets the value of an input element by id.
 */
function getUserInput(id) {
  return document.getElementById(id).value;
}

/**a
 * Handles the login form submission.
 */
function loginHandler(event) {
  event.preventDefault();

  const enteredEmail = getUserInput("email");
  const enteredPassword = getUserInput("password");

  print_debug("Check", enteredEmail, enteredPassword);

  const validationResult = validateLoginUser(enteredEmail, enteredPassword);

  if (validationResult.success) {
    try {
      console.log(validationResult.data);
      // TODO: Create API 6endpoint to create session and redirect user to shop.
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

connectForm("login-form", loginHandler);
