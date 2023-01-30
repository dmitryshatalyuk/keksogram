export function renderImage(source, likes, comments) {
  const imageTemplate = document.querySelector("#picture");
  const imageTemplateNode = imageTemplate.content.cloneNode(true);

  imageTemplateNode.querySelector(".picture__img").src = source;
  imageTemplateNode.querySelector(".picture__likes").innerText = likes;
  imageTemplateNode.querySelector(".picture__comments").innerText = comments;

  return imageTemplateNode;
}

export function getImages(photosData) {
  const fragment = new DocumentFragment();
  const appender = document.querySelector(".pictures");

  photosData.forEach((item) => {
    const photo = renderImage(
      item.url,
      item.likes,
      item.comments.length,
      document.querySelector(".pictures")
    );
    fragment.append(photo);
  });

  appender.append(fragment);
}
