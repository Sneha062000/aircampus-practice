// Lexical scope is the ability for a function scope to access variables from parent scope

var a=10;

var Func=function(){
    var b=20;
    console.log(a,b);
    var innerFunc=function(){
        var c=30;
        console.log(a,b,c);
    }
    innerFunc()
    return;
}
Func()
console.log(a)