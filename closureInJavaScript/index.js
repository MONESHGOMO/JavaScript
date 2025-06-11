// function closureExample() {
//     var a = 10;
//     function b() {
//         console.log(a);
//     }
//     return b;
// }

// var result = closureExample();
// result();
// console.log(result)

/*
function closureExample() {
    var a = 10;
    return function b() {
        console.log(a);
    }

}

var result = closureExample();
result();
console.log(result)

/*

1.What is closure in javascript ?

  A collection of function and its lexical scope is called closure 
  and what is the use case :
  when to use : 
  when to not use :
  
*/


// closure interview questions :
 
function x(){
  var i = 1;
  setTimeout(function () {  // this function is stored in a callback function and they set the time to execute,if the set time meets the assigned time the function is back to callstack and they used to print
    console.log(i);
  }, 6000);
  console.log("vanakam JavaScript"); // first the print statement is printed in the console 
  // but why ? ans : explanation of Time never wait for anyone and it is similar to javascript

}

x();