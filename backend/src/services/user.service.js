const db = require("../database/models");
const { comparePassword } = require("../utils/auth");

const createUser = async ({ username, password }) => {
  return await db.User.create({ username, password });
};

const loginUser = async ({ password, username }) => {
  const dbUser = await db.User.findOne({ where: { username } });
  if (!dbUser) {
    return false;
  }
  const isPasswordValid = await comparePassword(password, dbUser.password);
  if (!isPasswordValid) {
    return false;
  }
  return dbUser;
};

module.exports = {
  createUser,
  loginUser,
};
