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

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function createMockData(index) {
  return {
    id: index + 1,
    avatar: `img/avatar-${getRandomValue(1, 6)}.svg`,
    message: comments[Math.floor(Math.random() * comments.length)],
    name: names[Math.floor(Math.random() * names.length)],
  };
}

const mockDataArr = new Array(25).fill(null).map((e, index) => {
  return (e = createMockData(index));
});