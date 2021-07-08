const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

// GET ALL ITEMS BY EVENT
router.get('/:event_id',
  itemController.getAllByEvent,
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
  (req, res) => {
    return res.status(200).json(res.locals.item);
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