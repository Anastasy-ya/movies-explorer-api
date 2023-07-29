const router = require('express').Router();
const NotFound = require('../errors/NotFound');
const {
  createUser,
  login,
  logOut,
} = require('../controllers/users');
const {
  signUpValidation,
  signinValidation,
} = require('../middlewares/validation');
const auth = require('../middlewares/auth');
const movieRoutes = require('./movies');
const userRoutes = require('./users');
const { pageIsNotFound } = require('../utils/constants');

router.post('/signin', signinValidation, login);
router.post('/signup', signUpValidation, createUser);
router.get('/signout', logOut);

router.use(auth);

router.use('/movies', movieRoutes);
router.use('/users', userRoutes);
router.use('*', (_, res, next) => {
  throw next(new NotFound(pageIsNotFound));
});

module.exports = router;
