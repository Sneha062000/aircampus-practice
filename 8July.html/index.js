
    function one(second, third){
       
         second()
         third('sneha')
      }
      function two(){
         console.log("two")
      }
      function three(name){
         console.log(name)
      }
      
      one(two,three);