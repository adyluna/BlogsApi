const postService = require('../service/post.service');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { message } = await req.userInfo;
  const { id } = message.dataValues;

  const addedPost = await postService.addNewPost(title, content, categoryIds, id);

  return res.status(201).json(addedPost);
};

module.exports = {
  createNewPost,
};