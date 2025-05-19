// https://www.geeksforgeeks.org/javascript-error-and-exceptional-handling-with-examples/


/*
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("cannot divide by zero");
    }
    console.log(result);
}
catch (error) {
    console.error("Error occurred:", error.message);
}
finally {
    console.log("Execution completed");

}

*/

try {

    let numerator = prompt("Enter the numerator");
    let denominator = prompt("Enter the denominator");


    numerator = parseFloat(numerator);
    denominator = parseFloat(denominator);

    if (isNaN(numerator) || isNaN(denominator)) {
        throw new Error("Invalid numbers entered");
    }

    if (denominator === 0) {
        throw new Error("Cannot divide by zero.");
    }
    let result = numerator / denominator;
    console.log(result);
    alert(`Result: ${result}`);
}
catch (error) {
    console.error("Error : ", error.message);
    alert("Error: " + error.message);
}
finally {
    console.log("Operation complete.");

}