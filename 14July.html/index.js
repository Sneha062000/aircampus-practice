// let nums1=[1,2,3];
// let nums2=[4,5,6];
// console.log(nums1+","+nums2);

// let nums1=[1,2,3]
// let nums2=[4,5,6]
// console.log(`${nums1},${nums2}`)


// let nums1=[1,2,3];
// let nums2=[4,5,6];
// let nums3=[];
// for(let i=0;i<nums1.length;i++){
//     nums3[i]=nums1[i];
// }
// for(let i=0;i<nums2.length;i++){
//    // nums3[i+nums2.length]=nums2[i]
//    nums3[nums3.length]=nums2[i]
// }
// console.log(nums3);







// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10,11,12],
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// let cols = matrix[0]. length -1;
// let sum = 0;
// for (let i = 0; i < rows; i++) {
//     sum += matrix [i] [cols]
//     cols -= 1;
// }
// console.log(sum);






// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10,11,12],
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// //let cols = matrix[0]. length -1;
// let sum = 0;
// let cols = 0;
// for (let i = 0; i < rows; i++) {
//     sum += matrix [i] [cols]
//     cols += 1;
// }
// console.log(sum);









// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

// console.log(matrix[2][2]);



// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// let rows=matrix.length;
// console.log(rows);



// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// let rows=matrix.length;
// let cols=matrix[0].length;
// console.log(rows,cols);




// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10,11,12],
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// let cols = matrix[0].length;

// let sum = 0;
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         sum += matrix[i][j];
//     }
// }
// console.log(sum);

//first col
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10,11,12],
    [13,14,15,16]
]
let rows = matrix.length;
let cols=0;
let sum = 0;
for (let i = 0; i < rows; i++) {
    sum += matrix[i][cols]
}
console.log(sum);



// // first row sum
// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10,11,12],
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// let cols=0;
// let sum = 0;
// for (let i = 0; i < rows; i++) {
//     sum += matrix[cols][i]
// }
// console.log(sum);


// let names ='sneha manoj shinde';
// console.log(names.substring(5,11));