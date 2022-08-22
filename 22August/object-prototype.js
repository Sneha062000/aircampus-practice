// let sneha = {
//     name:"sneha",
//     age: 100,
//   getData: function(){
//         console.log(`${this.name} is ${this.age} years old`);
//     },
// };
// let sanjana = {
//     name:"sanjana",
//     age:50,
//     getData:function(){
//         console.log(`${this.name} is ${this.age} years old`);
//     },

// };
// sneha.getData();
// sanjana.getData();



// let sneha = {
//     name:"sneha",
//     age: 100,
// };
//  let getData=function(){
//         console.log(`${this.name} is ${this.age} years old`);
// };
// let sanjana = {
//     name:"sanjana",
//     age:50,

// };

// getData.call(sanjana);
// getData.call(sneha);



// let sneha = {
//     name:"sneha",
//     age: 100,
// };
//  let getData=function(place){
//         console.log(`${this.name} is ${this.age} years old. I'm from ${this.place}`);
// };
// let sanjana = {
//     name:"sanjana",
//     age:50,

// };
// //function borrowing -> call
// //getData.call(sanjana);
// //getData.call(sneha, "Nashik");



// let sneha = {
//     name:"sneha",
//     age: 100,
// };
//  let getData=function(place){
//         console.log(
//             `${this.name} is ${this.age} years old. I'm from ${place}`
//             );
// };
// let sanjana = {
//     name:"sanjana",
//     age:50,

// };

// //bind
// let sanjanaData = getData.bind(sanjana, " Nashik");
// let snehaData = getData.bind(sneha, " Nashik");
// //sanjanaData();
// snehaData();
