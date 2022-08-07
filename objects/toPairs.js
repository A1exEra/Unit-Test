const myPush = require(`../MyCustomFunctions/myCustomFunctions`);
const toPairs = function (obj) {
  const result = [];
  for (let key in obj) {
    result.myPush([key, obj[key]]);
  }
  return result;
};
module.exports = toPairs;
