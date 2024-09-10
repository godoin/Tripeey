import { setupAuthEventListeners } from "./auth/auth.js";
import { setupProdQtyEventListeners } from "./product/productQuantityManager.js";
import { setupToggleOptionsEventListeners } from "./product/radioCheckboxToggle.js";
import { attachClickHandlerById } from "./shared/eventHandlers.js";
import { handleMenuToggle } from "./shared/menuToggle.js";
import { setupTabToggleEventListeners } from "./shared/tabToggle.js";

document.addEventListener("DOMContentLoaded", function () {
  setupAuthEventListeners();
  setupSharedEventListeners();
  setupToggleOptionsEventListeners();
  setupTabToggleEventListeners();
  setupProdQtyEventListeners();

  window.addEventListener("load", function () {
    setTimeout(hideLoader, 1000);
  });
});

function hideLoader() {
  const loading = document.getElementById("loader");
  const content = document.getElementById("content");
  if (loading && content) {
    loading.style.display = "none";
    content.style.display = "block";
  } else {
    console.error("Error: 'loader' or 'content' element not found.");
  }
}

function setupSharedEventListeners() {
  console.log(`Shared event listeners running.`);
  attachClickHandlerById("menu-btn", handleMenuToggle);
}
