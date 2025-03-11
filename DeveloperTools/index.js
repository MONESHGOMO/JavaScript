let name1 = "gomo";

console.log(name1);

console.warn("This is a warning message ");
console.info("This is a information message  ");
console.table({
  "name": "Gomo",
    "age": 20,
    "email": "gomo@example.com",
    "skills": [
    "Java",
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript"
],
    "projects": [
    {
        "title": "Retail Shop Billing Process",
        "description": "A Java-based micro project to automate the billing process in retail shops."
    },
    {
        "title": "Museum Chatbot",
        "description": "A chatbot-based ticket booking system for museums using Python, Flask, and Dialogflow."
    }
],
    "education": {
    "degree": "B.Tech in Information Technology",
    "year": 2026,
    "college": "XYZ University"
},
    "internship": {
    "position": "Web Technology Intern",
    "company": "ABC Tech",
    "status": "Ongoing"
}
}
)
/*
// undefined keyword in javascript

// In JavaScript, undefined is a primitive value automatically assigned to variables that have been declared but not assigned a value.
let x;
console.log(x); // Output: undefined


let x;
console.log(x); // Output: undefined

let user = { name: "Gomo" };
console.log(user.age); // Output: undefined

function doSomething() { }
console.log(doSomething()); // Output: undefined

*/


// Javascript is a loosely coupled language

var a;
console.log(a); // undefined
a = 10;
console.log(a);
a = "hello world";
console.log(a);

