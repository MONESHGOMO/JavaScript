//  Question: Declare two variables a and b, assign them integer values, and print their sum

let givenNumber1 = 10;
let givenNumber2 = 20;

let sum = givenNumber1 + givenNumber2;

console.log("Sum of the give numbers are : " + sum);

// Question: Swap two variables without using a third variable.

let firstInput = 10;
let secondInput = 20;

function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("a : " + a + " b : " + b);
}

swap(firstInput, secondInput);

//  Question: Write a program to check if a number is even or odd.
var userInput = 10;
var divisor = 2;

if (userInput % divisor == 0) {
    console.log("The given number is even");
} else {
    console.log("The given number is odd");
}

//  Write a program to check whether a given year is a leap year or not.

var year = 1900;

var baseDivisor = 4;
var secondDivisor = 100;
var thirdDivisor = 400;

if (year % baseDivisor == 0) {
    if (year % baseDivisor == 0) {
        console.log("It is  a leap year");
        if (year % secondDivisor == 0) {
            if (year % thirdDivisor == 0) {
                console.log("It is a leap year ");
            }
            else {
                console.log("it is not a leap year ");
            }

        }
    }
    else {
        console.log("It is a leap year ");
    }
}
else {
    console.log("it is not a leap year ");
}

//  Question: Print numbers from 1 to 10 using a for loop.

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("============================================================")
// question create a function to print the sum of the two numbers

function addTwoNumbers(a, b) {
    return a + b;
}

var result = addTwoNumbers(10, 20);

console.log(result)

