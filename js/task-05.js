const formInput = document.querySelector("#name-input");
const formOutput = document.querySelector("#name-output");

formInput.addEventListener("input", onFormSubmit);

function onFormSubmit(event) {
  formOutput.textContent = event.currentTarget.value;
  if (formOutput.textContent === "") {
    formOutput.textContent = "Anonymous";
  }
}