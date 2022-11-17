// First order function
// First-order function is a function that doesn’t accept another function as an argument
//  and doesn’t return a function as its return value.

// const firstOrder = () => console.log("I am a first order function!");



// Higher-order function
// Higher-order function is a function that accepts another function as an argument or returns a function as a
//  return value or both.

// const firstOrderFunc = () =>
//   console.log("Hello, I am a First order function");
// const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);

// closures
// Functions alongs with its lexical scopes bunddles together form a closures

// A closure is the combination of a function and the lexical environment within which that function was declared.
//  i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

// Own scope where variables defined between its curly brackets
// Outer function’s variables
// Global variables
// Let's take an example of closure concept,

// function Welcome(a) {
//   var name = function (message) {
//     console.log(message + " " + a);
//   };
//   return name;
// }
// var myFunction = Welcome("sneha");
// myFunction("Welcome "); 
// myFunction("Hello"); 
// As per the above code, the inner function(i.e, name) has access to the variables in the outer function scope
// (i.e, Welcome) even after the outer function has returned.

