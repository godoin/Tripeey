const qtyPlus = document.querySelectorAll(".qty-plus");
const qtyMinus = document.querySelectorAll(".qty-minus");

/**
 * Increment current quantity field
 */
function incrementQuantity(e) {
  const qtyContainer = e.target.closest(".qty-container");
  const qtyField = qtyContainer.querySelector(".qty-field");
  let currentQty = parseInt(qtyField.value);
  qtyField.value = currentQty + 1;
}

/**
 * Decrease current quantity field
 */
function decrementQuantity(e) {
  const qtyContainer = e.target.closest(".qty-container");
  const qtyField = qtyContainer.querySelector(".qty-field");

  let currentQty = parseInt(qtyField.value);
  if (currentQty > 1) {
    qtyField.value = currentQty - 1;
  }
}

qtyPlus?.forEach((button) => {
  button?.addEventListener("click", incrementQuantity);
});

qtyMinus?.forEach((button) => {
  button?.addEventListener("click", decrementQuantity);
});
