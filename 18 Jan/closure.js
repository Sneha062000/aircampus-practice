// function along its lexical scope bundels together to form a closure
// A closure is a feature that allows inner function to acess the outer scope

// function name1(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner()
// }
// name1()
// // console.log(name1())

function Counter(){
   let counter=0;

   function incresecounter(){
    return counter +=1;
   }
  return incresecounter
}
var counter=Counter()
console.log(counter())
console.log(counter())
console.log(counter());
console.log(counter());
console.log(counter());


// function Counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 