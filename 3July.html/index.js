//recursion program of factorial

function y(num){
    if(num>0){
        return(num*y(num-1));
    }else{
        return 1;
    }
}
console.log(y(5));