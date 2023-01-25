// function call(name) {
//   console.log(`Hello, ${name}`);
// }

// function call1(callback) {
//   const name = "sneha";
//   callback(name);
// }

// call1(call);


function display(something){
    console.log(something)
}

function call(num,num1,callback){
    let sum = num+num1;
    callback(sum)
}
console.log(5,5)