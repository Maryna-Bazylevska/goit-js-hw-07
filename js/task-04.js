const counterRef = document.querySelector("#counter");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let valueRef = Number(document.querySelector("#value").textContent);
decrement.addEventListener("click", () => {
  valueRef -= 1;
  console.log(valueRef);
});
increment.addEventListener("click", () => {
  valueRef += 1;
  console.log(valueRef);
});
