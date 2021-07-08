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

// CLAIM ITEM ("edit")
router.put('/claim',
  (req, res) => {
    return res.status(200).json('success');
  }
);

// REMOVE ITEM
router.delete('/',
  (req, res) => {
    return res.status(200).json('success');
  }
);

// EDIT ITEM? (ie name, cost?)
router.put('/edit',
  (req, res) => {
    return res.status(200).json('success');
  }
);

module.exports = router;