/**
 * Leetcode question pulled from
 * https://leetcode.com/problems/defanging-an-ip-address/
 * @param {string} ipAddress
 * @return {string}
 */
const defang = (ipAddress = '') => {
  if (!ipAddress || !ipAddress.trim()) {
    return '';
  }
  return ipAddress.replace(/\./gi, '[.]');
};

module.exports = defang;
