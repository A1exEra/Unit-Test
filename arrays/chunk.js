const {
  my4Each,
  myPush,
  myMap,
  myFilter,
} = require(`../MyCustomFunctions/myCustomFunctions`);
function chunk(arr, num = 1) {
  // if (!Array.isArray(arr)) {
  //   throw new TypeError(`${arr} is not an array`);
  // }
  const result = [];
  let innerArr = [];
  let innerNum = num;
  arr.my4Each((el, i) => {
    if (i !== innerNum) {
      innerArr.myPush(el);
    } else {
      result.myPush(innerArr);
      innerArr = [];
      innerArr.myPush(el);
      innerNum = num + i;
    }
  });
  if (innerArr.length !== 0) {
    result.myPush(innerArr);
  }
  return result;
}

module.exports = chunk;
