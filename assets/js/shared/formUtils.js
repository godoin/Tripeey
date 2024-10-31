export const NOT_EMPTY = "NOT_EMPTY";
export const MAX_LENGTH = "MAX_LENGTH";
export const VALID_EMAIL = "VALID_EMAIL";
export const NOT_EXIST_JSON = "NOT_EXIST_JSON";
export const NOT_EXIST = "NOT_EXIST";

/**
 * Generic validation flags for evaluating user inputs.
 */
export function validate(value, flag, validatorValue) {
  if (value === undefined || value === null) {
    console.error(`Error: the values are undefined or null.`);
    return;
  }

  if (flag === NOT_EMPTY) {
    return value.trim().length > 0;
  }
  if (flag === MAX_LENGTH) {
    return value.trim().length >= validatorValue;
  }
  if (flag === VALID_EMAIL) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  }
}
