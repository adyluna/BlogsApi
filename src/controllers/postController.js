const postService = require('../service/post.service');
const categoryService = require('../service/category.service');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { message } = await req.userInfo;
  const { id } = message.dataValues;

  const result = await Promise.all(categoryIds.map(async (categoryId) => {
    const categoryExists = await categoryService.findCategoryById(categoryId);
    if (!categoryExists) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
  }));

  if (result[0]) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const addedPost = await postService.addNewPost(title, content, categoryIds, id);

  return res.status(201).json(addedPost);
};

module.exports = {
  createNewPost,
};