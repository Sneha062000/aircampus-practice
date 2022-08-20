
//apply() Method
//The apply() method is similar to the call() method
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.


// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName:"Sneha",
//     lastName: "Shinde"
//   }
  
//   console.log(person.fullName.apply(person1)); 



// const person = {
//     fullName: function(city) {
//       return this.firstName + " " + this.lastName + "," + city ;
//     }
//   }
  
//   const person1 = {
//     firstName:"Sneha",
//     lastName: "Shinde"
//   }
  
//   console.log(person.fullName.apply(person1, ["Nashik"])); 




//call method
// const person = {
//     fullName: function(city) {
//       return this.firstName + " " + this.lastName + "," + city;
//     }
//   }
  
//   const person1 = {
//     firstName:"Sneha",
//     lastName: "Shinde"
//   }
  
//   const person2 = {
//     firstName:"Rajesh",
//     lastName: "Shinde"
//   }
  
//   console.log(person.fullName.call(person2, "Nashik")); 