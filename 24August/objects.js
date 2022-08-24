//objects
//In JavaScript, an object is a standalone entity, with properties and type

// Booleans can be objects 
// Numbers can be objects 
// Strings can be objects 
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects


// let person = {
//     firstName : "sneha",
//     lastName  : "shinde",
//     age     : 100,
//     place  : "Nashik"
//   };
  
//   console.log(person.firstName + " " + person.lastName + " I am  " + person.age + " years old  i live in " + person.place);




  let person = {
    firstName : "sneha",
    lastName  : "shinde",
    age     : 100,
    place  : "Nashik"
  };

  const x = person;
        x.age = 10;
  
  console.log(person.firstName + " " + person.lastName + " I am  " + person.age + " years old  i live in " + person.place);