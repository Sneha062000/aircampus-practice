/*
 **
 ***
 ****
 ******/

/*let num=5;
for(let i=1;i<=num;i++){
  let stars = '';
  for(let j=1;j<=i;j++){
    stars  += '*';
  }
  console.log(stars);
}*/

/*
    1
   12
  123
 1234
12345 */
let num=5;
for(let i=1;i<=num;i++){
  let stars = ''
  for(let j=1;j<=num-i;j++){
    stars += ' '
  }
  for(let k=1;k<=i;k++){
    stars += k*1
  }
  console.log(stars)
}