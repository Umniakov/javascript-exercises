
const repeatString = function(text, times) {
    if (times < 0) return 'ERROR';
    let outp ='';
    for (let i = 0; i < times; i++) {
        outp += text;
    }
    return outp;
};

// console.log(repeatString( , 3));
// Do not edit below this line
module.exports = repeatString;
