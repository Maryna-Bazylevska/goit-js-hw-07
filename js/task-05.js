let inputRef = document.querySelector("#name-input");
let outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", inputChange);

function inputChange(event) {
  if (inputRef.value === "") {
    outputRef.textContent = "незнакомец";
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
}
