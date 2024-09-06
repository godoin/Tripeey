/**
 * Checkbox and radio toggling.
 * Script for multiple selection of an element such as colors or sizes using checkboxes or radios.
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 * TODO: Handle the rest of the other click events to update the aria.
 */

/**
 * Checks if the selected item is active.
 */
function hasActiveClass(element) {
  return element.classList.contains("active");
}

/**
 * Toggles the value 'active' state of the selected element based on its asociated checkbox.
 */
function toggledCheckboxOption(option) {
  const checkbox = option.querySelector('input[type="checkbox"]');
  const currentCheckboxState = hasActiveClass(checkbox);
  const newState = !currentCheckboxState;

  updateCheckboxOptionStateToDOM(option, newState, checkbox);
}

/**
 * Update the selected checkbox to DOM.
 */
function updateCheckboxOptionStateToDOM(option, newState, checkbox) {
  option.classList.toggle("active");
  checkbox.setAttribute("checked", newState);
  checkbox.setAttribute("aria-checked", newState);
}

/**
 * Update the new state selected radio button to DOM.
 */
function updateRadioOptionStateToDOM(option, radio, newState) {
  option.classList.toggle("active", newState === "true");
  radio.checked = newState === "true";
  radio.setAttribute("aria-checked", newState);
}

/**
 * Handles the click event of a radio button.
 */
function toggledRadioOption(option) {
  const radio = option.querySelector('input[type="radio"]');
  const radioOptions = document.querySelectorAll(".category-option");

  radioOptions.forEach((otherOption) => {
    let otherRadio = otherOption.querySelector('[type="radio"]');
    updateRadioOptionStateToDOM(otherOption, otherRadio, "false");
  });

  updateRadioOptionStateToDOM(option, radio, "true");
}

function attachOptionToggleHandler(option, toggleOption) {
  option.addEventListener("click", () => {
    toggleOption(option);
  });
}

/**
 * Set up add event listener for multiple toggling.
 */
function setupToggleOptions(optionsSelector, toggledOption) {
  const options = document.querySelectorAll(optionsSelector);

  options?.forEach((option) =>
    attachOptionToggleHandler(option, toggledOption)
  );
}

// Events fired.
setupToggleOptions(".category-option", toggledRadioOption);
setupToggleOptions(".color-option", toggledCheckboxOption);
setupToggleOptions(".size-option", toggledCheckboxOption);
