/**
 * Checkbox and radio toggling.
 * Script for multiple selection of an element such as colors or sizes using checkboxes or radios.
 *
 * TODO: Create a detailed guide how this script works.
 * TODO: Proper error handling such as missing DOM elements when querying.
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
 * Update the selected radio button to DOM.
 */
function updateRadioOptionStateToDOM(option, newState, radio) {
  option.classList.toggle("active", newState === "true");
  radio.checked = newState === "true";
  radio.setAttribute("aria-checked", newState);
}

function toggledRadioOption(option) {
  const radio = option.querySelector('input[type="radio"]');
  const radioOptions = document.querySelectorAll(".category-option");

  radioOptions.forEach((otherOption) => {
    let otherRadio = otherOption.querySelector('[type="radio"]');
    updateRadioOptionStateToDOM(otherOption, "false", otherRadio);
  });

  updateRadioOptionStateToDOM(option, "true", radio);
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
