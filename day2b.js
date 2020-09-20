function vowelsAndConsonants(s) {
    for (var i = 0; i < s.lenght; i++) {
        let current_char = s[i];
        if('aeiou'.includes(current_char)) {
            console.log(current_char);
        }
    }

}

function main(){ 
    const s = readLine();
}