const service = require('../service/post.service');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.userInfo;

  const addedPost = await service.addNewPost(title, content, categoryIds, id);

  return res.status(201).json(addedPost);
};

module.exports = {
  createNewPost,
};