const chunk = require(`../chunk`);

//test if * exists
test(`check if chunkArray exists`, () => {
  expect(chunk).toBeDefined();
});

//test if * is a function
test(`is chunk a function`, () => {
  expect(typeof chunk).toEqual(`function`);
});

test(`chunk an array of 10 values with the lenght of 2`, () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  expect(chunk(numbers, len)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});
