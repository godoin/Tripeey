// Icon Buttons
const guestButton = document.querySelector('#guest-btn');
const loggedButton = document.querySelector('#logged-btn');
const sellerButton = document.querySelector('#seller-btn');
const shopButton = document.querySelector('#shop-btn');
const categoriesButton = document.querySelector('#cate-btn');
const menuButton = document.querySelector('#menu-btn');

// Exit Buttons
const orderExitButton = document.querySelector('#order-exit');
const guestExitButton = document.querySelector('#guest-exit-btn');
const loggedExitButton = document.querySelector('#logged-exit-btn');
const sellerExitButton = document.querySelector('#seller-exit-btn');

// Modals
const guestPopModal = document.querySelector('.guest');
const loggedPopModal = document.querySelector('.logged');
const sellerPopModal = document.querySelector('.seller');
const categoriesModal = document.querySelector('.categories');
const shopModal = document.querySelector('.shopping-cart');

// Toggles
const toggleColor = document.querySelector('toggle-color');
const categoriesToggle = document.querySelector('#cate-toggle');

// Exit Buttons
guestExitButton.addEventListener('click', () => {
  guestPopModal.classList.remove('active');
});

loggedExitButton.addEventListener('click', () => {
  loggedPopModal.classList.remove('active');
});

sellerExitButton.addEventListener('click', () => {
  sellerPopModal.classList.remove('active');
});

orderExitButton.addEventListener('click', () => {
  shopModal.classList.remove('active');
});

// Popup Modals
categoriesButton.addEventListener('click', () => {
  categoriesToggle.classList.toggle('fa-angle-up');
  categoriesToggle.classList.toggle('fa-angle-down');
  categoriesButton.classList.toggle('active');
  categoriesModal.classList.toggle('active');
  shopModal.classList.remove('active');
  guestPopModal.classList.remove('active');
  toggleColor.classList.toggle('active');
});

shopButton.addEventListener('click', () => {
  shopModal.classList.toggle('active');
  guestPopModal.classList.remove('active');
  loggedPopModal.classList.remove('active');
  categoriesModal.classList.remove('active');
});

guestButton.addEventListener('click', () => {
  guestPopModal.classList.toggle('active');
  categoriesModal.classList.remove('active');
  shopModal.classList.remove('active');
});

loggedButton.addEventListener('click', () => {
  loggedPopModal.classList.toggle('active');
  categoriesModal.classList.remove('active');
  shopModal.classList.remove('active');
});

sellerButton.addEventListener('click', () => {
  sellerPopModal.classList.toggle('active');
  categoriesModal.classList.remove('active');
  shopModal.classList.remove('active');
});
