//Object Prototypes
//All JavaScript objects inherit properties and methods from a prototype.


function Person(first, last,  ) {
  this.firstName = first;
  this.lastName = last;
}

const myFather = new Person("manoj", "shinde");
const myMother = new Person("surekha", "shinde");

console.log(
  "My father is " +
    myFather.firstName +
    myFather.lastName +
    ". My mother is " +
    myMother.firstName +
    myMother.lastName
); 