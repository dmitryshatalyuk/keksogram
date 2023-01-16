const comments = [
  "Все відмінно!",
  "Загалом все непогано. Але не всі.",
  "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
  "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
  "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
  "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?",
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
  "A giraffe standing in the middle of a lush green field",
  "A woman in a bikini holding a surfboard",
  "A man is standing in front of a mirror",
];

function getRandomValue(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getUniqueID() {
  const idArr = [];
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

  let uniqueID = "";

  for (let i = 0; i < 10; i++) {
    uniqueID += characters[getRandomValue(0, characters.length - 1)];
  }

  idArr.push(uniqueID);

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
