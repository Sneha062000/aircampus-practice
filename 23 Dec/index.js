// function greet() {
//     console.log('Hello world');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');


// function greet() {
//   console.log("Hello world");
// }

// let intervalId = setTimeout(greet, 3000);
// console.log("Id: " + intervalId);



// // program to display time every 3 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      setTimeout(showTime, 3000);
// }

// // calling the function
// showTime();




// // program to stop the setTimeout() method

// let count = 0;

// // function creation
// function increaseCount(){

//     // increasing the count by 1
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// // clearTimeout
// clearTimeout(id);
// console.log('setTimeout is stopped.');



// // program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// // passing argument to setTimeout
// setTimeout(greet, 1000, 'John', 'Doe');



// // program to display a text using setInterval method
// function greet() {
//     console.log('Hello world');
// }

// setInterval(greet, 1000);




// Example 3: Use clearInterval() Method

// program to stop the setInterval() method after five times

let count = 0;

// function creation
let interval = setInterval(function(){

    // increasing the count by 1
    count += 1;

    // when count equals to 5, stop the function
    if(count === 5){
        clearInterval(interval);
    }

    // display the current time
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);



