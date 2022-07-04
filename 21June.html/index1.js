
//Annonymous IIFE Arrow function
let ans = ((num) => {
    let sum = 0;
    while(num != 0){
        let rem = num %10;
        sum +=rem**2;
        num = Math.floor(num/10);
    }
    return sum;
})(12);
console.log(ans);