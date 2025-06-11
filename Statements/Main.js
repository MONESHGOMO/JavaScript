// switch case :


let day = 3
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "wednesday";
        break;
    default:
        dayName = "Weekend";
}
    
console.log(dayName)

// loops

// for -of 
for (const char of "Hello") {
    console.log(char)
}

const fruits = ["apple", "mango", "banana"];

for (const fruit of fruits) {
    console.log(fruit + " ");
}

//   for-in

const object = { a: 1, b: 2 };

for (const key in object) {
    console.log(`${key}:${object[key]}`)
}

//  for loop

for (let i = 0; i < 10; i++){
    console.log(i)
}


// let count = 5;

// while (count > 0) {
//     console.log("hi")
//     count--;
// }
let count = 5;

while (count > 0) {
    console.log("hi");
    count--;
}