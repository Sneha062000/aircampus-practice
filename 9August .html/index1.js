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


function counter(){
    let count = 1;
    return function(){
        if(count % 3 ===0){
        console.log("printing");
        }
        count +=1;
    };
}
let count = counter();
count();
count();
count();

