/**
 * Form Script
 * This script handles form on submission with client-side validation.
 *
 * Features:
 * - Basic user input validation.
 * - Display of multiple error messages (usually 5 seconds).
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 * TODO: Create POST API for all the form handlers.
 */
import { getUserInputById } from "../utils.js";

import {
  NOT_EMPTY,
  validate,
  validateLoginUserSync,
  validateBilling,
  validateLoginUserAsync,
} from "./formValidation.js";

import {
  handleStateToTooltipDefaultToDOM,
  handleStateToTooltipErrorToDOM,
  handleStateToTooltipSuccessToDOM,
} from "./domUtils.js";

import {
  getBillingData,
  getShippingData,
  getPaymentMethodData,
  getAllCheckoutNames,
} from "./formFieldIds.js";

/**
 * Handles the login form submission.
 */
export function loginHandler(event) {
  console.log(`Login handler is running...`);
  event.preventDefault();

  const enteredEmail = getUserInputById("email");
  const enteredPassword = getUserInputById("password-input");

  const validationSyncResult = validateLoginUserSync(
    enteredEmail.value,
    enteredPassword.value
  );

  let validationAsyncResult;

  if (validationSyncResult.success) {
    validationAsyncResult = validateLoginUserAsync(
      enteredEmail.value,
      enteredPassword.value
    );
  }

  if (validationSyncResult.success && validationAsyncResult.success) {
    console.log(`Success: Validation is succesful.`);
    window.location.href = "/OnlineStore";
  } else {
    console.error(
      `Error on one or more validation (sync): ${validationSyncResult.error} && (async): ${validationAsyncResult.error}`
    );
  }
}

/**
 * Handles the billing form submission.
 */
function billingHandler(event) {
  console.log(`Billing & Payment Handler is running...`);
  event.preventDefault();

  const billingData = getBillingData();
  const shippingData = getShippingData();
  const paymentMethodData = getPaymentMethodData();

  const validationResult = validateBilling(
    billingData,
    shippingData,
    paymentMethodData
  );

  if (validationResult.error) {
    try {
      console.log(validationResult.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setupInputStateToDefaultOnChange(getAllCheckoutNames());
    }
  } else {
    console.log(validationResult.error);
    setupInputStateToDefaultOnChange(getAllCheckoutNames());
  }
}

/**
 * Validate immediately on user input not empty.
 */
function setupValidateInputElementOnChange(elementIds) {
  console.log(`Setup input state to validation is running...`);

  Object.keys(elementIds).forEach((key) => {
    console.log(`Object: ${key} ~ ${elementIds[key]}`);
    const inputElement = document.querySelector(
      `input[name="${elementIds[key]}"]`
    );
    inputElement?.addEventListener("change", () => {
      let inputValue = inputElement.value;
      let inputElementId = inputElement.name;

      // console.log(`element: ${inputElement}`);
      // console.log(`value: ${inputValue}`);
      // console.log(`id: ${inputElementId}`);

      if (!validate(inputValue, NOT_EMPTY)) {
        handleStateToTooltipErrorToDOM(
          inputElementId,
          `${elementIds[key]} is required.`
        );
      } else {
        handleStateToTooltipSuccessToDOM(inputElementId);
      }
    });
  });
}

/**
 * Setup to handle when user inputs on change, updates back to defailt.
 */
function setupInputStateToDefaultOnChange(elementIds) {
  console.log(`Setup input state to default is running...`);

  Object.keys(elementIds).forEach((key) => {
    console.log(`Object Defaults: ${elementIds[key]} : ${key}`);
    const inputElement = document.querySelector(
      `input[name="${elementIds[key]}"]`
    );
    inputElement?.addEventListener("change", () => {
      let inputElementId = inputElement.name;
      handleStateToTooltipDefaultToDOM(inputElementId);
    });
  });
}

/**
 * Set up for handling forms.
 */
function setupForm(formId, onSubmitHandler) {
  console.log(`Setup form is running.`);

  const form = document.getElementById(formId);
  form?.addEventListener("submit", onSubmitHandler);
}

// setupValidateInputElementOnChange(getAllCheckoutNames());
setupForm("login-form", loginHandler);
setupForm("billing-form", billingHandler);
