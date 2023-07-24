const router = require('express').Router();

const {
  createMovie,
  getMovies,
  deleteMovieById,
} = require('../controllers/movies');

const {
  createMovieValidation,
  MovieIdValidation,
} = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', createMovieValidation, createMovie);
router.delete('/:_id', MovieIdValidation, deleteMovieById);

module.exports = router;
