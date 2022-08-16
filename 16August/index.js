

// Person();
// class Person1 {
//   constructor() {
//     console.log("person in class");
//   }
// }

// new Person1();

// function Person() {
//   console.log("person in fn ");
// }



// function declarations are hoisted but classes are not hoisted

// class -> it is a blue print
// objects -> instance of class or real time entity

// class Human {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   eat() {
//     console.log("eating ");
//   }

//   sleep() {
//     console.log("sleeping");
//   }

//   think() {
//      console.log("thinking");
//     return "thinking";
//   }
// }

// let sneha = new Human("sneha", 10, "Female");
// console.log(sneha, sneha.think());




Promise.resolve(1)
  .then(() => console.log("promise1 resol"))
  .catch((err) => console.log("catching 1 promise"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
Promise.resolve(1).then(() => console.log("promise1"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
Promise.resolve(1).then(() => console.log("promise1"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
Promise.resolve(1).then(() => console.log("promise1"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
console.log("end");
