//closures
//Closure is one of important concept in JavaScript. It is widely discussed and still confused concept.
//Closure means that an inner function always has access to the vars and parameters of its outer function, 
//  even after the outer function has returned.

// function makeFunc() {
//     const name = 'Sneha';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();



// function makeSubstraction(x) {
//     return function (y) {
//       return x - y;
//     };
//   }
  
//   const sub10 = makeSubstraction(10);
//   const sub5 = makeSubstraction(5);
  
//   console.log(sub10(2)); 
//   console.log(sub5(2)); 




// function Counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());




// function sum() {
//     let a = 0;
//     function increaseSum() {
//         return a = a + 2;
//     }
//     return increaseSum;
// }

// let x = sum();
// let a = 6;
// console.log(x()); 
// console.log(x()); 
// console.log(a); 




// function sayHello() {
//     var say = function() { 
//         console.log(hello);
//      }
//     let hello = 'Hello, world!';
//     return say;
//   }
//   var sayHelloClosure = sayHello(); 
//   sayHelloClosure(); 