//numbers from 1 to 5
// function numbers(n){
//     if(n > 5){
//         return;
//     }
//     console.log(n);
//     numbers(n + 1);
// }

// console.log(numbers(1));


//number from 1 to n

// function numbers(n,i=0){
//     if(i<=n){
//         console.log(i)
//         return numbers(n,i+1)
//     }
// }

// console.log(numbers(5))



//number from 1 to n in reverse order

// function numbers(n,i=1){
//     if(i<=n){
//         console.log(n)
//         return numbers(n-1)
//     }
// }

// console.log(numbers(5))


//factorial
let factorial = (n)=>{
    if(n===0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5))