const omitBy = require(`../omitBy`);
// const isNumber = require(`../omitBy`);

//test if * exists
test(`check if omitBy exists`, () => {
  expect(omitBy).toBeDefined();
});

//test if * is a function
test(`is omitBy a function`, () => {
  expect(typeof omitBy).toEqual(`function`);
});

test(`creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.`, () => {
  const object = { a: 1, b: 4, c: `3` };
  expect(omitBy(object)).toEqual({ c: `3` });
});
test(`creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.`, () => {
  const object = { a: 1, b: 4, c: `3` };
  expect(omitBy(object)).not.toEqual({ c: 3 });
});
