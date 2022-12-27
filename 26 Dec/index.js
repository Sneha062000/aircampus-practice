// function test(arg1, arg2) {
//   console.log(this.num, arg1, arg2); // 100, 10, 20
// }

// test.call({ num: 100 }, 10, 20);



// function test(...arguments) {
//   console.log(this.num, arguments); //100, [1,2,3]
// }

// test.apply({ num: 100 }, [1, 2, 3]); 


// function test(arg){
//  console.log(this.number, arg);
// }

// let bindedFn = test.bind({number: 99}, "argument");

// bindedFn(); // 99, "argument"




// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };
// console.log(person.fullName.call(person1)); 



// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(person.fullName.apply(person1));



// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person.fullName.bind(member);

// console.log(fullName())



const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();
function myFunction(){
  console.log(add())
}



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