function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("manoj", "shinde", 50, "black");
const myMother = new Person("Surekha", "shinde", 48, "brown");

console.log("My father is " + myFather.age + ". My mother is " + myMother.age);
