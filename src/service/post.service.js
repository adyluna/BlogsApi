const Sequelize = require('sequelize'); 
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const addNewPost = async (title, content, categoryIds, id) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create({ title, content, userId: id }, { transaction: t });
      const { id: newPostId } = newPost.dataValues;
      
      await Promise.all(categoryIds.map(async (element) => {
        await PostCategory.create({ postId: newPostId, categoryId: element }, { transaction: t });
      }));

    return newPost;
    });
    
    return result;
  } catch (e) {
    return e;
  }
};

module.exports = {
  addNewPost,
};