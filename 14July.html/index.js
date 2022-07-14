// let nums1=[1,2,3];
// let nums2=[4,5,6];
// console.log(nums1+","+nums2);

// let nums1=[1,2,3]
// let nums2=[4,5,6]
// console.log(`${nums1},${nums2}`)


let nums1=[1,2,3];
let nums2=[4,5,6];
let nums3=[];
for(let i=0;i<nums1.length;i++){
    nums3[i]=nums1[i];
}
for(let i=0;i<nums2.length;i++){
    nums3[i+nums2.length]=nums2[i]
}
console.log(nums3);