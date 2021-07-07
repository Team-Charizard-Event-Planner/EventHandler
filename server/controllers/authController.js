const db = require('../database/dbModel');

const authController = {};

authController.checkLogin = async (req, res, next) => {
  // TO-DO: sanitize inputs
  // const { username, password } = req.body;

  const query = `SELECT users.* FROM users;`;

  // CREATE TABLE "users" (
//   "_id" smallserial PRIMARY KEY NOT NULL,
//   "first_name" varchar NOT NULL,
//   "last_name" varchar NOT NULL,
//   "username" varchar NOT NULL,
//   "password" varchar NOT NULL,
//   "email" varchar NOT NULL
// );
  console.log('about to send query', query);
  try {

    const response = await db.query(query);
    console.log('checkLogin', response);
    res.locals.response = response;
    return next();

  } catch (err) {
    console.log('error', err);
    return next({ err });
  }
};

module.exports = authController;