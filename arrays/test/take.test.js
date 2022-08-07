const take = require(`../take`);
//test if * exists
test(`check if take exists`, () => {
  expect(take).toBeDefined();
});

//test if * is a function
test(`is take a function`, () => {
  expect(typeof take).toEqual(`function`);
});

test(`should return element in the array up the given index starting from the beginning`, () => {
  const arr = [1, 2, 3, 4, 5];
  const numOFLeToTake = 3;
  expect(take(arr, numOFLeToTake)).toEqual([1, 2, 3]);
});
test(`should return element in the array up the given index starting from the beginning`, () => {
  const arr = [1, 2, 3, 4, 5];
  const numOFLeToTake = 0;
  expect(take(arr, numOFLeToTake)).toEqual([]);
});
