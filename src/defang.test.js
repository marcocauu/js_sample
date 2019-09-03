const defang = require('./defang');

test('defang invalid data test cases', () => {
  expect(defang('')).toBe('');
  expect(defang(null)).toBe('');
  expect(defang(undefined)).toBe('');
  expect(defang()).toBe('');
});

test('defang unit test', () => {
  expect(defang('1.1.1.1')).toBe('1[.]1[.]1[.]1');
  expect(defang('......')).toBe('[.][.][.][.][.][.]');
});
