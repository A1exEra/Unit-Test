const merge = function (to, from) {
  for (n in from) {
    if (typeof to[n] != "object") {
      to[n] = from[n];
    }
    if (typeof from[n] == "object") {
      to[n] = merge(to[n], from[n]);
    }
  }
  return to;
};
module.exports = merge;
