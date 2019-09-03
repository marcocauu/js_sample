const relativeSortArray = require('./relativeSortArray');

test('relativeSortArray invalid data case', () => {
  expect(relativeSortArray()).toEqual([]);
  expect(relativeSortArray([], [])).toEqual([]);
  expect(relativeSortArray(null, undefined)).toEqual([]);
  expect(relativeSortArray('break', 'break')).toEqual([]);
});

test('relativeSortArray unit test', () => {
  expect(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]); // eslint-disable-line max-len
  expect(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])).toEqual([22, 28, 8, 6, 17, 44]); // eslint-disable-line max-len
  expect(relativeSortArray([28, 6, 22, undefined, 8, 44, 17], [22, null, 28, 8, 6])).toEqual([22, 28, 8, 6, 17, 44]); // eslint-disable-line max-len
});
