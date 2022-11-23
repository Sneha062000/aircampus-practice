// promises


// Promise Syntax

let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);



// Example Using Callback
setTimeout(function () {
  myFunction("Hello sneha !");
}, 3000);

function myFunction(value) {
  console.log(value);
}


const MyPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("Hello sneha !");
  }, 3000);
});

MyPromise.then(function (value) {
 console.log(value);
});