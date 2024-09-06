/**
 * Tab Toggle Script
 * This script handles the toggle for tabs with their associated panels.
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 */

function print_debug(statement, ...values) {
  console.log(`DEBUG ~ ${statement}:`, values);
}

function console_error(flag, statement, ...values) {
  if (!flag) console.error(`DEBUG ~ ${statement} ${values}`);
}

/**
 * Checks if the tab is set to true otherwise false.
 */
function isTabSelected(tab) {
  return tab.getAttribute("aria-selected") === "true";
}

/**
 * Update the new state to tab and the associated panel.
 */
function updateSelectedTabStateToDOM(tab, newPanelState, newTabState) {
  tab.setAttribute("aria-selected", newTabState);

  const panelId = tab.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);

  panel.setAttribute("aria-hidden", newPanelState);
}

/**
 * Event handler for selected tab.
 */
function selectTabWithPanel(tab, tabList) {
  const allTabs = tabList.querySelectorAll('[role="tab"]');

  allTabs.forEach((otherTab) => {
    updateSelectedTabStateToDOM(otherTab, "true", "false");
  });

  updateSelectedTabStateToDOM(tab, "false", "true");
}

function selectSingleTab(tab, tabList) {
  const allTabs = tabList.querySelectorAll('[role="tab"]');

  allTabs.forEach((otherTab) => {
    otherTab.setAttribute("selected", "false");
    otherTab.setAttribute("aria-selected", "false");
  });

  tab.setAttribute("selected", "true");
  tab.setAttribute("aria-selected", "true");
}

/**
 * Attach tab selection to an event.
 */
function attachTabSelectHandler(tab, tabListRole, tabHandler) {
  const tabList = tab.closest(tabListRole);

  tab.addEventListener("click", () => {
    tabHandler(tab, tabList);
  });
}

/**
 * Setup to allow tab selection.
 */
function setupTabSelection(tabListId, tabListRole, clickHandler, tabHandler) {
  const tabList = document.getElementById(tabListId);
  const tabs = tabList?.querySelectorAll('[role="tab"]');

  tabs?.forEach((tab) => {
    clickHandler(tab, tabListRole, tabHandler);
  });
}

setupTabSelection(
  "delivery-tabs",
  '[role="tablist"]',
  attachTabSelectHandler,
  selectSingleTab
);

setupTabSelection(
  "product-tabs",
  '[role="tablist"]',
  attachTabSelectHandler,
  selectTabWithPanel
);
