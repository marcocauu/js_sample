const morseCode = require('./constants').morseCode;

/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/unique-morse-code-w/
 * @param {string[]} w
 * @return {number}
 */
const uniqueMorseRepresentations = (w = []) => {
  if (!w || !Array.isArray(w) || !w.length) {
    return 0;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetMorseCodeMap = {};
  const uniqueMorseCode = new Set();
  alphabet.map((letter, index) => {
    alphabetMorseCodeMap[letter] = morseCode[index];
  });
  w.map((word) => {
    if (typeof word === 'string') {
      const morseWord = word
        .split('')
        .map(letter => alphabetMorseCodeMap[letter])
        .join('');
      uniqueMorseCode.add(morseWord);
    }
  });

  return uniqueMorseCode.size;
};

module.exports = uniqueMorseRepresentations;
