const buttons = document.querySelectorAll("button");
let expression = "";
let currentMathOperation = "";
const outputArea = document.querySelector(".output-area");
const currentOperationDiv = document.querySelector(".current-operation");
const currentResultDiv = document.querySelector(".current-result");
let initalResult = 0;
let currentResult = initalResult;
let isFirstSub = true;
let isFirstMul = true;
let isFirstDivide = true;
let isFirstMod = true;
const allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
outputArea.innerHTML = "";
currentOperationDiv.innerHTML = "";
currentResultDiv.innerHTML = "";

// Keypress event handler 
window.addEventListener("keypress", (e) => {
  if (allowedKeys.includes(String.fromCharCode(e.charCode))) {
    expression = expression + String.fromCharCode(e.charCode);
    outputArea.innerHTML = expression;
  } else {
    alert("Only Numbers are allowed !!!");
  }
});

// Button event handler 
buttons.forEach((button) => {
  if (
    button.id == "add" ||
    button.id == "sub" ||
    button.id == "mul" ||
    button.id == "divide" ||
    button.id == "equals-to" ||
    button.id == "mod" ||
    button.id == "x"
  ) {
  } else {
    button.addEventListener("click", (e) => {
      expression = expression + e.target.value;
      outputArea.innerHTML = expression;
    });
  }
});

// Reset when AC is clicked 
// allClear button event handler
const allClear = document.getElementById("AC");
allClear.addEventListener("click", () => {
  reset();
});
// backSpace event handler
const backSpace = document.getElementById("x");
backSpace.addEventListener("click", () => {
  expression = expression.split("");
  expression = expression.slice(0, expression.length - 1).join("");
  outputArea.innerHTML = expression;
});

// Add Button Event Handler
const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  if (currentMathOperation === "-") {
    calculateSub();
  }
  if (currentMathOperation === "*") {
    calculateMul();
  }
  if (currentMathOperation === "/") {
    calculateDiv();
  }
  if (currentMathOperation === "%") {
    calculateMod();
  }
  outputArea.innerHTML = "";

  console.log(expression);
  calculateAdd();
  currentMathOperation = "+";
  displayCurrentOperationAndResult();
});
// subtract button event handler 

const subButton = document.getElementById("sub");
subButton.addEventListener("click", () => {
  if (currentMathOperation === "+") {
    calculateAdd();
  }
  if (currentMathOperation === "*") {
    calculateMul();
  }
  if (currentMathOperation === "/") {
    calculateDiv();
  }
  if (currentMathOperation === "%") {
    calculateMod();
  }
  outputArea.innerHTML = "";
  if (isFirstSub) {
    if (expression !== 0) {
      currentResult = parseFloat(expression) - currentResult;
    } else {
      calculateSub();
    }
    isFirstSub = false;
  } else {
    calculateSub();
  }
  currentMathOperation = "-";
  displayCurrentOperationAndResult();
});
// multiply Button event handler 
const mulButton = document.getElementById("mul");
mulButton.addEventListener("click", () => {
  if (currentMathOperation === "+") {
    calculateAdd();
    expression = 1;
  }
  if (currentMathOperation === "-") {
    calculateSub();
    expression = 1;
  }
  if (currentMathOperation === "/") {
    calculateDiv();
    expression = 1;
  }
  if (currentMathOperation === "%") {
    calculateMod();
    expression = 1;
  }
  if (isFirstMul) {
    if (currentResult === 0) {
      initalResult = 1;
      currentResult = initalResult;
      isFirstMul = false;
    }
  }

  outputArea.innerHTML = "";
  calculateMul();
  currentMathOperation = "*";
  displayCurrentOperationAndResult();
});

// divide button event handler 
const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
  if (currentMathOperation === "+") {
    calculateAdd();
    expression = 1;
  }
  if (currentMathOperation === "-") {
    calculateSub();
    expression = 1;
  }
  if (currentMathOperation === "*") {
    calculateMul();
    expression = 1;
  }
  currentMathOperation = "/";
  if (isFirstDivide) {
    if (currentResult === 0) {
      initalResult = 1;
      currentResult = initalResult;
      console.log(parseFloat(expression));
      currentResult = parseFloat(expression) / currentResult;
      isFirstDivide = false;
      console.log(currentResult);
      displayCurrentOperationAndResult();
    } else {
      calculateDiv();
      displayCurrentOperationAndResult();
    }
  } else {
    calculateDiv();
    displayCurrentOperationAndResult();
  }
});
// modulus button event handler 
const mod = document.getElementById("mod");
mod.addEventListener("click", () => {
  if (currentMathOperation === "+") {
    calculateAdd();
    expression = 1;
  }
  if (currentMathOperation === "-") {
    calculateSub();
    expression = 1;
  }
  if (currentMathOperation === "*") {
    calculateMul();
    expression = 1;
  }
  if (currentMathOperation === "/") {
    calculateDiv();
    expression = 1;
  }
  currentMathOperation = "%";
  if (isFirstMod) {
    if (currentResult === 0) {
      initalResult = 1;
      currentResult =
        parseFloat(expression) % (parseFloat(expression) + parseInt(1));
      isFirstMod = false;
      displayCurrentOperationAndResult();
    } else {
      currentResult = currentResult % (currentResult + 1);
      displayCurrentOperationAndResult();
    }
  } else {
    currentResult = currentResult % parseFloat(expression);
    displayCurrentOperationAndResult();
  }
});

// Equals to button event handler 
const equalsTo = document.getElementById("equals-to");
// equals to event handler
equalsTo.addEventListener("click", () => {
  if (currentMathOperation === "+") {
    if (expression === "" || expression === 0) {
    } else {
      calculateAdd();
      isFirstSub = true;
    }
  }
  if (currentMathOperation === "-") {
    calculateSub();
    outputArea.innerHTML = currentResult;
    isFirstSub = true;
  }
  if (currentMathOperation === "*") {
    if (expression === "" || expression === 0) {
    } else {
      calculateMul();
      expression = 1;
    }
  }
  if (currentMathOperation === "/") {
    if (expression === "" || expression === 0) {
    } else {
      calculateDiv();
      expression = 1;
    }
  }
  if (currentMathOperation === "%") {
    if (expression === "" || expression === 0) {
    } else {
      currentResult %= parseFloat(expression);
    }
  }
  outputArea.innerHTML = currentResult;
  currentOperationDiv.innerHTML = currentMathOperation;
  currentResultDiv.innerHTML = currentResult;
});
