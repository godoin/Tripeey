/**
 * Switches password type on toggle.
 */
function switchPasswordType(currentType) {
  return currentType.type === "password" ? "text" : "password";
}

/**
 * Switches password icon src based on type on toggle.
 */
function switchPasswordIcon(currentType) {
  return currentType === "password"
    ? "assets/images/icons/eye-off.svg"
    : "assets/images/icons/eye.svg";
}

/**
 * Update password states.
 */
function updatePasswordState(passwordIcon, passwordField, newType, newSrc) {
  passwordIcon.src = newSrc;
  passwordField.type = newType;
}

/**
 * Handle password reveal on toggle.
 */
function handlePasswordToggle(passwordIcon, passwordField) {
  const newType = switchPasswordType(passwordField);
  const newSrc = switchPasswordIcon(newType);

  updatePasswordState(passwordIcon, passwordField, newType, newSrc);
}

/**
 * Setup add event listener to password eye button.
 */
function setupTogglePassword(passBtnId, passIconId, passInputId) {
  const passwordBtn = document.getElementById(passBtnId);
  const passwordIcon = document.getElementById(passIconId);
  const passwordField = document.getElementById(passInputId);

  passwordBtn?.addEventListener("click", () => {
    handlePasswordToggle(passwordIcon, passwordField);
  });
}

setupTogglePassword("password-btn", "password-icon", "password-input");
