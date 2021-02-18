module.exports = function isEmpty(value) {
  // null / undefined
  if (value == null) return true;
  // string (check trimmed value)
  if ('string' === typeof value) return value.trim().length === 0;
  // Arrays
  if (Array.isArray(value)) return value.length === 0;
  //   Objects
  if ('object' === typeof value) return Object.keys(value).length === 0;
  return false;
};
