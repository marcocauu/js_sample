const sortArrayByParity = require('./sortArrayByParity');

test('sortArrayByParity invalid data case', () => {
  expect(sortArrayByParity()).toEqual([]);
  expect(sortArrayByParity([])).toEqual([]);
  expect(sortArrayByParity('')).toEqual([]);
  expect(sortArrayByParity(['a', 'b', 'c'])).toEqual([]);
  expect(sortArrayByParity(null)).toEqual([]);
  expect(sortArrayByParity(undefined)).toEqual([]);
});

test('sortArrayByParity unit test', () => {
  expect(sortArrayByParity([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6, 1, 3, 5]);
  expect(sortArrayByParity([1, 'a', 'b', 4, 5, 6])).toEqual([4, 6, 1, 5]);
});
