//***********************************************Objects***************************************************

// In JavaScript, objects are king. If you understand objects, you understand JavaScript.

// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects


// object creation
// const person = { 
//     name: 'sneha',
//     age: 20
// };
// console.log(typeof person)




// Using dot Notation
// const person = {
//   name: "sneha",
//   age: 20,
// };

// accessing property
// console.log(person.name);



// Using bracket Notation
// const person = {
//   name: "sneha",
//   age: 20,
// };

// accessing property
// console.log(person["name"]); 


// Nested Objects
// nested object
const student = { 
    name: 'sneha', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.math); // 75



const person = {
  name: "Sneha",
  age: 30,
  // using function as a value
  greet: function () {
    console.log("hello");
  },
};

person.greet();
