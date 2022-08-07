const find = require(`../find`);
//test if * exists
test(`check if find exists`, () => {
  expect(find).toBeDefined();
});

//test if * is a function
test(`is find a function`, () => {
  expect(typeof find).toEqual(`function`);
});
const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

test(`Should return the first object in the array that it finds starting fromgiven  index as a parameter(default = 0)`, () => {
  const predicate = (value) => value.age < 40;
  expect(find(users, predicate)).toEqual(users[0]);
});
test(`Should return the first object in the array that it finds starting fromgiven  index as a parameter(default = 0)`, () => {
  const predicate = (value) => value.age < 40;
  expect(find(users, predicate, 1)).toEqual(users[2]);
});
