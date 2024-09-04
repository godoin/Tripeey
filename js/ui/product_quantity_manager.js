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

function print_debug(statement, ...values) {
  console.log(`${statement} : ${values}`);
}

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
function incrementProdQtyHandler(qtyInput, baseElement, basePrice) {
  const currentQty = parseInt(qtyInput.value);
  const newValue = currentQty + 1;

  const updatedOriginalPrice = (basePrice.originalPrice * newValue).toFixed(2);
  const updatedDiscountedPrice = (basePrice.discountedPrice * newValue).toFixed(
    2
  );

  print_debug(`User increments product quantity`);
  print_debug(`Original Price PHP`, updatedOriginalPrice);
  print_debug(`Discounted Price PHP`, updatedDiscountedPrice);

  return {
    input: qtyInput,
    newValue: newValue,
    originalPriceElement: baseElement.originalElement,
    discountedPriceElement: baseElement.discountElement,
    updatedOriginalPrice: updatedOriginalPrice,
    updatedDiscountedPrice: updatedDiscountedPrice,
  };
}

/**
 * Decreases current product price and quantity.
 */
function decrementProdQtyHandler(qtyInput, baseElement, basePrice) {
  const currentQty = parseInt(qtyInput.value);

  if (currentQty > 1 && currentQty <= 10) {
    const newValue = currentQty - 1;

    const updatedOriginalPrice = (basePrice.originalPrice * newValue).toFixed(
      2
    );
    const updatedDiscountedPrice = (
      basePrice.discountedPrice * newValue
    ).toFixed(2);

    print_debug(`User decrements product quantity`);
    print_debug(`Original Price PHP`, updatedOriginalPrice);
    print_debug(`Discounted Price PHP`, updatedDiscountedPrice);

    return {
      input: qtyInput,
      newValue: newValue,
      originalPriceElement: baseElement.originalElement,
      discountedPriceElement: baseElement.discountElement,
      updatedOriginalPrice: updatedOriginalPrice,
      updatedDiscountedPrice: updatedDiscountedPrice,
    };
  }
}

function getBasePriceElementById(original, discounted) {
  const originalPrice = document.getElementById(original);
  const discountedPrice = document.getElementById(discounted);

  return {
    originalElement: originalPrice,
    discountedElement: discountedPrice,
  };
}

function getBasePriceValueByElement(originalElement, discountedElement) {
  const baseDiscountedPrice = parseFloat(
    discountedElement.innerHTML.replace("PHP ", "")
  );
  const baseOriginalPrice = parseFloat(
    originalElement.innerHTML.replace("PHP ", "")
  );

  return {
    originalPrice: baseOriginalPrice,
    discountedPrice: baseDiscountedPrice,
  };
}

function updateNewProdQtyStateToDOM(state) {
  state.input.value = state.newValue;
  state.originalPriceElement = `${PHP} ${state.updatedOriginalPrice}`;
  state.discountedPriceElement = `${PHP} ${state.updatedDiscountedPrice}`;
}

function attachProdQtyChangeHandler(
  eventHandler,
  input,
  baseElement,
  basePrice
) {
  const updatedState = eventHandler(input, baseElement, basePrice);
  updateNewProdQtyStateToDOM(updatedState);
}

function setupProdQtyEventChange(buttonId, inputId, clickHandler, event) {
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
    clickHandler(event, input, baseElement, basePrice);
  });
}

setupProdQtyEventChange(
  "qty-add",
  "qty-input",
  attachProdQtyChangeHandler,
  incrementProdQtyHandler
);

setupProdQtyEventChange(
  "qty-subtract",
  "qty-input",
  attachProdQtyChangeHandler,
  decrementProdQtyHandler
);
