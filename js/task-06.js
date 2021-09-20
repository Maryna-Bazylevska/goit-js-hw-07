let inputRef = document.querySelector("#validation-input");
let inputLength = inputRef.dataset.length;
inputRef.addEventListener("input", onInputCheck);
function onInputCheck(event) {
  const text = event.target.value;
  if (text.length === +inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
