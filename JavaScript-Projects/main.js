// ✅ Ternary Operator Example
function checkVotingEligibility() {
    // Get value from input box
    var age = document.getElementById("ageInput").value;
    
    // Use ternary operator to determine eligibility
    var message = (age >= 18) ? "✅ You are old enough to vote." : "❌ You are not old enough to vote.";
    
    // Display result
    document.getElementById("TernaryOutput").innerHTML = message;
}


// ✅ Constructor Function using 'this' and 'new'
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// Create an instance of the object
var user = new Person("Patricia", "Nzimande", 25);

// Display the constructor result
function showConstructorTest() {
    document.getElementById("ConstructorOutput").innerHTML =
        user.firstName + " " + user.lastName + " is " + user.age + " years old.";
}


// ✅ Reserved Keyword Challenge (demonstration of error handling)
function reservedKeywordTest() {
    try {
        eval("var return = 'test';"); // "return" is a reserved word
        document.getElementById("ReservedWordTest").innerHTML = return;
    } catch (error) {
        document.getElementById("ReservedWordTest").innerHTML =
            "❌ Error: Reserved keywords cannot be used as variable names.<br>" +
            "💡 JavaScript error: <code>" + error.message + "</code>";
    }
}


// ✅ Nested Function Example
let counter = 0;

function countFunction() {
    document.getElementById("Nested_Function").innerHTML = updateCounter();

    function updateCounter() {
        // Nested function increments the counter
        function increment() {
            counter++;
        }
        increment();
        return counter;
    }
}


// ✅ Run all required display functions on page load
window.onload = function () {
    showConstructorTest();
    reservedKeywordTest();
};
