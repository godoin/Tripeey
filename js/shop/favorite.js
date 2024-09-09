/**
 * Switches between fontawesome's solid and regular icons.
 */
function switchFavoriteIcon(icon) {
  return icon.classList.contains("fa-regular") ? "fa-solid" : "fa-regular";
}

/**
 * Handles the event change when clicking favorite button.
 */
function clickFavorite(button) {
  const icon = button.querySelector(".fa-heart");
  const newIcon = switchFavoriteIcon(icon);
  icon.classList.remove("fa-regular", "fa-solid");
  icon.classList.add(newIcon);
}

/**
 * Setup the click listener to all product items with a favorite button.
 */
function setupClickFavorite(buttonClass) {
  const buttons = document.querySelectorAll(buttonClass);

  buttons.forEach((button) =>
    button?.addEventListener("click", () => {
      clickFavorite(button);
    })
  );
}

setupClickFavorite(".like");
