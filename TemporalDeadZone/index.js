/*



Type	                                    Hoisted?	    Value Before Initialization

var	                                        ✅ Yes	            undefined
let	                                        ❌ No	        ❌ ReferenceError
const	                                    ❌ No	        ❌ ReferenceError
Function   Declaration	                    ✅ Yes	        Can be used before declaration
Function   Expression (var, let, const)	    ❌ No	        ❌ ReferenceError



*/


/*
greet(); // ✅ Works because the function is hoisted

function greet() {
    console.log("Hello, World!");
}
  */

// Output : Hello, World!

let a = 10;
console.log(a);
var b = 100;

/*

1. Here variable ( a ) is allocated in the separate memory space when compared to global and we can't able to access these variables before we initialize the value to the variable 
2. but the variable ( b ) is allocated in the  global scope and global memory


[ Timeporal Zone ]

The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted and when it is initialized with a value.


*/

var c = 10;
var c = 10;
// output : no error ( why incase of using var here )

//      let d = 10;
//      let d = 10;
// error occur : Syntax error ( why incase of using let here )


const b = 10;

// similar to let but even more strict  ( similar to final keyword in java ) why ? final or const must be initialized while declaration at the same line


/*

Type error : Assignmwent to a constant variable 
example : 
  const a=10;
  a=11; // type error 

Syntax error :

(1)
example :

const a;
a=10; 

output : Syntax error 

(2)

let a=10;
let a=11;

output : Syntax error 


Reference Error :

let a=10;

console.log(a);
console.log(b); // error L reference error : but why dued to temporal deadzone
let b=330;

***

when to use :

1.const 
2.let (where ever possible)
3.var  ( don't recommended to use )

*/


// to avoid temporal deadzone push all declaration and initialization  at the top 