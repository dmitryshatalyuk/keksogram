import { dataArr } from "./fetchData.js";
import { getImages } from "./image-render.js";
import { showFullscreenImage } from "./fullscreen-image.js";
import { formValidation } from "./validation.js";
import { editPicture } from "./pic-effects.js";

editPicture();
getImages(dataArr);
showFullscreenImage(dataArr);
formValidation(document.querySelector(".img-upload__form"));


