// //destructuring
// let nums=[1,2,3,4,5];
// let [num1,num2]=nums;
// console.log(num1,num2)


// //object destructuring
// let obj = {
//     name: "sneha shinde",
//     profession: "student in aircampus"
// };
// let { name, profession} = obj;
// console.log(name,profession)




let obj = {
    fname: "sneha",
    class: "javascript",
    profession: "student in aircampus",
};


let { fname, ...rest } = obj;
console.log(fname, rest);