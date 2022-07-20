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
// function createCircle(radius = 1){
//    return {
//         radius: radius,
//         draw: function(){
//            return "drawing circle"
//         },
//     }
// }
// let circle =  createCircle(10)
// console.log(circle.radius,circle.draw(),circle)


//constructor method
function Circle(radius){
   // console.log("before setting values",this);
    this.radius=radius;
    this.draw=function(){
        return "drawing circle";
    };
    return this;
}
let circle =  new Circle(1);
console.log(circle,circle.draw());

let circle1 =  new Circle(200);
console.log(circle1,circle.draw());