const jwt = require('jsonwebtoken');

const JsonWebTokenError = require('../errors/JsonWebTokenError');
const { authorizationRequired, checkSecretWord } = require('../utils/constants');

const auth = (req, _, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, checkSecretWord());
  } catch (err) {
    next(new JsonWebTokenError(authorizationRequired));
  }
  req.user = payload;
  next();
};

module.exports = auth;
