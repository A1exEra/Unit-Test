const {
  my4Each,
  myPush,
  myMap,
  myFilter,
} = require(`../MyCustomFunctions/myCustomFunctions`);
function map(arr, iteratee) {
  // if (!Array.isArray(arr)) {
  //   throw new TypeError(`${arr} is not an array`);
  // }

  return arr.myMap((el, idx, arr) => iteratee(el, idx, arr));
}

module.exports = map;
