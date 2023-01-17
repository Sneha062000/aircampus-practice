// function
function call(name, callback) {
  console.log(name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument



// function add() {
//   let name = 'sneha';
//   function displayName() {
//       return 'Hi' + ' ' + name;
//   }
//   return displayName;
// }
// const a1 = add();
// console.log(a1); 
// console.log(a1()); 



// function calculate(x) {
//   function multiply(y) {
//       return x * y;
//   }
//   return multiply;
// }

// const multiply3 = calculate(3);
// const multiply4 = calculate(4);

// console.log(multiply3); 
// console.log(multiply3()); 

// console.log(multiply3(6)); 
// console.log(multiply4(2)); 



// let a = 0;
// function sum() {
//     function increaseSum() {
//         return a = a + 1;
//     }
//     return increaseSum;
// }

// const x = sum();
// console.log(x()); 
// console.log(x()); 
// console.log(x()); 
// a = a + 1;
// console.log(a); 



// function sum() {
//   let a = 0;
//   function increaseSum() {
//       return a = a + 1;
//   }
//   return increaseSum;
// }

// let x = sum();
// let a = 6;
// console.log(x()); 
// console.log(x()); 
// console.log(a); 


var obj = {
  a:10,
  b:function(){
    return this.a;
  }

};
console.log(obj.b.bind(obj)());
console.log(obj.b.call(obj));
console.log(obj.b.apply(obj));