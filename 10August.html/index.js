//callbacks
//A callback is a function passed as an argument to another function


const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);