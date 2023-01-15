let data = Promise.all([
    new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(1),3000);
        //reject(1);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(2),2000);
        //reject2;
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("OOPS");
        },1000);
        //reject(3);
    })
])

setTimeout(()=>console.log(data), 3000);
data.then(result=>console.log(result))