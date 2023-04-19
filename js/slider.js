const slideElements = document.querySelectorAll(".slide1");
const slideContainer = document.querySelector(".slider-block");

const handleGenerateMargin = (index = -1, item) => {
  const elementWidth = item?.offsetWidth || 0;
  const windowWidth = window.innerWidth;
  const centerLeft = (windowWidth - elementWidth) / 3.5;


  switch (index) {
    case -1:
      slideContainer.style.transform = "translateX(0)";
      slideContainer.style.width = "auto";
      break;
      case 3:
      case 4:
        slideContainer.style.transform = `translateX(-${centerLeft}px)`;
        slideContainer.style.width = "120%";
  }
};

slideElements.forEach((slideElement, index) => {
  slideElement.addEventListener("click", ({ target }) => {
    if (target.nodeName === "A") return;

    if (slideElement.classList.contains("active")) {
      handleGenerateMargin(-1);
      return slideElement.classList.remove("active");
    }

    slideElements.forEach((item) => {
      item.classList.remove("active");
      handleGenerateMargin(-1);
    });

    handleGenerateMargin(index, slideElement);
    slideElement.classList.toggle("active");
  });
});

// const slide1 = document.getElementById("slide1");
// const slide2 = document.getElementById("slide2");
// const slide3 = document.getElementById("slide3");
// const slide4 = document.getElementById("slide4");
// const slide5 = document.getElementById("slide5");

// const tempory = [slide1, slide2, slide3, slide4, slide5];

// slide1.addEventListener("click", ({ target }) => {
//   if (target.nodeName === "A") return;
//   if (slide1.classList.contains("active")) {
//     return slide1.classList.remove("active");
//   }
//   tempory.forEach((item) => {
//     item.classList.remove("active");
//   });
//   slide1.classList.toggle("active");
// });
// slide2.addEventListener("click", ({ target }) => {
//   if (target.nodeName === "A") return;
//   if (slide2.classList.contains("active")) {
//     return slide2.classList.remove("active");
//   }
//   tempory.forEach((item) => {
//     item.classList.remove("active");
//   });
//   slide2.classList.toggle("active");
// });
// slide3.addEventListener("click", ({ target }) => {
//   if (target.nodeName === "A") return;
//   if (slide3.classList.contains("active")) {
//     return slide3.classList.remove("active");
//   }
//   tempory.forEach((item) => {
//     item.classList.remove("active");
//   });
//   slide3.classList.toggle("active");
// });
// slide4.addEventListener("click", ({ target }) => {
//   if (target.nodeName === "A") return;
//   if (slide4.classList.contains("active")) {
//     return slide4.classList.remove("active");
//   }
//   tempory.forEach((item) => {
//     item.classList.remove("active");
//   });
//   slide4.classList.toggle("active");
// });
// slide5.addEventListener("click", ({ target }) => {
//   if (target.nodeName === "A") return;
//   if (slide5.classList.contains("active")) {
//     return slide5.classList.remove("active");
//   }
//   tempory.forEach((item) => {
//     item.classList.remove("active");
//   });
//   slide5.classList.toggle("active");
// });

// const test33 = document.querySelector(".slack");
// test33.addEventListener("mouseover", () => {
//   console.dir(test33);
//   const oop = ``;
//   test33.innerHTML = ``;
// });
