// Reseting the calculator
function reset() {
  expression = "";
  outputArea.innerHTML = "";
  initalResult = 0;
  currentResult = 0;
  isFirstSub = true;
  isFirstMul = true;
  isFirstDivide = true;
  isFirstMod = true;
  currentMathOperation = "";
  currentOperationDiv.innerHTML = "";
  currentResultDiv.innerHTML = "";
}
// Add function 
function calculateAdd() {
  currentResult += parseFloat(expression);
  expression = 0;
}
// Subtract function 
function calculateSub() {
  currentResult -= parseFloat(expression);
  expression = 0;
}
// multiply function 
function calculateMul() {
  currentResult *= parseFloat(expression);
  expression = 0;
}
// divide function 
function calculateDiv() {
  currentResult /= parseFloat(expression);
  expression = 0;
}
// modulus function 
function calculateMod() {
  currentResult %= parseFloat(expression);
  expression = 0;
}
// displaying the output to the screen 
function displayCurrentOperationAndResult() {
  initalResult = currentResult;
  expression = "";
  currentOperationDiv.innerHTML = currentMathOperation;
  currentResultDiv.innerHTML = currentResult;
}
