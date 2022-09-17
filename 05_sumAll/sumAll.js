const sumAll = function(num1, num2) {
    let sum = 0;
    let len = 0;
    let start = 0;
    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
    if (num1 < num2) {
        len = num2 - num1 + 1;
        start = num1;
    } else if (num1 > num2) {
        len = num1 - num2 + 1;
        start = num2;
    }
    for (let i = 0; i < len; i++) {
        sum += start + i;
    }
    console.log(sum)
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
