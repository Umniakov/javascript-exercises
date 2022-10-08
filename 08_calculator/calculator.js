const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  if (isNotEmpty(args)) {
	let outcome = args.reduce((total, current) => total + current);
  return outcome;
  } else {
    return 0;
  }
};

function isNotEmpty(args) {
  for (let key in args) {
    return true;
  }
  return false;
}

const multiply = function(arr) {
  let outcome = arr.reduce((total, current) => total * current);
  return outcome;
};

const power = function(a, b) {
	return (Math.pow(a, b));
};

const factorial = (n => n <= 1 ? 1 : n * factorial(n -1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
