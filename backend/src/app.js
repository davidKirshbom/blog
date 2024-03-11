const express = require("express");
const cors = require("cors");
const ApiError = require("./utils/ApiError");
const authRouter = require("./routers/auth.router");
const postRouter = require("./routers/post.router");
const commentRouter = require("./routers/comment.router");
const userRouter = require("./routers/user.router");
const { errorConverter, errorHandler } = require("./middleware/error");
const httpStatusCodes = require("./utils/httpsStauses");
const db = require("./database/models");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRouter);
app.use("/post", auth, postRouter);
app.use("/user", auth, userRouter);

app.use("/comment", auth, commentRouter);

app.use((req, res, next) => {
  next(new ApiError(httpStatusCodes.NOT_FOUND, "Not found"));
});

app.use(errorConverter);
app.use(errorHandler);
app.use((req, res, next) => {
  next(new ApiError(httpStatusCodes.NOT_FOUND, "Not found"));
});

db.sequelize
  .sync()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = app;
