//recursion


function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);




function factorial(x) {
  
  if (x === 0) {
    return 1;
  }
  else {
    return x * factorial(x - 1);
  }
}
const num = 3;
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}