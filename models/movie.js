const mongoose = require('mongoose');
const { isURL } = require('validator');

const { invalidImage, invalidTrailerLink, invalidThumbnail } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: [isURL, invalidImage],
  },
  trailerLink: {
    type: String,
    required: true,
    validate: [isURL, invalidTrailerLink],
  },
  thumbnail: {
    type: String,
    required: true,
    validate: [isURL, invalidThumbnail],
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
