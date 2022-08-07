const {
  my4Each,
  myPush,
  myMap,
  myFilter,
} = require(`../MyCustomFunctions/myCustomFunctions`);
function dropWhile(arr, predicate) {
  // if (!Array.isArray(arr)) {
  //   throw new TypeError(`${arr} is not an array`);
  // }

  return arr.myFilter((el, idx, arr) => !predicate(el, idx, arr));
}

module.exports = dropWhile;
