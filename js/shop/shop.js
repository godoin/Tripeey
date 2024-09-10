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

import { fetchJSONData } from "../shared/apiUtils.js";
import { attachMultipleClickHandler } from "../shared/eventHandlers.js";
import { handleFavoriteToggle } from "../product/favorite.js";

import {
  filterDataByCategory,
  filterDataByColors,
  filterDataBySizes,
  filterDataByStyles,
  filterDataByPrices,
} from "./filters.js";

import {
  renderShopProductDataToDOM,
  showEmptyShopMessage,
  hideEmptyShopMessage,
} from "./shopUtils.js";

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

function setupAppliedFilteredDataToDOM(buttonId) {
  const jsonUrl = "/OnlineStore/assets/json/shop_data.json";
  const cardContainer = document.getElementById("shop-cards");
  const appliedFilterButton = document.getElementById(buttonId);

  if (cardContainer) {
    try {
      appliedFilterButton.addEventListener("click", async () => {
        const getShopData = await fetchJSONData(jsonUrl);
        const getRequestedFilters = gatherFilteredData();

        Object.keys(getRequestedFilters).forEach((filter) => {
          console.log(`Requested: ${filter} : ${getRequestedFilters[filter]}`);
        });

        const productsToDisplay = getShopData.filter((product) => {
          return (
            filterDataByCategory(product, getRequestedFilters.categories) &&
            filterDataByStyles(product, getRequestedFilters.styles) &&
            filterDataByColors(product, getRequestedFilters.colors) &&
            filterDataBySizes(product, getRequestedFilters.sizes)
            // filterDataByPrices(product, getRequestedFilters.prices)
          );
        });
        cardContainer.innerHTML = "";
        console.log(`Filtered Products: ${productsToDisplay}`);
        productsToDisplay.forEach(renderShopProductDataToDOM);

        console.log(`Reattached favorite click handler to product items...`);
        attachMultipleClickHandler(".like", handleFavoriteToggle);
      });
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  } else {
    console.error();
  }
}

/**
 * Creates the new filter button to be appended to the filters-by.
 */
function setupNewFilterButton(filterName, filterListID) {
  const filtersList = document.getElementById(filterListID);
  const newFilter = createAndRenderButtonToDOM(filterName);

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
 * Setup for initial loading of shop product data to the shop.
 */
async function setupRenderShopProductData() {
  const jsonUrl = "/OnlineStore/assets/json/shop_data.json";
  const cardContainer = document.getElementById("shop-cards");
  if (cardContainer) {
    try {
      const shopProductsData = await fetchJSONData(jsonUrl);

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
      console.log(`Attached favorite click handler to product items...`);
      attachMultipleClickHandler(".like", handleFavoriteToggle);
    }
  } else {
    console.error();
  }
}

setupDestroyBtnHandler("filter-btn", ".filters");
setupAppliedFilteredDataToDOM("test-btn");
setupRenderShopProductData();
