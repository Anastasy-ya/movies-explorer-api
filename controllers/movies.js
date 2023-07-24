/* eslint-disable no-console */
const http2 = require('http2').constants;
const Movie = require('../models/movie');
const ValidationError = require('../errors/ValidationError');
const NotFound = require('../errors/NotFound');
const Forbidden = require('../errors/Forbidden');

const getMovies = (_, res, next) => {
  Movie.find({})
    .then((movie) => res.status(http2.HTTP_STATUS_OK).send(movie))
    .catch(next);
};

const createMovie = (req, res, next) => {
  console.log('req', req.body.image.url);
  Movie.create({
    ...req.body,
    owner: req.user._id,
    image: req.body.image.url,
    thumbnail: req.body.image.formats.thumbnail.url,
  }) // id: req.image.id
    .then((movie) => res.status(http2.HTTP_STATUS_CREATED).send(movie))
    .catch((err) => {
      // console.log('выполнение дошло до ф-и создания карточки', err);
      if (err.movie === 'ValidationError') {
        return next(new ValidationError('Invalid movie ID'));
      }
      return next(err);
    });
};

const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.id)
    .orFail(new NotFound('Movie is not found'))
    .then((movie) => {
      if (movie.owner.toString() !== req.user._id) {
        throw new Forbidden('Access is denied');
      }
      return Movie.deleteOne(movie);
    })
    .then(() => res.send({ message: 'Movie removed' }))
    .catch((err) => {
      if (err.movie === 'CastError') {
        return next(new ValidationError('Invalid movie ID'));
      }
      return next(err);
    });
};

// const addLike = (req, res, next) => Movie.findByIdAndUpdate(
//   req.params._id,
//   { $addToSet: { likes: req.user._id } },
//   { new: true },
// )
//   .orFail(() => new NotFound('Movie ID is not found'))
//   .then((movie) => res.status(http2.HTTP_STATUS_OK).send(movie))
//   .catch((err) => {
//     if (err.movie === 'CastError') {
//       return next(new ValidationError('Invalid movie ID'));
//     } return next(err);
//   });

// const removeLike = (req, res, next) => {
//   Movie.findByIdAndUpdate(
//     req.params._id,
//     { $pull: { likes: req.user._id } },
//     {
//       new: true,
//     },
//   )
//     .orFail(() => new NotFound('Movie ID is not found'))
//     .then((movie) => res.status(http2.HTTP_STATUS_OK).send(movie))
//     .catch((err) => {
//       if (err.movie === 'CastError') {
//         return next(new ValidationError('Invalid movie ID'));
//       } return next(err);
//     });
// };

module.exports = {
  createMovie,
  getMovies,
  deleteMovieById,
  // addLike,
  // removeLike,
};
