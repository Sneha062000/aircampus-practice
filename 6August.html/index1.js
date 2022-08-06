// //Annonymous IIFE Arrow function
// let ans = ((num) => {
//     let sum = 0;
//     while(num != 0){
//         let rem = num %10;
//         sum +=rem**2;
//         num = Math.floor(num/10);   
//     }
//     return sum;
// })(12);
// console.log(ans);


// function palindrome(str){
  
//     var len = str.length;
//         var mid = Math.floor(len/2);
    
//         for ( var i = 0; i < mid; i++ ) {
//             if (str[i] !== str[len - 1 - i]) {
//                 return false;
//             }
//         }
    
//         return true;
//     }
//     console.log(palindrome("arora"));