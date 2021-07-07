const express = require('express');
const router = express.Router();

router.use('/create', (req, res) => {
  return res.send('creating event');
});

module.exports = router;