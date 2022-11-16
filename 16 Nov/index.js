//  Call is a function that helps you change the context of the invoking function. In layperson's terms, 
// it helps you replace the value of this inside a function with whatever value you want.

// Apply is very similar to the call function. The only difference is that in apply you can pass an array
//  as an argument list.

// Bind is a function that helps you create another function that you can execute later with the new 
// context of this that is provided.


var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

console.log(obj.getX.bind(obj)());
console.log(obj.getX.call(obj));
 console.log(obj.getX.apply(obj));