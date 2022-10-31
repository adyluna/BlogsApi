const { BlogPost, PostCategory } = require('../models');

const addNewPost = async ({ title, content, categoryIds, id }) => {
  const newPost = await BlogPost.create({ title, content, userId: id });
  const { id: newPostId } = newPost;
  console.log(newPost);
  
  const categoriesPromises = categoryIds.forEach(async (element) => {
    await PostCategory.create({ newPostId, element });
  });

  const result = await Promise.all(categoriesPromises);

  if (!result) {
    return false;
  }
  return newPost;
};

module.exports = {
  addNewPost,
};