/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/relative-sort-array/
 * @param {number[]} a1
 * @param {number[]} a2
 * @return {number[]}
 */
const relativeSortArray = function(a1 = [], a2 = []) {
  if (!a1 || !a2 || !Array.isArray(a1) || !Array.isArray(a2) || !a1.length || !a2.length) { // eslint-disable-line max-len
    return [];
  }
  let combined = [];

  a1 = a1.filter(e => Number.isInteger(e));
  a2 = a2.filter(e => Number.isInteger(e));

  a2.map(e => {
    const next = a1.filter(a => a === e);
    a1 = a1.filter(a => a !== e);
    if (next.length) {
      combined = [...combined, ...next];
    }
  });

  if (a1.length > 0) {
    combined.push(...a1.sort((a, b) => a - b));
  }

  return combined;
};

module.exports = relativeSortArray;
