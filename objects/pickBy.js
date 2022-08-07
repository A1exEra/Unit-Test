const pickBy = function (object, predicate) {
  const result = {};
  for (const key in object) {
    if (
      object[key] !== null &&
      object[key] !== false &&
      object[key] !== undefined &&
      typeof object[key] === predicate
    ) {
      result[key] = object[key];
    }
  }
  return result;
};

module.exports = pickBy;
