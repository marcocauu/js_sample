/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/sort-array-by-parity/submissions/
 * @param {*} array
 * @return array
 */
const sortArrayByParity = (array = []) => {
  if (!array || !array.length || !Array.isArray(array)) {
    return [];
  }
  const evenArray = [];
  const oddArray = [];
  array.map(element => {
    if (parseInt(element, 10)) {
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
