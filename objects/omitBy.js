const { myPush, my4Each } = require(`../MyCustomFunctions/myCustomFunctions`);
const omitBy = (obj) => {
  let newObj = [];
  for (let [key, value] in obj) {
    newObj.myPush([key, obj[key]]);
  }
  newObj.my4Each(
    ([key, value]) => typeof value === `number` && delete obj[key]
  );
  return obj;
};
module.exports = omitBy;
