function vowelsAndConsonants(s){
    let j = 0;
    while (j< s.length) {
        let current_char = s[j];
        if('aeiou'.includes(current_char)){
            console.log(current_char);
        }
        j++;
    }
}