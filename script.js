const toMainDisplay = document.querySelector(".main-display");
const toTopDisplay = document.querySelector(".top-display");

let mainDisplay = "";
let topDisplay = "";
let operator = "";

const numbers = document.querySelectorAll(".numbers");
const parameters = document.querySelectorAll(".parameters");
window.addEventListener("keydown", handleKeyPress);

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearScreen);
function clearScreen() {
  topDisplay = "";
  mainDisplay = "";
  toTopDisplay.textContent = "";
  toMainDisplay.textContent = "0";
  operator = "";
}

numbers.forEach((btn) => {
  btn.addEventListener("click", (key) => {
    handleNumber(key.target.textContent);
  });
});

function handleNumber(num) {
  if (mainDisplay.length < 12) {
    if (mainDisplay == "0") {
      mainDisplay += num;
    } else {
      mainDisplay += num;
    }
    toMainDisplay.textContent = mainDisplay;
  }
}

parameters.forEach((key) => {
  key.addEventListener("click", (param) => {
    handleParameter(param.target.textContent);
  });
});
function handleParameter(para) {
  if (mainDisplay !== "") {
    if (topDisplay !== "" && operator !== "") {
      calculate(false); // chain calculation
    } else {
      topDisplay = mainDisplay;
    }
    operator = para;
    toTopDisplay.textContent = topDisplay + " " + operator;
    mainDisplay = "";
    toMainDisplay.textContent = "";
  } else if (operator) {
    operator = para; // allow changing operator if clicked twice
    toTopDisplay.textContent = topDisplay + " " + operator;
  }
}

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => () => {
  if (mainDisplay != "" && topDisplay != "") {
    calculate(true);
  }
});
function calculate(resetOperator = true) {
  if (operator === "" || mainDisplay === "") return; // prevent breaking "="

  mainDisplay = Number(mainDisplay);
  topDisplay = Number(topDisplay);

  let result;
  if (operator == "+") {
    result = topDisplay + mainDisplay;
  } else if (operator == "-") {
    result = topDisplay - mainDisplay;
  } else if (operator == "*") {
    result = topDisplay * mainDisplay;
  } else if (operator == "/") {
    result = mainDisplay === 0 ? "Error" : topDisplay / mainDisplay;
  }

  let processedResult = result.toString().slice(0, 12);
  toMainDisplay.textContent = processedResult;
  toTopDisplay.textContent = resetOperator
    ? ""
    : processedResult + " " + operator;

  mainDisplay = processedResult !== "Error" ? processedResult : "";
  topDisplay = processedResult !== "Error" ? processedResult : "";

  if (resetOperator) operator = ""; // only clear operator if "=" was pressed
}

const del = document.querySelector("#delete");
del.addEventListener("click", deleteObject);
function deleteObject() {
  if (mainDisplay.length > 0) {
    mainDisplay = mainDisplay.slice(0, -1);
    toMainDisplay.textContent = mainDisplay || "0";
  }
}

const point = document.querySelector("#point");
point.addEventListener("click", addPoint);
function addPoint() {
  if (!mainDisplay.includes(".")) {
    mainDisplay = "0.";
  } else {
    mainDisplay += ".";
  }
  toMainDisplay.textContent = mainDisplay;
}

function handleKeyPress(e) {
  e.preventDefault();
  if (e.key >= "0" && e.key <= "9") {
    handleNumber(e.key);
  }
  if (
    e.key == "Enter" ||
    (e.key == "=" && mainDisplay != "" && topDisplay != "")
  ) {
    calculate(true);
  }
  if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    handleParameter(e.key);
  }
  if (e.key == "Backspace") {
    deleteObject(e.key);
  }
}
