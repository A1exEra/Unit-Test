const my4Each = (Array.prototype.my4Each = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
});

const myPush = (Array.prototype.myPush = function (x) {
  return (this[this.length++] = x);
});

const myMap = (Array.prototype.myMap = function map(callback) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results.myPush(callback(this[i], i, this));
  }
  return results;
});

const myFilter = (Array.prototype.myFilter = function (callback) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      results.myPush(this[i]);
    }
  }
  return results;
});

const myFind = (Array.prototype.myFind = function (callback) {
  let result;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return (result = this[i]);
    }
  }
});

module.exports = my4Each;
module.exports = myPush;
module.exports = myMap;
module.exports = myFilter;
module.exports = myFind;
