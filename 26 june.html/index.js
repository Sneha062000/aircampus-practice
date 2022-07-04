//Print sum of all the numbers in the given range.
sum=0;
 function addition(n,n1) {
     if(n<=n1){
        sum += n;
        return addition(n+1,n1);
     }
     return sum;
 }
 console.log(addition(5,10));


// Print all numbers in decending order
 function decendingOrder(a,b){
          if(a<=b){
          console.log(decendingOrder(a,b-1));
      }
  }
  decendingOrder(10,20);