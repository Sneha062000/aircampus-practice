// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state. 
// In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.

// Lexical scoping

function init() {
  var name = "Sneha"; 
  // name is a local variable created by init
  function displayName() {
  // displayName() is the inner function, a closure
    console.log(name); 
    // use variable declared in the parent function
  }
  displayName();
}
init();


// Scoping with let and const

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);



// Closures

function makeFun() {
  const name = "sneha";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFun = makeFun();
myFun();



// Closure Scope chain

// Every closure has three scopes:

// 1. Local scope (Own scope)
// 2. Enclosing scope (can be block, function, or module scope)
// 3. Global scope