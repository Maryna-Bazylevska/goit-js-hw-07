const counterRef = document.querySelector("#counter");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector("#value");
let valueRef = Number(document.querySelector("#value").textContent);
decrement.addEventListener("click", () => {
  valueRef -= 1;
  counterValue.innerText = valueRef;
});
increment.addEventListener("click", () => {
  valueRef += 1;
  counterValue.innerText = valueRef;
});
