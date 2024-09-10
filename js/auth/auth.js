/**
 * Form Script
 * This script handles form on submission with client-side validation.
 *
 * Features:
 * - Basic user input validation.
 * - Display of multiple error messages (usually 5 seconds).
 */

import {
  attachClickHandler,
  attachClickHandlerById,
  attachSubmitHandler,
} from "../shared/eventHandlers.js";

import { getUserInputById } from "../utils.js";

import {
  validateLoginUserAsync,
  validateLoginUserSync,
} from "./formValidation.js";

import { handlePasswordToggle } from "./passwordToggle.js";

/**
 * Handles the login form submission.
 */
async function loginHandler(event) {
  event.preventDefault();

  const enteredEmail = getUserInputById("email");
  const enteredPassword = getUserInputById("password-input");

  let validationSyncResult;
  let validationAsyncResult;

  validationSyncResult = validateLoginUserSync(
    enteredEmail.value,
    enteredPassword.value
  );

  if (validationSyncResult.success) {
    validationAsyncResult = await validateLoginUserAsync(
      enteredEmail.value,
      enteredPassword.value
    );
  }

  console.table(validationSyncResult.success);
  console.table(validationAsyncResult.success);

  if (validationSyncResult.success && validationAsyncResult.success) {
    console.log(`Success: Validation is succesful.`);
    window.location.href = "/OnlineStore";
  } else {
    console.error(`Error on one or more validation.`);
  }
}

export function setupAuthEventListeners() {
  console.log(`Auth event listeners running...`);
  attachSubmitHandler("login-form", loginHandler);
  attachClickHandlerById("password-btn", handlePasswordToggle);
}
