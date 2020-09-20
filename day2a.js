
function vowelsAndConsonants(s) {
    let v = [], c = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            v += char
        } else { c += char }
    }
    for (let y = 0; y < v.length; y++) { console.log(v.charAt(y)); }
    for (let y = 0; y < v.length; x++) { console.log(v.charAt(x)); }
}