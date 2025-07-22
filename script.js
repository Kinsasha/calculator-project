const toMainDisplay = document.querySelector(".main-display");
const toTopDisplay = document.querySelector(".top-display");

let mainDisplay = "";
let topDisplay = "";
let operator = "";

const point = document.querySelector("#point");
// const equal = document.querySelector("#equal");
// const del = document.querySelector("#delete");
const numbers = document.querySelectorAll(".numbers");
const parameters = document.querySelectorAll(".parameters");

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearScreen);
function clearScreen() {
  topDisplay = "";
  mainDisplay = "";
  toTopDisplay.textContent = "";
  toMainDisplay.textContent = "";
  // operator.textContent = '';
}

numbers.forEach((btn) => {
  btn.addEventListener("click", (key) => {
    handleNumber(key.target.textContent);
  });
});

function handleNumber(num) {
  if (num.length < 12) {
    mainDisplay += num;
    toMainDisplay.textContent = mainDisplay;
  }
}

parameters.forEach((key) => {
  key.addEventListener("click", (param) => {
    handleParameter(param.target.textContent);
  });
});
function handleParameter(para) {
  topDisplay += mainDisplay + " " + para;
  toTopDisplay.textContent = topDisplay;
  mainDisplay = "";
  toMainDisplay.textContent = "";
}
