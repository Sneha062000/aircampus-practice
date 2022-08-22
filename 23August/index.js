let arrayOfObjects = [{name:"sneha",age:100},{name:"rajesh",age:50},{name:"sanjana",age:20}]
let filteredArrayOfObjects = arrayOfObjects.filter((a)=>{
    return a.age >30;
})
console.log(filteredArrayOfObjects)