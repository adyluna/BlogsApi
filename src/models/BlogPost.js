module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return Post;
};