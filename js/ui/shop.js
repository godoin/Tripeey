/**
 * Shop Filter Script
 * This script is used to filter the product items that is shown in the shop.
 * It depends on the selectable filters founded on the left hand side of shop.
 *
 * Features:
 * - Allows multi-selection (filters), single category selection, and sort selection.
 * - Allows removing of the applied filters on the shop.
 *
 * TODO: Create the FETCH API for handling the request to server.
 * TODO: Proper error handling such as missing DOM elements when querying.
 * TODO: Switch the action of applying filters from button to any click selection from filters.
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
  const selectedOption = select.value;

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

  button.addEventListener("click", () => {
    destroyButton(button, parent);
  });
}

setupDestroyBtnHandler("filter-btn", ".filters");
displayFilteredData("test-btn");
