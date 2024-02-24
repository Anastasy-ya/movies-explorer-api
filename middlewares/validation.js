const { Joi, celebrate } = require('celebrate');

// const regUrl = /^(ftp|http|https):\/\/[^ "]+$/;
const reqEmail = /^[a-zA-Z0-9_\-.]{1,}@[a-zA-Z0-9_\-.]{1,}\.[a-zA-Z]{2,5}$/;
// "^[a-zA-Z0-9_\-.]{1,}@[a-zA-Z0-9_\-.]{1,}\.[a-zA-Z]{2,5}$"

const signUpValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().required().email().pattern(reqEmail),
    password: Joi.string().required(),
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
    name: Joi.string().min(2).max(20),
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
    image: Joi.string().required(),
    trailerLink: Joi.string().required(),
    thumbnail: Joi.string().required(),
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
