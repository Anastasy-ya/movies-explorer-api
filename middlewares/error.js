/* eslint-disable no-console */

const errorHandler = (err, _, res, next) => {
  console.log('ошибка из обработчика ошибок', err);
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'InternalServerError' : message,
  });

  next();
};

module.exports = errorHandler;
