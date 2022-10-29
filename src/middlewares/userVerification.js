const Joi = require('joi');
const service = require('../service/user.service');

const validateEmail = (email) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  return schema.validate(email);
};

const body = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res
    .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (password.length < 6) {
    return res
    .status(400).json({ message: '"password" length must be at least 6 characters long' });
  }

  if (validateEmail({ email }).error) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const { message } = await service.findUser(email);
  if (await message.dataValues) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  body,
};