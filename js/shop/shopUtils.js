/**
 * Shop Utils
 * This module contains all common helper or utils for shop.js
 */

/**
 * Check if the filter button already exists.
 */
function doesFilterbuttonExist(name) {
  const filterList = document.getElementById("filter-list");
  const filterTextSpans = filterList.querySelectorAll(".filter-text");

  for (const span of filterTextSpans) {
    if (span.textContent === name) {
      return true;
    }
  }

  return false;
}
