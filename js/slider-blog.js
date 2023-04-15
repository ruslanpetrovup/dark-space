const sliderItems = document.querySelector(".slider-items");
const sliderItemsContent = document.querySelector(
  ".blog-section-banner-slider-content-read-items"
);
const paginationButtons = document.querySelector(
  ".blog-section-banner-slider-images-after-pagination"
);

const paginationButtonsMobile = document.querySelector(
  ".blog-section-banner-controller-mobile-pagination"
);

const prevBtn = document.querySelector(
  ".blog-section-banner-slider-content-controller-prev"
);
const nextBtn = document.querySelector(
  ".blog-section-banner-slider-content-controller-next"
);

const prevBtnMobile = document.querySelector(
  ".blog-section-banner-controller-mobile-prev"
);
const nextBtnMobile = document.querySelector(
  ".blog-section-banner-controller-mobile-next"
);

let sliderItemWidth = document.querySelector(
  ".blog-section-banner-slider-images-item"
).clientWidth;

let sliderItemsContentWidth = document.querySelector(
  ".blog-section-banner-slider-content-read"
).clientWidth;

window.addEventListener("resize", () => {
  sliderItemWidth = document.querySelector(
    ".blog-section-banner-slider-images-item"
  ).clientWidth;

  sliderItemsContentWidth = document.querySelector(
    ".blog-section-banner-slider-content-read"
  ).clientWidth;

  sliderItems.style.transform = `translateX(-${
    currentIndex * sliderItemWidth
  }px)`;

  sliderItemsContent.style.transform = `translateX(-${
    currentIndex * sliderItemsContentWidth
  }px)`;
});

const dateCurrent = document.querySelector(
  ".blog-section-banner-slider-images-after-date-text"
);

const titleCurrent = document.querySelector(
  ".blog-section-banner-slider-content-read-title"
);

const descCurrent = document.querySelector(
  ".blog-section-banner-slider-content-read-desc"
);

let currentIndex = 0;

const dateList = ["March 4, 2023", "March 3, 2023", "March 2, 2023"];

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 2;
  }

  const paginationItems = document.querySelectorAll(
    ".blog-section-banner-slider-images-after-pagination-item"
  );
  for (item of paginationItems) {
    item.classList.remove("active");
  }
  paginationItems[currentIndex].classList.add("active");

  dateCurrent.textContent = dateList[currentIndex];

  sliderItems.style.transform = `translateX(-${
    currentIndex * sliderItemWidth
  }px)`;

  sliderItemsContent.style.transform = `translateX(-${
    currentIndex * sliderItemsContentWidth
  }px)`;
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > 2) {
    currentIndex = 0;
  }

  const paginationItems = document.querySelectorAll(
    ".blog-section-banner-slider-images-after-pagination-item"
  );

  for (item of paginationItems) {
    item.classList.remove("active");
  }

  paginationItems[currentIndex].classList.add("active");

  dateCurrent.textContent = dateList[currentIndex];

  sliderItems.style.transform = `translateX(-${
    currentIndex * sliderItemWidth
  }px)`;

  sliderItemsContent.style.transform = `translateX(-${
    currentIndex * sliderItemsContentWidth
  }px)`;
});

prevBtnMobile.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 2;
  }

  const paginationItems = document.querySelectorAll(
    ".blog-section-banner-controller-mobile-pagination-item"
  );
  for (item of paginationItems) {
    item.classList.remove("active");
  }
  paginationItems[currentIndex].classList.add("active");

  dateCurrent.textContent = dateList[currentIndex];

  sliderItems.style.transform = `translateX(-${
    currentIndex * sliderItemWidth
  }px)`;

  sliderItemsContent.style.transform = `translateX(-${
    currentIndex * sliderItemsContentWidth
  }px)`;
});

nextBtnMobile.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > 2) {
    currentIndex = 0;
  }

  const paginationItems = document.querySelectorAll(
    ".blog-section-banner-controller-mobile-pagination-item"
  );

  for (item of paginationItems) {
    item.classList.remove("active");
  }

  paginationItems[currentIndex].classList.add("active");

  dateCurrent.textContent = dateList[currentIndex];

  sliderItems.style.transform = `translateX(-${
    currentIndex * sliderItemWidth
  }px)`;

  sliderItemsContent.style.transform = `translateX(-${
    currentIndex * sliderItemsContentWidth
  }px)`;
});

paginationButtons.addEventListener("click", ({ target }) => {
  if (target.nodeName !== "BUTTON") return;

  const currentPosition = Number(target.dataset.slide) - 1;

  const paginationItems = document.querySelectorAll(
    ".blog-section-banner-slider-images-after-pagination-item"
  );

  for (item of paginationItems) {
    item.classList.remove("active");
  }

  target.classList.add("active");
  sliderItems.style.transform = `translateX(-${
    currentPosition * sliderItemWidth
  }px)`;

  sliderItemsContent.style.transform = `translateX(-${
    currentPosition * sliderItemsContentWidth
  }px)`;
});

paginationButtonsMobile.addEventListener("click", ({ target }) => {
  if (target.nodeName !== "LI") return;

  const currentPosition = Number(target.dataset.slide) - 1;

  const paginationItems = document.querySelectorAll(
    ".blog-section-banner-controller-mobile-pagination-item"
  );

  for (item of paginationItems) {
    item.classList.remove("active");
  }

  target.classList.add("active");
  sliderItems.style.transform = `translateX(-${
    currentPosition * sliderItemWidth
  }px)`;

  sliderItemsContent.style.transform = `translateX(-${
    currentPosition * sliderItemsContentWidth
  }px)`;
});
