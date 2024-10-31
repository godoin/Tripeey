/**
 * Checkbox and radio toggling.
 * Script for multiple selection of an element such as colors or sizes using checkboxes or radios.
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 * TODO: Handle the rest of the other click events to update the aria.
 */

import { attachMultipleEventHandler } from "../shared/eventHandlers.js";

/**
 * Checks if the selected item is active.
 */
const hasActiveClass = (element) => {
  return element.classList.contains("active");
}

/**
 * Update the selected checkbox to DOM.
 */
const updateCheckboxOptionStateToDOM = (option, newState, checkbox) => {
  option.classList.toggle("active");
  checkbox.setAttribute("checked", newState);
  checkbox.setAttribute("aria-checked", newState);
}

/**
 * Update the new state selected radio button to DOM.
 */
const updateRadioOptionStateToDOM = (option, radio, newState) => {
  option.classList.toggle("active", newState === "true");
  radio.checked = newState === "true";
  radio.setAttribute("aria-checked", newState);
}

/**
 * Handles the click event of a radio button.
 */
const toggledRadioOption = (option) => {
  const radio = option.querySelector('input[type="radio"]');
  const radioOptions = document.querySelectorAll(".category-option");

  radioOptions.forEach((otherOption) => {
    let otherRadio = otherOption.querySelector('[type="radio"]');
    updateRadioOptionStateToDOM(otherOption, otherRadio, "false");
  });

  updateRadioOptionStateToDOM(option, radio, "true");
}

/**
 * Toggles the value 'active' state of the selected element based on its asociated checkbox.
 */
const toggledCheckboxOption = (option) => {
  const checkbox = option.querySelector('input[type="checkbox"]');
  const currentCheckboxState = hasActiveClass(checkbox);
  const newState = !currentCheckboxState;

  updateCheckboxOptionStateToDOM(option, newState, checkbox);
}

const setupToggleOptionsEventListeners = () => {
  // console.log(`Toggle options event listeners are running...`);

  attachMultipleEventHandler(".category-option", "click", toggledRadioOption);
  attachMultipleEventHandler(".color-option", "click", toggledCheckboxOption);
  attachMultipleEventHandler(".size-option", "click", toggledCheckboxOption);
}

export { setupToggleOptionsEventListeners };