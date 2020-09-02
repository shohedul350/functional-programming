arr=[4,8,3,67,8];
// arr.forEach(function(element,index,arr){
// console.log('Element is:' + element +'index is: '+index+ 'arr is: '+arr);
// })

function loop(arr,calback){
    for(var i=0; i<arr.length; i++){
    calback(arr[i],i)
}
}
loop(arr,function(element,i){
    console.log('element is '+element+ 'index is'+ i)
})