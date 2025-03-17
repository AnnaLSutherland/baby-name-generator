function generateBabyName(event) {
  event.preventDefault();

  new Typewriter("#baby-name", {
    strings:
      "Amara. A Greek word which means “lovely forever”. It is an appealing name with a beautiful meaning for your little girl.",
    autoStart: true,
    cursor: null,
    delay: 30,
  });
}

let babyNameFormElement = document.querySelector(
  "#baby-name-generator-form"
);
babyNameFormElement.addEventListener(
  "submit",
  generateBabyName
);
