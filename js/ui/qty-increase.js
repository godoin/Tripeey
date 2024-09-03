/**
 * Parse a price string to float.
 */
function parsePrice(price) {
  return parseFloat(price.innerHTML("PHP ", ""));
}

/**
 * Increments current product price and quantity.
 */
function incrementProdQty() {
  let currentQty = parseInt(qtyInput.value);
  let newValue = currentQty + 1;

  const updatedOriginalPrice = (baseOriginalPrice * newValue).toFixed(2);
  const updatedNewPrice = (baseNewPrice * newValue).toFixed(2);

  // Apply new values from interaction
  qtyInput.value = newValue;
  originalPriceDisplay.innerHTML = `PHP ${updatedOriginalPrice}`;
  newPriceDisplay.innerHTML = `PHP ${updatedNewPrice}`;

  console.log(`User increments product quantity.`);
  console.log(`Original Price PHP ${updatedOriginalPrice}`);
  console.log(`Discounted Price PHP ${updatedNewPrice}`);
}

/**
 * Decreases current product price and quantity.
 */
function decrementProdQty() {
  const currentQty = parseInt(qtyInput.value);

  if (currentQty > 1) {
    let newValue = currentQty - 1;

    const updatedOriginalPrice = (baseOriginalPrice * newValue).toFixed(2);
    const updatedNewPrice = (baseNewPrice * newValue).toFixed(2);

    // Apply new values from interaction
    qtyInput.value = newValue;
    originalPriceDisplay.innerHTML = `PHP ${updatedOriginalPrice}`;
    newPriceDisplay.innerHTML = `PHP ${updatedNewPrice}`;

    console.log(`User decrements product quantity.`);
    console.log(`Original Price PHP ${updatedOriginalPrice}`);
    console.log(`Discounted Price PHP ${updatedNewPrice}`);
  }
}

const qtyIncreaseBtn = document.getElementById("qty-add");
const qtyDecreaseBtn = document.getElementById("qty-subtract");
const qtyInput = document.getElementById("qty-input");

const originalPriceDisplay = document.getElementById("original-price");
const newPriceDisplay = document.getElementById("new-price");

const baseNewPrice = parseFloat(newPriceDisplay.innerHTML.replace("PHP ", ""));
const baseOriginalPrice = parseFloat(
  originalPriceDisplay.innerHTML.replace("PHP ", "")
);

function product() {
  // Event listeners for qty increment and decrement.
  qtyIncreaseBtn?.addEventListener("click", incrementProdQty);
  qtyDecreaseBtn?.addEventListener("click", decrementProdQty);

  // Event listeners for size options
  sizeOptions?.forEach((option) => {
    option?.addEventListener("click", toggleSizeOptions);
  });
}

product();
