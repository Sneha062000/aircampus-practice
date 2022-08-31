//promises
// var promise = new Promise(function(resolve, reject) {
//     const x = "Sneha";
//     const y = "Shinde"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.
//       then(function () {
//           console.log('Success, You are a Sneha');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });




      var promise = new Promise(function(resolve, reject) {
        const x = "Sneha";
        const y = "Sneha"
        if(x === y) {
          resolve();
        } else {
          reject();
        }
      });
         
      promise.
          then(function () {
              console.log('Success, You are a shinde');
          }).
          catch(function () {
              console.log('error occurred');
          });