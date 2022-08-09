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


var count = 1;
function counter(){
    let age = 10;
    function check(){
        console.log("inside checks",age,count);
    }
    check();
    count++;
    console.log(count);
}
counter();
counter();
counter();
console.log(age);
console.log(count);
