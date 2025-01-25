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
 * TODO: Proper error handling such as missing DOM elements when querying.
 * TODO: Switch the action of applying filters from button to any click selection of filters.
 */

import { handleFavoriteToggle } from "../product/favorite.js";
import { doesFilterButtonExist } from "./shopUtils.js";
import { attachMultipleEventHandler } from "../shared/eventHandlers.js";

import {
  renderShopProductDataToDOM,
  createAndRenderButtonToDOM,
  showEmptyShopMessage,
  hideEmptyShopMessage,
} from "./shopUtils.js";

const gatherFilteredData = () => {
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

const setupAppliedFilteredDataToDOM = (buttonId) => {
  const jsonUrl = "/assets/json/shop_data.json";
  const cardContainer = document.getElementById("shop-cards");
  const appliedFilterButton = document.getElementById(buttonId);

  if (cardContainer) {
    try {
      appliedFilterButton.addEventListener("click", async () => {
        const res = await fetch(jsonUrl);
        
        if (!res.ok) {
          console.error(`HTTP Error Response Status: ${res.status}`);
        }
    
        const shopData = await res.json();
        const requestedFilters = gatherFilteredData();

        if (requestedFilters.categories.length > 0) {
          const filteredProducts = shopData
            .filter((product) => product.category.includes(requestedFilters.categories))
          
        }
        const filteredProducts = shopData
          .filter((product) => product.category.includes(requestedFilters.categories))
          .filter((product) => product.styles.includes(requestedFilters.styles))
          .filter((product) => product.colors.includes(requestedFilters.colors))
          .filter((product) => product.sizes.includes(requestedFilters.sizes))
          .filter((product) => product.prices.includes(requestedFilters.prizes));

        console.table(Object.values(filteredProducts));


        cardContainer.innerHTML = ""; 
        filteredProducts.forEach(renderShopProductDataToDOM);

      });
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    } finally {
      attachMultipleEventHandler(".like", "click", handleFavoriteToggle);
    }
  }
}

/**
 * Creates the new filter button to be appended to the filters-by.
 */
const setupNewFilterButton = (filterName, filterListID) => {
  const filtersList = document.getElementById(filterListID);
  const newFilter = createAndRenderButtonToDOM(filterName);

  filtersList.appendChild(newFilter);
  attachDestroyFilterListener(newFilter);
}

/**
 * Attach new destroy filter everytime new sets of filter are created.
 */
const attachDestroyFilterListener = (newButton) => {
  newButton.addEventListener("click", () => {
    destroyButton(newButton, ".filters");
  });
}

/**
 * Destroys a button that is encased by a ancestor node.
 */
const destroyButton = (button, parent) => {
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
const setupDestroyBtnHandler = (buttonId, parent) => {
  const button = document.getElementById(buttonId);

  button?.addEventListener("click", () => {
    destroyButton(button, parent);
  });
}

/**
 * Setup for initial loading of shop product data to the shop.
 */
const setupRenderShopProductData = async () => {
  const jsonUrl = "/assets/json/shop_data.json";
  const cardContainer = document.getElementById("shop-cards");

  if (cardContainer) {
    try {
      const res = await fetch(jsonUrl);

      if (!res.ok) {
        console.error(`HTTP Response Status Error: ${res.status}`);
      }

      const shopProductsData = await res.json();

      if (shopProductsData && shopProductsData.length > 0) {
        shopProductsData.forEach((product) => {
          renderShopProductDataToDOM(product);
        });
        hideEmptyShopMessage();
      } else {
        showEmptyShopMessage();
      }

    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    } finally {
      attachMultipleEventHandler(".like", "click", handleFavoriteToggle)
    }
  }
}

const setupShopEventListeners = () => {
  // console.log(`Running setup shop event listeners...`);
  
  setupDestroyBtnHandler("filter-btn", ".filters");
  setupAppliedFilteredDataToDOM("test-btn");
  setupRenderShopProductData();
};

export { setupShopEventListeners };
