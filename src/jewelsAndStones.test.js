const jewels = require('./jewelsAndStones');

test('jewelsAndStonesSet invalid data test cases', () => {
  expect(jewels.jewelsAndStonesSet('', '')).toBe('');
  expect(jewels.jewelsAndStonesSet('', 'aAbBcCdD')).toBe('');
  expect(jewels.jewelsAndStonesSet('aA', '')).toBe('');
  expect(jewels.jewelsAndStonesSet(null, undefined)).toBe('');
  expect(jewels.jewelsAndStonesSet()).toBe('');
});

test('jewelsAndStonesSet test cases', () => {
  expect(jewels.jewelsAndStonesSet('aA', 'aAbBcCdD')).toBe(2);
  expect(jewels.jewelsAndStonesSet('aA', 'bBcCdD')).toBe(0);
});

test('jewelsAndStonesArray invalid data test cases', () => {
  expect(jewels.jewelsAndStonesArray('', '')).toBe('');
  expect(jewels.jewelsAndStonesArray('', 'aAbBcCdD')).toBe('');
  expect(jewels.jewelsAndStonesArray('aA', '')).toBe('');
  expect(jewels.jewelsAndStonesArray(null, undefined)).toBe('');
  expect(jewels.jewelsAndStonesArray()).toBe('');
});

test('jewelsAndStonesArray test cases', () => {
  expect(jewels.jewelsAndStonesArray('aA', 'aAbBcCdD')).toBe(2);
  expect(jewels.jewelsAndStonesArray('aA', 'bBcCdD')).toBe(0);
});
