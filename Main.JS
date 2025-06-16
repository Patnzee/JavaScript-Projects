// While loop function
function runWhileLoop() {
    let count = 1;
    let output = "";

    // While loop counting 1 to 5
    while (count <= 5) {
        output += "Count is: " + count + "<br>";
        count++;
    }

    document.getElementById("whileOutput").innerHTML = output;
}

// For loop function
function runForLoop() {
    let output = "";

    // For loop counting 1 to 5
    for (let i = 1; i <= 5; i++) {
        output += "Loop iteration: " + i + "<br>";
    }

    document.getElementById("forOutput").innerHTML = output;
}

// Array function
function arrayFunction() {
    const fruits = ["Apple", "Banana", "Mango", "Orange"];

    // Accessing array element at index 2
    const message = "My favorite fruit is " + fruits[2] + ".";

    document.getElementById("arrayOutput").textContent = message;
}

// Object using let keyword
function showObject() {
    let person = {
        firstName: "Patricia",
        lastName: "Nzimande",
        job: "Developer",
        age: 28,
        getInfo: function () {
            return this.firstName + " " + this.lastName + " is a " + this.age + "-year-old " + this.job + ".";
        }
    };

    // Display object info using its method
    document.getElementById("objectOutput").textContent = person.getInfo();
}
