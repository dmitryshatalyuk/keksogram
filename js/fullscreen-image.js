import { loadComments } from "./loadMoreComments.js";

const bigPictureBox = document.querySelector(".big-picture");
const pictures = document.querySelector(".pictures");
const closeBtn = document.querySelector(".big-picture__cancel");
const moreBtn = document.querySelector(".social__comments-loader");

export function showFullscreenImage(dataArray) {
  pictures.addEventListener("click", (event) => {
    const postID = event.target.dataset.id - 1;

    document.body.classList.add("modal-open");

    if (!isNaN(postID)) {
      bigPictureBox.classList.remove("hidden");

      bigPictureBox.querySelector(".big-picture__img img").src =
        dataArray[postID].url;
      bigPictureBox.querySelector(".social__caption").innerText =
        dataArray[postID].description;
      bigPictureBox.querySelector(".likes-count").innerText =
        dataArray[postID].likes;

      // тут
      loadComments(dataArray[postID].comments, bigPictureBox);
      // до сюда
    }
  });

  closeBtn.addEventListener("click", () => {
    bigPictureBox.classList.add("hidden");
    document.body.classList.remove("modal-open");
    bigPictureBox
      .querySelector(".social__comment-count")
      .classList.remove("hidden");
  });

  document.addEventListener("keyup", (evt) => {
    if (evt.key === "Escape") {
      bigPictureBox.classList.add("hidden");
      document.body.classList.remove("modal-open");
      bigPictureBox
        .querySelector(".social__comment-count")
        .classList.remove("hidden");
    }
  });
}
