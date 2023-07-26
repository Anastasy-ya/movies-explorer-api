/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');

const helmet = require('helmet');

const rateLimit = require('express-rate-limit');

const { errors } = require('celebrate');

const mongoose = require('mongoose');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const cookieParser = require('cookie-parser');

const cors = require('cors');

const routes = require('./routes/index');

const errorHandler = require('./middlewares/error');

const { DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb', PORT = 3000 } = process.env;

const { requestLogger, errorLogger } = require('./middlewares/logger');

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  family: 4,
});

app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://localhost:3000',
    'http://anastasy-ya.diplom.nomoredomains.xyz',
    'http://api.anastasy-ya.diplom.nomoredomains.xyz',
    'https://localhost:3001',
    'https://localhost:3000',
    'https://anastasy-ya.diplom.nomoredomains.xyz',
    'https://api.anastasy-ya.diplom.nomoredomains.xyz',
  ],
  credentials: true,
}));

app.use(express.json());

app.use(helmet());

app.use(cookieParser());

app.use(requestLogger);

app.use(limiter);

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
