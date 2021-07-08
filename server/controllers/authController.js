const db = require("../schemas/schema");
const bcrypt = require("bcryptjs");
const authController = {};

const saltRounds = 10;

// TO-DO: refactor into async bcrypt

// verifying login info
authController.login = (req, res, next) => {
  const { email, password } = req.body;
  // sanitize data

  const params = [email];

  const query = `
  SELECT _id, username, password, first_name, last_name, email
  FROM users WHERE email = $1
  ;`;

  db.query(query, params)
    .then((result) => {
      console.log("result from login", result);
      if (!result.rows.length) {
        res.locals.user = false;
        return next({
          log: "user does not exist",
          message: "incorrect email/password",
        });
      }

      const { _id, username, first_name, last_name, email } = result.rows[0];

      const dbPassword = result.rows[0].password;
      const compareHash = bcrypt.compareSync(password, dbPassword);

      res.locals.user = {
        _id,
        username,
        first_name,
        last_name,
        email,
        isLoggedIn: true,
      };

      // subject to change because of encryption
      return compareHash
        ? next()
        : next({
            log: "incorrect email/password",
            message: "incorrect email/password",
          });
    })
    .catch((err) => {
      return next(err);
    });
};

// creating a new user
authController.createUser = async (req, res, next) => {
  // gather username, password, firstname, lastname, email from req.body
  const { username, password, first_name, last_name, email } = req.body;
  // sanitize data

  // salt & hash password
  // generate salt
  const salt = bcrypt.genSaltSync(saltRounds);
  // generate hash
  const hashPass = bcrypt.hashSync(password, salt);
  // store data on parameters array
  const params = [username, hashPass, email, first_name, last_name];

  // create query string for INSERT
  const query = `INSERT INTO users 
  (username, password, email, first_name, last_name)
  VALUES($1, $2, $3, $4, $5)
  RETURNING _id, username, email, first_name, last_name;`;

  // try:
  try {
    // database query
    const result = await db.query(query, params);

    // on SUCCESS, pass to next middleware w/ success message
    const newUser = result.rows[0];
    res.locals.user = newUser;
    return next();
  } catch (err) {
    // catch: pass database errors to error handler
    console.log("err", err);
    return next({
      log: "error adding user to database",
      message: "error adding user to database",
    });
  }
};

// log out user
// is this needed on server side? how do jwts store login info?
authController.logout = (req, res, next) => {
  return next();
};

// edit user info
authController.edit = (req, res, next) => {
  return next();
};

module.exports = authController;
