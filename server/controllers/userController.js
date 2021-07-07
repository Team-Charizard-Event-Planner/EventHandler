const db = require("../schemas/schema");
const userController = {};

userController.loginCheck = (req, res, next) => {
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
    .catch((err) => console.log(err));
};

export default userController;
