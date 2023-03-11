const inputText = document.querySelector("#name-input");

const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  outputText.textContent = inputText.value;
});
