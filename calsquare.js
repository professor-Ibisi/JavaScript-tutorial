//define a function
function nCalSquare(a){
    return a*a;
}
// call a function
console.log("calling named function:"+nCalSquare(9));
 
// anonymous function
var aCal= function (b){
    return b*b
}
console.log("calling anonymous function:"+nCalSquare(6));

//new constructor function
var cCal=new Function("a","return a*a;");
console.log("calling constructor function:"+cCal(7));

//self invoking function
(function(a){console.log("calling self invoking function:"+a*a);
return a*a;
})(9);