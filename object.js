// object creation with the dot notation
var person = new Object();
person.name ="elias";
person.designation ="trainer"
person.phno = 255-678346475;
//or 
function createPerson1(){
    var person = new Object();
    person.name ="elias";
    person.designation ="trainer";
    person.phno = 255-678346475;
}
// call a function
var elias = createPerson1();
//or
function createPerson2(){
    var person = new Object();
    person['name'] ="elias";
    person['designation'] ="trainer";
    person['phno'] = 255-678346475;
    
}
elias=createPerson2();
alert("name:"+elias.name+" designation:"+elias.designation+"phno:"+elias.phno)
