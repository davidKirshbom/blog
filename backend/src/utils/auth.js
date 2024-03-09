const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
module.exports = {
  hashPassword,
  generateToken,
  comparePassword,
  verifyToken,
};
