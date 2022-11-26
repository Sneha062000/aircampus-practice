// function FirstReverse(str) {
//   var arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }


// console.log(FirstReverse("I Love Code"));


// function FirstReverse(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }


// console.log(FirstReverse("I Love Code"));


// First Factorial
// function FirstFactorial(num) {
//   let factorial = 1;

//   for (let i = 1; i <= 4; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

// console.log(FirstFactorial("num"));




// Time Convert

function TimeConvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  var str = hours + ":" + minutes;
  return str;
}

console.log(TimeConvert(45));

