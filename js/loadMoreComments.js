const closeBtn = document.querySelector(".big-picture__cancel");
const moreBtn = document.querySelector(".social__comments-loader");

let currentCount = 0;

const COMMENTS_PROPS = {
  minQuantity: 5,
  step: 5,
};

let commentsHTML = "";

export function loadComments(comments, box) {
  if (
    comments.length < COMMENTS_PROPS.minQuantity ||
    comments.length == COMMENTS_PROPS.minQuantity
  ) {
    showMinComments(comments, box);
  } else {
    showMaxComments(comments, box);
  }

  document.querySelector(".social__comments").innerHTML = commentsHTML;

  moreBtn.addEventListener("click", () => {
    loadAdditionalComments(comments, box);
  });
}

function showMinComments(comments, box) {
  moreBtn.classList.add("hidden");

  box.querySelector(
    ".social__comment-count"
  ).innerText = `${comments.length} коментария`;

  comments.forEach((comment) => {
    commentsHTML += `<li class="social__comment">
      <img class="social__picture" src="${comment.avatar}"
      alt="${comment.name}"" width="35" height="35">
      <p class="social__text">${comment.message}</p>
      </li>`;
  });
}

function showMaxComments(comments, box) {
  moreBtn.classList.remove("hidden");

  box.querySelector(
    ".social__comment-count"
  ).innerText = `${COMMENTS_PROPS.minQuantity} коментариев из ${comments.length}`;

  comments.slice(0, COMMENTS_PROPS.minQuantity).forEach((comment) => {
    commentsHTML += `<li class="social__comment">
      <img class="social__picture" src="${comment.avatar}"
      alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
      </li>`;
  });
}

export function loadAdditionalComments(comments, box) {
  const maxComments = comments.length;
  const commentsContainer = box.querySelector(".social__comments");
  const currentCount = commentsContainer.children.length;
  const nextCount = currentCount + COMMENTS_PROPS.step;

  if (nextCount >= maxComments) {
    box.querySelector(
      ".social__comment-count"
    ).innerText = `${maxComments} комментариев из ${maxComments}`;
    moreBtn.classList.add("hidden");
  } else {
    box.querySelector(
      ".social__comment-count"
    ).innerText = `${nextCount} комментариев из ${maxComments}`;
  }

  for (let i = currentCount; i < nextCount && i < maxComments; i++) {
    const comment = comments[i];
    const commentHTML = `<li class="social__comment">
      <img class="social__picture" src="${comment.avatar}"
      alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
      </li>`;
    commentsContainer.insertAdjacentHTML("beforeend", commentHTML);
  }
}

closeBtn.addEventListener("click", () => {
  commentsHTML = "";
  moreBtn.removeEventListener("click", () => {
    loadAdditionalComments(comments, box);
  });
  currentCount = COMMENTS_PROPS.minQuantity;
});
