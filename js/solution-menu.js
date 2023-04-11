const menuSolution = document.querySelector(".solution-menu-list");
const menuSolutionMobile = document.querySelector(
  ".menu-mobile-modal-list-solution-modal"
);
const buttonSolutionMobile = document.querySelector(
  ".menu-mobile-modal-list-solution-open"
);

const changeImage = ({ target }) => {
  if (target.classList.value !== "solution-menu-link") return;

  if (target.innerText.toLowerCase() === "qr codes") {
    document.querySelector(".solution-image-img").src =
      "./assets/images/solution/code.png";
  } else if (target.innerText.toLowerCase() === "bio pages") {
    document.querySelector(".solution-image-img").src =
      "./assets/images/solution/bio.png";
  } else if (target.innerText.toLowerCase() === "file hosting") {
    document.querySelector(".solution-image-img").src =
      "./assets/images/solution/file.png";
  } else if (target.innerText.toLowerCase() === "devs api") {
    document.querySelector(".solution-image-img").src =
      "./assets/images/solution/api.png";
  } else if (target.innerText.toLowerCase() === "help center") {
    document.querySelector(".solution-image-img").src =
      "./assets/images/solution/help.png";
  }
};

menuSolution.addEventListener("mouseover", changeImage);

buttonSolutionMobile.addEventListener("click", () => {
  menuSolutionMobile.classList.toggle("active");
});
