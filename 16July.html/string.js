let fname = 'sneha';
console.log(typeof fname);


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

// let email ="sneha@gmail.com";
// if(email.endsWith("@gmail.com")){
//     console.log("valid email")
// }else{
//     console.log("invalid email")
// }

// let mobile_no = '9712345667';
// if(mobile_no.length == 10){
//     console.log("valid no")
// }else{
//     console.log("invalid no")
// }


// let names ="sneha";
// let reversedName = "";
// for(let i=names.length -1; i>=0; i--){
//     reversedName += names[i];
// }
// console.log(reversedName);

// let names = "my name is sneha";
// console.log(names.match(/is/));

// let word1 = 'god';
// let word2 = 'dog';
// if(word1.split('').sort().join('')==word2.split('').sort().join('')){
//     console.log('anangram')
// }else{
//     console.log('not an anagram')
// }



// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ];
  
//   // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
//   let top = 0,bottom = 3, left = 0, right = 3, direction = 0;
  
//     while(left <= right && top<=bottom) {
//       if(direction == 0) {
//           for(let i=left; i<=right; i++) {
//               console.log(matrix[top][i]);
//           }
//           top += 1;
//           direction = 1;
//       }
//       if(direction == 1) {
//         for(let i=top; i<=bottom; i++) {
//             console.log(matrix[i][right]);
//         }
//         right -= 1;
//         direction = 2;
//     }

//     if(direction == 2) {
//         for(let i=right; i>= left; i--) {
//             console.log(matrix[bottom][i]);
//         }
//         bottom -= 1;
//         direction = 3;
//     }

//     if(direction == 3) {
//         for(let i=bottom; i>=top; i--) {
//             console.log(matrix[i][left]);
//         }
//         left += 1;
//         direction = 0
//     }
//   }
