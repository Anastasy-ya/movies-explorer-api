const { Joi, celebrate } = require('celebrate');

const regUrl = /^https?:\/\/(www\.)?[a-zA-Z\d-]+\.[\w\d\-.~:/?#[\]@!$&'()*+,;=]{2,}#?$/;
const reqEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;

const signUpValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().pattern(reqEmail),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const signinValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const changeProfileDataValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regUrl),
    trailerLink: Joi.string().required().pattern(regUrl),
    thumbnail: Joi.string().required().pattern(regUrl),
    movieId: Joi.string().hex().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const MovieIdValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  signUpValidation,
  signinValidation,
  changeProfileDataValidation,
  createMovieValidation,
  MovieIdValidation,
};
