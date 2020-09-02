arr=[4,6,8,9,4,3]
// var newarr=arr.map(function(value){
//     return value +2;
// })
// console.log(newarr);



function mymap(arr,calback){
   var newarr=[];
   for(i=0; i < arr.length; i++){
       var data=calback(arr[i]);
       newarr.push(data);
   }
   return newarr;
}
var myarr=mymap(arr,function(value){
    return value +2;
});
console.log(myarr)