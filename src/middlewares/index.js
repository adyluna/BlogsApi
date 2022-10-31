const userMiddleware = require('./userVerification');
const tokenMiddleware = require('./tokenVerification');
const postMiddleware = require('./postVerification');

module.exports = {
  userMiddleware,
  tokenMiddleware,
  postMiddleware,
};