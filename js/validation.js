export function formValidation(form) {
  form.addEventListener("change", (event) => {
    if (event.target.name === "filename") {
      form.querySelector(".img-upload__overlay").classList.remove("hidden");
    } else if (event.target.name === "hashtags") {
      validateHashtags(event.target);
    }
  });

  document
    .querySelector(".img-upload__cancel")
    .addEventListener("click", () => {
      form.reset();
      form.querySelector(".img-upload__overlay").classList.add("hidden");
    });
}

const hashtagProps = {
  minLength: 2,
  maxLength: 20,
  quantity: 5,
};

const errorResponse = {
  itsFine: "",
  hash: "Хештег повинен починатися з #",
  rejectedSym: "Хештег не повинен містити заборонені символи (?, !, $ і т.д)",
  wrongLength: "Довжина хештега має бути від 2 до 20 символів",
  duplicity: "Хештеги не повинні повторюватися",
  quantity: "Максимальна кількість хештегів: 5",
};

function isValid(tag) {
  return /^[a-zA-Z0-9]+$/.test(tag);
}

function validateHashtags(str) {
  const hashtags = str.value.split(" ");

  if (str.value.length > 0) {
    if (
      JSON.stringify(
        hashtags.map((hashtag) => {
          return hashtag.toLowerCase();
        })
      ) !==
      JSON.stringify(
        Array.from(
          new Set(
            hashtags.map((hashtag) => {
              return hashtag.toLowerCase();
            })
          )
        )
      )
    ) {
      str.setCustomValidity(errorResponse.duplicity);
    } else if (hashtags.length > hashtagProps.quantity) {
      str.setCustomValidity(errorResponse.quantity);
    } else {
      hashtags.forEach((hashtag) => {
        if (hashtag[0] !== "#") {
          str.setCustomValidity(errorResponse.hash);
        } else if (isValid(hashtag.substr(1)) === false) {
          str.setCustomValidity(errorResponse.rejectedSym);
        } else if (hashtag.length < hashtagProps.minLength) {
          str.setCustomValidity(errorResponse.wrongLength);
        } else if (hashtag.length > hashtagProps.maxLength) {
          str.setCustomValidity(errorResponse.wrongLength);
        } else {
          str.setCustomValidity(errorResponse.itsFine);
        }
      });
    }
  }

  str.reportValidity();
}
