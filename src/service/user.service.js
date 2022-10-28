const { User } = require('../models');

const findUser = async (email) => {
  const singleUser = await User.findOne({ where: { email } });

  if (!singleUser) {
    return { type: 'USER_NOT_FOUND', message: 'Invalid fields' };
  }

  return { type: null, message: singleUser };
};

module.exports = {
  findUser,
};