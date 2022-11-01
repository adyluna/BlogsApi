const postService = require('../service/post.service');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { message } = await req.userInfo;
  const { id } = message.dataValues;

  const addedPost = await postService.addNewPost(title, content, categoryIds, id);

  return res.status(201).json(addedPost);
};

const findAllPosts = async (_req, res) => {
  const posts = await postService.findAllPosts();
  
  return res.status(200).json(posts);
};

module.exports = {
  createNewPost,
  findAllPosts,
};