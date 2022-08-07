const omit = require(`../omit`);
//test if * exists
test(`check if omit exists`, () => {
  expect(omit).toBeDefined();
});

//test if * is a function
test(`is omit a function`, () => {
  expect(typeof omit).toEqual(`function`);
});

test(`Should return an obj with the omitted properties only`, () => {
  const fruitColors = {
    apple: `green`,
    peach: `yellow`,
    orange: `orange`,
    cherry: `red`,
    banana: `yellow`,
  };
  expect(omit(fruitColors, [`apple`, `cherry`, `peach`])).toEqual({
    orange: `orange`,
    banana: `yellow`,
  });
});
test(`Should return an obj with the omitted properties only`, () => {
  const fruitColors = {
    apple: `green`,
    peach: `yellow`,
    orange: `orange`,
    cherry: `red`,
    banana: `yellow`,
  };
  expect(omit(fruitColors, [`apple`, `cherry`, `peach`])).not.toEqual({
    apple: `green`,
    banana: `yellow`,
  });
});
