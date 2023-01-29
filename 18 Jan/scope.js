// Block scope
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

// {
//     var a=10;
// }
// console.log(a)

// {
//   let a = 10;
// }
// console.log(a);
// // a is not defined

// Function Scope
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:

// function myFunction() {
//   var carName = "Volvo"; 
//   console.log(carName);
//   // Function Scope
// }

// function myFunction() {
//   let carName = "Volvo";
//   console.log(carName);
//   // Function Scope
// }
// function myFunction() {
//   const carName = "Volvo";
//   console.log(carName);
//   // Function Scope
// }


// block scope 
// { 
//     var   a=10;
//     // const a=10;
//     // let a=10;
//     console.log(a)
// }
// console.log(a)


// global scope

// // var a=10;
// const a=10;
// // let a=10;
// function func(){
//     console.log(a)
// }
// func() 
// // invoked the function
// console.log(a)

// function scope or local scope
// var a=10;
// function func(){
//     var b=10;
//     console.log(a);
//     console.log(b)
// }
// func()
// console.log(a);
// console.log(b)

// let a = 10;
// function func() {
//   let b = 10;
//   console.log(a);
//   console.log(b);
// }
// func();
// console.log(a);
// console.log(b);

// const a = 10;
// function func() {
//   const b = 10;
//   console.log(a);
//   console.log(b);
// }
// func();
// console.log(a);
// console.log(b);