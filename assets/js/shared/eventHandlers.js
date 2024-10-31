/**
 * Event Handlers
 */


const attachEventHandlerById = (
  elementId,
  eventType,
  handlerFunction,
  ...args
) => {
  const element = document.getElementById(elementId);
  element?.addEventListener(eventType, (event) => {
    handlerFunction(event, ...args);
  });
};

const attachEventHandlerWithParentById = (
  selectorId,
  eventType,
  parentId,
  handlerFunction
) => {
  const element = document.getElementById(selectorId);
  const parent = document.getElementById(parentId);

  element?.addEventListener(eventType, handlerFunction(element, parent));
}

const attachMultipleEventHandlerBySelectorAll = (
  elementId,
  eventType,
  handlerFunction,
  ...args
) => {
  const allElements = document.querySelectorAll(elementId);
  allElements?.forEach((element) => {
    element?.addEventListener(eventType, (e) => {
      handlerFunction(e, element, ...args);
    });
  });
};

const attachMultipleEventHandler = (selector, eventType, handlerFunction) => {
  const allSelectors = document.querySelectorAll(selector);

  allSelectors?.forEach((selector) => {
    selector.addEventListener(eventType, () => {
      handlerFunction(selector);
    });
  });
};

const attachMultipleEventHandlerWithParent = (
  selector,
  eventType,
  role,
  handlerFunction
) => {
  const parent = document.getElementById(selector);
  const elements = parent?.querySelectorAll(role);

  elements?.forEach((element) => {
    element.addEventListener(eventType, () => {
      handlerFunction(element, parent);
    });
  });
};

/**
 * Attaches a submit event handler (usually a form) given a id.
 */
const attachSubmitHandler = (formId, handlerFunction) => {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", handlerFunction);
};

export {
  attachEventHandlerById,
  attachEventHandlerWithParentById,
  attachMultipleEventHandler,
  attachMultipleEventHandlerWithParent,
  attachMultipleEventHandlerBySelectorAll,
  attachSubmitHandler,
};