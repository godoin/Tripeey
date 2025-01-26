import { setupAuthEventListeners } from "./auth/auth.js";
import { setupProductEventListeners } from "./product/product.js";
import { setupProdQtyEventListeners } from "./product/productQuantityManager.js";
import { setupToggleOptionsEventListeners } from "./product/radioCheckboxToggle.js";
import { setupDOMEventListeners } from "./shared/domUtils.js";
import { setupStepperEventListeners } from "./stepper/stepper.js";
import { setupMenuToggleEventListeners } from "./shared/menuToggle.js";
import { setupTabToggleEventListeners } from "./shared/tabToggle.js";
import { setupLoading } from "./shared/loading.js";
import { setupShopEventListeners } from "./shop/shop.js";
import { setupIntroduceProject } from "./shared/introProject.js";

document.addEventListener("DOMContentLoaded", function () {
  setupAuthEventListeners();
  setupToggleOptionsEventListeners();
  setupStepperEventListeners();
  setupTabToggleEventListeners();
  setupProdQtyEventListeners();
  setupMenuToggleEventListeners();
  setupProductEventListeners();
  setupDOMEventListeners();
  setupShopEventListeners();

  if(!sessionStorage.getItem('introProjectShown')) {
    setupIntroduceProject();

    sessionStorage.setItem('introProjectShown', true);
  }

  window.addEventListener("load", function () {
    setupLoading();
  });
});
