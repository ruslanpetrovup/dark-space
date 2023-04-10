const buttonOpen = document.querySelector(".menu-mobile-button");
const buttonClose = document.querySelector(".menu-mobile-modal-close");
const modalMenu = document.querySelector(".menu-mobile-modal");

buttonOpen.addEventListener("click", () => {
  modalMenu.classList.toggle("active");
  document.body.setAttribute("style", "overflow: hidden");
});
buttonClose.addEventListener("click", () => {
  modalMenu.classList.toggle("active");
  document.body.setAttribute("style", "");
});
