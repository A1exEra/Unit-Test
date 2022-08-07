const includes = require(`../includes`);
//test if * exists
test(`check if includes exists`, () => {
  expect(includes).toBeDefined();
});

//test if * is a function
test(`is includes a function`, () => {
  expect(typeof includes).toEqual(`function`);
});
test(`Should return true id vlaue exists in a given array starting from a given index(default=0)`, () => {
  expect(includes([1, 2, 3, 4], 2)).toBeTruthy();
});
test(`Should return true id vlaue exists in a given array starting from a given index(default=0)`, () => {
  expect(includes([1, 2, 3, 4], 5, 0)).toBeFalsy();
});
