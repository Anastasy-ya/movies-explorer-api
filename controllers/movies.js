const http2 = require('http2').constants;
const Movie = require('../models/Movie');
const ValidationError = require('../errors/ValidationError');
const NotFound = require('../errors/NotFound');
const Forbidden = require('../errors/Forbidden');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movie) => res.status(http2.HTTP_STATUS_OK).send(movie))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({
    ...req.body,
    owner: req.user._id,
  })
    .then((movie) => res.status(http2.HTTP_STATUS_CREATED).send(movie))
    .catch((err) => {
      if (err.movie === 'ValidationError') {
        return next(new ValidationError('Invalid movie ID'));
      }
      return next(err);
    });
};

const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params._id)
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

module.exports = {
  createMovie,
  getMovies,
  deleteMovieById,
};
