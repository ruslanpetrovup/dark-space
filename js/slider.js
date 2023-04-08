// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   spaceBetween: 100,
//   // If we need pagination

//   // Navigation arrows

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");

const tempory = [slide1, slide2, slide3, slide4, slide5];

slide1.addEventListener("click", () => {
  if (slide1.classList.contains("active")) {
    return slide1.classList.remove("active");
  }
  tempory.forEach((item) => {
    item.classList.remove("active");
  });
  slide1.classList.toggle("active");
});
slide2.addEventListener("click", () => {
  if (slide2.classList.contains("active")) {
    return slide2.classList.remove("active");
  }
  tempory.forEach((item) => {
    item.classList.remove("active");
  });
  slide2.classList.toggle("active");
});
slide3.addEventListener("click", () => {
  if (slide3.classList.contains("active")) {
    return slide3.classList.remove("active");
  }
  tempory.forEach((item) => {
    item.classList.remove("active");
  });
  slide3.classList.toggle("active");
});
slide4.addEventListener("click", () => {
  if (slide4.classList.contains("active")) {
    return slide4.classList.remove("active");
  }
  tempory.forEach((item) => {
    item.classList.remove("active");
  });
  slide4.classList.toggle("active");
});
slide5.addEventListener("click", () => {
  if (slide5.classList.contains("active")) {
    return slide5.classList.remove("active");
  }
  tempory.forEach((item) => {
    item.classList.remove("active");
  });
  slide5.classList.toggle("active");
});
