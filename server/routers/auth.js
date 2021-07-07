const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// creating account
router.post('/create', (req, res) => {
  return res.send('Creating Account');
});

// login
router.post('/login', authController.checkLogin, (req, res) => {
  return res.send('Logging in');
});

// logout
router.post('/logout', (req, res) => {
  return res.send('Loggin out');
});

// change user data
module.exports = router;