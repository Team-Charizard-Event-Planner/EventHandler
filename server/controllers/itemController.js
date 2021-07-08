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
  RETURNING _id, item_name, event_id;`;

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

// CLAIM ITEM

// EDIT ITEM

// REMOVE ITEM


module.exports = itemController;