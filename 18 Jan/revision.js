// let a=10;
// console.log(a);


// let arr=[1,2,[3,4,5],6];
// let result=[];
// for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         result.push(...arr[i])
//     }else{
//         result.push(arr[i])
//     }
// }
// console.log(result)


// let arr=[1,2,3,4,5,6]
// let mapped=arr.map(element=>element+5)
// console.log(mapped)


// let arr=[1,2,3,4,5,5,6,7,4,2,2,2,1]
// let filtered=arr.filter(element=>element===2)
// console.log(filtered)

// let arr=[1,2,3,4,5]
// let reduced=arr.reduce((total,current)=>total+current);
// console.log(reduced)

// let arr=[7,5,3,2,1]
// arr.sort((a,b)=>a-b)
// console.log(arr)


// let arr=[1,2,3,4]
// arr.forEach(element=>{
//     console.log(element)
// })

// // let arr=[1,2,3,4]
// let arr=[1,2,3]
// arr.sort((a,b)=>a=b);
// console.log(arr[arr.length-1])


// let arr=[3,4,2,1,5,6,7]
// // arr.sort();
// // arr.reverse();
// // arr.join("/")
// console.log(arr.join("/"));


// let a=10

// let Func=function(){
//     let b=20;
//     console.log(a,b)
//     let innerfunc=function(){
//         let c=30;
//         console.log(a,b,c)
//     }
//     return innerfunc()
// }
// Func()
// // console.log(Func())


// function outerfunc(){
// let a=10;
// function innerfunc(){
//     console.log(a)
// }
// return innerfunc()
// }
// outerfunc()


// let firstorder=()=>
//     console.log("i am a first order function")

//     let higherorder=(returnfirstorder)=>returnfirstorder();
//     higherorder(firstorder)


// setTimeout(()=>{
//     console.log("hello")
// },1000)


// setTimeout(displaySneha,1000);
// function displaySneha(){
//     console.log("sneha")
// }


// setInterval(()=>{
//     console.log("hello")
// },1000)

// setInterval(displayhello,1000);
// function displayhello(){
//     console.log("Hello")
// }


// let cars= new Promise(function(resolve,reject){
//     let fuel_tank=true;
//     if(fuel_tank){
//         resolve();
//     }else{
//         reject();
//     }
// })
// cars.then(function(){
//     console.log("fuel_tank is full")
// }).catch(function(){
//     console.log("error")
// })

// let arr=[1,2,3,[4,5],7];
// let result=[];
// for(i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         result.push(...arr[i])
//     }else{
//         result.push(arr[i])
//     }
   
// }
// console.log(result)


// for(var i=0; i<5; i++){
//     console.log(i)
// }