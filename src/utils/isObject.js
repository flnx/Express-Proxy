function isObject(value) {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
}

module.exports = isObject;