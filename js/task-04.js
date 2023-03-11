const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

const counter = document.querySelector("#value");
let counterValue = 0;

decrement.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});
increment.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
