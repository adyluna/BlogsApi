const userMiddleware = require('./userVerification');
const tokenMiddleware = require('./tokenVerification');

module.exports = {
  userMiddleware,
  tokenMiddleware,
};