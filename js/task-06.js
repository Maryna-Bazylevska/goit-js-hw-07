let inputRef = document.querySelector("#validation-input");
let inputLength = Number(inputRef.dataset.length);
inputRef.addEventListener("input", onInputCheck);
function onInputCheck(event) {
  const text = event.target.value;
  text.length === inputLength
    ? addClass("valid", "invalid")
    : addClass("invalid", "valid");
}
const addClass = (valid, invalid) => {
  inputRef.classList.add(valid);
  inputRef.classList.remove(invalid);
};
