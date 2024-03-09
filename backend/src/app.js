const express = require("express");
const cors = require("cors");
const ApiError = require("./utils/ApiError");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const { errorConverter, errorHandler } = require("./middleware/error");
const httpStatusCodes = require("./utils/httpsStauses");
const db = require("./database/models");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRoutes);
app.use("/post", auth, postRoutes);
app.use("/comment", auth, commentRoutes);

app.use((req, res, next) => {
  next(new ApiError(httpStatusCodes.NOT_FOUND, "Not found"));
});

app.use(errorConverter);
app.use(errorHandler);
app.use((req, res, next) => {
  next(new ApiError(httpStatusCodes.NOT_FOUND, "Not found"));
});

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = app;
