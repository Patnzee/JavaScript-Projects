function getReceipt() {
    // Initialize the receipt text and total price
    let text1 = "<h3>You Ordered:</h3>";  
    let runningTotal = 0;
    let sizeTotal = 0;
    
    // 1. Determine selected pizza size and its price
    const sizeArray = document.getElementsByClassName("size");
    let selectedSize = null;
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";  // add selected size to receipt text
        }
    }
    // Set base price for the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;      // Personal Pizza costs €6
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;      // Small Pizza costs €8
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;     // Medium Pizza costs €10
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;     // Large Pizza costs €12
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;     // Extra Large Pizza costs €14
    }
    runningTotal = sizeTotal;  // start total with the size price
    
    // 2. Add meat toppings prices
    let meatTotal = 0;
    const selectedMeat = [];  
    const meatArray = document.getElementsByClassName("meat");  // or "meats" depending on your HTML
    for (let j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            text1 += meatArray[j].value + "<br>";  // add each selected meat to receipt text
        }
    }
    const meatCount = selectedMeat.length;
    meatTotal = meatCount * 1.5;  // Each meat topping costs €1.50
    runningTotal += meatTotal;
    
    // 3. Add vegetable toppings prices
    let vegTotal = 0;
    const selectedVeg = [];
    const vegArray = document.getElementsByClassName("veggies");  // or appropriate class name in your HTML
    for (let k = 0; k < vegArray.length; k++) {
        if (vegArray[k].checked) {
            selectedVeg.push(vegArray[k].value);
            text1 += vegArray[k].value + "<br>";  // add each selected veggie to receipt text
        }
    }
    const vegCount = selectedVeg.length;
    vegTotal = vegCount * 1;  // Each vegetable topping costs €1.00
    runningTotal += vegTotal;
    
    // 4. Display the itemized receipt and total price
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = 
        "<h3>Total: €" + runningTotal.toFixed(2) + "</h3>";
        // toFixed(2) formats the number with 2 decimal places (cents):contentReference[oaicite:0]{index=0}
}
