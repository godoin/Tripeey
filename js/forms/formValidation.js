/**
 * Form Validation
 * Module for handling form validation logic.
 *
 * TODO: Handle validation for input on change like for emails and telephones.
 */

import { fetchJSONData } from "./apiUtils.js";
import {
  handleStateErrorToDOM,
  handleStateToTooltipErrorToDOM,
  handleStateToTooltipSuccessToDOM,
} from "./domUtils.js";

export const NOT_EMPTY = "NOT_EMPTY";
export const MAX_LENGTH = "MAX_LENGTH";
export const VALID_EMAIL = "VALID_EMAIL";
export const NOT_EXIST_JSON = "NOT_EXIST_JSON-";
export const NOT_EXIST = "NOT_EXIST";

/**
 * Generic validation flags for evaluating user inputs.
 */
export function validate(value, flag, validatorValue) {
  if (value === undefined || value === null) {
    console.error(`Error: the values are undefined or null.`);
    return;
  }

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
    return {
      success: false,
      error: "An error occurred during validation. Please try again later.",
    };
  }
}

/**
 * Validates all user inputted data: billing, shipping and payment method info.
 */
export function validateBilling(billingData, shippingData, paymentMethodData) {
  const billingErrors = [];
  const shippingErrors = [];
  const paymentMethodErrors = [];

  console.log(`Validate Billing Running...`);

  Object.keys(billingData).forEach((key) => {
    if (!validate(billingData[key], NOT_EMPTY)) {
      billingErrors.push({
        elementId: `billing_${key}`,
        message: `${key} is required.`,
      });
    } else {
      handleStateToTooltipSuccessToDOM(`${key}`);
    }
  });

  Object.keys(shippingData).forEach((key) => {
    if (!validate(shippingData[key], NOT_EMPTY)) {
      shippingErrors.push({
        elementId: `shipping_${key}`,
        message: `${key} is required.`,
      });
    } else {
      handleStateToTooltipSuccessToDOM(`${key}`);
    }
  });

  Object.keys(paymentMethodData).forEach((key) => {
    if (!validate(paymentMethodData[key], NOT_EMPTY)) {
      if (key !== "card") {
        paymentMethodErrors.push({
          elementId: `payment_method_${key}`,
          message: `${key} is required.`,
        });
      }
    } else {
      if (key !== "card") {
        handleStateToTooltipSuccessToDOM(`${key}`);
      }
    }
  });

  if (billingErrors.length > 0) {
    billingErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
  }

  if (shippingErrors.length > 0) {
    shippingErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
  }

  if (paymentMethodErrors.length > 0) {
    paymentMethodErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
  }

  if (billingErrors || shippingErrors || paymentMethodErrors) {
    return false;
  }

  return {
    success: true,
    billingData: billingData,
    shippingData: shippingData,
    paymentMethodData: paymentMethodData,
  };
}
