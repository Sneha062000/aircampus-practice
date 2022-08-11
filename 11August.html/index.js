//Closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state.
//In JavaScript, closures are created every time a function is created, at function creation time.
//Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions,
// and in partial applications, currying, and other functional programming patterns

//outer function Counter returns the reference of inner function IncreaseCounter().
function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 