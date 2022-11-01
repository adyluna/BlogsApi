const categoryService = require('../service/category.service');

const checkResults = (array, res) => {
  const result = array.map((elem) => {
    if (!elem) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return elem;
  });
  return result;
};

const validatePostBody = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const validatePostCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  const response = await Promise.all(categoryIds.map(async (categoryId) => {
    const category = await categoryService.findCategoryById(categoryId);

    if (!category) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return category;
  }));

  await checkResults(response, res);
  
  next();
};

module.exports = {
  validatePostBody,
  validatePostCategory,
};