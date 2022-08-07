const toPairs = require(`../toPairs`);
//test if * exists
test(`check if toPairs exists`, () => {
  expect(toPairs).toBeDefined();
});

//test if * is a function
test(`is toPairs a function`, () => {
  expect(typeof toPairs).toEqual(`function`);
});

test(`should return an array of key value pairs from a passed-in object`, () => {
  const object = {
    a: 2,
    c: 1,
    b: 5,
  };
  expect(toPairs(object)).toEqual([
    [`a`, 2],
    [`c`, 1],
    [`b`, 5],
  ]);
});
test(`should return an array of key value pairs from a passed-in object`, () => {
  const object = {
    a: 2,
    c: 1,
    b: 5,
  };
  expect(toPairs(object)).not.toEqual([
    [`a`, 2],
    [`b`, 1],
    [`c`, 5],
  ]);
});
