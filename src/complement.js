/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/number-complement/submissions/
 * @param {number} num
 * @return {number}
 */
var complement = function(num) {
  if (!Number.isFinite(num)) {
    return null;
  }
  const number = num.toString(2);
  let comp = '';
  for (let i of number) {
    comp += +!(i - 0);
  }
  return parseInt(comp, 2);
};

module.exports = complement;
