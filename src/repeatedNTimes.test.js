const repeatedNTimes = require('./repeatedNTimes');

test('repeatedNtimes invalid data case', () => {
  expect(repeatedNTimes()).toEqual(null);
  expect(repeatedNTimes([])).toEqual(null);
  expect(repeatedNTimes(undefined)).toEqual(null);
  expect(repeatedNTimes(null)).toEqual(null);
  expect(repeatedNTimes('')).toEqual(null);
});

test('repeatedNtimes unit test', () => {
  expect(repeatedNTimes([1, 2, 3, 3])).toEqual(3);
  expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toEqual(2);
  expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toEqual(5);
  expect(repeatedNTimes([5, undefined, 5, 2, 5, 3, null, 4])).toEqual(5);
});
