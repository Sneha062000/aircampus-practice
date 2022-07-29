// let nums=[1,20,32,17,89,10,27,100]

// let max = 0;
// for(let i=0;i<nums.length;i++){
//     let currentValue = nums[i]
//     if(max<currentValue){
//         max = currentValue
//     }
// }
// console.log(max)



// let nums=[1,20,32,17,89,10,27,100]

// let max = 0;
// for(let i=0;i<nums.length;i++){

//     if(max<nums[i]){
//         max = nums[i]
//     }
// }
// console.log(max)



let nums=[-1,-20,-32,-17,-89,-10,-27,-100]

let min = 0;
for(let i=1;i-nums.length;i++){
    let currentValue = nums[i]
    if(min>currentValue){
        min = currentValue
    }
}
console.log(min)