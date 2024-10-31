/**
 * Stepper Script
 * This handles the logic for the checkout shopping of a user.
 * Guides users through the checkout process (cart, billing, checkout).
 */

import { validateBilling } from "./formValidation.js";
import {
  renderSummmaryData,
  renderShippingData,
  renderPaymentData,
  setupInputStateToDefaultOnChange,
  hideEmptyCartMessage,
  renderProductCardToDOM,
  showEmptyCartMessage,
} from "./stepperUtils.js";

import {
  getBillingData,
  getShippingData,
  getPaymentMethodData,
  getBillingNames,
  getShippingNames,
  getPaymentMethodsNames,
} from "./stepperUtils.js";

import { attachSubmitHandler } from "../shared/eventHandlers.js";
import { fetchJSONData } from "../shared/apiUtils.js";

function handleCartForm(event) {
  event.preventDefault();

  const orNumber = document.getElementById("or-number").value;

  if (!orNumber) {
    console.error("Error there is no OR number therefore no cart data...");
    return null;
  }

  try {
    console.log("Cart is successful...");
    window.location.href = "/OnlineStore";
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

function handleCheckoutForm(event) {
  event.preventDefault();
}

/**
 * Handles the billing form submission.
 */
function handleBillingForm(event) {
  event.preventDefault();

  const billingData = getBillingData();
  const shippingData = getShippingData();
  const paymentMethodData = getPaymentMethodData();

  const validationResult = validateBilling(
    billingData,
    shippingData,
    paymentMethodData
  );

  console.table(validationResult);

  if (validationResult.success) {
    try {
      console.log(`Billing added succesfully...`);
      console.table(validationResult.data);
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

async function setupBilingStepperData() {
  const stepperContainer = document.getElementById(`stepper`);
  const summaryJson = "/OnlineStore/assets/json/stepper/summary.json";

  if (stepperContainer) {
    try {
      const summaryData = await fetchJSONData(summaryJson);

      if (summaryData && summaryData.length > 0) {
        renderSummmaryData(summaryData[0]);
      }
    } catch (error) {
      console.error(`Error: ${error}.`);
      showEmptyCartMessage();
    }
  }
}

/**
 * Setup render cart data during DOM loading.
 */
async function setupCartStepperData() {
  const stepperContainer = document.getElementById(`stepper`);
  const cartJson = "/OnlineStore/assets/json/stepper/cart.json";
  const summaryJson = "/OnlineStore/assets/json/stepper/summary.json";

  if (stepperContainer) {
    try {
      const cartData = await fetchJSONData(cartJson);
      const summaryData = await fetchJSONData(summaryJson);

      if (cartData && cartData.length > 0) {
        cartData.forEach(renderProductCardToDOM);
        hideEmptyCartMessage();
      } else {
        showEmptyCartMessage();
      }

      if (summaryData && summaryData.length > 0) {
        renderSummmaryData(summaryData[0]);
      }
    } catch (error) {
      console.error(`Error: ${error}.`);
      showEmptyCartMessage();
    }
  }
}

async function setupCheckoutData() {
  const stepperContainer = document.getElementById(`stepper`);
  const cartJson = "/OnlineStore/assets/json/stepper/cart.json";
  const shippingJson = "/OnlineStore/assets/json/stepper/shipping.json";
  const paymentJson = "/OnlineStore/assets/json/stepper/payment.json";
  const summaryJson = "/OnlineStore/assets/json/stepper/summary.json";

  if (stepperContainer) {
    try {
      const cartData = await fetchJSONData(cartJson);
      const shippingData = await fetchJSONData(shippingJson);
      const paymentData = await fetchJSONData(paymentJson);
      const summaryData = await fetchJSONData(summaryJson);

      // console.table(cartData);
      // console.table(shippingData[0]);
      // console.table(paymentData[0]);
      // console.table(summaryData[0]);

      if (cartData && cartData.length > 0) {
        cartData.forEach(renderProductCardToDOM);
        hideEmptyCartMessage();
      } else {
        showEmptyCartMessage();
      }

      if (shippingData && shippingData.length > 0) {
        renderShippingData(shippingData[0]);
      }

      if (paymentData && paymentData.length > 0) {
        renderPaymentData(paymentData[0]);
      }

      if (summaryData[0] && summaryData[0].length > 0) {
        renderSummmaryData(summaryData[0]);
      }
    } catch (error) {
      console.error(`Error fetching data ${error}`);
    }
  }
}

export function setupStepperEventListeners() {
  console.log(`Stepper Event Listeners is running...`);
  setupCartStepperData();
  setupBilingStepperData();
  setupCheckoutData();
  attachSubmitHandler("cart-form", handleCartForm);
  attachSubmitHandler("billing-form", handleBillingForm);
  attachSubmitHandler("checkout-form", handleCheckoutForm);
}
