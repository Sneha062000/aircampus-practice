//To find the factorial of a number
function fact(num){
    let fact = 1;
    for(let i = num; i>0; i--){
        fact*=i;   
     }
     return fact;
}
console.log(fact(5));


//arrow function
let sum = (a, b) => {
    let sum = a + b;
    return sum;
}

console.log(sum(2,3)); 


let sumofsquareofDigits = (num) => {
    let sum = 0;
    while(num !=0){
        let rem=num %10;
        sum += rem**2;
        num = Math.floor(num/10);
    }
    return sum;
}

let ans = sumofsquareofDigits(12);
console.log(ans);
console.log(sumofsquareofDigits(12345))
console.log(sumofsquareofDigits(67890))
console.log(sumofsquareofDigits(0987654321))