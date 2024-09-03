document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    const loading = document.getElementById("loader");
    const content = document.getElementById("content");

    function hideLoader() {
      loading.style.display = "none";
      content.style.display = "block";
    }

    this.setTimeout(hideLoader, 1000);
  });
});
