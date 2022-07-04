var day = 4;
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);


let c;
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const a = parseInt(prompt('Enter first number: '));
const b = parseInt(prompt('Enter second number: '));

switch(operator) {
    case '+':
        c = a+b;
        console.log(c);
        break;
    case '-':
        c = a-b;
        console.log(c);
        break;
    case '*':
        c = a*b;
        console.log(c);
        break;
    case '/':
        c = (a/b);
        console.log(c);
        break;

    default:
          console.log('Invalid operator');
          break;
}
