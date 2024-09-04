/**
 * Checkbox toggling.
 * Script for multiple selection of an element such as colors or sizes using checkboxes.
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
function toggleItemOption(selectedElement) {
  const checkbox = selectedElement.querySelector('input[type="checkbox"]');
  const currentCheckboxState = hasActiveClass(checkbox);
  const newState = !currentCheckboxState;

  return {
    element: selectedElement,
    newCheckboxState: newState,
    checkbox: checkbox,
  };
}

/**
 * Update the selected item state to DOM elements.
 */
function updateOptionStateToDom(state) {
  state.element.classList.toggle("active");
  state.checkbox.checked = state.newCheckboxState;
}

/**
 * Handler logic for multiple selection.
 */
function attachOptionToggleHandler(option) {
  option.addEventListener("click", () => {
    const updatedState = toggleItemOption(option);
    updateOptionStateToDom(updatedState);
  });
}

/**
 * Set up add event listener for multiple toggling.
 */
function setupToggleOptions(optionsSelector, toggleHandler) {
  const options = document.querySelectorAll(optionsSelector);

  options?.forEach((option) => toggleHandler(option));
}

// Events fired.
setupToggleOptions(".color-option", attachOptionToggleHandler);
setupToggleOptions(".size-option", attachOptionToggleHandler);
