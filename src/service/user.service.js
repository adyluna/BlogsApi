const { User } = require('../models');

const findUser = async (email) => {
  const singleUser = await User.findOne({ where: { email } });

  if (!singleUser) {
    return { type: 'USER_NOT_FOUND', message: 'Invalid fields' };
  }

  return { type: null, message: singleUser };
};

const createUser = async (user) => {
  const { displayName, email, password, image } = user;
  const newUser = await User.create({
    displayName,
    email,
    password,
    image,
  });

  if (!newUser) {
    return { type: 'CREATE_USER_FAIL', message: 'User already exists' };
  }

  return { type: null, message: newUser };
};

module.exports = {
  findUser,
  createUser,
};