const flipImage = require('./flipImage');

test('flipImage invalid data case', () => {
  expect(flipImage([])).toEqual([]);
  expect(flipImage()).toEqual([]);
  expect(flipImage(undefined)).toEqual([]);
  expect(flipImage(null)).toEqual([]);
  expect(flipImage('break')).toEqual([]);
});

test('flipImage unit test', () => {
  expect(flipImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]]); // eslint-disable-line max-len
  expect(flipImage([[1, undefined, 0], [1, 0, 1], [0, null, 0]])).toEqual([[1, 0, 0], [0, 1, 0], [1, 0, 1]]); // eslint-disable-line max-len
  expect(flipImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])).toEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]); // eslint-disable-line max-len
});
