// let nums1=[1,2,3];
// let nums2=[4,5,6];


// console.log(nums1+" "+nums2);

// let nums1=[1,2,3]
// let nums2=[4,5,6]
// console.log(`${nums1},${nums2}`)



let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10,11,12]
]
let rows = matrix.length;
let cols = matrix[0].length;

let sum = 0;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        sum += matrix[i][j];
    }
}
console.log(sum);


// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10,11,12],
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// let start = matrix[0]. length -1;

// let sum = 0;
// for (let i = 0; i < rows; i++) {
//     sum += matrix [i] [start]
//     start -=1;
// }
// console.log(sum);



