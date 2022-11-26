// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.country = country;
// }


// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);


// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();


// console.log(0.1 + 0.2 === 0.3);


// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);


// function foo() {
//   return;
//   {
//     message: "Hello World";
//   }
// }
// console.log(foo());


// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);


// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2[2] = 100;
// console.log(array2);

// var array3 = [, , ,];
// console.log(array3);



// const obj = {
//   prop1: function () {
//     return 0;
//   },
//   prop2() {
//     return 1;
//   },
//   ["prop" + 3]() {
//     return 2;
//   },
// };

// console.log(obj.prop1());
// console.log(obj.prop2());
// console.log(obj.prop3());



// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// console.log(-3 < -2 < -1)



// function printNumbers(first, second, first) {
//   console.log(first, second, first);
// }
// printNumbers(1, 2, 3);



// const printNumbersArrow = (first, second, first) => {
//   console.log(first, second, first);
// };
// printNumbersArrow(1, 2, 3);


// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));



// console.log(String.prototype.trimLeft.name === "trimLeft");
// console.log(String.prototype.trimLeft.name === "trimStart");



// console.log(10 == [10]);
// console.log(10 == [[[[[[[10]]]]]]]);



// console.log(10 + "10");
// console.log(10 - "10");



console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}