const dropWhile = require(`../dropWhile`);
//test if * exists
test(`check if dropWhile exists`, () => {
  expect(dropWhile).toBeDefined();
});

//test if * is a function
test(`is dropWhile a function`, () => {
  expect(typeof dropWhile).toEqual(`function`);
});

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

test(``, () => {
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];
  const predicate = (o) => !o.active;
  expect(dropWhile(users, predicate)).toEqual([
    { user: "pebbles", active: true },
  ]);
});
test(``, () => {
  const predicate = (o) => !o.active;
  expect(dropWhile(users, predicate)).toEqual([]);
});
