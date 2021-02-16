require('dotenv').config()
const express = require('express');
const axios = require('axios')

const router = express.Router();

const headers = {
  headers: {
    'x-rapidapi-key': process.env.WARZONE_KEY,
    'x-rapidapi-host': process.env.WARZONE_HOST
  }
}

router.get('/', (req, res) => {
  res.json({
    stats: '/stats/:username/:platform',
    matches: '/matches/:username/:platform'
  })
})

router.get('/stats/:username/:platform', async (req, res) => {
  const username = req.params.username
  const platform = req.params.platform
  const { data } = await axios.get(`https://${process.env.WARZONE_HOST}/warzone/${username}/${platform}`, headers)
  res.send(data)
});

router.get('/matches/:username/:platform', async (req, res) => {
  const username = req.params.username
  const platform = req.params.platform
  const { data } = await axios.get(`https://${process.env.WARZONE_HOST}/warzone-matches/${username}/${platform}`, headers)
  res.send(data)
});


module.exports = router;
