export function parceImage(source, likes, comments, appender) {
  const imageTemplate = document.querySelector("#picture");
  const imageTemplateNode = imageTemplate.content.cloneNode(true);
  const fragment = new DocumentFragment();

  imageTemplateNode.querySelector(".picture__img").src = source;
  imageTemplateNode.querySelector(".picture__likes").innerText = likes;
  imageTemplateNode.querySelector(".picture__comments").innerText = comments;

  fragment.append(imageTemplateNode);
  appender.append(fragment);
}
