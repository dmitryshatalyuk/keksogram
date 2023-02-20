const previewImage = document.querySelector(".img-upload__preview img");
const scale = document.querySelector(".img-upload__scale");
const effects = document.querySelector(".img-upload__effects");
const effectLevelSlider = document.querySelector(".effect-level__slider");
const effectBox = document.querySelector(".effect-level");

const IMAGE_PROPS = {
  scaleStep: 25,
  scaleMax: 100,
  scaleMin: 25,
};

const filterNames = {
  chrome: "grayscale",
  sepia: "sepia",
  marvin: "invert",
  phobos: "blur",
  heat: "brightness",
};

export function editPicture() {
  scaleImage();
  filterImage();
}

function scaleImage() {
  scale.addEventListener("click", (evt) => {
    const scaleInput = scale.querySelector("input");
    let currentValue = Number(
      scaleInput.value.substring(0, scaleInput.value.length - 1)
    );

    if (evt.target.classList.contains("scale__control--bigger")) {
      currentValue = Math.min(
        currentValue + IMAGE_PROPS.scaleStep,
        IMAGE_PROPS.scaleMax
      );
    } else if (evt.target.classList.contains("scale__control--smaller")) {
      currentValue = Math.max(
        currentValue - IMAGE_PROPS.scaleStep,
        IMAGE_PROPS.scaleMin
      );
    }

    previewImage.style.transform = `scale(${currentValue}%)`;
    scaleInput.value = `${currentValue}%`;

    document.querySelector(".hidden-scale").value = `${currentValue}`;
  });
}

function filterImage() {
  effects.addEventListener("input", (evt) => {
    let currentEffect = evt.target.value;
    console.log(currentEffect);

    switch (currentEffect) {
      case "none":
        previewImage.className = "";
        previewImage.style.filter = "none";
        effectBox.style.display = "none";
        document.querySelector(".hidden-effect").value = `none`;
        break;

      case "chrome":
        setFilter(currentEffect, 1, 0.1, 0, 1, "");
        break;

      case "sepia":
        setFilter(currentEffect, 1, 0.1, 0, 1, "");
        break;

      case "marvin":
        setFilter(currentEffect, 100, 1, 0, 100, "%");
        break;

      case "phobos":
        setFilter(currentEffect, 3, 1, 0, 3, "px");
        break;

      case "heat":
        setFilter(currentEffect, 3, 1, 1, 3, "");
        break;

      default:
        effectLevelSlider.noUiSlider.destroy();
        effectBox.style.display = "none";
        break;
    }
  });
}

function setFilter(name, start, step, rangeMin, rangeMax, unit) {
  previewImage.className = "";
  previewImage.classList.add(`effects__preview--${name}`);
  effectLevelSlider.noUiSlider.destroy();

  slider(start, step, rangeMin, rangeMax);
  effectLevelSlider.noUiSlider.on("update", function (val) {
    previewImage.style.filter = `${filterNames[name]}(${val}${unit})`;

    document.querySelector(
      ".hidden-effect"
    ).value = `${filterNames[name]}(${val}${unit}}`;
  });
  effectBox.style.display = "block";
}

const slider = function (start, step, rangeMin, rangeMax) {
  noUiSlider.create(effectLevelSlider, {
    start: start,
    connect: true,
    step: step,
    range: {
      min: rangeMin,
      max: rangeMax,
    },
  });
};

slider(1, 0.1, 0, 1);
effectBox.style.display = "none";
