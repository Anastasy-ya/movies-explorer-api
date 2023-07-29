const { internalServerError } = require('../utils/constants');

const errorHandler = (err, _, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? internalServerError : message,
  });

  next();
};

module.exports = errorHandler;
