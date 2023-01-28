// **************************first order function
// first order function is a function that doesn't accept another function as an argument or dosen't return any return value
// const firstorder = () => console.log("i am a first order function");


//****************************Higher order function
// Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
// const firstorder=()=>
// console.log("i am a first order function")
// const higherorder=(Returnfirstorder)=>Returnfirstorder();
// higherorder(firstorder)


// *********************************IIFE (Immediately Invoked Function Expression)
// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,
// (function () {
//     var a ="IIFE";
//     console.log(a)
// })();
// console.log(a)


// ***********************regular function
// We can write the regular function in two ways, i.e Function declaration, and Function expression.

// ******function declaration
// function add(a,b){
// return a+b;
// }
// console.log(add(3,4))

// *******function expression
// const sum=function(a , b){
//     return a + b;
// }
// console.log(sum(4+2))

// let square= function(x){
//     return x*x
// }
// console.log(square(2))


// ***********************arrow function
// Arrow function is introduced in ES6 and also known as fat arrow function.
// let square=(x)=>{
//     return x*x
// }
// console.log(square(2))