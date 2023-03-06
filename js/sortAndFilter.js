import { getRandomValue } from "./getRandomValue.js";
import { getImages } from "./image-render.js";

const filterForm = document.querySelector(".img-filters__form");
const pictures = document.querySelector(".pictures");

export function sortAndFilter(dataArr) {
  debounce(switchTab(dataArr), 500, false);
}

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

function switchTab(dataArr) {
  filterForm.addEventListener("click", (evt) => {
    let currentFilter = evt.target.id.split("-")[1];

    switch (currentFilter) {
      case "default":
        removeImages();
        getImages(dataArr);
        clearClasses(evt.target);
        break;

      case "random":
        removeImages();
        getImages(sortRandom(dataArr));
        clearClasses(evt.target);
        break;

      case "discussed":
        removeImages();
        getImages(sortByPopularity(dataArr));
        clearClasses(evt.target);
        break;
    }
  });
}

function sortByPopularity(data) {
  const sortedArr = data.sort((a, b) => {
    return b.comments.length - a.comments.length;
  });

  return sortedArr;
}

function sortRandom(data) {
  const sortedArr = [];

  for (let i = 0; i < 10; i++) {
    sortedArr.push(data[getRandomValue(0, data.length - 1)]);
  }

  const filteredArr = Array.from(new Set(sortedArr));

  if (filteredArr.length == 10) {
    filteredArr;
  } else {
    while (filteredArr.length < 10) {
      filteredArr.push(data[getRandomValue(0, data.length - 1)]);
    }
  }

  return filteredArr;
}

function removeImages() {
  pictures.querySelectorAll(".picture").forEach((pic) => {
    pic.remove();
  });
}

function clearClasses(target) {
  document.querySelectorAll(".img-filters__button").forEach((btn) => {
    btn.classList.remove("img-filters__button--active");
  });

  target.classList.add("img-filters__button--active");
}
