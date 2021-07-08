const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// creating account
router.post('/create',
  authController.createUser,
  // createSession
  // cookieController.createCookie
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

// login
router.post('/login',
  authController.login,
  // createSession
  // cookieController.createCookie
  (req, res) => {
    // const { token } = res.locals;
    // res.cookie('AuthToken', token, {maxAge: 3000, httpOnly: true})
    return res.status(200).json({ login: true });
  }
);

// do we want a separate route for just JWT verification?
router.post('/verify',
  // authController.verifyCookie,
  (req, res) => {
    return res.status(200).json('verified');
  }
);

// logout
router.post('/logout',
  // end Session
  // clear cookies
  (req, res) => {
    return res.send('Loggin out');
  }
);

module.exports = router;