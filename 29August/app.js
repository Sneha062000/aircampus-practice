//Object Prototypes


// function Person(first, last, age, ) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//   }
  
//   const myFather = new Person("Manoj", "Shinde", 50);
//   const myMother = new Person("Surekha", "Shinde", 48);
  
//   console.log("My father is " + myFather.age + ". My mother is " + myMother.age); 


function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  
  Person.prototype.nationality = "Marathi";
  
  const myFather = new Person("Manoj", "Shinde", 50);
  console.log("The nationality of my father is " + myFather.nationality); 

