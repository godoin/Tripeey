/**
 * Form Field Ids
 * This module holds all the input field IDS for the checkout forms.
 * The forms are usually (billing, shipping and checkout).
 */

import { getUserInputById, getUserInputByName } from "../utils.js";

export const inputNames = [
  "first_name",
  "last_name",
  "middle_initial",
  "email",
  "phone_number",
  "street_address",
  "city",
  "state",
  "province",
  "region",
  "zip_code",
  "country",
];

export const paymentMethodNames = [
  "card",
  "expiration_date",
  "card_number",
  "name_card",
  "cv_code",
];

/**
 * Gets all billing names associated to their input fields.
 */
export function getBillingNames() {
  const billingNames = {};

  inputNames.forEach((name) => {
    billingNames[name] = `billing_${name}`;
    // console.log(`${billingNames[name]} : ${name}`);
  });

  return billingNames;
}
/**
 * Gets all shipping names associated to their input fields.
 */
export function getShippingNames() {
  const shippingNames = {};

  inputNames.forEach((name) => {
    shippingNames[name] = `shipping_${name}`;
    console.log(`${shippingNames[name]} : ${name}`);
  });

  return shippingNames;
}

/**
 * Gets all payment method names associated to their input fields.
 */
export function getPaymentMethodsNames() {
  const paymentMethodData = {};

  paymentMethodNames.forEach((name) => {
    paymentMethodData[name] = `payment_method_${name}`;
  });

  return paymentMethodData;
}

/**
 * Retrieves all user inputted billing value.
 */
export function getBillingData() {
  const billingNames = getBillingNames();
  const billingData = {};

  Object.keys(billingNames).forEach((key) => {
    const inputElement = getUserInputByName(billingNames[key]);
    billingData[billingNames[key]] = inputElement ? inputElement.value : "";
  });

  return billingData;
}

/**
 * Retrieves all user inputted shipping value.
 */
export function getShippingData() {
  const shippingNames = getShippingNames();
  const shippingData = {};

  Object.keys(shippingNames).forEach((key) => {
    const inputElement = getUserInputByName(shippingNames[key]);
    shippingData[shippingNames[key]] = inputElement ? inputElement.value : "";
  });

  return shippingData;
}

/**
 * Retrieves all user inputted payment method value.
 */
export function getPaymentMethodData() {
  const paymentMethodNames = getPaymentMethodsNames();
  const paymentMethodData = {};

  Object.keys(paymentMethodNames).forEach((key) => {
    if (paymentMethodNames[key] === "payment_method_card") {
      const radioPaymentGroup = getUserInputById("payment_method_card");
      const selectedPaymentMethod = radioPaymentGroup.querySelector(
        '[name="payment_method"]:checked'
      );
      paymentMethodData[paymentMethodNames[key]] = selectedPaymentMethod.value;
    } else {
      const inputElement = getUserInputByName(paymentMethodNames[key]);
      paymentMethodData[paymentMethodNames[key]] = inputElement
        ? inputElement.value
        : "";
    }
  });

  return paymentMethodData;
}

/**
 * Gets all the checkout ids (billing, shipping and payment method).
 */
export function getAllCheckoutNames() {
  const billingNames = getBillingNames();
  const shippingNames = getShippingNames();
  const paymentMethodNames = getPaymentMethodsNames();

  if (!billingNames || !shippingNames || !paymentMethodNames) {
    console.error("Error: One or more data objects are empty.");
  }

  const allNames = { ...billingNames, ...shippingNames, ...paymentMethodNames };

  console.log(`All names object: ${allNames}`);

  return allNames;
}

/**
 * Show message to tell user no products found in cart page.
 */
export function showEmptyCartMessage() {
  const cartMessage = document.getElementById("empty-cart");
  const cartSummary = document.getElementById("cart-summary");
  cartMessage?.classList.add("active");
  cartSummary?.classList.remove("active");
}

/**
 * Hides message to tell user no products found in cart page.
 */
export function hideEmptyCartMessage() {
  const cartMessage = document.getElementById("empty-cart");
  const cartSummary = document.getElementById("cart-summary");
  cartMessage?.classList.remove("active");
  cartSummary?.classList.add("active");
}
