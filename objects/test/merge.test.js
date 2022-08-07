const merge = require(`../merge`);
//test if * exists
test(`check if merge exists`, () => {
  expect(merge).toBeDefined();
});

//test if * is a function
test(`is merge a function`, () => {
  expect(typeof merge).toEqual(`function`);
});

test(`should return two mergerd objects`, () => {
  const obj1 = {
    a: [{ b: 2 }, { d: 4 }],
  };
  const obj2 = {
    a: [{ c: 3 }, { e: 5 }],
  };
  expect(merge(obj1, obj2)).toEqual({
    a: [
      { b: 2, c: 3 },
      { d: 4, e: 5 },
    ],
  });
  // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
});
test(`should return two mergerd objects`, () => {
  const obj1 = {
    a: [{ b: 2 }, { d: 4 }],
  };
  const obj2 = {
    a: [{ c: 3 }, { e: 5 }],
  };
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(merge(obj1, obj2)).not.toEqual({
      a: [{ b: 2, c: 3 }, { d: 4 }],
    });
    fetchData(calback);
  }
  // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
});
