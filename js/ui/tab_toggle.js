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
function selectTab(tab, tabList) {
  const allTabs = tabList.querySelectorAll('[role="tab"]');

  allTabs.forEach((otherTab) => {
    updateSelectedTabToDOM(otherTab, "true", "false");
  });

  updateSelectedTabToDOM(tab, "false", "true");
}

function attachTabSelectHandler(tab) {
  const tabList = tab.closest('[role="tablist"]');

  tab.addEventListener("click", () => {
    selectTab(tab, tabList);
  });
}

function setupTabSelection(tabListId, clickHandler) {
  const tabList = document.getElementById(tabListId);

  const tabs = tabList?.querySelectorAll('[role="tab"]');
  tabs?.forEach(clickHandler);
}

setupTabSelection("product-tabs", attachTabSelectHandler);
