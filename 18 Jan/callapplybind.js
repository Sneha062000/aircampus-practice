// var employee1 = { firstName: "sneha", lastName: "shinde" };
// var employee2 = { firstName: "sanjana", lastName: "shinde" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// console.log(invite.call(employee1, "Hello", "How are you?")); // Hello John Rodson, How are you?
// console.log(invite.call(employee2, "Hello", "How are you?")); // Hello Jimmy Baily, How are you?



// var employee1 = { firstName: "sneha", lastName: "shinde" };
// var employee2 = { firstName: "sanjana", lastName: "shinde" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// console.log(invite.apply(employee1, ["Hello", "How are you?"])); // Hello John Rodson, How are you?
// console.log(invite.apply(employee2, ["Hello", "How are you?"])); // Hello Jimmy Baily, How are you?



var employee1 = { firstName: "sneha", lastName: "shinde" };
var employee2 = { firstName: "sanjana", lastName: "shinde" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
console.log(inviteEmployee1("Hello", "How are you?")); // Hello John Rodson, How are you?
console.log(inviteEmployee2("Hello", "How are you?")); // Hello Jimmy Baily, How are you?