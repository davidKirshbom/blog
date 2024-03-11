const userService = require("../services/user.service.js");
const ApiError = require("../utils/ApiError.js");
const { generateToken, validatePassword } = require("../utils/auth.js");
const httpStatusCodes = require("../utils/httpsStauses.js");

const createUser = async (req, res) => {
  const { password, username } = req.body;
  if (validatePassword(password)) {
    const user = await userService.createUser({ password, username });

    res.send({
      user,
      token: generateToken({ username: user.username, id: user.id }),
    });
  }
  res.sendStatus(httpStatusCodes.BAD_REQUEST);
};

const loginUser = async (req, res) => {
  const { password, username } = req.body;
  const loggedUser = await userService.loginUser({ password, username });
  if (!loggedUser) {
    throw new ApiError(httpStatusCodes.UNAUTHORIZED, "Invalid credentials");
  }
  res.send({
    user: loggedUser,
    token: generateToken({
      username: loggedUser.username,
      id: loggedUser.id,
    }),
  });
};
const profile = async (req, res) => {
  const user = req.user;
  res.send(user);
};
const logoutUser = async (req, res) => {
  res.sendStatus(httpStatusCodes.OK);
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  profile,
};
