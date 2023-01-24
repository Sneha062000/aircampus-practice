//  Array Methods
// 1. map( )
// This method creates a new array with the results of calling a provided function on every element in this array.
// const arr = [1,2,3,4,5,6];
// const mapped = arr.map(element=>element+5);
// console.log(mapped);


// 2. filter( )
// This method creates a new array with only elements that passes the condition inside the provided function.


// 3. sort( )
// This method is used to arrange/sort array’s elements either in ascending or descending order.


// 4. forEach( )
// This method helps to loop over array by executing a provided callback function for each element in an array.

// const arr = [1,2,3,4];
// arr.forEach(element=>{
//     console.log(element)
// })


// 5. concat( )
// This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9,10];
// console.log(arr1.concat(arr2))

// 6. every( )
// This method checks every element in the array that passes the condition, returning true or false as appropriate.

// const arr=[1,2,3,4,5,6,7,8]

// const greaterFive=arr.every(num=>num>5);
// console.log(greaterFive)

// const lessNine = arr.every((num) => num < 9);
// console.log(lessNine);

// 7. some( )
// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

// const arr=[1,2,3,4,5,6];
// const greaterFive=arr.some(num=>num>5);
// console.log(greaterFive)

// 8. includes( )
// This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

// const arr=[1,2,3,4,5,6,7];
// console.log(arr.includes(2));
// console.log(arr.includes(8));

// 9. join( )
// This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

// const arr=["s","n","e","h","a"]
// console.log(arr.join(""))

// 10. reduce( )
// This method applies a function against an accumulator and each element in the array to reduce it to a single value.

// const arr=[1,2,3,4,5,6];
// const reduced=arr.reduce((total,current)=>total+current)
// console.log(reduced)

// 11. find( )
// This method returns the value of the first element in an array that pass the test in a testing function.

// const arr=[1,2,3,4,5,6,7,8]
// const found = arr.find(element=>element>6);
// console.log(found)


// 12. findIndex( )
// This method returns the index of the first element in an array that pass the test in a testing function.

// const arr=["sneha", "manoj", "shinde"]
// const indexFind = arr.findIndex(element=>element==="sneha");
// console.log(indexFind)

// 13. indexOf( )
// This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.

// const arr=["sneha", "manoj", "shinde"]
// const indexFinder = arr.indexOf("manoj");
// console.log(indexFinder)

// 14. fill( )
// This method fills the elements in an array with a static value and returns the modified array.

// const arr = new Array(4);
// console.log(arr.fill(10))

// 15. slice( )
// This method returns a new array with specified start to end elements.


// 16. reverse( )
// This method reverses an array in place. Element at last index will be first and element at 0 index will be last.


// 17. push( )
// This method adds one or more elements to the end of array and returns the new length of the array.


// 18. pop( )
// This method removes the last element from the end of array and returns that element.


// 19. shift( )
// This method removes the first element from an array and returns that element.


// 20. unshift( )
// This method adds one or more elements to the beginning of an array and returns the new length of the array.


// spread(...)operator  just for example written here
// let arr=[1,2,3,4,5];
// console.log(...arr)

// flat
// let arr=[1,[2,3],[4,5]]
// console.log(arr.flat())

// let arr=[1,[2,3],[4,5]]
// console.log(...arr.flat())

// flatten an array using flat function .can use any inbuild function.

// let arr=[1,2,3,[4,5]];
// let result=[];
// for(let i=0;i<=arr.length;i++){
//     if(Array.isArray(arr[i])){

//     result.push(...arr[i]);
// }else{
//     result.push(arr[i])
// }
// }
// console.log(result)

let arr=[1,[2,3],[4,5]];
let result=[];
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        result.push(...arr[i]);
    }else{
        result.push(arr[i])
    }
}
console.log(result)


