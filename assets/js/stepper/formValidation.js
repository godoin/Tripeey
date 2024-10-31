/**
 * Form Validation
 * Module for handling form validation logic.
 *
 * TODO: Handle validation for input on change like for emails and telephones.
 */

import {
  handleStateToTooltipErrorToDOM,
  handleStateToTooltipSuccessToDOM,
} from "../shared/domUtils.js";

import { NOT_EMPTY, validate } from "../shared/formUtils.js";

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
        elementId: `${key}`,
        message: `${key} is required.`,
      });
      console.log(`Passed`);
    } else {
      handleStateToTooltipSuccessToDOM(`${key}`);
    }
  });

  Object.keys(shippingData).forEach((key) => {
    if (!validate(shippingData[key], NOT_EMPTY)) {
      shippingErrors.push({
        elementId: `${key}`,
        message: `${key} is required.`,
      });
      console.log(`Passed`);
    } else {
      handleStateToTooltipSuccessToDOM(`${key}`);
    }
  });

  Object.keys(paymentMethodData).forEach((key) => {
    if (!validate(paymentMethodData[key], NOT_EMPTY)) {
      if (key !== "card") {
        paymentMethodErrors.push({
          elementId: `${key}`,
          message: `${key} is required.`,
        });
        console.log(`Passed`);
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
    console.log(`Passed`);
  }

  if (shippingErrors.length > 0) {
    shippingErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
    console.log(`Passed`);
  }

  if (paymentMethodErrors.length > 0) {
    paymentMethodErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
    console.log(`Passed`);
  }

  if (
    billingErrors.length > 0 ||
    shippingErrors.length > 0 ||
    paymentMethodErrors.length > 0
  ) {
    console.log(`Passed`);
    return false;
  }

  return {
    success: true,
    billingData: billingData,
    shippingData: shippingData,
    paymentMethodData: paymentMethodData,
  };
}
