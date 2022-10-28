require('dotenv/config');
const jwt = require('jsonwebtoken');
const service = require('../service/user.service');

const isBodyValid = (email, password) => email && password;

const userInput = async (req, res) => {
  const { email, password } = req.body;
  const user = await (await service.findUser(email)).message.dataValues;
  console.log(user);
  const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ data: { userEmail: email } }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  userInput,
};