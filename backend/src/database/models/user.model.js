"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../../utils/auth");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post, {
        as: "posts",
        foreignKey: "authorId",
      });
      models.User.hasMany(models.Comment, {
        as: "comments",
        foreignKey: "authorId",
      });
    }
    toJSON() {
      const user = this.get();
      delete user.password;
      return user;
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeSave: async (user) => {
          user.password = await hashPassword(user.password);
        },
      },
    }
  );
  return User;
};
