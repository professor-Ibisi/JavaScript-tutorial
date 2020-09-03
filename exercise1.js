// exercise practice 
let numberSign ='';
for (let i = 1; i <= 8; i++){
    console.log(numberSign +='#')
}
// arrays
var  listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2-1]);
// objects
var day1 = {
    squirrel: false,
    events: ["work","touched tree","pizza","running","television"]

};
console.log(day1.squirrel);
console.log(day1.wolf);
 // array exercise 
 function phi (table) {
    return (table [3] * table [0] - table [2] * table [1]) /
     Math.sqrt((table[2]+table[3]) *
              (table[0] + table[1])*
              (table[1] + table[3])*
              (table[0] + table[2]));
 }
 console.log(phi([76, 9, 4, 1]));
