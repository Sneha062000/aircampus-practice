//8 August class closures
//callback function
//higher order function

// var count = 1;
// function counter(){
//     count++;
//     console.log(count);
// }
// counter();
// counter();
// counter();


// var count = 1;
// function counter(){
//     let age = 10;
//     function check(){
//         console.log("inside checks",age,count);
//     }
//     check();
//     count++;
//     console.log(count);
// }
// counter();
// counter();
// counter();
// console.log(age);
// console.log(count);


// function counter(){
//     let count = 1;
//     return function(){
//         if(count % 3 ===0){
//         console.log("printing");
//         }
//         count +=1;
//     };
// }
// let count = counter();
// count();
// count();
// count();


// let count = 1;
// function counter(){
//     if(count % 3 === 0){
//     console.log("counting")
// }
// count+=1;
// }
// counter();
// counter();
// counter();

let username = "sneha";
let password = "1234";

function getCredentials(){
    return{
        username: username,
        password: password,
    };
}
console.log(getCredentials());
username= "shinde";
console.log(getCredentials());
