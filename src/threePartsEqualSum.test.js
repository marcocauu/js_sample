const threePartsEqualSum = require('./threePartsEqualSum');

test('threePartsEqualSum invalid data case', () => {
  expect(threePartsEqualSum()).toEqual(false);
  expect(threePartsEqualSum([])).toEqual(false);
  expect(threePartsEqualSum(null)).toEqual(false);
});

test('threePartsEqualSum unit test', () => {
  expect(threePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toEqual(true);
  expect(threePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toEqual(false); // eslint-disable-line max-len
  expect(threePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toEqual(true);
});
