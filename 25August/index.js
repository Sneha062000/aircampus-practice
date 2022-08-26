//conditional statements
//syntax
//if(condition){
 //   block of code to executed
//}


//if statement
// let age
// if(age<18){
//     console.log("you can vote")
// }
// console.log("you can't vote")


//syntax
//if(condition){
 //   block of code to executed if the condition is true
//}else{
//block of code to be executed if the condition is false
//}


//if else statement
// let a=10, b=20;
// if(a>b){
//     console.log("a is greater than b")
// }else{
//     console.log("b is greater than a")
// }


//syntax
//if(condition){
 //   block of code to executed if the condition is true
//}else if(condition){
//block of code to be executed if the condition is false
//}else{
//block of code to be executed if both the conditions is false
//}

// else if statement
// let a=20, b=20;
// if(a>b){
//     console.log("a is greater than b")
// }else if(b>a){
//     console.log("b is greater than a")
// }else{
//     console.log("a is equals to b")
// }

//else if second example
// let name="sneha"
// if(name=="sneha"){
//     console.log("my name is sneha")
// }else if(name=="karishma"){
//     console.log("my name is karishma")
// }else if(name=="tejal"){
//     console.log("my name is tejal")
// }else{
//     console.log("no match")
// }


//switch statement
// let name = "sneha"
// switch ("sneha"){
//     case "sneha" : 
//     console.log("my name is sneha");
//     break;
//     case "karishma" : 
//     console.log("my name is karishma");
//     break;
//     case "tejal" : 
//     console.log("my name is tejal");
//     break;
//     default : 
//     console.log("no match");
//     break;
// }



//loops


//for loop
//syntax
//for([counter initialization];[condition];counter update){
  //  statement to be executed
//}

// for(let i=1;i<=9;i++){
//     console.log(i)
// }



//syntax
//while(condition){
//block of code to be executed
//}

//while
// let i=0;
// while(i<=9){
//     console.log(i)
//     i++;
// }


//do{
//    code to be executed
//}
//while(condition)

// let i=1;
// do{
//     console.log(i)
//     i++;
// }
// while(i<=9)


// let arr = [[1,2,3],[4,5,6],[7,8,9]]

// let n = arr.length

// for(let i=0; i<n; i++){

//     let newArray = arr[i]
//     console.log("newArray" , newArray)
//     for(let j=0; j<newArray.length; j++){
//         console.log(newArray[j]);
//     }

// }


//Map, reduce, and filter are all array methods in JavaScript.
// The map() method is used for creating a new array from an existing one, 
//applying a function to each one of the elements of the first array.
// Syntax
// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[, thisArg])

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled);



// filter creates a new array by removing elements that don't belong. 

// Syntax
// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])

// const students = [
//     { name: 'Sneha', grade: 96 },
//     { name: 'Karishma', grade: 84 },
//     { name: 'Tejal', grade: 100 },
//     { name: 'Priya', grade: 65 },
//     { name: 'Sakshi', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   console.log(studentGrades);



// reduce , on the other hand, takes all of the elements in an array and reduces them into a single value.
//Syntax
//arr.reduce(callback[, initialValue])

// var array = [1,2,3,4,5];
// let answer = array.reduce((totalResult,currValue)=>     
//              {return totalResult*currValue;});
// console.log(answer);

// console.log("The answer should be doubled")
// let answer2 = array.reduce((totalResult,currValue)=>
//            {return totalResult*currValue;},2);
// console.log(answer2);

// console.log("The answer should be tripled")
// let answer3 = array.reduce((totalResult,currValue)=>
//            {return totalResult*currValue;},3);
// console.log(answer3);


// var array = [175,50,25];
// let answer = array.reduce((totalResult,currValue)=>     
//              {return totalResult-currValue;});
// console.log(answer);



