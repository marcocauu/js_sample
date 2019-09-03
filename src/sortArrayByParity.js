/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/sort-a-by-parity/submissions/
 * @param {integer[]}
 * @return {integer[]}
 */
const sortArrayByParity = (a = []) => {
  if (!a || !a.length || !Array.isArray(a)) {
    return [];
  }
  const evenArray = [];
  const oddArray = [];
  a.map(element => {
    if (Number.isInteger(element)) {
      if (element % 2 === 0) {
        evenArray.push(element);
      } else {
        oddArray.push(element);
      }
    }
  });
  return [...evenArray, ...oddArray];
};

module.exports = sortArrayByParity;
