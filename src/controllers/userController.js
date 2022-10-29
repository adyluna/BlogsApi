const jwt = require('jsonwebtoken');
const service = require('../service/user.service');
const errorMap = require('../utils/errorMap');

const createUser = async (req, res) => {
  const { displayName, email, image } = req.body;

  const newUser = await service.createUser(req.body);
  
  const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { displayName, email, image } }, secret, jwtConfig);

  if (newUser.type) {
    return res.status(errorMap.mapError(newUser.type)).json(newUser.message);
  }

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};