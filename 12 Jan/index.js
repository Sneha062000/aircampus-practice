// ****************************************************************Callback hell
// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
// Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects
// the readability and maintainability of the code.

// *******************************Solutions to callback hell
// There are four solutions to callback hell:

// Write comments
// Split functions into smaller functions
// Using Promises
// Using Async/await

// *******************************************Constructing a callback hell
// Let’s imagine we’re trying to make a burger. To make a burger, we need to go through the following steps:

// Get ingredients (we’re gonna assume it’s a beef burger)
// Cook the beef
// Get burger buns
// Put the cooked beef between the buns
// Serve the burger

// const makeBurger = nextStep => {
//   getBeef(function (beef) {
//     cookBeef(beef, function (cookedBeef) {
//       getBuns(function (buns) {
//         putBeefBetweenBuns(buns, beef, function(burger) {
//           nextStep(burger)
//         })
//       })
//     })
//   })
// }

// Make and serve the burger
// makeBurger(function (burger) => {
//   serve(burger)
// });
