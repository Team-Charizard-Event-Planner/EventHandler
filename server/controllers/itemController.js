const db = require('../schemas/schema');

const itemController = {};

// GET ALL ITEMS FOR EVENT
itemController.getAllByEvent = (req, res, next) => {
  const { event_id } = req.params;
  const params = [event_id];

  const query = `SELECT i.*, u.username
  FROM items i
  LEFT OUTER JOIN users u ON i.user_id = u._id
  WHERE event_id = $1;`;

  db.query(query, params)
    .then(data => {
      console.log('data in getAllItems', data);
      res.locals.items = data.rows;
      return next();
    })
    .catch(err => {
      console.log('err in getAllItems', err);
      return next(err);
    });
};

// CREATE ITEM
itemController.create = (req, res, next) => {
  const { item_name, event_id } = req.body;
  const params = [item_name, event_id];

  const query = `INSERT INTO items
  (item_name, event_id)
  VALUES ($1, $2)
  RETURNING *;`;

  console.log('params', params);
  console.log('sending query', query);

  db.query(query, params)
    .then(data => {
      console.log('data in createItem', data);

      res.locals.item = data.rows[0];
      return next();
    })
    .catch(err => {
      console.log('err in createItem', err);
      return next(err);
    });
};

// EDIT item "Claim"
// by Item ID, userID and cost are optional
itemController.edit = (req, res, next) => {
  const { item_id , user_id, cost } = req.body;

  const query = `UPDATE items
  SET user_id = $2,
  cost = $3
  WHERE _id = $1
  RETURNING *;`;

  const params = [item_id, user_id, cost]

  db.query(query, params)
    .then(data => {
      res.locals.item = data.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

// REMOVE ITEM
itemController.delete = (req, res, next) => {
  const { item_id } = req.body;

  const query = `DELETE FROM items
  WHERE _id = $1
  RETURNING *;`;

  const params = [item_id];

  db.query(query, params)
    .then(data => {
      console.log('itemDEL data', data);
      res.locals.item = data.rows[0];
      return next();
    })
    .catch(err => {
      console.log('itemDEL err', err);
      return next(err);
    });
};

module.exports = itemController;