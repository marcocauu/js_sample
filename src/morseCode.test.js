const uniqueMorseRepresentations = require('./morseCode');

test('uniqueMorseRepresentations invalid data case', () => {
  expect(uniqueMorseRepresentations()).toEqual(0);
  expect(uniqueMorseRepresentations([])).toEqual(0);
  expect(uniqueMorseRepresentations('')).toEqual(0);
  expect(uniqueMorseRepresentations(5)).toEqual(0);
  expect(uniqueMorseRepresentations(null)).toEqual(0);
  expect(uniqueMorseRepresentations(undefined)).toEqual(0);
});

test('uniqueMorseRepresentations unit test', () => {
  expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toEqual(2);
  expect(uniqueMorseRepresentations(['gin', 'zen'])).toEqual(1);
  expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg', 5, 6])).toEqual(2); // eslint-disable-line max-len
  expect(uniqueMorseRepresentations(['gin', undefined, 'zen', 'gig', null, 'msg', 5, 6])).toEqual(2); // eslint-disable-line max-len
});
