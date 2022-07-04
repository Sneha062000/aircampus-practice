// for(let row=5;row>=1;row--){
//     let stars = ''
//     for(let col=5;col>=row;col--){
//         stars += ' ';
//       stars += col
//     }
//     console.log(stars)
//   }

let num=5;
for(let row=5;row>=1;row--){
  let stars = ''
  for(let col=row;col<=5;col++){
    stars += ' ';
    stars += col
  }
  console.log(stars)
}