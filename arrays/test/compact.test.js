const compact = require(`../compact`);
//test if * exists
test(`check if compact exists`, () => {
  expect(compact).toBeDefined();
});

//test if * is a function
test(`is compact a function`, () => {
  expect(typeof compact).toEqual(`function`);
});

test(`compact is an array of elements with all falsy values removed.`, () => {
  const array = [0, 1, false, 2, "", 3];
  expect(compact(array)).toEqual([1, 2, 3]);
});
test(`compact is an array of elements with all falsy values removed.`, () => {
  const array = [0, 1, false, 2, "", 3];
  expect(compact(array)).toBeTruthy();
});
test(`compact is an array of elements with all falsy values removed.`, () => {
  const array = [0, 1, false, 2, "", 3];
  expect(compact(array)).not.toBeFalsy();
});
