// function aircampus(n){
//     let original = n, count = 0, sum = 0;
//     let str = '';
//       while(n!=0){
//         n = Math.floor(n/10);
//         count++;
//       }
//       console.log(n);
//       n= original; 
//       while(n > 0) {
//         let digit = n % 10;
//         n = Math.floor(n/10);
//         sum += digit ** count;
        
//       }
//       console.log(n);
//       if(str == ''){
//         return '-1';
//       }else{
//         return str;
//       }
//     }
    
//     console.log(aircampus(123));
    

let n = 6;
let str = "";
for(let i = 1; i <= n ; i++){
  
    if(i%2 == 0){
      str = "0" + str 
    }else{
      str = "1" + str 
    }
  console.log(str);
}