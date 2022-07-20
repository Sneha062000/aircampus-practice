function createPerson(fullName,job,place){
   return {
        fullName:fullName,
        job  : job,
        place : place,

    };
}
let sneha =  createPerson('sneha','student','Nashik');
let karishma =  createPerson('karishma','student','Nashik');
console.log(sneha,karishma.job);