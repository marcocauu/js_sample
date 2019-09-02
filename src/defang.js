/**
 * 
 * Leetcode question pulled from https://leetcode.com/problems/defanging-an-ip-address/
 * @param {*} ipAddress string
 * @return string
 */
const defang = (ipAddress = '') => {
  if (!ipAddress) {
    return '';
  }
  return ipAddress.replace(/\./gi, '[.]');
};

module.exports = defang;
