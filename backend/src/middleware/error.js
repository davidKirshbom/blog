const ApiError = require("../utils/ApiError");
const httpStatusCodes = require("../utils/httpsStauses");

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.sql
      ? httpStatusCodes.BAD_REQUEST
      : error.statusCode;
    const message = error.sql
      ? error.errors.map((e) => e.message).join(", ")
      : error.message || httpStatusCodes[statusCode];

    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR,
    message,
  };

  res.status(response.code).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
