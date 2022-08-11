//11 August class
//what is callback and clousers
//callback is the root for building the closures


// Promise.resolve(1)
//   .then(() => console.log("promise1 resol"))
//   .catch((err) => console.log("catching 1 promise"));
// Promise.resolve(1).then(() => console.log("promise2"));
// Promise.resolve(1).then(() => console.log("promise3"));
// Promise.resolve(1).then(() => console.log("promise4"));
// Promise.resolve(1).then(() => console.log("promise1"));
// Promise.resolve(1).then(() => console.log("promise2"));
// Promise.resolve(1).then(() => console.log("promise3"));
// Promise.resolve(1).then(() => console.log("promise4"));
// Promise.resolve(1).then(() => console.log("promise1"));
// Promise.resolve(1).then(() => console.log("promise2"));
// Promise.resolve(1).then(() => console.log("promise3"));
// Promise.resolve(1).then(() => console.log("promise4"));
//console.log("end");


//classes ->multi paradigm programming language
//OOPs -> object oriented programming system
//functional programming
//class == function
//class is a syntactic sugar of function
//async await is a syntactic of promise

// function person(name,age){
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// const sneha = new person("sneha",10);
// const karishma = new person("karishma",10);


// class person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   getName(){
//     return this.name;
//   }
//   getAge(){
//     return this.age;
//   }
// }
// let sneha = new person("sneha",20);
// console.log(sneha.name,sneha.age);



//hoisting
// person();
// function person(){
//   console.log(person)
// }


// person();
// class person1{
//   constructor(){
//     console.log("person in class")
//   }
// }
// new person();
// function person(){
//   console.log("person in fn");
// }



//function declarations are hoisted but classes are not hoisted