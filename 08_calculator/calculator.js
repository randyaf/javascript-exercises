const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  if (array.length === 0) return 0;

  return array.reduce((acc, item) => acc + item, 0);
};

const multiply = function(array) {
  if (array.length === 0) return 0;

  return array.reduce((acc, item) => acc * item);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(number) {
  if (number === 0) return 1;
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(2));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
