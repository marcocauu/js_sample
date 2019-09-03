/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/flipping-an-image/submissions/
 * @param {string[]} a
 * @return {[]}
*/
const flipImage = (a = []) => {
  if (!a || !Array.isArray(a) || !a.length) {
    return [];
  };
  return a
    .map(e => e.reverse().map(n => {
      return Number.isInteger(n) && n === 0 ? 1 : 0;
    }));
};

module.exports = flipImage;
