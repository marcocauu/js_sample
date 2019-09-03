const morseCode = require('./constants').morseCode;

/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/unique-morse-code-words/
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words = []) => {
  if (!words || !words.length || !Array.isArray(words)) {
    return 0;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetMorseCodeMap = {};
  const uniqueMorseCode = new Set();
  alphabet.map((letter, index) => {
    alphabetMorseCodeMap[letter] = morseCode[index];
  });
  words.map((word) => {
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
