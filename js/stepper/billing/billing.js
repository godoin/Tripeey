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

import { NOT_EMPTY, validate } from "../../shared/formUtils.js";

import { validateBilling } from ".././formValidation.js";

import {
  handleStateToTooltipDefaultToDOM,
  handleStateToTooltipErrorToDOM,
  handleStateToTooltipSuccessToDOM,
} from "../../shared/domUtils.js";

import {
  getBillingData,
  getShippingData,
  getPaymentMethodData,
  getBillingNames,
  getShippingNames,
  getPaymentMethodsNames,
} from "../stepperUtils.js";

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
    }
  } else {
    console.log(validationResult.error);
  }

  setupInputStateToDefaultOnChange(getBillingNames());
  setupInputStateToDefaultOnChange(getShippingNames());
  setupInputStateToDefaultOnChange(getPaymentMethodsNames());
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

  if (!elementIds) {
    console.error(`Error the element IDS are missing.`);
  }

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
function setupBillingForm(formId, onSubmitHandler) {
  console.log(`Billing Form is running.`);

  const form = document.getElementById(formId);
  form?.addEventListener("submit", onSubmitHandler);
}

// setupValidateInputElementOnChange(getAllCheckoutNames());
setupBillingForm("billing-form", billingHandler);
