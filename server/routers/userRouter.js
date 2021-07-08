const express = require("express");
// const userController = require("../controllers/userController");

const router = express.Router();

// // deprecated?
// router.post('/login',
//   userController.verifyLogin,
//   (req, res) => {
//     const { token } = res.locals;
//     res.cookie('AuthToken', token, {maxAge: 3000, httpOnly: true})
//     res.status(200).json(token);
//   }
// )

module.exports = router;
