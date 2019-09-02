/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/jewels-and-stones/
 * This implementation uses Set()
 * @param {*} jewel string
 * @param {*} stone string
 * @return int
 */
const jewelsAndStonesSet = (jewel = '', stone = '') => {
  if (!jewel || !stone || !jewel.trim() || !stone.trim()) {
    return '';
  }
  const set = new Set();
  jewel.split('').map(jewel => {
    set.add(jewel);
  });
  return stone.split('').filter(element => set.has(element)).length;
};

/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/jewels-and-stones/
 * This implementation uses Array includes()
 * @param {*} jewel string
 * @param {*} stone string
 * @return int
 */
const jewelsAndStonesArray = (jewel = '', stone = '') => {
  if (!jewel || !stone || !jewel.trim() || !stone.trim()) {
    return '';
  }
  const jewels = jewel.split('');
  return stone.split('').filter(element => jewels.includes(element)).length;
};

module.exports = {
  jewelsAndStonesSet,
  jewelsAndStonesArray,
};
