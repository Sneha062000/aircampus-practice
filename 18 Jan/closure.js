// function along its lexical scope bundels together to form a closure
// A closure is a feature that allows inner function to acess the outer scope

function name1(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner()
}
name1()
// console.log(name1())