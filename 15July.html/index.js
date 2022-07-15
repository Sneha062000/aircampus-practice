// let names ='sneha manoj shinde';
//  console.log(names.substring(5,11));



// let news = "hello sneha";
// let target = "sneha";
// console.log(news.includes(target));

// let email ="sneha@gmail.com";
// if(email.endsWith("@gmail.com")){
//     console.log("valid email")
// }else{
//     console.log("invalid email")
// }

// let mobile_no = '9712345667';
// if(mobile_no.length == 10){
//     console.log("valid no")
// }else{
//     console.log("invalid no")
// }


let names ="sneha";
let reversedName = "";
for(let i=names.length -1; i>=0; i--){
    reversedName += names[i];
}
console.log(reversedName);