const drop = require(`../drop`);
//test if * exists
test(`drop if chunkArray exists`, () => {
  expect(drop).toBeDefined();
});

//test if * is a function
test(`is drop a function`, () => {
  expect(typeof drop).toEqual(`function`);
});

test(`Creates a slice of array with n elements dropped from the beginning`, () => {
  const arr = [1, 2, 3, 4, 5];
  const slice = 2;
  expect(drop(arr, slice)).toEqual([3, 4, 5]);
});
test(`Creates a slice of array with n elements dropped from the beginning`, () => {
  const arr = [1, 2, 3, 4, 5];
  const slice = 3;
  expect(drop(arr, slice)).not.toEqual([3, 4, 5]);
});

test(`expect dpor to contain an array`, () => {
  const checkarray = drop([1, 2, 3]);
  expect(drop([1, 2, 3])).toEqual(expect.arrayContaining(checkarray));
});
