const service = require('../service/category.service');

const getAllCategories = async (_req, res) => {
  const categories = await service.getAllCategories();

  return res.status(200).json(categories);
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  const { dataValues } = await service.addCategory(name);
  const { id } = dataValues;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  return res.status(201).json({ id, name });
};

module.exports = {
  addCategory,
  getAllCategories,
};