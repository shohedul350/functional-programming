// function outer(){
//     var a =10;
//     function inner(){
//     console.log("i am inner function")
//     }
//     console.log("i am outer funcrtion")
//     inner();
// }
// outer();

function add(a,b){
        function sub(){
        return a+b;
        }
        function sum (){
        return  a-b;
        }
        function time(){
        return a*b;
        }
        function div(){
        return  a/b
        }
  return sub() + sum() + time() + div();
}

var result =add(10,5);
console.log(result);