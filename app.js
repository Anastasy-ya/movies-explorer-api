require('dotenv').config();

const express = require('express');

const helmet = require('helmet');

const rateLimit = require('express-rate-limit');

const { errors } = require('celebrate');

const mongoose = require('mongoose');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
});

const cookieParser = require('cookie-parser');

const cors = require('cors');

const routes = require('./routes/index');

const errorHandler = require('./middlewares/error');

const { DB_URL_DIPLOM, PORT } = process.env;

const { requestLogger, errorLogger } = require('./middlewares/logger');

mongoose.connect(DB_URL_DIPLOM, {

  useNewUrlParser: true,
  family: 4,
});

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://movies.anastkm4.beget.tech',
    'http://movies.anastkm4.beget.tech',
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
