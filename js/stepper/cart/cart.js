/**
 * Stepper Script
 * This handles the logic for the checkout shopping of a user.
 * Guides users through the checkout process (cart, billing, checkout).
 */

import { hideEmptyCartMessage, showEmptyCartMessage } from "../stepperUtils.js";
import {
  handleCartQtyToggle,
  incrementCartQty,
  decrementCartQty,
} from "../../stepper/cart/cartQuantityManager.js";

/**
 * Renders a new product card to the shop.
 */
function renderProductCardToDOM(product) {
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
                        <span class="price">${product.price}</span>
                        <span class="divider">|</span>
                        <span class="status">${product.status}</span>
                    </div>
                    <span class="price colored">${product.price}</span>
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
                            <input type="number" id="qty-field" name="quantity" class="qty-field" value="1" aria-label="Quantity" readonly>
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

/**
 *  Fetch product cart data from user.
 */
async function fetchUserProductData() {
  const json_path = "/OnlineStore/assets/json/cart_data.json";

  try {
    const response = await fetch(json_path);

    if (!response.ok) {
      throw new Error(`HTTP Response Status: ${response.message}`);
    }

    const productsData = await response.json();
    return productsData;
  } catch (error) {
    console.error(error.message);
  }
}

/**
 * Setup render cart data during DOM loading.
 */
function setupRenderUserCartProducts() {
  const cartContainer = document.getElementById("cart-container");
  if (cartContainer) {
    fetchUserProductData()
      .then((productsData) => {
        if (productsData && productsData.length > 0) {
          productsData.forEach((product) => {
            renderProductCardToDOM(product);
          });
          hideEmptyCartMessage();
        } else {
          showEmptyCartMessage();
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}.`);
        showEmptyCartMessage();
      });
  } else {
    console.error();
  }
}

setupRenderUserCartProducts();
