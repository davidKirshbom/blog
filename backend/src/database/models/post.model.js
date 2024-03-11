"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../../utils/auth");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User, {
        as: "author",
        foreignKey: "authorId",
      });
      models.Post.hasMany(models.Comment, {
        as: "comments",
        foreignKey: "postId",
      });
    }
  }
  Post.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      authorId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
