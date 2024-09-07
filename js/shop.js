/**
 * Shop Filter Script
 * This script is used to filter the product items that is shown in the shop.
 * It depends on the selectable filters founded on the left hand side of shop.
 *
 * Features:
 * - Allows multi-selection (filters), single category selection, and sort selection.
 * - Allows removing of the applied filters on the shop.
 *
 * TODO: Create the FETCH API for handling the client-side request to server.
 * TODO: Handle events where after getting the new products through FETCH API, properly reattach the click events needed.
 * TODO: Proper error handling such as missing DOM elements when querying.
 * TODO: Switch the action of applying filters from button to any click selection of filters.
 */

function gatherFilteredData() {
  const categories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((radio) => radio.value);

  const styles = Array.from(
    document.querySelectorAll('input[name="style"]:checked')
  ).map((checkbox) => checkbox.value);

  const colors = Array.from(
    document.querySelectorAll('input[name="color"]:checked')
  ).map((checkbox) => checkbox.value);

  const sizes = Array.from(
    document.querySelectorAll('input[name="size"]:checked')
  ).map((checkbox) => checkbox.value);

  const prices = Array.from(
    document.querySelectorAll('input[name="price"]:checked')
  ).map((checkbox) => checkbox.value);

  return {
    categories,
    styles,
    colors,
    sizes,
    prices,
  };
}

/**
 * Check if the filter button already exists.
 */
function checkFilterButton(name) {
  const filterList = document.getElementById("filter-list");
  const filterTextSpans = filterList.querySelectorAll(".filter-text");

  for (const span of filterTextSpans) {
    if (span.textContent === name) return true;
  }
  return false;
}

/**
 * Displays all the selected filters that the user chose.
 */
function displayFilteredData(buttonId) {
  const button = document.getElementById(buttonId);
  const select = document.getElementById("sort-by");
  const selectedOption = select?.value;

  button?.addEventListener("click", () => {
    let filters = gatherFilteredData();

    for (let key in filters) {
      console.log(`${key}: ${filters[key]}`);
      filters[key].forEach((filterName) => {
        if (!checkFilterButton(filterName))
          setupNewFilterButton(filterName, "filter-list");
      });
    }
    console.log(`sort: ${selectedOption}`);
  });

  setupDestroyBtnHandler("filter-btn", ".filters");
}

/**
 * Create a new filter button for the shop.
 */
function createButton(filterName) {
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
 * Creates the new filter button to be appended to the filters-by.
 */
function setupNewFilterButton(filterName, filterListID) {
  const filtersList = document.getElementById(filterListID);
  const newFilter = createButton(filterName);

  filtersList.appendChild(newFilter);
  attachDestroyFilterListener(newFilter);
}

/**
 * Attach new destroy filter everytime new sets of filter are created.
 */
function attachDestroyFilterListener(newButton) {
  newButton.addEventListener("click", () => {
    destroyButton(newButton, ".filters");
  });
}

/**
 * Destroys a button that is encased by a ancestor node.
 */
function destroyButton(button, parent) {
  const container = button.closest(parent);

  if (!container) {
    console.log(`Error: The button is not found in ${container}.`);
    return;
  }

  button.remove();
}

/**
 * Setup to destroy a filter from the shop.
 */
function setupDestroyBtnHandler(buttonId, parent) {
  const button = document.getElementById(buttonId);

  button?.addEventListener("click", () => {
    destroyButton(button, parent);
  });
}

/**
 * Switches between fontawesome's solid and regular icons.
 */
function switchFavoriteIcon(icon) {
  return icon.classList.contains("fa-regular") ? "fa-solid" : "fa-regular";
}

/**
 * Handles the event change when clicking favorite button.
 */
function clickFavorite(button) {
  const icon = button.querySelector(".fa-heart");
  const newIcon = switchFavoriteIcon(icon);
  icon.classList.remove("fa-regular", "fa-solid");
  icon.classList.add(newIcon);
}

/**
 * Setup the click listener to all product items with a favorite button.
 */
function setupClickFavorite(buttonClass) {
  const buttons = document.querySelectorAll(buttonClass);

  buttons.forEach((button) =>
    button?.addEventListener("click", () => {
      clickFavorite(button);
    })
  );
}

/**
 * Renders a product to the DOM.
 */
async function renderShopProductDataToDOM(product) {
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
                <span class="price">${product.price}</span>
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
 * Fetch HTTP get request from the server.
 */
async function fetchShopProductsData() {
  const json_data = "/OnlineStore/assets/json/shop_data.json";

  try {
    const response = await fetch(json_data);

    if (!response.ok) {
      throw new Error(`HTTP Response Status: ${response.message}`);
    }

    const shopProductsData = await response.json();
    return shopProductsData;
  } catch {
    console.error(error.message);
  }
}

/**
 * Setup for initial loading of shop product data to the shop.
 */
function setupRenderShopProductData() {
  const cardContainer = document.getElementById("shop-cards");
  if (cardContainer) {
    fetchShopProductsData()
      .then((shopProductsData) => {
        if (shopProductsData && shopProductsData.length > 0) {
          shopProductsData.forEach((product) => {
            renderShopProductDataToDOM(product);
          });
          hideEmptyShopMessage();
        } else {
          showEmptyShopMessage();
        }
      })
      .catch((error) => {
        console.error(error.message);
        showEmptyShopMessage();
      });
  } else {
    console.error();
  }
}

/**
 * Show message to tell user no products found in products page.
 */
function showEmptyShopMessage() {
  const cartMessage = document.getElementById("empty-shop");
  cartMessage?.classList.add("active");
}

/**
 * Hides message to tell user no products found in products page.
 */
function hideEmptyShopMessage() {
  const cartMessage = document.getElementById("empty-shop");
  cartMessage?.classList.remove("active");
}

setupClickFavorite(".like");
setupDestroyBtnHandler("filter-btn", ".filters");
displayFilteredData("test-btn");
setupRenderShopProductData();
