// numeric literals

let age = 32;
let pi = 3.14;
let hex = 0xff;
let binary = 0b0101;
let octal = 0o755;

console.log("age:", age);
console.log("pi:", pi);
console.log("hex:", hex);
console.log("binary:", binary);
console.log("octal:", octal);

// string literals

let name = "gomo";
let greeting = 'hello gomo';
let message = `hi ,${name}!`;

console.log("name:", name);
console.log("greeting:", greeting);
console.log("message:", message);

// Boolean Literals

let isPassed = true;
let isFailed = false;

console.log("isPassed:", isPassed);
console.log("isFailed:", isFailed);

// Null literals

let student = null;

console.log("student:", student);

// undefined literals

let score;

console.log("score:", score);

// object literals

let person = {
    name: "gomo",
    age: 20,
    isStudent: true
};

console.log("person:", person);

// array literals

let fruits = ['apple', 'avacado', 'mango'];
console.log("fruits:", fruits);

// Regular Expression

let pattern = /hello/i;  // 'i' for case-insensitive
console.log("pattern:", pattern);


console.warn("==========================================================================================");



function greet(name) {
    console.log("hi", name);
}

greet("gomo");

const add = function (a, b) {
    return a + b;
}
console.log(add(5, 3));


// arrow function

const multiply = (x, y) => x * y;

console.log(multiply(4, 4));

function greet(user = "gomo") {
    return `welcome,${user}`;
}
 
console.log(greet());
console.log(greet("monesh"));


// Function Returning Another Function (Closure):


function order(x) {
    return function inner(y) {
        return x + y;
    };
}

const addFive = order(5);
console.log(addFive(3));

console.warn("==========================================================================================");


// JSON Object

let obj = { userName: "gomo", age: 20 };
let JSON_STRING = JSON.stringify(obj);

console.log(JSON_STRING);