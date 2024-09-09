/**
 * Filters Module
 * This module handles the filtering of products based on user requested applied filter.
 */

/**
 * Filters product items according to selected category.
 */
export function filterDataByCategory(product, selectedCategories) {
  if (
    selectedCategories.length > 0 &&
    !selectedCategories.includes("All") &&
    !selectedCategories.includes(product.category)
  ) {
    return false;
  }
  return true;
}

/**
 * Filters product items according to selected styles.
 */
export function filterDataByStyles(product, selectedStyles) {
  if (selectedStyles.length > 0 && !selectedStyles.includes(product.style)) {
    return false;
  }
  return true;
}

/**
 * Filters product items according to selected colors.
 */
export function filterDataByColors(product, selectedColors) {
  if (selectedColors.length > 0) {
    const hasMatchingColors = product.colors.some((color) =>
      selectedColors.includes(color)
    );

    if (!hasMatchingColors) {
      return false;
    }
  }
  return true;
}

/**
 * Filters product items according to selected sizes.
 */
export function filterDataBySizes(product, selectedSizes) {
  debugger;
  if (selectedSizes.length > 0) {
    const hasMatchingSize = product.sizes.some((size) =>
      selectedSizes.includes(size)
    );
    console.log(`Matching Size: ${hasMatchingSize}`);

    if (!hasMatchingSize) {
      return false;
    }
  }
  return true;
}

/**
 * Filters product items according to selected price ranges.
 */
export function filterDataByPrices(product, selectedPrices) {
  const productPrice = parseFloat(product.price);
  const isInPriceRange = selectedPrices.some((priceRange) => {
    if (priceRange === "below-500") {
      return productPrice < 500;
    } else if (priceRange === "500-1000") {
      return productPrice >= 500 && productPrice <= 1000;
    } else if (priceRange === "1000-2000") {
      return productPrice >= 1000 && productPrice <= 2000;
    } else if (priceRange === "2000-plus") {
      return productPrice >= 2000;
    } else {
      return false;
    }
  });
  if (!isInPriceRange) {
    return false;
  }
  return true;
}
