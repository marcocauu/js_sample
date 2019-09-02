const defang = (ipAddress = '') => {
  if (!ipAddress) {
    return '';
  }
  return ipAddress.replace(/\./gi, '[.]');
};

module.exports = defang;
