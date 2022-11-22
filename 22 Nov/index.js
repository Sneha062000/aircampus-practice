// outer function
function greet() {
  // variable defined outside the inner function
  let name = "Sneha";

  // inner function
  function displayName() {
    // accessing name variable
    return "Hi" + " " + name;
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

function sayHello() {
  var say = function () {
    console.log(hello);
  };
  // Local variable that ends up within the closure
  var hello = "Hello, world!";
  return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure();
