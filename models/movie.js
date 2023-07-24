const mongoose = require('mongoose');
const { isURL } = require('validator');

const cardSchema = new mongoose.Schema({
  country: { //
    type: String,
    required: true,
  },
  director: { //
    type: String,
    required: true,
  },
  duration: { //
    type: Number,
    required: true,
  },
  year: { //
    type: String,
    required: true,
  },
  description: { //
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: [isURL, 'Invalid avatar URL'], // карточка не проходит валидацию из-за кривого адреса в бд
  },
  trailerLink: { //
    type: String,
    required: true,
    validate: [isURL, 'Invalid avatar URL'],
  },
  thumbnail: {
    type: String,
    required: true,
    validate: [isURL, 'Invalid avatar URL'],
  },
  owner: { // добавится по умолчанию
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  id: { // создается _id
    type: Number,
    required: true,
  },
  nameRU: { //
    type: String,
    required: true,
  },
  nameEN: { //
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('card', cardSchema);
