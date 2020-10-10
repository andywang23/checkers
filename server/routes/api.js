const express = require('express');
const dbController = require('../controllers/dbController');
const router = express.Router();

router.get('/', (req, res) => res.json('placeholder'));
router.post('/', dbController.addGameState, (req, res) => res.json(res.locals.id));

module.exports = router;
