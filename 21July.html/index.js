let person = {
    firstName:"sneha",
    lastName:"shinde",
    get fullName(){
        return '${person.firstName}${person.lastName}';
    }
}
console.log(person.fullName);