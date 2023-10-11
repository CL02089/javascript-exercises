const removeFromArray = function (arr, ...args) {
  let argArr = [...args];

  console.log(argArr);

  const filtered = arr.filter((element) => !argArr.includes(element));

  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
