/**
 * Cart Quantity Manager
 * This script manages with the quantity controls of a product item where
 * additional elements such as price state is affected.
 *
 * Features:
 * - Handles product item with quantity controls.
 * - Original and discounted price values are recalculated based on quantity control.
 * - Prevents decrementing below a minimum quantity (usually 1).
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 */

const PHP = "PHP";

/**
 * Parse a price string to float.
 */
function parsePrice(priceElement) {
  const priceString = priceElement.textContent || priceElement.innerHTML;
  return parseFloat(priceString.replace("PHP ", ""));
}
/**
 * Increments current product price and quantity.
 */
function handleIncrementProductQuantity(qtyInput, baseElement, basePrice) {
  const currentQty = parseInt(qtyInput.value);
  const newValue = currentQty + 1;
  if (newValue > 10) return false;

  const updatedOriginalPrice = (basePrice.originalPrice * newValue).toFixed(2);
  const updatedDiscountedPrice = (basePrice.discountedPrice * newValue).toFixed(
    2
  );

  // print_debug(`User increments product quantity`);
  // print_debug(`Original Price PHP`, updatedOriginalPrice);
  // print_debug(`Discounted Price PHP`, updatedDiscountedPrice);

  return {
    input: qtyInput,
    newValue: newValue,
    originalPriceElement: baseElement.originalElement,
    discountedPriceElement: baseElement.discountedElement,
    updatedOriginalPrice: updatedOriginalPrice,
    updatedDiscountedPrice: updatedDiscountedPrice,
  };
}

/**
 * Decreases current product price and quantity.
 */
function handleDecrementProductQuantity(qtyInput, baseElement, basePrice) {
  const currentQty = parseInt(qtyInput.value);
  if (currentQty <= 0) return false;

  const newValue = currentQty - 1;

  const updatedOriginalPrice = (basePrice.originalPrice * newValue).toFixed(2);
  const updatedDiscountedPrice = (basePrice.discountedPrice * newValue).toFixed(
    2
  );

  // print_debug(`User decrements product quantity`);
  // print_debug(`Original Price PHP`, updatedOriginalPrice);
  // print_debug(`Discounted Price PHP`, updatedDiscountedPrice);

  return {
    input: qtyInput,
    newValue: newValue,
    originalPriceElement: baseElement.originalElement,
    discountedPriceElement: baseElement.discountedElement,
    updatedOriginalPrice: updatedOriginalPrice,
    updatedDiscountedPrice: updatedDiscountedPrice,
  };
}

/**
 * Gets the DOM elements that are displaying the original and discounted price.
 */
function getBasePriceElementById(original, discounted) {
  const originalPrice = document.getElementById(original);
  const discountedPrice = document.getElementById(discounted);

  return {
    originalElement: originalPrice,
    discountedElement: discountedPrice,
  };
}

/**
 * Gets the base prices values of the original and disounted price.
 */
function getBasePriceValueByElement(originalElement, discountedElement) {
  const baseDiscountedPrice = parseFloat(
    discountedElement?.value.replace("PHP ", "")
  );
  const baseOriginalPrice = parseFloat(
    originalElement?.value.replace("PHP ", "")
  );

  return {
    originalPrice: baseOriginalPrice,
    discountedPrice: baseDiscountedPrice,
  };
}

/**
 * Updates new product quantity and prices to DOM.
 */
function updateNewProdQtyStateToDOM(state) {
  state.input.value = state.newValue;
  state.originalPriceElement.value = `${PHP} ${state.updatedOriginalPrice}`;
  state.discountedPriceElement.value = `${PHP} ${state.updatedDiscountedPrice}`;
}

/**
 * Sets up the event listener for a quantity button.
 */
function setupProdQtyEventChange(buttonId, inputId, clickHandler) {
  const button = document.getElementById(buttonId);
  const input = document.getElementById(inputId);

  const baseElement = getBasePriceElementById(
    "original-price",
    "discount-price"
  );

  const basePrice = getBasePriceValueByElement(
    baseElement.originalElement,
    baseElement.discountedElement
  );

  button?.addEventListener("click", () => {
    const updatedState = clickHandler(input, baseElement, basePrice);
    updateNewProdQtyStateToDOM(updatedState);
  });
}

export function setupProdQtyEventListeners() {
  console.log(`Product quantity event listeners are running...`);
  setupProdQtyEventChange(
    "qty-add",
    "qty-input",
    handleIncrementProductQuantity
  );
  setupProdQtyEventChange(
    "qty-subtract",
    "qty-input",
    handleDecrementProductQuantity
  );
}
