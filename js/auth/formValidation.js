/**
 * Form Validation
 * Module for handling form validation logic.
 *
 * TODO: Handle validation for input on change like for emails and telephones.
 */

import { fetchJSONData } from "../shared/apiUtils.js";
import { handleStateErrorToDOM } from "../shared/domUtils.js";

import {
  NOT_EMPTY,
  MAX_LENGTH,
  VALID_EMAIL,
  validate,
} from "../shared/formUtils.js";

/**
 * Validation of user input for login form for synchronous operations.
 */
export function validateLoginUserSync(userEmail, userPassword) {
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

  if (errors.length > 0) {
    errors.forEach((error) =>
      handleStateErrorToDOM(error.elementId, error.message)
    );
    return {
      error: `Sync Validation Error: ${errors}`,
    };
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
 * Validation of user input for login form for asynchronous operations.
 */
export async function validateLoginUserAsync(userEmail, userPassword) {
  const jsonUrl = "/OnlineStore/assets/json/user.json";
  const errors = [];

  try {
    const userData = await fetchJSONData(jsonUrl);

    const isValidUser = userData.find(
      (user) => user.email === userEmail && user.password === userPassword
    );

    console.log(`User: ${isValidUser}`);

    if (!isValidUser) {
      errors.push({
        elementId: "error-main",
        message: "Invalid email or password.",
      });
    }

    if (errors.length > 0) {
      errors.forEach((error) =>
        handleStateErrorToDOM(error.elementId, error.message)
      );
      return { error: `Async Validation Error: ${errors}` };
    }

    return { success: true, data: isValidUser };
  } catch (error) {
    console.error(`Error fetching user data: ${error}`);
  }
}
