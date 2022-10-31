require('dotenv/config');
const jwt = require('jsonwebtoken');
const service = require('../service/user.service');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = service.findUser(decoded.data.userEmail);
    req.userInfo = user;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = validateToken;