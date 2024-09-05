function gatherFilteredData() {
  const categories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((checkbox) => checkbox.value);

  const styles = Array.from(
    document.querySelectorAll('input[name="style"]:checked')
  ).map((checkbox) => checkbox.value);

  const colors = Array.from(
    document.querySelectorAll('input[name="color"]:checked')
  ).map((checkbox) => checkbox.value);

  const sizes = Array.from(
    document.querySelectorAll('input[name="size"]:checked')
  ).map((checkbox) => checkbox.value);

  const prices = Array.from(
    document.querySelectorAll('input[name="price"]:checked')
  ).map((checkbox) => checkbox.value);

  return {
    categories,
    styles,
    colors,
    sizes,
    prices,
  };
}

function displayFilteredData(buttonID) {
  const button = document.getElementById(buttonID);

  button?.addEventListener("click", () => {
    let data = gatherFilteredData();
    for (let key in data) {
      console.log(`${key}: ${data[key]}`);
    }
  });
}

displayFilteredData("test-btn");
