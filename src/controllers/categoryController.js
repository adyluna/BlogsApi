const service = require('../service/category.service');

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
};