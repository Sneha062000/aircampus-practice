function oddOne(arr1, arr2){
    let a=arr1.concat(arr2);
      let b  = a.filter((num)=>{
        return num%2==0;
      })
      return b.sort((c,d)=>{
        return d-c;
      });
    }
    console.log(oddOne([1,2,3,4,5],[1,2,3]));