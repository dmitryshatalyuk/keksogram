function renderImage(source, likes, comments, id, scale, effect) {
  const imageTemplate = document.querySelector("#picture");
  const imageTemplateNode = imageTemplate.content.cloneNode(true);

  imageTemplateNode.querySelector(".picture__img").src = source;
  imageTemplateNode.querySelector(".picture__likes").innerText = likes;
  imageTemplateNode.querySelector(".picture__comments").innerText = comments;
  imageTemplateNode.querySelector(".picture__img").dataset.id = id;
  imageTemplateNode.querySelector(".picture__img").dataset.commentsCount =
    comments;
  imageTemplateNode.querySelector(".picture__img").style.scale = `${scale}%`;
  imageTemplateNode.querySelector(".picture__img").style.filter = effect;

  return imageTemplateNode;
}

export function getImages(photosData) {
  const fragment = new DocumentFragment();
  const appender = document.querySelector(".pictures");

  photosData.forEach((item) => {
    // console.log(item)
    const photo = renderImage(
      item.url,
      item.likes,
      item.comments.length,
      item.id,
      item.scale,
      item.filter
    );
    
    fragment.append(photo);
  });

  appender.append(fragment);
}
