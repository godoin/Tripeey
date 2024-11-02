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

import { attachEventHandlerById } from "../shared/eventHandlers.js";

const handleCartForm = (e) => {
  e.preventDefault();

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

const handleCheckoutForm = (e) => {
  e.preventDefault();
}

/**
 * Handles the billing form submission.
 */
const handleBillingForm = (e) => {
  e.preventDefault();

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

const setupBilingStepperData = async () => {
  const stepperContainer = document.getElementById(`stepper`);
  const summaryJson = "/assets/json/stepper/summary.json";

  if (stepperContainer) {
    try {
      const res = await fetch(summaryJson);
      
      if (!res.ok) {
        console.error(`HTTP Error Response Status: ${res.status}`);
      }
  
      const summaryData = await res.json();

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
const setupCartStepperData = async () => {
  const stepperContainer = document.getElementById(`stepper`);
  const cartJson = "/assets/json/stepper/cart.json";
  const summaryJson = "/assets/json/stepper/summary.json";

  if (stepperContainer) {
    try {
      const [cartData, summaryData ] = await Promise.all([
        fetch(cartJson)
          .then((res) => res.json()),
        fetch(summaryJson)
          .then((res) => res.json())
      ]);

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

const setupCheckoutData = async () => {
  const stepperContainer = document.getElementById(`stepper`);
  const cartJson = "/assets/json/stepper/cart.json";
  const shippingJson = "/assets/json/stepper/shipping.json";
  const paymentJson = "/assets/json/stepper/payment.json";
  const summaryJson = "/assets/json/stepper/summary.json";

  if (stepperContainer) {
    try {
      const [cartData, shippingData, paymentData, summaryData] = await Promise.all([
        fetch(cartJson)
          .then((res) => res.json()),
        fetch(shippingJson)
          .then((res) => res.json()),
        fetch(paymentJson)
          .then((res) => res.json()),
        fetch(summaryJson)
          .then((res) => res.json()),
      ]);

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

const setupStepperEventListeners = () => {
  // console.log(`Stepper Event Listeners is running...`);

  setupCartStepperData();
  setupBilingStepperData();
  setupCheckoutData();


  attachEventHandlerById("cart-form", "submit", handleCartForm);
  attachEventHandlerById("billing-form", "submit", handleBillingForm);
  attachEventHandlerById("checkout-form", "submit", handleCheckoutForm);
}

export { setupStepperEventListeners };
