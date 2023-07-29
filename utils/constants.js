const internalServerError = 'InternalServerError';
const fieldsIsNotFilled = 'One of the fields or more is not filled';
const userAlreadyExists = 'User already exists';
const userIsNotFound = 'User is not found';
const invalidEmailOrPassword = 'Invalid email or password';
const invalidUserID = 'Invalid user ID';
const loggedOut = 'Logged out';
const authorizationRequired = 'Authorization required!';
const invalidMovieID = 'Invalid movie ID';
const movieIsNotFound = 'Movie is not found';
const accessIsDenied = 'Access is denied';
const movieRemoved = 'Movie removed';
const invalidImage = 'Invalid Image';
const invalidTrailerLink = 'Invalid trailerLink';
const invalidThumbnail = 'Invalid thumbnail';
const pageIsNotFound = 'Page is not found';

const checkSecretWord = () => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  return NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';
};

module.exports = {
  internalServerError,
  fieldsIsNotFilled,
  userAlreadyExists,
  userIsNotFound,
  invalidEmailOrPassword,
  invalidUserID,
  loggedOut,
  authorizationRequired,
  invalidMovieID,
  movieIsNotFound,
  accessIsDenied,
  movieRemoved,
  invalidImage,
  invalidTrailerLink,
  invalidThumbnail,
  pageIsNotFound,
  checkSecretWord,
};
