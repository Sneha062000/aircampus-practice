/*let n=5;
for(let row=1;row<=n;row++){
  let stars = '';
  for(let col=1;col<=row;col++){
    stars += ' '
    stars  += col;
  }
  console.log(stars);
}*/

/*let n=5;
for(let row=1;row<=n;row++){
  let stars = '';
  for(let col=1;col<=row;col++){
    stars += ' ';
    stars  += row;
  }
  console.log(stars);
}*/

for(let row=5;row>=1;row--){
  let stars = ''
  for(let col=5;col>=row;col--){
    stars += col
  }
  console.log(stars)
}

// let n=5, count = 1;
// let star = "";
// for(let row=0;row<n;row++){
//   for(let col=0;col<=row;col++){
//     star  += count;
//     star += " ";
//     count++;
//   }
//   star += "\n";
// }
// console.log(star);

 