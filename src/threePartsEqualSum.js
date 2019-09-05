/**
 * Leetcode question pulled from
 * leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = (A) => {
  if (!A || !Array.isArray(A) || !A.length) {
    return false;
  }
  let sum = 0;
  A.map(e => {
    sum += e;
  });
  let cumulativeSum = 0;
  let equalPartsCount = 0;
  for (let i = 0; i < A.length; i++) {
    cumulativeSum += A[i];
    if (cumulativeSum === sum / 3) {
      equalPartsCount++;
      if (equalPartsCount === 2) {
        return true;
      }
      cumulativeSum = 0;
    }
  }
  return false;
};

module.exports = canThreePartsEqualSum;
