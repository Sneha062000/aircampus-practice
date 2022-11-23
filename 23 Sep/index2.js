// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// Async Syntax

async function myFunction() {
  return "Hello";
}

function myFunction() {
  return Promise.resolve("Hello");
}



function myDisplayer(some) {
  console.log(some);
}

async function myFunction() {return "Hello";}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


// Await Syntax
// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues


async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve("Hello Sneha !");
  });
  console.log(await myPromise);
}

myDisplay();