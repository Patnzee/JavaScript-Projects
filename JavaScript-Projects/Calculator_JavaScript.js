// Adds a digit or operator to the display
function addToDisplay(value) {
    const display = document.getElementById('display');

    // If the current value is 0 or an error, replace it
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value; // Otherwise append
    }
}

// Evaluates the expression and updates the display
function calculate() {
    const display = document.getElementById('display');

    try {
        display.innerText = eval(display.innerText); // Run the calculation
    } catch {
        display.innerText = 'Error'; // Handle any calculation errors
    }
}

// Resets the calculator display to 0
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}
