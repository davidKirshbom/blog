"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../../utils/auth");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User, {
        as: "author",
        foreignKey: "authorId",
      });
      models.Comment.belongsTo(models.Post, {
        as: "post",
        foreignKey: "postId",
      });
    }
  }
  Comment.init(
    {
      content: { type: DataTypes.STRING, allowNull: false },
      authorId: { type: DataTypes.INTEGER, allowNull: false },
      postId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
