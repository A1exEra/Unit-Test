const { myFilter } = require(`../MyCustomFunctions/myCustomFunctions`);
function take(arr, num = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`);
  }
  return arr.myFilter((el, i) => i < num);
}
module.exports = take;
