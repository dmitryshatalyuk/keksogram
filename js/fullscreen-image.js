const bigPictureBox = document.querySelector(".big-picture");
const pictures = document.querySelector(".pictures");
const closeBtn = document.querySelector(".big-picture__cancel");

export function showFullscreenImage(dataArray) {
  pictures.addEventListener("click", (event) => {
    const postID = event.target.dataset.id - 1;
    let commentsHTML = "";

    document.body.classList.add("modal-open");
    bigPictureBox
      .querySelector(".social__comment-count")
      .classList.add("hidden");

    if (!isNaN(postID)) {
      bigPictureBox.classList.remove("hidden");

      console.log(dataArray[postID]);
      bigPictureBox.querySelector(".big-picture__img img").src =
        dataArray[postID].url;
      bigPictureBox.querySelector(".social__caption").innerText =
        dataArray[postID].description;
      bigPictureBox.querySelector(".likes-count").innerText =
        dataArray[postID].likes;
      bigPictureBox.querySelector(".comments-count").innerText =
        dataArray[postID].comments.length;

      dataArray[postID].comments.forEach((comment) => {
        commentsHTML += `
        <li class="social__comment" data-post-id="${comment.id}">
            <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
            <p class="social__text">${comment.message}</p>
        </li>`;
      });

      bigPictureBox.querySelector(".social__comments").innerHTML = commentsHTML;
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
