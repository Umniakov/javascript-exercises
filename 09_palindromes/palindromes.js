const palindromes = function(test) {
  let replace = test.toLowerCase().replaceAll(/[^a-z]/g, '');;
  const backwards = replace
    .split('')
    .reverse()
    .join('')
    return backwards === replace;
}
// Do not edit below this line
module.exports = palindromes;
