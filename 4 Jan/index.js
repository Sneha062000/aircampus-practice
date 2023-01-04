// let fname = 'sneha';
// console.log(typeof fname);

// let fname=[1,2,3]
// let lname=[1,2,3]
// console.log(fname === lname)

// let fname='sneha'
// let lname='sneha'
// console.log(fname === lname)

// let fname=[1,2,3]
// let lname=fname
// console.log(fname === lname)

// let fname ='sneha manoj shinde'
// console.log(fname.substring(5,11))

// let fname = 'sneha'
// console.log(fname.replace('s','j'))

// let fname = 'sneha manoj shinde'
// console.log(fname.replaceAll('s','j'))

// let fname = 'sneha manoj shinde'
// console.log(fname.split())

// let fname = 'sneha manoj shinde'
// console.log(fname.split('manoj'))

//  let names ='sneha manoj shinde';
// //  console.log(names.substring(5,11));
// console.log(names.slice(5,11));

// let news = "hello sneha";
// let target = "sneha";
// console.log(news.includes(target));



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