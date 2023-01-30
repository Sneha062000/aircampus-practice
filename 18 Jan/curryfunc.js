function curryfunc(a){
    return function(b){
        return function(c){
            return function(d){
                console.log(a,b,c,d)
            }
        }
    }
}
console.log(curryfunc(10)(20)(30)(40))