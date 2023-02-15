import { getImages } from "./image-render.js";
import { showFullscreenImage } from "./fullscreen-image.js";
import { formValidation } from "./validation.js";

function getRandomValue(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

const photos = await fetch("http://127.0.0.1:3000/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    return `Error receiving data. ${error}`;
  });

const comments = await fetch("http://127.0.0.1:3000/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    return `Error receiving data. ${error}`;
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
    comments: createComment(getRandomValue(1, 5)),
  };
}

const dataArr = new Array(photos.length).fill(null).map((e, index) => {
  return createPost(index);
});

getImages(dataArr);
showFullscreenImage(dataArr);
formValidation(document.querySelector(".img-upload__form"));
