const db = require("../database/dbModel");

const authController = {};

authController.loginCheck = (req, res, next) => {
  const { email, password } = req.body;
  const params = [email, password];
  const query = `
  SELECT password FROM users WHERE email = $1
  `;
  db.query(query, params)
    .then((result) => {
      if (!result.rows.length) {
        console.log("user does not exist");
        res.locals.user = false;
        return next({
          log: "user does not exist",
          message: "user does not exist",
        });
      } else return next();
      // // subject to change because of encryption
      // return result.rows[0].password === password
      //   ? next()
      //   : next({
      //       log: "incorrect username/password",
      //       message: "incorrect username/password",
      //     });
    })
    .catch((err) => next(err));
};

// // authController.checkLogin = async (req, res, next) => {
// //   // TO-DO: sanitize inputs
// //   // const { username, password } = req.body;

// //   const query = `SELECT users.* FROM users;`;

//   // CREATE TABLE "users" (
// //   "_id" smallserial PRIMARY KEY NOT NULL,
// //   "first_name" varchar NOT NULL,
// //   "last_name" varchar NOT NULL,
// //   "username" varchar NOT NULL,
// //   "password" varchar NOT NULL,
// //   "email" varchar NOT NULL
// // );
//   console.log('about to send query', query);
//   try {

//     const response = await db.query(query);
//     console.log('checkLogin', response);
//     res.locals.response = response;
//     return next();

//   } catch (err) {
//     console.log('error', err);
//     return next({ err });
//   }
// };

module.exports = authController;
