import { dataArr } from "./fetchData.js";

const formNode = document.querySelector(".img-upload__form");
const image = document.querySelector("#upload-file");

export function sendFormToServer() {
  updatePreviewImage(image);
  sendForm(formNode);
}

function updatePreviewImage(input) {
  const previewPic = document.querySelector(".img-upload__preview img");
  const picData = document.querySelector(".imageData");

  input.addEventListener("change", (evt) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", (evt) => {
      previewPic.src = evt.target.result;
      picData.value = evt.target.result;
    });

    fileReader.readAsDataURL(evt.target.files[0]);
  });
}

function sendForm(form) {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.target).entries());

    fetch("http://127.0.0.1:3000", {
      body: JSON.stringify(toValidObject(formData)),
      method: "POST",
    })
      .then(() => {
        successMSG();
      })
      .catch((error) => {
        errorMSG(error);
      });

    form.reset();
    document.querySelector(".img-upload__overlay").classList.add("hidden");
    document.querySelector("body").classList.remove("modal-open");
  });
}

function successMSG() {
  const successNode = document.querySelector("#success");

  document.body.append(successNode.content.cloneNode(true));

  document.querySelector(".success__button").addEventListener("click", () => {
    location.reload();
  });
}

function errorMSG(err) {
  const error = document.querySelector(".error_msg");
  error.querySelector(".error_msg__text").innerText = err.message;

  error.classList.remove("hidden");
}

function toValidObject(data) {
  return {
    description: data.description,
    id: dataArr.length + 1,
    likes: 0,
    title: data.filename.name,
    url: data.imageData,
    hashtags: data.hashtags,
    effects: {
      scale: data.scale,
      effect: data.filter,
    },
    comments: "",
  };
}
