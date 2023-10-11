const reverseString = function (string) {
  const splitString = string.split('');
  const reverseArr = splitString.reverse();
  const joinArr = reverseArr.join('');
  return joinArr;
};

// Do not edit below this line
module.exports = reverseString;
