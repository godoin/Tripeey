/**
 * Form Script
 * This script handles form on submission with client-side validation.
 *
 * Features:
 * - Basic user input validation.
 * - Display of multiple error messages (usually 5 seconds).
 */

import {
  attachEventHandlerById,
} from "../shared/eventHandlers.js";


import {
  validateLoginUserAsync,
  validateLoginUserSync,
} from "./formValidation.js";

import { handlePasswordToggle } from "./passwordToggle.js";

/**
 * Handles the login form submission.
 */
async function handleLogin(event) {
  event.preventDefault();

  const enteredEmail = document.getElementById(`email`);
  const enteredPassword = document.getElementById(`password-input`);

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
    console.log(`Error on one or more validation.`);
  }
}

const setupAuthEventListeners = () => {
  // console.log(`Auth event listeners running...`);
  
  attachEventHandlerById("login-form", "submit", handleLogin);
  attachEventHandlerById("password-btn", "click", handlePasswordToggle);
}

export { setupAuthEventListeners };