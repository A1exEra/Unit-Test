const filter = require(`../filter`);
//test if * exists
test(`check if filter exists`, () => {
  expect(filter).toBeDefined();
});

//test if * is a function
test(`is filter a function`, () => {
  expect(typeof filter).toEqual(`function`);
});
const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];
test(`Iterates over elements of array, returning an array of all elements predicate returns truthy`, () => {
  const predicate = (value) => !value.active;
  expect(filter(users, predicate)).toEqual([
    { user: "fred", age: 40, active: false },
  ]);
});
test(`Iterates over elements of array, returning an array of all elements predicate returns truthy`, () => {
  const predicate = (value) => value.active;
  expect(filter(users, predicate)).toEqual([
    { user: "barney", age: 36, active: true },
  ]);
});
test(`Iterates over elements of array, returning an array of all elements predicate returns truthy`, () => {
  const predicate = (value) => value.active;
  expect(filter(users, predicate)).toEqual([users[0]]);
});
test(`Iterates over elements of array, returning an array of all elements predicate returns truthy`, () => {
  const predicate = (value, index) => index < 1;
  expect(filter(users, predicate)).toEqual([users[0]]);
});
