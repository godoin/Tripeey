/**
 * DOM Utils Module
 * This module contains (error, success, default) state updates to the DOM.
 * It is usually message boxes, tooltip, toast or sonner pop ups.
 */

import { attachEventHandlerWithParentById } from "./eventHandlers.js";

/**
 * Default state of input fields, tooltip (usually not shown).
 */
const handleStateToTooltipDefaultToDOM = (elementId) => {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer?.querySelector(".tooltip");

  tooltip?.classList.remove("active");
  inputContainer.classList.remove("success", "error");
}

/**
 * Error state of input field, shows a tooltip indicating error.
 */
const handleStateToTooltipErrorToDOM = (elementId, message) => {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer?.querySelector(".tooltip");
  const spanMessage = inputContainer?.querySelector(".tooltip-message");
  const tooltipIcon = tooltip?.querySelector("i");

  if (!inputContainer) {
    console.error(`Error: Element with ID ${elementId} is not found.`);
  }

  if (tooltipIcon) {
    return;
  }

  if (elementId !== "payment_method_card") {
    const newTooltipIcon = document.createElement("i");
    newTooltipIcon.classList.add("fa-solid", "fa-circle-exclamation");
    tooltip.appendChild(newTooltipIcon);
  }

  inputContainer?.classList.remove("success", "error");
  inputContainer?.classList.add("error");
  spanMessage.textContent = message;
  tooltip?.classList.add("active");
}

/**
 * Success state of input fields, usually shows checked.
 */
const handleStateToTooltipSuccessToDOM = (elementId) => {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer?.querySelector(".tooltip");
  const tooltipIcon = tooltip?.querySelector("i");

  if (!inputContainer) {
    console.error(`Error: Element with ID ${elementId} is not found.`);
  }

  if (tooltipIcon) {
    return;
  }

  if (elementId !== "payment_method_card") {
    const newTooltipIcon = document.createElement("i");
    newTooltipIcon.classList.add("fa-solid", "fa-circle-check");
    tooltip.appendChild(newTooltipIcon);
  }

  inputContainer?.classList.remove("success", "error");
  inputContainer?.classList.add("success");
  tooltip?.classList.add("active");
}

/**
 * Update an single error element to the DOM.
 */
const handleStateErrorToDOM = (displayId, message) => {
  const displayElement = document.getElementById(displayId);
  const textElement = displayElement.querySelector(".text");

  textElement.textContent = message;
  displayElement.classList.add("active");

  setTimeout(() => {
    displayElement.classList.remove("active");
  }, 10000);
}

const handleToastSuccessToDOM = (displayId, message) => {
  const displayElement = document.getElementById(displayId);
  const textElement = displayElement.querySelector(".toast-message");

  textElement.textContent = message;
  displayElement.classList.add("active");

  setTimeout(() => {
    displayElement.classList.remove("active");
  }, 10000);
}

const handleCloseButton = (button, parent) => {
  const buttonId = button.id;
  const doesHaveButtonClose = parent.querySelector(`#${buttonId}`);

  if (!doesHaveButtonClose) {
    console.error(
      `The parent container does not have the targeted button with ID '${buttonId}'.`
    );
  }

  parent.classList.remove("active");
}

const setupDOMEventListeners = () => {
  // console.log(`DOM event listeners are running...`);

  attachEventHandlerWithParentById("close-btn", "click", "toast", handleCloseButton);
}

export {
  setupDOMEventListeners,
  handleStateToTooltipDefaultToDOM,
  handleStateToTooltipErrorToDOM,
  handleStateToTooltipSuccessToDOM,
  handleStateErrorToDOM,
  handleToastSuccessToDOM,
  handleCloseButton
};
