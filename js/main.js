import { getImages } from "./image-render.js";
import { showFullscreenImage } from "./fullscreen-image.js";
import { formValidation } from "./validation.js";
import { dataArr } from "./fetchData.js";

getImages(dataArr);
showFullscreenImage(dataArr);
formValidation(document.querySelector(".img-upload__form"));
