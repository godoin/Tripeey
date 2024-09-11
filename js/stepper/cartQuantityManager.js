/**
 * Cart Quantity Manager
 * This script manages the quantity of product items in a cart,
 * allowing users to increment or decrement the quantity using buttons.
 *
 * Features:
 * - Handles multiple product items with quantity controls.
 * - Prevents decrementing below a minimum quantity (usually 1).
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 * TODO: Resolve the quantity must reflect the new value on increment or decrement.
 */

/**
 * Parse the value of an element from string to integer
 */
function parseIntElementValue(element) {
  return parseInt(element.value);
}

/**
 * Handles the increment button click event.
 */
export function incrementCartQty(input) {
  const currentFieldValue = parseIntElementValue(input);
  if (currentFieldValue > 9) return false;
  const newValue = currentFieldValue + 1;

  return {
    newValue: newValue,
    inputElement: input,
  };
}

/**
 * Handles the decrement button click event.
 */
export function decrementCartQty(input) {
  const currentFieldValue = parseIntElementValue(input);
  if (currentFieldValue <= 1) return null;
  const newValue = input.value - 1;

  return {
    newValue: newValue,
    inputElement: input,
  };
}

/**
 * Updates the quantity input field to the DOM with the new value.
 */
function updateNewCartQtyStateToDOM(state) {
  state.inputElement.value = state.newValue;
}

/**
 * Attaches a click event handler to a quantity button.
 */
export function handleCartQtyToggle(button, eventHandler) {
  button.addEventListener("click", (event) => {
    const container = event.target.closest(".qty-container");
    const input = container.querySelector(".qty-field");
    const updatedState = eventHandler(input);

    if (updatedState) updateNewCartQtyStateToDOM(updatedState);
  });
}

/**
 * Sets up quantity change event listeners for a group of buttons.
 */
function setupQtyChangeEvent(buttons, clickHandler, event) {
  const qtyBtns = document.querySelectorAll(buttons);
  qtyBtns.forEach((button) => clickHandler(button, event));
}

export function setupCartQuantityToggleEventListeners() {
  console.log(`Cart quantity toggle event listeners are running...`);
  setupQtyChangeEvent(".qty-plus", handleCartQtyToggle, incrementCartQty);
  setupQtyChangeEvent(".qty-minus", handleCartQtyToggle, decrementCartQty);
}
