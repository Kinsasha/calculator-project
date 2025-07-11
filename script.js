function addFunc(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function substractFunc(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function multiplyFunc(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
function divideFunc(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function operate(numOne, numTwo, operation) {
  if (operation == "add") {
    return addFunc(numOne, numTwo);
  } else if (operation == "subtract") {
    return addFunc(numOne, numTwo);
  } else if (operation == "multiply") {
    return addFunc(numOne, numTwo);
  } else if (operation == "divide") {
    return addFunc(numOne, numTwo);
  }
}
// console.log(operate(2, 5, "add"));
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
// const zero = document.querySelector("#zero");
// const clear = document.querySelector("#clear");
// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// const multiply = document.querySelector("#multiply");
// const divide = document.querySelector("#divide");
// const point = document.querySelector("#point");
// const equal = document.querySelector("#equal");
// const del = document.querySelector("#delete");
// const display = document.querySelector("#display");

const inputs = document.querySelector(".inputs");
const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputs.value += number.textContent;
  });
});
