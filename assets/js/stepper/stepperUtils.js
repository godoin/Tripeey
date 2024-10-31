/**
 * Form Field Ids
 * This module holds all the input field IDS for the checkout forms.
 * The forms are usually (billing, shipping and checkout).
 */

import { getUserInputById, getUserInputByName } from "../utils.js";

import {
  handleCartQtyToggle,
  decrementCartQty,
  incrementCartQty,
} from "./cartQuantityManager.js";

import {
  handleStateToTooltipDefaultToDOM,
  handleStateToTooltipSuccessToDOM,
  handleStateToTooltipErrorToDOM,
} from "../shared/domUtils.js";

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
export function setupInputStateToDefaultOnChange(elementIds) {
  console.log(`Setup input state to default is running...`);

  if (!elementIds) {
    console.error(`Error the element IDS are missing.`);
  }

  Object.keys(elementIds).forEach((key) => {
    // console.table(elementIds);
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
 * Renders a new product card to the shop.
 */
export function renderProductCardToDOM(product) {
  const productContainer = document.getElementById("cart-container");

  const productCard = document.createElement("article");
  productCard.classList.add("item");

  if (productContainer) {
    const html = `
            <div class="image-container">
                <img src="${product.imageUrl}" class="item-img" alt="${product.title}">
            </div>
            <div class="details-group">
                <div class="details">
                    <h2 class="title">${product.title}</h2>
                    <div class="group">
                        <span class="price">PHP ${product.price}</span>
                        <span class="divider">|</span>
                        <span class="status">${product.status}</span>
                    </div>
                    <span class="price colored">PHP ${product.price}</span>
                </div>
                <div class="actions">
                    <div class="group">
                        <select name="size" id="size" required>
                            <label for="size" class="sr-only">Size</label>
                            <option value="x-small">XS</option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="x-large" selected>XL</option>
                            <option value="xx-large">XXL</option>
                        </select>
                        <select name="color" id="color" required>
                            <label for="color" class="sr-only">Color</label>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option> 
                            <option value="yellow">Yellow</option>
                            <option value="magenta">Magenta</option>
                            <option value="cyan">Cyan</option>
                            <option value="purple">Purple</option>
                            <option value="orange">Orange</option>
                        </select>
                        <div class="qty-container">
                            <label for="quantity" class="sr-only">Quantity</label>
                            <button type="button" id="qty-minus" class="qty-btn qty-minus" aria-label="Decrease quantity">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input type="number" id="qty-field" name="quantity" class="qty-field" value="${product.quantity}" aria-label="Quantity" readonly>
                            <button type="button" id="qty-plus" class="qty-btn qty-plus" aria-label="Increase quantity">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="group">
                        <button class="outline" aria-label="Add to Favorites">
                        <i class="fa-regular fa-heart" aria-hidden="true"></i>
                        <span class="title">Favorite</span>
                        </button>
                        <button class="outline" aria-label="Delete Item">
                        <i class="fa-regular fa-trash-can" aria-hidden="true"></i>
                        <span class="title">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

    productCard.innerHTML = html;
    productContainer.appendChild(productCard);

    const decrementButton = productCard.querySelector("#qty-minus");
    const incrementButton = productCard.querySelector("#qty-plus");

    if (decrementButton && incrementButton) {
      handleCartQtyToggle(incrementButton, incrementCartQty);
      handleCartQtyToggle(decrementButton, decrementCartQty);
    }
  }
}

export function renderSummmaryData(summary) {
  const summaryContainer = document.getElementById("cart-summary");

  console.table(summary);

  if (!summaryContainer) {
    console.error("Error there is no summary container...");
    return null;
  }

  const deliveryContainer = summaryContainer.querySelector("#delivery-summary");

  if (!deliveryContainer) {
    console.error("Error there is no delivery section...");
    return null;
  }

  const orNumberElement = deliveryContainer.querySelector("#or-number");
  orNumberElement.textContent = summary.order_number;

  // const selectedTab = deliveryContainer.querySelector("")

  const estDateElement = deliveryContainer.querySelector("#est-date");
  estDateElement.textContent = summary.delivery_info.estimated_date;

  const estTimeElement = deliveryContainer.querySelector("#est-time");
  estTimeElement.textContent = summary.delivery_info.estimated_time;

  const productsContainer = summaryContainer.querySelector("#products-summary");

  if (!productsContainer) {
    console.error("Error there is no products section...");
    return null;
  }

  const productTotalElement = productsContainer.querySelector("#product-total");
  productTotalElement.textContent = summary.products_total;

  const productsListContainer = productsContainer.querySelector(
    "#products-summary-list"
  );

  if (!productsListContainer) {
    console.error("Error there is no products summary list...");
    return null;
  }

  const productListHTML = summary.products
    .map(
      (product) => `
      <li class="row">
        <h4 class="product-name">${product.name}</h4>
        <span class="product-quantity">${product.quantity}</span>
      </li>
    `
    )
    .join(" ");

  productsListContainer.innerHTML = productListHTML;

  const subTotalContainer = summaryContainer.querySelector("#subtotal-summary");

  if (!subTotalContainer) {
    console.error("Error there is no subtotal summary...");
    return null;
  }

  const subTotalElement = subTotalContainer.querySelector("#subtotal-price");
  subTotalElement.textContent = summary.sub_total;

  const subTotalListContainer = subTotalContainer.querySelector(
    "#subtotal-list-summary"
  );

  if (!subTotalListContainer) {
    console.error("Error there is no subtotal list...");
    return null;
  }

  const subTotalListHTML = Object.entries(summary.subtotal)
    .map(
      ([key, value]) => `
    <li class="row">
      <h4 class="name">${key}</h4> 
      <span class="price">${value}</span>
    </li>
  `
    )
    .join(" ");

  subTotalListContainer.innerHTML = subTotalListHTML;

  const totalContainer = summaryContainer.querySelector("#total-summary");
  if (!totalContainer) {
    console.error("Error there is no total container...");
    return null;
  }

  const totalPriceElement = totalContainer.querySelector("#total-price");
  totalPriceElement.textContent = summary.total;

  return { success: true };
}

export function renderShippingData(shipping) {
  const firstNameElement = document.getElementById(`shipping_first_name`);
  const lastNameElement = document.getElementById(`shipping_last_name`);
  const middleInitialElement = document.getElementById(
    `shipping_middle_initial`
  );
  const emailElement = document.getElementById(`shipping_email`);
  const phoneNumberElement = document.getElementById(`shipping_phone`);
  const streetAddressElement = document.getElementById(
    `shipping_street_address`
  );
  const stateElement = document.getElementById(`shipping_state`);
  const cityElement = document.getElementById(`shipping_city`);
  const provinceElement = document.getElementById(`shipping_province`);
  const regionElement = document.getElementById(`shipping_region`);
  const zipCodeElement = document.getElementById(`shipping_zip_code`);
  const countryElement = document.getElementById(`shipping_country`);

  firstNameElement.value = shipping.first_name;
  lastNameElement.value = shipping.last_name;
  middleInitialElement.value = shipping.middle_initial;
  emailElement.value = shipping.email;
  phoneNumberElement.value = shipping.phone_number;
  streetAddressElement.value = shipping.street_address;
  stateElement.value = shipping.state;
  cityElement.value = shipping.city;
  provinceElement.value = shipping.province;
  regionElement.value = shipping.region;
  zipCodeElement.value = shipping.zip_code;
  countryElement.value = shipping.country;

  return {
    success: true,
  };
}

export function renderPaymentData(payment) {
  const radioPaymentGroup = document.getElementById(`payment_method`);
  const allRadios = radioPaymentGroup.querySelectorAll(`input[type="radio"]`);

  allRadios.forEach((otherRadio) => {
    otherRadio.checked = false;
  });

  const targetRadio = radioPaymentGroup.querySelector(
    `#${payment.payment_method}`
  );

  targetRadio.checked = true;

  const cardNumberElement = document.getElementById(`shipping_card_number`);
  const expirationDateElement = document.getElementById(
    `shipping_expiration_date`
  );
  const nameOnCardElement = document.getElementById(`shipping_name_card`);
  const cvCodeElement = document.getElementById(`shipping_cv_code`);

  cardNumberElement.value = payment.card_number;
  expirationDateElement.value = payment.expiration_date;
  nameOnCardElement.value = payment.name_on_card;
  cvCodeElement.value = payment.cv_code;

  return {
    success: true,
  };
}
