// Call: The call() method invokes a function with a given this value and arguments provided one by one
// var Fullname1 = { firstName: "sneha", lastName: "shinde" };
// var Fullname2 = { firstName: "sanjana", lastName: "shinde" };

// function display(name1, name2) {
//   console.log(
//     name1 + " " + this.firstName + " " + this.lastName + ", " + name2
//   );
// }

// display.call(Fullname1, "Hello", "How are you?"); // Hello John Rodson, How are you?
// display.call(Fullname2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?



// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
// invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?


// closures
// function Welcome(name) {
//   var name1 = function (message) {
//     console.log(message + " " + name);
//   };
//   return name1;
// }
// var myFunction = Welcome("sneha");
// myFunction("Welcome "); //Output: Welcome John
// // myFunction("Hello Mr."); //output: Hello Mr.John


// function names() {
//   const name = "sneha";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myNames = names();
// myNames();


