
    
    for(let row=1; row<=5; row++) {
      let stars = '';
      for(let col=row; col<=5; col++) {
        stars += col;
      }
      for(let i=1; i<row; i++) {
        stars += i;
      }
      console.log(stars);
    }
  
// let stars = "";
// for(let row = 1; row <= 6 ; row++){
  
//     if(row%2 == 0){
//       stars = "0" + stars 
//     }else{
//       stars = "1" + stars 
//     }
//   console.log(stars);
// }