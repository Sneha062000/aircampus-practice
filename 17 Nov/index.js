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



// The event loop

// 1  JavaScript has a runtime model based on an event loop, which is responsible for executing the code, 
// collecting and processing events, and executing queued sub-tasks. This model is quite different from 
// models in other languages like C and Java.

// 2 The Event Loop is a queue of callback functions. When an async function executes, the callback function is 
// pushed into the queue. The JavaScript engine doesn't start processing the event loop until the async function
//  has finished executing the code. Note: It allows Node.js to perform non-blocking I/O operations even though 
//  JavaScript is single-threaded.


// Promises
// Promises are used to handle asynchronous operations in JavaScript.
// They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. 
// In other words also, we may say that, promises are the ideal choice for handling multiple callbacks at the same time,
// Benefits of Promises 
// 1 Improves Code Readability
// 2 Better handling of asynchronous operations
// 3 Better flow of control definition in asynchronous logic
// 4 Better Error Handling

// A Promise has four states: 
// 1 fulfilled: Action related to the promise succeeded
// 2 rejected: Action related to the promise failed
// 3 pending: Promise is still pending i.e. not fulfilled or rejected yet
// 4 settled: Promise has fulfilled or rejected


// A promise can be created using Promise constructor.
// Syntax
var promise = new Promise(function(resolve, reject){
     //do something
});

var promise = new Promise(function(resolve, reject) {
  const x = "sneha";
  const y = "sneha"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
});
   
promise.
    then(function () {
        console.log('Success, You are a sneha');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });


// Promise Consumers
// Promises can be consumed by registering functions using .then and .catch methods.

// 1. then() 
// then() is invoked when a promise is either resolved or rejected. It may also be defined as 
// a career which takes data from promise and further executes it successfully.

// Parameters: 
// then() method takes two functions as parameters. 

// First function is executed if promise is resolved and a result is received.
// Second function is executed if promise is rejected and an error is received. 
// (It is optional and there is a better way to handle error using .catch() method    

var promise = new Promise(function (resolve, reject) {
  resolve("Sneha");
});

promise.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

// Promise rejected
var promise = new Promise(function(resolve, reject) {
    reject('Promise Rejected')
})
   
promise
    .then(function(successMessage) {
        console.log(successMessage);
    }, function(errorMessage) {
       //error handler function is invoked
        console.log(errorMessage);
    })


//  catch() 

// catch() is invoked when a promise is either rejected or some error has occurred in execution. 
// It is used as an Error Handler whenever at any step there is a chance of getting an error.

// Parameters: 
// catch() method takes one function as parameter. 

// Function to handle errors or promise rejections.(.catch() method internally calls .
// then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )
// Syntax:

.catch(function(error){
        //handle error
    })    


 var promise = new Promise(function (resolve, reject) {
   reject("Promise Rejected");
 });

 promise
   .then(function (successMessage) {
     console.log(successMessage);
   })
   .catch(function (errorMessage) {
     //error handler function is invoked
     console.log(errorMessage);
   });   