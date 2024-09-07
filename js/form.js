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

const NOT_EMPTY = "NOT_EMPTY";
const MAX_LENGTH = "MAX_LENGTH";
const VALID_EMAIL = "VALID_EMAIL";

function print_debug(statement, ...values) {
  console.log(`DEBUG ~ ${statement}:`, values);
}
/**
 * Generic validation flags for evaluating user inputs.
 */
function validate(value, flag, validatorValue) {
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
 * Validation of user input for login form.
 */
function validateLoginUser(userEmail, userPassword) {
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
  // TODO: Create API endpoint call to check user exists.

  if (errors.length > 0) {
    errors.forEach((error) =>
      handleStateErrorToDOM(error.elementId, error.message)
    );
    return false;
  }

  return {
    success: true,
    data: {
      email: userEmail,
      password: userPassword,
    },
  };
}

function handleStateToTooltipErrorToDOM(elementId, message) {
  const inputContainer = document.getElementById(elementId);

  if (!inputContainer) {
    console.error(`Error: Element with ID ${elementId} is not found.`);
  }

  inputContainer.classList.remove("success", "error");
  inputContainer.classList.add("error");

  const tooltip = inputContainer.querySelector(".tooltip");
  tooltip?.classList.toggle("active");

  const spanMessage = inputContainer?.querySelector(".tooltip-message");
  spanMessage.textContent = message;

  const tooltipIconExists = tooltip.querySelector(".fa-solid");
  if (tooltipIconExists) tooltipIconExists.remove();

  if (
    !tooltipIconExists &&
    inputContainer.id !== "payment_method_expiration_date"
  ) {
    const tooltipIcon = document.createElement("i");
    tooltip.classList.add("active");
    tooltipIcon.classList.add("fa-solid", "fa-circle-exclamation");
    tooltip.appendChild(tooltipIcon);
  }
}

function handleStateToTooltipSuccessToDOM(elementId) {
  const inputContainer = document.getElementById(elementId);
  console.log;

  if (!inputContainer) {
    console.error(`Error: Element with ID ${elementId} is not found.`);
  }

  inputContainer.classList.remove("success", "error");
  inputContainer.classList.add("success");

  const tooltip = inputContainer.querySelector(".tooltip");
  const tooltipIconExists = tooltip.querySelector(".fa-solid");
  if (tooltipIconExists) tooltipIconExists.remove();

  if (
    !tooltipIconExists &&
    inputContainer.id !== "payment_method_expiration_date"
  ) {
    const tooltipIcon = document.createElement("i");
    tooltip.classList.add("active");
    tooltipIcon.classList.add("fa-solid", "fa-circle-check");
    tooltip.appendChild(tooltipIcon);
  }
}

/**
 * Validates all user inputted data: billing, shipping and payment method info.
 */
function validateBilling(billingData, shippingData, paymentMethodData) {
  const billingErrors = [];
  const shippingErrors = [];
  const paymentMethodErrors = [];

  Object.keys(billingData).forEach((key) => {
    if (!validate(billingData[key], NOT_EMPTY)) {
      billingErrors.push({
        elementId: `billing_${key}`,
        message: `${key} is required.`,
      });
    } else {
      handleStateToTooltipSuccessToDOM(`billing_${key}`);
    }
    // console.log(`Check: billing_${key}`);
  });

  if (billingErrors.length > 0) {
    billingErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
  }

  Object.keys(shippingData).forEach((key) => {
    if (!validate(shippingData[key], NOT_EMPTY)) {
      shippingErrors.push({
        elementId: `shipping_${key}`,
        message: `${key} is required.`,
      });
    } else {
      handleStateToTooltipSuccessToDOM(`shipping_${key}`);
    }
    // console.log(`Check: shipping_${key}`);
  });

  if (shippingErrors.length > 0) {
    shippingErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
  }

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
        handleStateToTooltipSuccessToDOM(`payment_method_${key}`);
      }
    }
    // console.log(`Check: payment_method_${key}`);
  });

  if (paymentMethodErrors.length > 0) {
    paymentMethodErrors.forEach((error) => {
      handleStateToTooltipErrorToDOM(error.elementId, error.message);
    });
  }

  if (
    billingErrors.length > 0 ||
    shippingErrors.length > 0 ||
    paymentMethodErrors.length > 0
  ) {
    return false;
  }

  return {
    success: true,
    billingData: billingData,
    shippingData: shippingData,
    paymentMethodData: paymentMethodData,
  };
}

/**
 * Dispaly single state error to
 */
function updateStateErrorToDOM(display, text, message) {
  text.textContent = message;
  display.classList.add("active");
}

/**
 * Update an single error element to the DOM.
 */
function handleStateErrorToDOM(displayId, message) {
  const displayElement = document.getElementById(displayId);
  const textElement = displayElement.querySelector(".text");

  // debug_print("Check", ${textElement})

  updateStateErrorToDOM(displayElement, textElement, message);

  setTimeout(() => {
    displayElement.classList.remove("active");
  }, 10000);
}

/**
 * Gets the value of an input element by id.
 */
function getUserInputById(id) {
  return document.getElementById(id).value;
}

function getUserInputByName(name) {
  return document.querySelector(`input[name="${name}"]`).value;
}

/**a
 * Handles the login form submission.
 */
function loginHandler(event) {
  event.preventDefault();

  const enteredEmail = getUserInputById("email");
  const enteredPassword = getUserInputById("password");

  // print_debug("Check", enteredEmail, enteredPassword);

  const validationResult = validateLoginUser(enteredEmail, enteredPassword);

  if (validationResult.success) {
    try {
      console.log(validationResult.data);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(validationResult.error);
  }
}

/**
 * Retrieves all user inputted billing data.
 */
function getBillingData() {
  const enteredBillingFirstName = getUserInputByName("billing_first_name");
  const enteredBillingLastName = getUserInputByName("billing_last_name");
  const enteredBillingMiddleInitial = getUserInputByName(
    "billing_middle_initial"
  );
  const enteredBillingEmail = getUserInputByName("billing_email");
  const enteredBillingPhoneNumber = getUserInputByName("billing_phone");
  const enteredBillingStreetAddress = getUserInputByName(
    "billing_street_address"
  );
  const enteredBillingCity = getUserInputByName("billing_city");
  const enteredBillingState = getUserInputByName("billing_state");
  const enteredBillingProvince = getUserInputByName("billing_province");
  const enteredBillingRegion = getUserInputByName("billing_region");
  const enteredBillingZipCode = getUserInputByName("billing_zip_code");
  const enteredBillingCountry = getUserInputByName("billing_country");

  return {
    first_name: enteredBillingFirstName,
    last_name: enteredBillingLastName,
    middle_initial: enteredBillingMiddleInitial,
    email: enteredBillingEmail,
    phone_number: enteredBillingPhoneNumber,
    street_address: enteredBillingStreetAddress,
    city: enteredBillingCity,
    state: enteredBillingState,
    province: enteredBillingProvince,
    region: enteredBillingRegion,
    zip_code: enteredBillingZipCode,
    country: enteredBillingCountry,
  };
}

/**
 * Retrieves all user inputted shipping data.
 */
function getShippingData() {
  const shippingBillingFirstName = getUserInputByName("shipping_first_name");
  const shippingBillingLastName = getUserInputByName("shipping_last_name");
  const shippingBillingMiddleInitial = getUserInputByName(
    "shipping_middle_initial"
  );
  const shippingBillingEmail = getUserInputByName("shipping_email");
  const shippingBillingPhoneNumber = getUserInputByName("shipping_phone");
  const shippingBillingStreetAddress = getUserInputByName(
    "shipping_street_address"
  );
  const shippingBillingCity = getUserInputByName("shipping_city");
  const shippingBillingState = getUserInputByName("shipping_state");
  const shippingBillingProvince = getUserInputByName("shipping_province");
  const shippingBillingRegion = getUserInputByName("shipping_region");
  const shippingBillingZipCode = getUserInputByName("shipping_zip_code");
  const shippingBillingCountry = getUserInputByName("shipping_country");

  return {
    first_name: shippingBillingFirstName,
    last_name: shippingBillingLastName,
    middle_initial: shippingBillingMiddleInitial,
    email: shippingBillingEmail,
    phone_number: shippingBillingPhoneNumber,
    street_address: shippingBillingStreetAddress,
    city: shippingBillingCity,
    state: shippingBillingState,
    province: shippingBillingProvince,
    region: shippingBillingRegion,
    zip_code: shippingBillingZipCode,
    country: shippingBillingCountry,
  };
}

/**
 * Retrieves all user inputted payment method data.
 */
function getPaymentMethodData() {
  const radioPaymentGroup = document.getElementById("payment_method_card");
  const selectedPaymentMethod = radioPaymentGroup.querySelector(
    '[name="payment_method"]:checked'
  ).value;
  const enteredExpirationDate = getUserInputByName("expiration_date");
  const enteredCardNumber = getUserInputByName("card_number");
  const enteredNameCard = getUserInputByName("name_card");
  const enteredCVCode = getUserInputByName("cv_code");

  return {
    card: selectedPaymentMethod,
    card_number: enteredCardNumber,
    expiration_date: enteredExpirationDate,
    name_on_card: enteredNameCard,
    cv_code: enteredCVCode,
  };
}

/**
 * Handles the billing form submission.
 */
function shippingHandler(event) {
  event.preventDefault();

  const billingData = getBillingData();
  const shippingData = getShippingData();
  const paymentMethodData = getPaymentMethodData();

  print_debug("Check", billingData, shippingData, paymentMethodData);

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
}

/**
 * Set up for handling forms.
 */
function connectForm(formId, onSubmitHandler) {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", onSubmitHandler);
}

connectForm("login-form", loginHandler);
connectForm("billing-form", shippingHandler);
