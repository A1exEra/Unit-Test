const map = require(`../map`);
//test if * exists
test(`check if map exists`, () => {
  expect(map).toBeDefined();
});

//test if * is a function
test(`is map a function`, () => {
  expect(typeof map).toEqual(`function`);
});
test(`Should return an array of values by running each element in array
 through iteratee. The iteratee is invoked with three arguments: (value, index, array).`, () => {
  const arr = [4, 8];
  const fn = (value) => value * value;
  expect(map(arr, fn)).toEqual([16, 64]);
});
