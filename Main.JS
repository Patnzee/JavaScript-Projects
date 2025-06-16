// Global variable - accessible in any function
let globalMessage = "This is a global message.";

function scopeTest() {
    // Local variable - only accessible inside this function
    let localMessage = "This is a local message.";

    // Output both messages to the page
    document.getElementById("scopeResult").innerHTML = globalMessage + " " + localMessage;
}

// Function using if, else if, else to display a greeting based on the time of day
function Time_function() {
    let currentHour = new Date().getHours(); // Get current hour (0 to 23)
    let reply;

    if (currentHour < 12) {
        reply = "Good morning!";
    } else if (currentHour < 18) {
        reply = "Good afternoon!";
    } else {
        reply = "Good evening!";
    }

    // Display the greeting in the HTML element
    document.getElementById("timeMessage").innerHTML = reply;
}

// Debugging example: originally had a typo (numbr); now fixed and explained below
function brokenFunction() {
    let number = 10;

    // Intentional typo for debugging practice (now corrected):
    // let result = numbr + 5;

    // Corrected version
    let result = number + 5;

    // Output to console to confirm value or for debugging
    console.log("Result is: ", result);
}
