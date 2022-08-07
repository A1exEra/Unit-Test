const {
  my4Each,
  myPush,
  myMap,
  myFilter,
} = require(`../MyCustomFunctions/myCustomFunctions`);
function includes(arr, value, number = 0) {
  // if (!Array.isArray(arr)) {
  //   throw new TypeError(`${arr} is not an array`);
  // }

  let result = false;

  arr.my4Each((el, idx) => {
    if (idx >= number && el === value) {
      result = true;
    }
  });

  return result;
}
module.exports = includes;
