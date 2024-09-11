/**
 * Event Handles Module
 * This modules centralizes all common event handling logic for the shop.
 */

/**
 * Attaches click event handler to the elements given a matching selector.
 */

export function attachClickHandler(selector, handlerFunction) {
  document.addEventListener("click", (event) => {
    if (event.target.matches(selector)) {
      handlerFunction(event);
    }
  });
}

export function attachClickHandlerWithParentById(
  selectorId,
  parentId,
  handlerFunction
) {
  const element = document.getElementById(selectorId);
  const parent = document.getElementById(parentId);

  if (!element || !parent) {
    console.error(`Error the element and parent do not exist...`);
    return null;
  }

  element.addEventListener("click", handlerFunction(element, parent));
}

/**
 * Attaches a click event handle to the element ID.
 */
export function attachClickHandlerById(elementId, handlerFunction) {
  const element = document.getElementById(elementId);

  element?.addEventListener("click", handlerFunction);
}

export function attachClickHandlerByClassName(elementClass, handlerFunction) {
  const element = document.getElementsByClassName(elementClass);

  element?.addEventListener("click", handlerFunction);
}

export function attachMultipleClickHandler(selector, handlerFunction) {
  const allSelectors = document.querySelectorAll(selector);

  allSelectors?.forEach((selector) => {
    selector.addEventListener("click", () => {
      handlerFunction(selector);
    });
  });
}

export function attachMultipleClickHandlerWithParent(
  selector,
  role,
  handlerFunction
) {
  const parent = document.getElementById(selector);
  const elements = parent?.querySelectorAll(role);

  elements?.forEach((element) => {
    element.addEventListener("click", () => {
      handlerFunction(element, parent);
    });
  });
}

/**
 * Attaches change event handler to the elements given a matching selector.
 */
export function attachChangeHandler(selector, handlerFunction) {
  document.addEventListener("change", (event) => {
    if (event.target.matches(selector)) {
      handlerFunction(event);
    }
  });
}

/**
 * Attaches a submit event handler (usually a form) given a id.
 */
export function attachSubmitHandler(formId, handlerFunction) {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", handlerFunction);
}
