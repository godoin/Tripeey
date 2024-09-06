/**
 * Navigation Menu Toggle.
 * This script handles the visibility of the navigation items found on navbar.
 * It is handled by the menu button that is found at mobile-tablet screens.
 *
 * Features:
 *
 * TODO: Proper error handling such as missing DOM elements when querying.
 */

/**
 * Get new menu icon based on src from menu to x-close.
 */
function switchMenuIconSrc(currentSrc) {
  return currentSrc.includes("menu.svg")
    ? "assets/images/icons/x-close.svg"
    : "assets/images/icons/menu.svg";
}

/**
 * Toggles visibility of navigations and the menu button icon.
 */
function toggleMenu(menuIcon, navItems) {
  const newSrc = switchMenuIconSrc(menuIcon.src);
  menuIcon.src = newSrc;

  return {
    src: newSrc,
    icon: menuIcon.src,
    navigation: navItems,
  };
}

/**
 * Updates the menu state to DOM show navigation items on mobile.
 */
function updateMenuStateToDom(state) {
  state.navigation.classList.toggle("active");
  state.icon = state.src;
}

/**
 * Method for handling for toggling menu and updating dom state.
 */
function attachMenuToggleHandler(menuIcon, navItems) {
  const updateState = toggleMenu(menuIcon, navItems);
  updateMenuStateToDom(updateState);
}

/**
 * Setup add event listener to menu button for mobile navigation.
 */
function setupToggleMenu(menuBtnId, menuIconId, navItemsId, toggleHandler) {
  const menuBtn = document.getElementById(menuBtnId);
  const menuIcon = document.getElementById(menuIconId);
  const navItems = document.getElementById(navItemsId);

  menuBtn?.addEventListener("click", () => toggleHandler(menuIcon, navItems));
}

setupToggleMenu("menu-btn", "menu-icon", "nav-items", attachMenuToggleHandler);
