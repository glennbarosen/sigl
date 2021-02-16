const express = require('express');

const warzone = require('./warzone');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '👋🏼👋🏼'
  });
});


router.use('/warzone', warzone);

module.exports = router;
