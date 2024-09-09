/**
 * Shop DOM Utils
 * This module handles all display related (usaually messages) to shop page.
 */

/**
 * Show message to tell user no products found in products page.
 */
export function showEmptyShopMessage() {
  const cartMessage = document.getElementById("empty-shop");
  cartMessage?.classList.add("active");
}

/**
 * Hides message to tell user no products found in products page.
 */
export function hideEmptyShopMessage() {
  const cartMessage = document.getElementById("empty-shop");
  cartMessage?.classList.remove("active");
}

/**
 * Create a new filter button for the shop.
 */
export function createAndRenderButtonToDOM(filterName) {
  const newFilterButton = document.createElement("li");
  newFilterButton.classList.add("button");
  newFilterButton.classList.add("tertiary");
  newFilterButton.setAttribute("id", "filter-btn");
  newFilterButton.setAttribute("role", "button");
  newFilterButton.setAttribute("aria-label", `${filterName} filter`);
  newFilterButton.setAttribute("aria-pressed", "false");

  const newFilterTitle = document.createElement("span");
  newFilterTitle.classList.add("filter-text");
  newFilterTitle.textContent = filterName;

  const newRemoveFilterBtn = document.createElement("span");
  newRemoveFilterBtn.classList.add("filter-remove");
  newRemoveFilterBtn.innerHTML = "&times;";

  newFilterButton.appendChild(newFilterTitle);
  newFilterButton.appendChild(newRemoveFilterBtn);

  return newFilterButton;
}

/**
 * Renders a product to the DOM.
 */
export function renderShopProductDataToDOM(product) {
  const cardsContainer = document.getElementById("shop-cards");

  const newShopProductItem = document.createElement("article");
  newShopProductItem.classList.add("card", "item");

  const html = `
    <div class="image-container">
        <img src="${product.imageUrl}" class="model_img" alt="${
    product.imageAlt
  }">
        <div class="top-position">
            <span class="button badge-02">New</span>
            <button id="favorite-btn" class="icon like" aria-label="Add to Favorites" data-id="#">
                <i class="${
                  product.isFavorite === "true" ? "fa-solid" : "fa-regular"
                } fa-heart"></i>
            </button>
        </div>
    </div>
    <div class="description">
        <h3>${product.title}</h3>
        <div class="details">
            <div class="price-group">
                <span class="title">Price</span>
                <span class="price">PHP ${product.price}</span>
            </div>
            <a href="product-page.html" class="button primary" aria-label="Buy ${
              product.title
            }">
                <img src="assets/images/icons/shopping-cart-02.svg" class="cart" alt="Buy">
            </a>
        </div>
    </div>
  `;

  newShopProductItem.innerHTML = html;
  cardsContainer.append(newShopProductItem);
}

/**
 * Displays all the selected filters that the user chose.
 */
export function displayFilteredData(buttonId) {
  const button = document.getElementById(buttonId);
  const select = document.getElementById("sort-by");

  button?.addEventListener("click", () => {
    let filters = gatherFilteredData();

    for (let key in filters) {
      console.log(`${key}: ${filters[key]}`);
      filters[key].forEach((filterName) => {
        if (!doesFilterbuttonExist(filterName))
          setupNewFilterButton(filterName, "filter-list");
      });
    }

    return filters;
  });

  setupDestroyBtnHandler("filter-btn", ".filters");
}
