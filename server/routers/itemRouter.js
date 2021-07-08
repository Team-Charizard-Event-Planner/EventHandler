const express = require('express');
const itemController = require('../controllers/itemController');
const userController = require('../controllers/userController');

const router = express.Router();

// GET ALL ITEMS BY EVENT
router.get('/:event_id',
  itemController.getByEvent,
  (req, res) => {
    return res.status(200).json(res.locals.items);
  }
);

// CREATE ITEM
router.post('/',
  itemController.create,
  (req, res) => {
    return res.status(200).json(res.locals.item);
  }
);

// EDIT
router.put('/',
  itemController.edit,
  userController.getByID,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// REMOVE ITEM
router.delete('/',
  itemController.delete,
  (req, res) => {
    return res.status(200).json(res.locals.item);
  }
);

module.exports = router;