var arr=[4,6,8,4,8,8];
//  var sum =0;
//  for(i=0; i<arr.length; i++){
//      sum+=arr[i];
//  }
//  console.log(sum);
var newarr=arr.reduce(function(a,b){
    return a+b;
})
console.log(newarr)