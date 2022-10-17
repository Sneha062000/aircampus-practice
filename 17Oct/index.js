let counter = 0;

// Function to increment counter
function add() {
//   let counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();
add();
add();

// The result is not 3 because you mix up the globaland local counter
console.log("The counter is: " + counter);
