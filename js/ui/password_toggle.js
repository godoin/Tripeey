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
function updatePasswordState(passwordIcon, passwordInput, newType, newSrc) {
  passwordIcon.src = newSrc;
  passwordInput.type = newType;
}

/**
 * Handle password reveal on toggle.
 */
function handlePasswordToggle(passwordIcon, passwordInput) {
  const newType = switchPasswordType(passwordInput);
  const newSrc = switchPasswordIcon(newType);

  updatePasswordState(passwordIcon, passwordInput, newType, newSrc);
}

/**
 * Setup add event listener to password eye button.
 */
function setupTogglePassword(passBtnId, passIconId, passInputId) {
  const passwordBtn = document.getElementById(passBtnId);
  const passwordIcon = document.getElementById(passIconId);
  const passwordInput = document.getElementById(passInputId);

  passwordBtn?.addEventListener("click", () => {
    handlePasswordToggle(passwordIcon, passwordInput);
  });
}

setupTogglePassword("password-btn", "password-icon", "password-input");
