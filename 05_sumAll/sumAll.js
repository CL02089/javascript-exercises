const sumAll = function (begin, end) {
  if (begin < 0 || end < 0) return 'ERROR';
  if (typeof begin != 'number' || typeof end != 'number') return 'ERROR';
  let sum = 0;

  if (begin < end) {
    for (let i = begin; i <= end; i++) {
      sum += i;
    }
  }

  if (begin > end) {
    for (let i = begin; i >= end; i--) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
