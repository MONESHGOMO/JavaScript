/*

window actually a  global object is created 
global execution context  along with  ( this ) keyword

1.Javascript is not only running in browser also in server by using javascript engine
  for chrome -> V8 engine (they are the responsibility for global object creation)
2. When we create a execution context along with we create the [ this ] keyword even for the functional invocations
   in the global level [ this ] points to global object here (window) incase of browser

[imp] this == window (true)
*/



// global space

var a = 10;

// function is a global sapce but myName is not a global space 
function name() {
    let myName = "Gomo";
}

console.log(window.a); // 10; here we are refering window.a (which means it is a global space)
console.log(a)
console.log(this.a); // this is  equal to the functionality of  this