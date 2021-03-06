require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const ErrorHandler = require('../ErrorHandler/ErrorHandler');
const { CLIENT_ORIGIN, PORT, NODE_ENV } = require('../config');
const catsRouter = require('../Cats/cats.router');
const dogsRouter = require('../Dogs/dogs.router');
const peopleRouter = require('../people/people.router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use('/api/people', peopleRouter);
app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter);

app.get('/', (req, res) => {
  res.send('Hello, Petful!');
});

// Error Handler
app.use(ErrorHandler);

module.exports = app;
