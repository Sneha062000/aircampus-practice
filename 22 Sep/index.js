// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.middleName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName:"sneha",
//   middleName:"manoj",
//   lastName: "shinde"
// }

// console.log(person.fullName.apply(person1));


// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"sneha",
//   lastName: "shinde"
// }

// const person2 = {
//   firstName:"sanjana",
//   lastName: "shinde"
// }

// console.log(person.fullName.call(person2, "nashik", "India")); 



const person = {
  firstName: "sneha",
  lastName: "shinde",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "rajesh",
  lastName: "shinde",
};

let fullName = person.fullName.bind(member);

console.log(fullName());