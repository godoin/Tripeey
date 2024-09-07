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
const NOT_EXIST = "NOT_EXIST";

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

function handleStateToTooltipDefaultToDOM(elementId) {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer.querySelector(".tooltip");

  inputContainer?.classList.remove("success", "error");
  tooltip?.classList.remove("active");
}

function handleStateToTooltipErrorToDOM(elementId, message) {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer.querySelector(".tooltip");
  const spanMessage = inputContainer?.querySelector(".tooltip-message");
  const tooltipIcon = tooltip.querySelector("i");

  if (!inputContainer) {
    console.error(`Error: Element with ID ${elementId} is not found.`);
  }

  if (tooltipIcon) {
    return;
  }

  if (elementId === "payment_method_card") {
    return;
  }

  inputContainer.classList.remove("success", "error");
  inputContainer.classList.add("error");
  spanMessage.textContent = message;
  tooltip?.classList.toggle("active");

  const newTooltipIcon = document.createElement("i");
  tooltip.classList.add("active");
  newTooltipIcon.classList.add("fa-solid", "fa-circle-exclamation");
  tooltip.appendChild(newTooltipIcon);
}

function handleStateToTooltipSuccessToDOM(elementId) {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer.querySelector(".tooltip");
  const tooltipIcon = tooltip.querySelector("i");

  if (!inputContainer) {
    console.error(`Error: Element with ID ${elementId} is not found.`);
  }

  if (tooltipIcon) {
    return;
  }

  if (elementId === "payment_method_card") {
    return;
  }

  inputContainer.classList.remove("success", "error");
  inputContainer.classList.add("success");
  tooltip.classList.add("active");

  const newTooltipIcon = document.createElement("i");
  newTooltipIcon.classList.add("fa-solid", "fa-circle-check");
  tooltip.appendChild(newTooltipIcon);
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
  return document.getElementById(id);
}

function getUserInputByName(name) {
  return document.querySelector(`input[name="${name}"]`);
}

/**
 * Handles the login form submission.
 */
async function loginHandler(event) {
  event.preventDefault();

  const jsonUrl = "/OnlineStore/assets/json/user.json";
  const enteredEmail = getUserInputById("email");
  const enteredPassword = getUserInputById("password-input");

  // print_debug("Check", enteredEmail, enteredPassword);

  const validationResult = validateLoginUser(
    enteredEmail.value,
    enteredPassword.value
  );

  if (validationResult.success) {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error(`HTTP Response Status: ${response.status}`);
      }

      const jsonData = await response.json();

      let userFound = false;

      jsonData.forEach((user) => {
        if (
          user.email === enteredEmail.value &&
          user.password === enteredPassword.value
        ) {
          console.log(
            `Success: Validation succeeded for ${enteredEmail.value}`
          );
          userFound = true;
          return;
        }
      });

      if (!userFound) {
        console.error("Error: Invalid email or password.");
      }
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
  const enteredBillingPhoneNumber = getUserInputByName("billing_phone_number");
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
    first_name: enteredBillingFirstName.value,
    last_name: enteredBillingLastName.value,
    middle_initial: enteredBillingMiddleInitial.value,
    email: enteredBillingEmail.value,
    phone_number: enteredBillingPhoneNumber.value,
    street_address: enteredBillingStreetAddress.value,
    city: enteredBillingCity.value,
    state: enteredBillingState.value,
    province: enteredBillingProvince.value,
    region: enteredBillingRegion.value,
    zip_code: enteredBillingZipCode.value,
    country: enteredBillingCountry.value,
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
  const shippingBillingPhoneNumber = getUserInputByName(
    "shipping_phone_number"
  );
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
    first_name: shippingBillingFirstName.value,
    last_name: shippingBillingLastName.value,
    middle_initial: shippingBillingMiddleInitial.value,
    email: shippingBillingEmail.value,
    phone_number: shippingBillingPhoneNumber.value,
    street_address: shippingBillingStreetAddress.value,
    city: shippingBillingCity.value,
    state: shippingBillingState.value,
    province: shippingBillingProvince.value,
    region: shippingBillingRegion.value,
    zip_code: shippingBillingZipCode.value,
    country: shippingBillingCountry.value,
  };
}

/**
 * Retrieves all user inputted payment method data.
 */
function getPaymentMethodData() {
  const radioPaymentGroup = document.getElementById("payment_method_card");
  const selectedPaymentMethod = radioPaymentGroup.querySelector(
    '[name="payment_method"]:checked'
  );
  const enteredExpirationDate = getUserInputByName("expiration_date");
  const enteredCardNumber = getUserInputByName("card_number");
  const enteredNameCard = getUserInputByName("name_card");
  const enteredCVCode = getUserInputByName("cv_code");

  return {
    card: selectedPaymentMethod.value,
    card_number: enteredCardNumber.value,
    expiration_date: enteredExpirationDate.value,
    name_on_card: enteredNameCard.value,
    cv_code: enteredCVCode.value,
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
 * Validate immediately on user input not empty.
 */
function setupInputElementOnChange(elementIds) {
  elementIds.forEach((element) => {
    const inputElement = document.querySelector(`input[name="${element}"]`);
    inputElement?.addEventListener("change", () => {
      let inputValue = inputElement.value;
      let inputElementId = inputElement.name;

      // console.log(`element: ${inputElement}`);
      // console.log(`value: ${inputValue}`);
      // console.log(`id: ${inputElementId}`);

      if (!validate(inputValue, NOT_EMPTY)) {
        handleStateToTooltipErrorToDOM(
          inputElementId,
          `${element} is required.`
        );
      } else {
        handleStateToTooltipSuccessToDOM(inputElementId);
      }
    });
  });
}

function setupInputStateToDefaultOnChange(elementIds) {
  elementIds.forEach((element) => {
    const inputElement = document.querySelector(`input[name="${element}"]`);
    inputElement?.addEventListener("change", () => {
      let inputElementId = inputElement.name;
      handleStateToTooltipDefaultToDOM(inputElementId);
    });
  });
}

/**
 * Set up for handling forms.
 */
function connectForm(formId, onSubmitHandler) {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", onSubmitHandler);
}

const allBillingIds = [
  "billing_first_name",
  "billing_last_name",
  "billing_middle_initial",
  "billing_email",
  "billing_phone_number",
  "billing_street_address",
  "billing_city",
  "billing_state",
  "billing_province",
  "billing_region",
  "billing_zip_code",
  "billing_country",
  "shipping_first_name",
  "shipping_last_name",
  "shipping_middle_initial",
  "shipping_email",
  "shipping_phone_number",
  "shipping_street_address",
  "shipping_city",
  "shipping_state",
  "shipping_province",
  "shipping_region",
  "shipping_zip_code",
  "shipping_country",
  "payment_method_card",
  "payment_method_card_number",
  "payment_method_expiration_date",
  "payment_method_cv_code",
];

// setupInputElementOnChange(allBillingIds);
setupInputStateToDefaultOnChange(allBillingIds);
connectForm("login-form", loginHandler);
connectForm("billing-form", shippingHandler);
