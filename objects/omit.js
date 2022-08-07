const my4Each = require(`../MyCustomFunctions/myCustomFunctions`);
const omit = (obj, props) => {
  obj = { ...obj };
  props.my4Each((prop) => {
    delete obj[prop];
  });
  return obj;
};

module.exports = omit;
