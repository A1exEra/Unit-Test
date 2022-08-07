const zip = require(`../zip`);
//test if * exists
test(`check if zip exists`, () => {
  expect(zip).toBeDefined();
});

//test if * is a function
test(`is zip a function`, () => {
  expect(typeof zip).toEqual(`function`);
});

test(`Should create an array that includes subarrays with grouped elements from given arrays`, () => {
  expect(zip([1, 2, 3], [`a`, `b`, `c`], [true, false, null])).toEqual([
    [1, `a`, true],
    [2, `b`, false],
    [3, `c`, null],
  ]);
});
