/**
 * Tab Toggle Script
 * This script handles the toggle for tabs with their associated panels.
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 */

import { attachMultipleEventHandlerWithParent } from "./eventHandlers.js";

/**
 * Update the new state to tab and the associated panel.
 */
const updateSelectedTabStateToDOM = (tab, newPanelState, newTabState) => {
  tab.setAttribute("aria-selected", newTabState);

  const panelId = tab.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);

  panel.setAttribute("aria-hidden", newPanelState);
}

/**
 * Event handler for selected tab.
 */
const selectTabWithPanel = (tab, tabList) => {
  const allTabs = tabList.querySelectorAll('[role="tab"]');

  allTabs.forEach((otherTab) => {
    updateSelectedTabStateToDOM(otherTab, "true", "false");
  });

  updateSelectedTabStateToDOM(tab, "false", "true");
}

const selectSingleTab = (tab, tabList) => {
  const allTabs = tabList.querySelectorAll('[role="tab"]');

  allTabs.forEach((otherTab) => {
    otherTab.setAttribute("selected", "false");
    otherTab.setAttribute("aria-selected", "false");
  });

  tab.setAttribute("selected", "true");
  tab.setAttribute("aria-selected", "true");
}

/**
 * Setup to allow tab selection.
 */
const setupTabSelection = (tabListId, tabHandler) => {
  const tabList = document.getElementById(tabListId);
  const tabs = tabList?.querySelectorAll('[role="tab"]');

  tabs?.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabHandler(tab, tabList);
    });
  });
}

const setupTabToggleEventListeners = () => {
  // console.log(`Tab toggle event listeners are running...`);

  attachMultipleEventHandlerWithParent(
    "delivery-tabs",
    "click",
    '[role="tab"]',
    selectSingleTab
  );
  attachMultipleEventHandlerWithParent(
    "product-tabs",
    "click",
    '[role="tab"]',
    selectTabWithPanel
  );
}

export { setupTabToggleEventListeners };
