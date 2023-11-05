const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let val = a - b;
  return val;
};

const sum = function (arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let result = 1;
  while (a > 1) {
    result *= a;
    a--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
