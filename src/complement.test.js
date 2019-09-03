const complement = require('./complement');

test('complement invalid data case', () => {
  expect(complement()).toEqual(null);
  expect(complement(null)).toEqual(null);
  expect(complement(undefined)).toEqual(null);
});

test('complement invalid data case', () => {
  expect(complement(5)).toEqual(2);
  expect(complement(2)).toEqual(1);
  expect(complement(-56)).toEqual(71);
});
