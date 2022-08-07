const pick = require(`../pick`);
//test if * exists
test(`check if pick exists`, () => {
  expect(pick).toBeDefined();
});

//test if * is a function
test(`is pick a function`, () => {
  expect(typeof pick).toEqual(`function`);
});

test(`Should return a new boject with selected properties`, () => {
  const fruitColor = {
    apple: "red",
    banana: "yellow",
    carrot: "orange",
    dates: "brown",
  };
  expect(pick(fruitColor, [`carrot`, `apple`])).toEqual({
    apple: `red`,
    carrot: `orange`,
  });
});
test(`Should return a new boject with selected properties`, () => {
  const fruitColor = {
    apple: "red",
    banana: "yellow",
    carrot: "orange",
    dates: "brown",
  };
  expect(pick(fruitColor, [`banana`, `dates`])).not.toEqual({
    apple: `red`,
    dates: `brown`,
  });
});
