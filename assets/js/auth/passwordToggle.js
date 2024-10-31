import {
  attachClickHandler,
  attachClickHandlerById,
} from "../shared/eventHandlers.js";

/**
 * Switches password type on toggle.
 */
const switchPasswordType = (currentType) => {
  return currentType.type === "password" ? "text" : "password";
}

/**
 * Switches password icon src based on type on toggle.
 */
const switchPasswordIcon = (currentType) => {
  return currentType === "password"
    ? "assets/images/icons/eye-off.svg"
    : "assets/images/icons/eye.svg";
}

/**
 * Update password states.
 */
const updatePasswordStateToDOM = (
  passwordIcon,
  passwordInput,
  newType,
  newSrc
) => {
  passwordIcon.src = newSrc;
  passwordInput.type = newType;
}

/**
 * Handle password reveal on toggle.
 */
const handlePasswordToggle = () => {
  const passwordIcon = document.getElementById("password-icon");
  const passwordInput = document.getElementById("password-input");

  if (!passwordIcon || !passwordInput) {
    console.error("Error password icon or input not found.");
    return;
  }

  const newType = switchPasswordType(passwordInput);
  const newSrc = switchPasswordIcon(newType);

  updatePasswordStateToDOM(passwordIcon, passwordInput, newType, newSrc);
}

export { handlePasswordToggle };