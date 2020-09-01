// do....while loop
let count = 0;
do{
    count++
    console.log('count is:' + count);
}while (count< 10);
// while loop
var result = 1;
var counter = 0;
while (counter < 10){
    result = result * 2;
    counter = counter + 1;
    console.log(result);
}
let num = 1;
while(num < 10){
    console.log(num);
    num +=2;
}
// creating an array of five random number between 1 and 10 with while loop.
let rands = [];
let num1 = 0;
const size = 5;

while(num1< size) {
    rands.push(Math.round(Math.random() *10));
    num1++;
    console.log('the current size of the array is ' + num1);
}
console.log(rands);
