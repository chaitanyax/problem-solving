// Encode
// Input ['lint', 'code', 'love', 'you']
// Output ['lint', 'code', 'love', 'you']
function encode(str) {
    let encodeString = '';
    for(let i = 0; i < str.length; i++) {
        encodeString = `${encodeString}${str[i].length}#${str[i]}`;
    }
    return encodeString;
}
let input = ['lint', 'code', 'love', 'you'];
let encoded = encode(input);

function decode(str) {
    let decodeOutput = [];
    let i = 0;
    while(i < str.length) {
        let len = Number(str[i]);
        let j = i;
        while(str[j] != '#') {
            j = j + 1;
        }
        let Output = str.substring(j+1, j+1+len);
        decodeOutput.push(Output);
        i = j+1+len;
    }
    return decodeOutput;
}
console.log(decode(encoded));