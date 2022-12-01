// Have the function PowersofTwo(num) take the num parameter being passed which will be an 
// integer and return the string true if it's a power of two. If it's not return the string false. For 
// example if the input is 16 then your program should return the string true but if the input is 22 
// then the output should be the string false.


function PowersofTwo(num) {
  if (num < 2) {
    ans = "false";
  } else {
    while (num >= 2) {
      var test = num % 2;
      if (test == 0) {
        num = num / 2;
        ans = "true";
      } else {
        num = 0;
        ans = "false";
      }
    }
  }
  // code goes here
  return ans;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
console.log(PowersofTwo((124)));


function PowersofTwo(num) {
  // code goes here
  if (num === 1) return true;
  else {
    return num % 2 === 0 ? PowersofTwo(num / 2) : false;
  }
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
console.log(PowersofTwo((124)));