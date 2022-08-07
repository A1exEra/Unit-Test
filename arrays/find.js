const myFind = require(`../MyCustomFunctions/myCustomFunctions`);
function find(arr, predicate, num = 0) {
  // if (!Array.isArray(arr)) {
  //   throw new TypeError(`${arr} is not an array`);
  // }

  return arr.myFind((el, idx, arr) =>
    idx >= num ? predicate(el, idx, arr) : false
  );
}
module.exports = find;
