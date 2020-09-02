arr=[2,4,56,7,8];
arr.forEach(function(a){
    return a;
})
console.log(arr)


function caller(){
    return function(name){
        return 'caller calling '+ name;
    }
}
var x=caller();
var y=x('emon')
console.log(y)