import { getImages } from "./image-render.js";
import { showFullscreenImage } from "./fullscreen-image.js";
import { formValidation } from "./validation.js";

const comments = [
  "Great post! I learned a lot from it.",
  "I completely agree with you!",
  "This is very helpful, thank you for sharing.",
  "I never thought about it that way before, thanks for the insight.",
  "Wow, I never knew that. Thanks for sharing!",
  "This is exactly what I needed, thank you!",
  "This post really opened my eyes. Thank you!",
  "I love the way you explain things, keep up the good work!",
  "I have been looking for information on this topic, thank you!",
  "This is the best explanation I have seen yet, thank you!",
  "I really appreciate you taking the time to write this.",
  "I found this post very informative and well written.",
  "This post is just what I needed, thank you!",
  "I have been searching for information like this, thank you!",
  "This is a great post, I will be sure to share it!",
  "Thank you for sharing your knowledge and experience.",
  "I can relate to what you are saying, great post!",
  "This post has helped me understand the topic better, thank you!",
  "I am so glad I stumbled upon this post, it is exactly what I needed!",
];

const names = [
  "Rhett Wheat",
  "Madisen Goad",
  "Clint Russ",
  "Jakayla Fournier",
  "Britany Yoo",
  "Tina Mathews",
  "Antoine Webb",
  "Leia Hunter",
];

const descriptions = [
  "A beautiful sunset over the ocean.",
  "A scenic hike through the mountains.",
  "A cute puppy playing in the park.",
  "A city skyline at night.",
  "A colorful flower garden.",
  "A waterfall in the forest.",
  "A family having a picnic in the park.",
  "A bird's eye view of the city.",
  "A group of friends at a concert.",
  "A snow-covered winter wonderland.",
  "A stunning beach with crystal clear water.",
  "A close-up of a beautiful butterfly.",
  "A hot air balloon ride over the countryside.",
  "A night sky filled with stars.",
  "A group of people having a barbecue in the park.",
];

function getRandomValue(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getUniqueID() {
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

  let uniqueID = "";

  for (let i = 0; i < 10; i++) {
    uniqueID += characters[getRandomValue(0, characters.length - 1)];
  }

  return uniqueID;
}

function createMockPostData(index) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: descriptions[getRandomValue(0, descriptions.length - 1)],
    likes: getRandomValue(15, 200),
    comments: createMockCommentData(getRandomValue(1, 5)),
  };
}

function createMockCommentData(commentQuantity) {
  const commentsArr = [];
  for (let i = 0; i < commentQuantity; i++) {
    commentsArr.push({
      id: getUniqueID(),
      avatar: `img/avatar-${getRandomValue(1, 6)}.svg`,
      message: comments[getRandomValue(0, comments.length - 1)],
      name: names[getRandomValue(0, names.length - 1)],
    });
  }

  return commentsArr;
}

const mockDataArr = new Array(25).fill(null).map((e, index) => {
  return createMockPostData(index);
});

getImages(mockDataArr);
showFullscreenImage(mockDataArr);
formValidation(document.querySelector(".img-upload__form"));
