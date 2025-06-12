// Adds two numbers
function performAddition() {
  let result = 10 + 5;
  document.getElementById("Addition").innerHTML = "10 + 5 = " + result;
}

// Subtracts two numbers
function performSubtraction() {
  let result = 20 - 7;
  document.getElementById("Subtraction").innerHTML = "20 - 7 = " + result;
}

// Multiplies two numbers
function performMultiplication() {
  let result = 6 * 4;
  document.getElementById("Multiplication").innerHTML = "6 × 4 = " + result;
}

// Divides two numbers
function performDivision() {
  let result = 20 / 5;
  document.getElementById("Division").innerHTML = "20 ÷ 5 = " + result;
}

// Performs multiple operations with proper order of operations
function performMultipleOperations() {
  let result = (5 + 3) * 2 - 4 / 2;
  document.getElementById("Multiple").innerHTML = "(5 + 3) × 2 - 4 ÷ 2 = " + result;
}

// Returns the remainder of division
function performModulus() {
  let result = 10 % 3;
  document.getElementById("Modulus").innerHTML = "10 % 3 = " + result;
}

// Returns the negation (negative value) of a number
function performNegation() {
  let number = 7;
  let result = -number;
  document.getElementById("Negation").innerHTML = "Negation of 7 is " + result;
}

// Increments a number by 1
function performIncrement() {
  let number = 10;
  number++;
  document.getElementById("Increment").innerHTML = "Increment of 10 is " + number;
}

// Decrements a number by 1
function performDecrement() {
  let number = 10;
  number--;
  document.getElementById("Decrement").innerHTML = "Decrement of 10 is " + number;
}

// Displays a random number between 0 and 1
function performRandom() {
  let result = Math.random();
  document.getElementById("Random").innerHTML = "Random number between 0 and 1: " + result;
}

// Uses a Math object method (square root)
function performMathObjectMethod() {
  let result = Math.sqrt(64);
  document.getElementById("MathObject").innerHTML = "Square root of 64 is " + result;
}
