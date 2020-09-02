var name='Emon';
function sayname(){
    console.log(name);
}
sayname();

function getting(msg){
    return function (name){
        console.log(msg+ ' '+ name)
    }
}
var a= getting('good morning');
a('emon')