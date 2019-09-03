/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/jewels-and-stones/
 * This implementation uses Set()
 * @param {string} j
 * @param {string} s
 * @return {int}}
 */
const jewelsAndStonesSet = (j = '', s = '') => {
  if (!j || !s || !j.trim() || !s.trim()) {
    return '';
  }
  const set = new Set();
  j.split('').map(j => {
    set.add(j);
  });
  return s.split('').filter(e => set.has(e)).length;
};

/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/jewels-and-stones/
 * This implementation uses Array includes()
 * @param {*} j string
 * @param {*} s string
 * @return int
 */
const jewelsAndStonesArray = (j = '', s = '') => {
  if (!j || !s || !j.trim() || !s.trim()) {
    return '';
  }
  const jewels = j.split('');
  return s.split('').filter(e => jewels.includes(e)).length;
};

module.exports = {
  jewelsAndStonesSet,
  jewelsAndStonesArray,
};
