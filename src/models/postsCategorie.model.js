module.exports = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie',
  {},
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostsCategorie.associate = (models) => {
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostsCategorie,
      foreignKey: 'postId',
      otherKey: 'categorieId'
    });

    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostsCategorie,
      foreignKey: 'categorieId',
      otherKey: 'postId'
    });
  }

  return PostsCategorie;
};