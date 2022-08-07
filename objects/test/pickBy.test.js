const pickBy = require(`../pickBy`);
const toPairs = require("../toPairs");
//test if * exists
test(`check if pickBy exists`, () => {
  expect(pickBy).toBeDefined();
});

//test if * is a function
test(`is pickBy a function`, () => {
  expect(typeof pickBy).toEqual(`function`);
});

test(`Creates an object composed of the object properties predicate returns truthy for`, () => {
  const object = {
    a: 1,
    b: `2`,
    c: `apple`,
    d: 15,
  };
  expect(pickBy(object, `number`)).toEqual({ a: 1, d: 15 });
});
test(`Creates an object composed of the object properties predicate returns truthy for`, () => {
  const object = {
    a: 1,
    b: `2`,
    c: `apple`,
    d: 15,
  };
  expect(pickBy(object, `string`)).toEqual({ b: `2`, c: `apple` });
});
test(`Creates an object composed of the object properties predicate returns truthy for`, () => {
  const object = {
    a: 1,
    b: `2`,
    c: `apple`,
    d: 15,
  };
  expect(pickBy(object, `string`)).not.toEqual({ a: 1, d: 15 });
});
test(`Creates an object composed of the object properties predicate returns truthy for`, () => {
  const object = {
    a: 1,
    b: `2`,
    c: `apple`,
    d: 15,
  };
  expect(pickBy(object, `number`)).not.toEqual({ b: `2`, c: `apple` });
});
