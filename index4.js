//for loop 
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1);{
result =result * 2;
console.log(result);
}

// another example of for loop
for( var num = 1; num < 5; num++){
    console.log('inside the loop:' + num);
}
console.log('outside the loop:' + num);

//breaking out of the loop
for (var  current = 20; ; current ++){
    if (current % 7 == 0)
     break;
}
console.log(current);

// switch cases 
switch ("What is the  weather  like ?") {
    case "rainy ":
        console.log(" Remember  to  bring  an  umbrella .");
        break;
    case "sunny ":
        console.log(" Dress  lightly .");
    case "cloudy ":
        console.log("Go  outside .");
        break;
    default:
        console.log(" Unknown  weather  type !");
        break;
    }

    // for loop without the initial part
    var j = 1;
    for (; j< 10; j +=2){
        console.log(j);
    }

    // the for loop without the condition
    for (let j = 1;; j += 2){
        console.log(j);
        if (j>10){
            break
        }
    }