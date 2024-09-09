/**
 * DOM Utils Module
 * This module contains (error, success, default) state updates to the DOM.
 * It is usually message boxes, tooltip, toast or sonner pop ups.
 */

/**
 * Default state of input fields, tooltip (usually not shown).
 */
export function handleStateToTooltipDefaultToDOM(elementId) {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer.querySelector(".tooltip");

  tooltip?.classList.remove("active");
  inputContainer.classList.remove("success", "error");
}

/**
 * Error state of input field, shows a tooltip indicating error.
 */
export function handleStateToTooltipErrorToDOM(elementId, message) {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer.querySelector(".tooltip");
  const spanMessage = inputContainer.querySelector(".tooltip-message");
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
export function handleStateToTooltipSuccessToDOM(elementId) {
  const inputContainer = document.getElementById(elementId);
  const tooltip = inputContainer.querySelector(".tooltip");
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
export function handleStateErrorToDOM(displayId, message) {
  const displayElement = document.getElementById(displayId);
  const textElement = displayElement.querySelector(".text");

  textElement.textContent = message;
  displayElement.classList.add("active");

  setTimeout(() => {
    displayElement.classList.remove("active");
  }, 10000);
}
