const Joi = require('joi');
const service = require('../service/user.service');

const validateEmail = (email) => Joi.string().min(3).required().email()
.validate(email);

const userAlreadyExists = async (email) => {
  const user = await service.findUser(email);
  return user;
};

const body = async (req, res) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res
    .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (password.length < 6) {
    return res
    .status(400).json({ message: '"password" length must be at least 6 characters long' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if ((await !userAlreadyExists(email)).type) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = {
  body,
};