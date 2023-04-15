const sliderItems = document.querySelector(".slider-items");
const prevBtn = document.querySelector(
  ".blog-section-banner-slider-content-controller-prev"
);
const nextBtn = document.querySelector(
  ".blog-section-banner-slider-content-controller-next"
);
const sliderItemWidth = document.querySelector(
  ".blog-section-banner-slider-images-item"
).clientWidth;

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
const titleList = [
  "articles tittle for one stroke 1",
  "articles tittle for one stroke 2 ",
  "articles tittle for one stroke 3",
];
const descList = [
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit...",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit...",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit...",
];

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
  titleCurrent.textContent = titleList[currentIndex];
  descCurrent.textContent = descList[currentIndex];

  sliderItems.style.transform = `translateX(-${
    currentIndex * sliderItemWidth
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
  titleCurrent.textContent = titleList[currentIndex];
  descCurrent.textContent = descList[currentIndex];

  sliderItems.style.transform = `translateX(-${
    currentIndex * sliderItemWidth
  }px)`;
});
