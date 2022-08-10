//Recursion is a process of calling itself. A function that calls itself is called a recursive function.
//syntax
//function recurse() { 
    // function code recurse(); 
    // function code 
//} recurse();


function numbers(n){
    if(n > 5){
        return;
    }
    console.log(n);
    numbers(n + 1);
}

console.log(numbers(1));