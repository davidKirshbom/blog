const db = require("../database/models");
const { verifyToken } = require("../utils/auth");

const auth = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).send("Unauthorized");
  }
  const token = tokenHeader.split(" ");
  if (token.length !== 2) {
    return res.status(401).send("Unauthorized");
  }
  const userToken = token[1];
  if (!userToken) {
    return res.status(401).send("Unauthorized");
  }
  let tokenData;
  try {
    tokenData = verifyToken(userToken);
    if (!tokenData) {
      return res.status(401).send("Unauthorized");
    }
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }

  const user = await db.User.findByPk(tokenData.id);

  req.user = user;
  next();
};

module.exports = auth;
