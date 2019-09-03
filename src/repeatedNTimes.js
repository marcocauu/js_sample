/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * @param {string[]} a
 * @return {number}
 */

const repeatedNTimes = (a = []) => {
  if (!a || !Array.isArray(a) || !a.length) {
    return null;
  }
  const set = new Set();
  for (let i = 0; i < a.length; i++) {
    if (Number.isInteger(a[i])) {
      if (!set.has(a[i])) {
        set.add(a[i]);
      } else {
        return a[i];
      }
    }
  }
};

module.exports = repeatedNTimes;
