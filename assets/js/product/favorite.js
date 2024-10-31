/**
 * Switches between fontawesome's solid and regular icons.
 */
function switchFavoriteIcon(icon) {
  return icon.classList.contains("fa-regular") ? "fa-solid" : "fa-regular";
}

/**
 * Handles the event change when clicking favorite button.
 */
export function handleFavoriteToggle(button) {
  const icon = button.querySelector(".fa-heart");
  const newIcon = switchFavoriteIcon(icon);

  icon.classList.remove("fa-regular", "fa-solid");
  icon.classList.add(newIcon);
}

/**
 * Setup the click listener to all product items with a favorite button.
 */
export function attachClickFavorite(buttonId) {
  const button = document.getElementById(buttonId);

  button?.addEventListener("click", () => {
    clickFavorite(button);
  });
}

// export function setupFavoriteButtonClicks() {
//   const cardsContainer = document.getElementById("shop-cards");

//   if (!cardsContainer) {
//     console.error("Error: the shop cards container is not found.");
//   }

//   cardsContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("like")) {
//       const productId = event.target.id;
//       console.log(`Product Id: ${productId}`);
//       handleFavoriteToggle(productId);
//     }
//   });
// }
