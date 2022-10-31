const { Category } = require('../models');

const addCategory = (name) => Category.create({ name });

module.exports = {
  addCategory,
};