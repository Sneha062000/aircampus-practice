// 1.Print factorial of a number using recursion.
function factorial(n) {
    if(n<=1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));


  //Given a number n, print numbers from 1 to n using recursion
  function x(a,n){
        if(a<n){
            console.log(a);
             return x(a+1,n);
        }
        return a;
     }
     console.log(x(1,10));