const jwt = require('jsonwebtoken');

const JsonWebTokenError = require('../errors/JsonWebTokenError');
const { authorizationRequired } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, _, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new JsonWebTokenError(authorizationRequired));
  }
  req.user = payload;
  next();
};

module.exports = auth;
