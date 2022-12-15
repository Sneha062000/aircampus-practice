// Have the function ThreeSum(arr) take the array of integers stored in arr, and determine if 
// any three distinct numbers (excluding the first element) in the array can sum up to the first 
// element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three 
// sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should 
// return the string true if 3 distinct elements sum to the first element, otherwise your program 
// should return the string false. The input array will always contain at least 4 elements.


function ThreeSum(arr) {
  let target = arr.shift();
  let len = arr.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = i + 2; k < len; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return "true";
        }
      }
    }
  }
  return "false";
}

// keep this function call here
console.log(ThreeSum(([12, 3, 1, -5, -4, 7])));




// Alphabet Searching
// Have the function AlphabetSearching(str) take the str parameter being passed and 
// return the string true if every single letter of the English alphabet exists in the string, otherwise 
// return the string false. For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then your 
// program should return the string true because every character in the alphabet exists in this 
// string even though some characters appear more than once.
// Examples
// Input: "abcdefghijklmnopqrstuvwxyyyy"
// Output: false
// Input: "abc123456kmo"
// Output: false


function AlphabetSearching(str) {
str = str.toLowerCase();
for (let i = 97; i < 97 + 26; i++) {
let char = String.fromCharCode(i);
if (!str.includes(char)) {
return false;
}
}
return true;
}
 
// keep this function call here 
console.log(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyy"));
