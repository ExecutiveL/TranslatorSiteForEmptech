const lightModeCheckbox = document.getElementById("light-mode-btn");

lightModeCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

