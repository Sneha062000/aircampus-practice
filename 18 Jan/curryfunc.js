// function curryfunc(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 console.log(a,b,c,d)
//             }
//         }
//     }
// }
// console.log(curryfunc(10)(20)(30)(40))

// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
// // console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
// // console.log( curriedSum(1)(2)(3) ); // 6, full currying


// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6