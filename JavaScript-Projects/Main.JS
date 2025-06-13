// 1. typeof operator example
let myVariable = 42;
document.write("The data type of myVariable is: " + typeof myVariable + "<br><br>");

// 2. Type coercion example
let number = 5;
let text = "10";
let result = number + text;
document.write("Result of number + text: " + result + "<br>");
document.write("Data type of result: " + typeof result + "<br><br>");

// 3. NaN Challenge
let invalidOperation = 0 / "apple"; // NaN
document.write("This will display NaN: " + invalidOperation + "<br>");
document.write("isNaN('hello') returns: " + isNaN("hello") + "<br>");
document.write("isNaN(123) returns: " + isNaN(123) + "<br><br>");

// 4. Infinity Assignment using getElementById()
document.getElementById("positive-infinity").innerHTML = 1.7976931348623157E+308 * 10;
document.getElementById("negative-infinity").innerHTML = -1.7976931348623157E+308 * 10;

// 5. Boolean Assignment
let isGreater = 10 > 5;
document.write("Is 10 greater than 5? " + isGreater + "<br>");

let isLess = 3 < 1;
document.write("Is 3 less than 1? " + isLess + "<br><br>");

// 6. console.log() Assignment
let x = 15;
let y = 5;
let sum = x + y;
console.log("The sum of x and y is: " + sum);

// 7. Boolean Challenge – Display false in the console
console.log("Boolean Challenge result (5 > 10):", 5 > 10); // false

// 8. Double Equal Signs Assignment
let equalTrue = (5 == "5");  // true due to type coercion
document.write("5 == '5' returns: " + equalTrue + "<br>");

let equalFalse = (10 == "20");  // false
document.write("10 == '20' returns: " + equalFalse + "<br><br>");

// 9. Triple Equal Signs Assignment
let tripleTrue = (10 === 10); 
document.write("10 === 10 returns: " + tripleTrue + "<br>");

let tripleFalse1 = ("10" === 20); 
document.write("'10' === 20 returns: " + tripleFalse1 + "<br>");

let tripleFalse2 = (5 === "5"); 
document.write("5 === '5' returns: " + tripleFalse2 + "<br>");

let tripleFalse3 = (30 === 50); 
document.write("30 === 50 returns: " + tripleFalse3 + "<br><br>");

// 10. AND (&&) Operator Assignment
let andTrue = (5 > 2 && 10 > 3);
document.write("5 > 2 && 10 > 3 returns: " + andTrue + "<br>");

let andFalse = (5 > 2 && 1 > 10);
document.write("5 > 2 && 1 > 10 returns: " + andFalse + "<br><br>");

// 11. OR (||) Operator Assignment
let orTrue = (5 > 2 || 1 > 10);
document.write("5 > 2 || 1 > 10 returns: " + orTrue + "<br>");

let orFalse = (1 > 5 || 3 < 1);
document.write("1 > 5 || 3 < 1 returns: " + orFalse + "<br><br>");

// 12. NOT (!) Operator Assignment
let notTrue = !(5 > 2);
document.write("!(5 > 2) returns: " + notTrue + "<br>");

let notFalse = !(1 > 3);
document.write("!(1 > 3) returns: " + notFalse + "<br>");
