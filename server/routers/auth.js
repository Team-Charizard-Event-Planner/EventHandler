const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// creating account
router.post("/create", (req, res) => {
  return res.send("Creating Account");
});

// login
router.post("/login", authController.loginCheck, (req, res) => {
  return res.json("Logging in");
});

// logout
router.post("/logout", (req, res) => {
  return res.send("Loggin out");
});

// router.post('/auth/login',
// userController.loginCheck,
// (req, res) => {
//   const { token } = res.locals;
//   res.cookie('AuthToken', token, {maxAge: 3000, httpOnly: true})
//   res.status(200).json(token);
// })

// change user data
module.exports = router;
