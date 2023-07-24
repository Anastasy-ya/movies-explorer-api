const router = require('express').Router();

const {
  createMovie,
  getMovies,
  deleteMovieById,
} = require('../controllers/movies');

const {
  // createMovieValidation, // включить обратно
  // MovieIdValidation,
} = require('../middlewares/validation');

router.get('/', getMovies); //
router.post('/', createMovie); // createMovieValidation,
router.delete('/:_id', deleteMovieById); // MovieIdValidation,

module.exports = router;
