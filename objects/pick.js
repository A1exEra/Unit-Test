const my4Each = require(`../MyCustomFunctions/myCustomFunctions`);
const pick = function (obj, props) {
  // if (!obj || !props) return;
  const picked = {};
  props.my4Each((prop) => (picked[prop] = obj[prop]));
  return picked;
};
module.exports = pick;
