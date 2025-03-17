function displayBabyName(response) {
  console.log("Baby name generated");
  new Typewriter("#baby-name", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateBabyName(event) {
  event.preventDefault();

  // Build the API URL
  let instructionsInput =
    document.querySelector("#prompt-name");
  let apiKey = "d36aa0424f0b7a4te0a504eba4fo6786";
  let context =
    "You are an expert on baby names and their meanings. Using basic HTML give the baby name in an H2 and the description in a paragraph. Do not use ` or the word HTML. Make sure to follow the user instuctions. Sign 'SheCodes AI' inside a <strong> element underneath";
  let prompt = `User instructions: Generate a male or female baby name that means ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  // make a Call to the API
  console.log(`Generating baby name...`);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  console.log(apiURL);

  axios.get(apiURL).then(displayBabyName);
  // Display generated name and description
}

let babyNameFormElement = document.querySelector(
  "#baby-name-generator-form"
);
babyNameFormElement.addEventListener(
  "submit",
  generateBabyName
);
