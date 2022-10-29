const errorMap = {
  CREATE_USER_FAIL: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};