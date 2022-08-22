// let reducedNum = [1,2,3,4,5].reduce((acc,current) => acc + current,0);
// console.log(reducedNum);



// Array.prototype.myReduce = function(){
//     console.log(this);
// };
// [1,2,3,4].myReduce();



// Array.prototype.myReduce = function(callbackFn , initialValue){
//    let acc = initialValue;
//     for(let i=0;i<this.length;i++) {
//   callbackFn(acc,this[i]);
//    }
// };
// [1,2,3,4].myReduce((acc,current) => {
//     console.log(acc + current);
// },10);


Array.prototype.myReduce = function (callbackFn, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (acc !== undefined) {
        acc = callbackFn(acc, this[i]);
      } else {
        acc = this[i];
      }
    }
    return acc;
  };
  
  let reducedNum = [1, 2, 3, 4].myReduce((acc, current) => {
    // console.log(acc, current);
    return acc + current;
  });
  
  console.log(reducedNum);
  
