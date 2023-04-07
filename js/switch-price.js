const switchButton = document.querySelector(".pricing-head-billing-switch");

switchButton.addEventListener("click", () => {
  if (switchButton.style.justifyContent === "flex-end") {
    switchButton.style.justifyContent = "flex-start";
    switchButton.style.backgroundColor = "#b2b5bc";
  } else {
    switchButton.style.justifyContent = "flex-end";
    switchButton.style.backgroundColor = "#00d254";
  }
});
