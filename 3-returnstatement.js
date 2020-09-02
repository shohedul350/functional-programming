function name(fname,lname,gender){
    var output
if(gender==='male'){
    output='mar'+ ' ' + fname + lname ;
    return output;
}
else if(gender==='female'){
    output='ms'+ ' '+ fname + lname;
    return output;
}
}
var fulname=name('si','emon','female');
console.log(fulname)