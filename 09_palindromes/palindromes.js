const palindromes = function (string) {
  let forward = string
    .toLowerCase()
    .replaceAll('.', '')
    .replaceAll(',', '')
    .replaceAll(' ', '')
    .replaceAll('!', '')
    .replaceAll('?', '');

  let reverse = forward.split('').reverse().join('');
  if (forward === reverse) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
