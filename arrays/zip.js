const {
  my4Each,
  myPush,
  myMap,
  myFilter,
} = require(`../MyCustomFunctions/myCustomFunctions`);
function zip(...arrays) {
  if (!Array.isArray(...arrays)) {
    throw new TypeError(`${arr} is not an array`);
  }
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    const innerArr = [];
    arrays.my4Each((el) => {
      if (el[i] !== undefined) {
        innerArr.myPush(el[i]);
      }
    });
    if (innerArr.length) {
      result.myPush(innerArr);
    }
  }
  return result;
}

module.exports = zip;
