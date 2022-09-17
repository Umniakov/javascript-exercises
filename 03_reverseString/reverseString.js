// const reverseString = function(string) {
//     let arr1;
//     arr1 = string.split('');
//     let newString = '';
//     for (let i = arr1.length - 1; i >= 0 ; i--) {
//         newString += arr1[i];
//     }
//     return newString;
//     console.log(arr1);
//     console.log(newString);
// };

const reverseString = function(string) {
    return string.split('').reverse().join('');
}

console.log(reverseString('blabla'));
// Do not edit below this line
module.exports = reverseString;
