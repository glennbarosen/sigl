const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const axios = require('axios')

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

const headers = {
  headers: {
    'x-rapidapi-key': process.env.WARZONE_KEY,
    'x-rapidapi-host': process.env.WARZONE_HOST
  }
}

app.get('/', async (req, res) => {
  const username = req.params.username
  const platform = req.params.platform
  const { data } = await axios.get(`https://${process.env.WARZONE_HOST}/warzone/glennarnold/psn`, headers)
  res.send(data)
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
