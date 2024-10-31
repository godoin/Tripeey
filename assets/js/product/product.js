import { fetchJSONData } from "../shared/apiUtils.js";
import {
  handleStateErrorToDOM,
  handleToastSuccessToDOM,
} from "../shared/domUtils.js";
import { attachSubmitHandler } from "../shared/eventHandlers.js";

function generateProductItem(product) {}

async function loadProductData() {
  const jsonUrl = "/OnlineStore/assets/json/product_data.json";

  try {
    const productData = await fetchJSONData(jsonUrl);

    if (productData) {
      // Generate data
    }

    return productData;
  } catch (error) {
    console.error("Error trying to fetch data from ${jsonUrl}.");
    return;
  }
}

function getProductData(productContainer) {
  const errors = [];

  const productTitle =
    productContainer.querySelector("#product-title").textContent;
  const productCreatedBy =
    productContainer.querySelector("#created-by").textContent;
  const productRating = productContainer.querySelector("#rating").textContent;
  const productReviewCount =
    productContainer.querySelector("#review-num").textContent;

  const priceContainer = productContainer.querySelector("#price-group");

  if (!priceContainer) {
    console.error(`Price container not found...`);
    return null;
  }

  const originalPrice = priceContainer.querySelector("#original-price").value;
  const discountedPrice = priceContainer.querySelector("#discount-price").value;

  const colorsContainer = productContainer.querySelector("#colors");

  if (!colorsContainer) {
    console.error(`Color container not found...`);
    return null;
  }

  const selectedColors = Array.from(
    colorsContainer.querySelectorAll('input[name="color"]:checked')
  ).map((checkbox) => checkbox.value);

  if (selectedColors.length === 0) {
    errors.push({
      elementId: "error-colors",
      message: "Please choose a color.",
    });
  }

  const sizesContainer = productContainer.querySelector("#sizes");

  if (!sizesContainer) {
    console.error(`Sizes container not found...`);
    return null;
  }

  const selectedSizes = Array.from(
    sizesContainer.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  if (selectedSizes.length === 0) {
    errors.push({
      elementId: "error-sizes",
      message: "Please choose a size.",
    });
  }

  const quantityContainer = document.getElementById("qty-container");

  if (!quantityContainer) {
    console.error(`Quantity container not found...`);
    return null;
  }

  const productQuantity = quantityContainer.querySelector("#qty-input").value;

  if (errors.length > 0) {
    errors.forEach((error) => {
      handleStateErrorToDOM(error.elementId, error.message);
    });
    return null;
  }

  return {
    title: productTitle,
    sellerName: productCreatedBy,
    rating: productRating,
    reviews: productReviewCount,
    price: originalPrice,
    discount: discountedPrice,
    colors: selectedColors,
    sizes: selectedSizes,
    quantity: productQuantity,
  };
}

function handleProductSubmit(event) {
  event.preventDefault();

  const productContainer = document.getElementById("product-item");

  if (!productContainer) {
    console.error(`Product container not found...`);
    return;
  }

  const data = getProductData(productContainer);

  if (data) {
    console.table(data);
    // TODO: FETCH API POST request to server.

    handleToastSuccessToDOM("toast", "Item added successfully to cart.");
  }
}

export function setupProductEventListeners() {
  console.log(`Product item even listeners are running...`);
  attachSubmitHandler("product-item", handleProductSubmit);
}
