const toggleButton = document.getElementById("toggle-button");
const circle = document.getElementById("toggle-button-circle");
const symbol = document.getElementById("toggle-button-symbol");
let toggleState = true;
toggleButton.onclick = () => {
  if (toggleState) {
   circle.classList.replace("circle-right","circle-left")
  symbol.classList.replace("symbol-left","symbol-right");
      symbol.innerHTML = "&#x2717;";
    toggleState = false
  } else {
  circle.classList.replace("circle-left","circle-right")
  symbol.classList.replace("symbol-right","symbol-left");
    symbol.innerHTML = "&#x2713;";
    toggleState = true
  }
}