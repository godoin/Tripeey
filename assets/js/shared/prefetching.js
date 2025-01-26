/**
 * preFetching.js
 */

import { attachMultipleEventHandlerBySelectorAll } from "./eventHandlers.js";

const updateNavbarActiveState = (targetUrl) => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link) {
      if (link.href === targetUrl) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  });
};

const updateNavbar = () => {
  const loginLink = document.querySelector('.login'); 
  const loginText = loginLink.querySelector('span'); 
  const user = JSON.parse(sessionStorage.getItem('user'));

  const loginProfile = document.querySelector('.login-profile');
  loginProfile.classList.remove("active");

  if (user) {
    loginProfile.classList.add("active");
    loginLink.href = '/profile'; 
    loginText.remove(); 
  } 
}

const updateProfile = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const profileForm = document.getElementById(`profileForm`); 

  if (profileForm && user) { 
    const username = profileForm.querySelector(`[name="username"]`);
    const firstName = profileForm.querySelector(`[name="first_name"]`);
    const lastName = profileForm.querySelector(`[name="last_name"]`);
    const email = profileForm.querySelector(`[name="email"]`);

    if (username && firstName && lastName && email) { 
      username.value = user.username;
      firstName.value = user.first_name;
      lastName.value = user.last_name;
      email.value = user.email;
    } 
  }
};

const updateMainStyles = (targetUrl, mainSelector) => {
  const main = document.querySelector(mainSelector);
  const html = document.querySelector("html");
  html.classList.remove("no-scroll");

  main.classList.remove(
    "404",
    "cart-container",
    "cart",
    "checkout",
    "contact",
    "faqs",
    "index",
    "login",
    "product",
    "profile",
    "shop"
  );

  if (targetUrl === "http://tripeey.pages.dev/") {
    main.classList.add("landing-container");
  } else if (targetUrl === "http://tripeey.pages.dev/index") {
    main.classList.add("landing-container");
  } else if (targetUrl === "http://tripeey.pages.dev/billing") {
    main.classList.add("cart-container");
  } else if (targetUrl === "http://tripeey.pages.dev/cart") {
    main.classList.add("cart-container");
  } else if (targetUrl === "http://tripeey.pages.dev/checkout") {
    main.classList.add("cart-container");
  } else if (targetUrl === "http://tripeey.pages.dev/login") {
    main.classList.add("login-container");
  } else if (targetUrl === "http://tripeey.pages.dev/product") {
    main.classList.add("product-container");
  } else if (targetUrl === "http://tripeey.pages.dev/shop") {
    main.classList.add("shop-container");
  } else {
    main.classList.add("");
  }
};

const scrollToTop = (position, style) => {
  window.scrollTo({
    top: position,
    behavior: style,
  });
};

const handlePreFetching = async (e, link, mainSelector) => {
  e.preventDefault();

  const targetUrl = link.href;
  const mainContainer = document.querySelector(mainSelector);

  try {
    const res =  await fetch(targetUrl);

    if(!res.ok) {
      console.error(`HTTP Response Status: ${res.status}`);
    }

    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
  
    const newHtml = doc.querySelector(mainSelector).innerHTML;
  
    mainContainer.innerHTML = newHtml;
    window.history.pushState({}, "", targetUrl);
  } catch (error) {
    console.error(`Errr fetching Target URL: ${error}.`);
  } finally {
    updateProfile();
    updateNavbar();
    updateNavbarActiveState(targetUrl);
    scrollToTop(0, "smooth");
  }
};

const setupPreFetching = () => {
  // console.log("Running prefetching...");

  updateProfile();
  updateNavbar();
  
  const navLinks = ".nav-item a";
  const eventType = "click";
  const mainSelector = "main";

  attachMultipleEventHandlerBySelectorAll(
    navLinks,
    eventType,
    handlePreFetching,
    mainSelector
  );
};

export { setupPreFetching };