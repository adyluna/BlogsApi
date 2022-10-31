const { Category } = require('../models');

const addCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  addCategory,
  getAllCategories,
};