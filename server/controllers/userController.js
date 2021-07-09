const db = require('../schemas/schema');

const userController = {};

userController.getByUsername = (req, res, next) => {
  const { username } = req.body;

  const query = `SELECT _id, username, first_name, last_name
  FROM users
  WHERE username = $1;`

  const params = [username];

  db.query(query, params)
    .then((data) => {
      console.log('get user by name', data.rows);
      res.locals.user = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('err in get user by name', err);
      return next(err);
    })
};

userController.getByID = (req, res, next) => {
  const user_id = req.body.user_id ? req.body.user_id : res.locals.user_id;
  const params = [user_id];

  const query = `SELECT _id, username, first_name, last_name
  FROM users
  WHERE _id = $1
  `;

  db.query(query, params)
    .then(data => {
      console.log('data in getUserById', data);
      res.locals.user = data.rows[0];
      if (res.locals.user_id) delete res.locals.user_id;
      return next();
    })
    .catch(err => {
      console.log('err in getById', err);
      return next(err);
    })
};

module.exports = userController;