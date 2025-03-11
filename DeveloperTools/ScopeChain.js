// scope chain is direclty related to lexical environment

/*
 1. Scope is directly depended on the lexical environment
 2.Visula example 4:30 (https://youtu.be/uH-tVP8MUs8?si=OWEEf_zfTWzCBLjK

whenever a execution context is created at the same time an lexcial environment is created ( a local memory along with the lexical environment parent ) 

lexical : In-Sequence 


 */

function a() {
    var b = 10;
    c();
    function c() {

    }
}


a();
console.log(b); // not defined

/*

In the above code the  the lexcial environment parent of c() is a() and the lexical environment parent of a() is the global execution context
lexcial environment parent of c() is a() , at the same time the reference of c() lexical environment is pointing to a()  and a( ) is pointing to the global execution context 

*/

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}

a();  // output : 10 and also the example for scope chain

