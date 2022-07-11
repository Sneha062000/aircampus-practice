let nums=[-1,-20,-32,-17,-89,-10,-27,-100];
let max = 0;
for(i=0;i<nums.length;i++){
    let currentValue=nums[i];
    if(max < currentValue){
        max = currentValue
    }
}

console.log(max);