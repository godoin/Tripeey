/**
 * favorite.js
 */

/**
 * Switches between fontawesome's solid and regular icons.
 */
const switchFavoriteIcon = (icon) => {
  return icon.classList.contains("fa-regular") ? "fa-solid" : "fa-regular";
}

/**
 * Handles the event change when clicking favorite button.
 */
const handleFavoriteToggle = (button) => {
  const icon = button.querySelector(".fa-heart");
  const newIcon = switchFavoriteIcon(icon);

  icon.classList.remove("fa-regular", "fa-solid");
  icon.classList.add(newIcon);
}

/**
 * Setup the click listener to all product items with a favorite button.
 */
const attachClickFavorite = (buttonId) => {
  const button = document.getElementById(buttonId);

  button?.addEventListener("click", () => {
    clickFavorite(button);
  });
}

const setupFavoriteButtonClicks = () => {
  const cardsContainer = document.getElementById("shop-cards");

  cardsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("like")) {
      const productId = e.target.id;
      console.log(`Product Id: ${productId}`);
      handleFavoriteToggle(productId);
    }
  });
}

export { 
  handleFavoriteToggle, 
  attachClickFavorite, 
  setupFavoriteButtonClicks 
};
