let inputRef = document.querySelector("#font-size-control");

let textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  textRef.style.fontSize = inputRef.value + "px";
}
