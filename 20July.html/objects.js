// function createPerson(fullName,job,place){
//    return {
//         fullName:fullName,
//         job  : job,
//         place : place,

//     };
// }
// let sneha =  createPerson('sneha','student','Nashik');
// let karishma =  createPerson('karishma','student','Nashik');
// console.log(sneha,karishma.job);s



//factory method
function createCircle(radius = 1){
   return {
        radius: radius,
        draw: function(){
           return "drawing circle"
        },
    }
}
let circle =  createCircle(10)
console.log(circle.radius,circle.draw(),circle)