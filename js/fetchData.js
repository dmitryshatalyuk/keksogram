import { getRandomValue } from "./getRandomValue.js";
const errorBox = document.querySelector(".error_msg");

const commentsProps = {
  minQuantity: 1,
  maxQuantity: 24,
};

const photos = await fetch("http://127.0.0.1:3000/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    errorBox.classList.remove("hidden");
    error.querySelector(
      ".error_msg__text"
    ).innerText = `Error receiving photos. ${error}`;
    return `Error receiving photos. ${error}`;
  });

const comments = await fetch("http://127.0.0.1:3000/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    errorBox.classList.remove("hidden");
    error.querySelector(
      ".error_msg__text"
    ).innerText = `Error receiving comments. ${error}`;
    return `Error receiving comments. ${error}`;
  });

function createComment(commentQuantity) {
  const commentsArr = [];
  for (let i = 0; i < commentQuantity; i++) {
    commentsArr.push({
      id: comments[getRandomValue(0, comments.length - 1)].id,
      avatar: comments[getRandomValue(0, comments.length - 1)].avatar,
      message: comments[getRandomValue(0, comments.length - 1)].message,
      name: comments[getRandomValue(0, comments.length - 1)].name,
    });
  }

  return commentsArr;
}

function createPost(index) {
  return {
    id: photos[index].id,
    url: photos[index].url,
    description: photos[index].description,
    likes: photos[index].likes,
    scale: photos[index].effects.scale,
    filter: photos[index].effects.effect,
    comments: createComment(
      getRandomValue(commentsProps.minQuantity, commentsProps.maxQuantity)
    ),
  };
}

export const dataArr = new Array(photos.length).fill(null).map((e, index) => {
  return createPost(index);
});
