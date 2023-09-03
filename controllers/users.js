const http2 = require('http2').constants;
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const User = require('../models/user');
const ConflictError = require('../errors/ConflictError');
const JsonWebTokenError = require('../errors/JsonWebTokenError');
const ValidationError = require('../errors/ValidationError');
const NotFound = require('../errors/NotFound');
const {
  fieldsIsNotFilled,
  userAlreadyExists,
  userIsNotFound,
  invalidEmailOrPassword,
  invalidUserID,
  loggedOut,
  checkSecretWord,
} = require('../utils/constants');

const createUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ValidationError(fieldsIsNotFilled));
  }
  return bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      User.create({
        ...req.body,
        password: hash,
      })
        .then((user) => res.status(http2.HTTP_STATUS_CREATED).send(user))
        .catch((err) => {
          if (err.code === 11000) {
            return next(new ConflictError(userAlreadyExists));
          }
          return next(err);
        });
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ValidationError(fieldsIsNotFilled));
  }
  return User.findOne({ email })
    .select('+password')
    .orFail(() => new JsonWebTokenError(userIsNotFound))
    .then((user) => {
      bcrypt.compare(password, user.password)
        .then((isValidUser) => {
          if (isValidUser) {
            const jwt = jsonWebToken.sign(
              {
                _id: user._id,
              },
              checkSecretWord(),
              { expiresIn: '7d' },
            );
            res.cookie('jwt', jwt, {
              maxAge: 24 * 60 * 60 * 1000,
              httpOnly: true,
              sameSite: true,
            });
            return res.send(user.toJSON());
          }
          return next(new JsonWebTokenError(invalidEmailOrPassword));
        });
    })
    .catch(next);
};

const getUserData = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFound(userIsNotFound))
    .then((user) => {
      res.status(http2.HTTP_STATUS_OK).send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError(invalidUserID));
      }
      return next(err);
    });
};

const changeProfileData = (req, res, next) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .orFail(() => new NotFound(userIsNotFound))
    .then((user) => res.status(http2.HTTP_STATUS_OK).send(user))
    .catch((err) => {
      if (err.code === 11000) {
        return next(new ConflictError(userAlreadyExists));
      } if (err.name === 'ValidationError') {
        return next(new ValidationError(invalidUserID));
      }
      return next(err);
    });
};

const logOut = (_, res, next) => {
  try {
    res.clearCookie('jwt').send({ message: loggedOut });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  changeProfileData,
  login,
  getUserData,
  logOut,
};
